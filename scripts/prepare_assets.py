"""Build MEMO assets only from the exact user-selected reference. No search or substitution."""
from pathlib import Path
import hashlib, json, io, urllib.request, concurrent.futures, time
from PIL import Image
ROOT=Path(__file__).resolve().parents[1]
SOURCE=ROOT/'brand/approved/website-reference.png'
PIXEL_SHA='8d72d82ed792d89d8c139e264c1681eedc82019d337f638564a2120ebd28d8ec'
TRANSFER=ROOT/'scripts/locked-source-transfer.tsv'
def retrieve(line):
    key,uid,csig,exp,osig=line.split('\t')
    url=f'https://media.canva.com/v2/image-resize/format:PNG/height:200/quality:100/uri:ifs%3A%2F%2FM%2F{uid}/watermark:F/width:200?csig={csig}&exp={exp}&osig={osig}&signer=media-rpc&x-canva-quality=thumbnail'
    for attempt in range(3):
        try:
            request=urllib.request.Request(url,headers={'User-Agent':'Mozilla/5.0'})
            raw=urllib.request.urlopen(request,timeout=45).read()
            part=Image.open(io.BytesIO(raw));part.load()
            if part.size!=(200,200): raise ValueError('Unexpected transport dimensions')
            x,y=int(key[1])*198,int(key[0])*198
            part=part.crop((0,0,min(198,1024-x),min(198,1536-y))).convert('RGB')
            return key,(x,y),part
        except Exception:
            if attempt==2: raise RuntimeError('Source tile transfer failed: '+key) from None
            time.sleep(attempt+1)
if not SOURCE.exists():
    if not TRANSFER.exists(): raise SystemExit('Original source missing. Do not substitute another image.')
    rows=TRANSFER.read_text().strip().splitlines()
    assert len(rows)==48 and len({x.split('\t')[0] for x in rows})==48
    image=Image.new('RGB',(1024,1536))
    with concurrent.futures.ThreadPoolExecutor(max_workers=6) as pool:
        for key,position,part in pool.map(retrieve,rows): image.paste(part,position)
    actual=hashlib.sha256(image.tobytes()).hexdigest()
    if actual!=PIXEL_SHA: raise SystemExit('Source RGB integrity check failed: '+actual)
    SOURCE.parent.mkdir(parents=True,exist_ok=True)
    image.save(SOURCE,'PNG',optimize=True)
image=Image.open(SOURCE).convert('RGB');image.load()
assert image.size==(1024,1536)
assert hashlib.sha256(image.tobytes()).hexdigest()==PIXEL_SHA,'Unapproved source pixels'
CROPS={
 'hero-desktop':(0,90,1024,503),
 'hero-mobile':(235,90,850,503),
 'cat-lingerie':(4,506,170,671),
 'cat-lounge':(175,506,338,671),
 'cat-business':(344,506,509,671),
 'cat-travel':(515,506,677,671),
 'cat-swim':(684,506,849,671),
 'cat-objects':(855,506,1021,671),
 'product-bra':(30,770,182,931),
 'product-pajamas':(188,770,344,931),
 'product-onepiece':(350,770,508,931),
 'product-bikini':(515,770,671,931),
 'product-dress':(677,770,834,931),
 'product-robe':(840,770,993,931),
 'feature-travel':(0,1004,622,1233),
 'feature-swim':(631,1004,1024,1233),
 'world-strip':(0,1287,1024,1432),
 'cat-portrait':(5,335,255,503),
 'logo-cat':(171,37,235,89),
 'footer-cat':(133,1328,196,1425),
}
DEST=ROOT/'docs/assets/locked';DEST.mkdir(parents=True,exist_ok=True)
manifest={'version':'memo-locked-20260920','selected_file':'4e10bbe7-7fb1-40b3-9ca0-fbbb60d69e7b.png','source_size':[1024,1536],'source_rgb_sha256':PIXEL_SHA,'source_path':str(SOURCE.relative_to(ROOT)),'source_status':'user-selected; verified identical RGB pixels','encoding':'lossless WebP; native dimensions; no upscaling','assets':[]}
for name,box in CROPS.items():
    im=image.crop(box);path=DEST/(name+'.webp');im.save(path,'WEBP',lossless=True,method=6)
    check=Image.open(path).convert('RGB');check.load()
    assert hashlib.sha256(check.tobytes()).hexdigest()==hashlib.sha256(im.tobytes()).hexdigest()
    manifest['assets'].append({'file':str(path.relative_to(ROOT)),'crop':list(box),'width':im.width,'height':im.height,'bytes':path.stat().st_size,'sha256':hashlib.sha256(path.read_bytes()).hexdigest()})
(ROOT/'brand/approved/asset-manifest.json').write_text(json.dumps(manifest,ensure_ascii=False,indent=2)+'\n')
print(json.dumps({'source_rgb_verified':True,'dimensions':list(image.size),'assets':len(CROPS),'all_crops_lossless':True,'asset_bytes':sum(x['bytes'] for x in manifest['assets'])}))
