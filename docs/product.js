(() => {
const catalog = {
"scallop-bow-bra":{name:"Scallop Bow Bra Set",price:49,category:"Lingerie",desc:"Soft support with scalloped edge, adjustable straps, a tiny bow and a quiet MEMO cat detail.",material:"Modal blend + soft lace + comfort lining",colors:["Rose","Lilac","Cream"],sizes:["XS","S","M","L","XL","XXL"],img:["memo-02.jpg","memo-01.jpg"]},
"kitty-charm-pj":{name:"Kitty Charm PJ Set",price:79,category:"Silk & Lounge",desc:"A playful travel-ready pajama set with contrast piping and removable cat charm.",material:"Silk-touch satin / modal blend",colors:["Rose","Lilac","Sky"],sizes:["XS","S","M","L","XL","XXL"],img:["memo-03.jpg","memo-10.jpg"]},
"ribbon-onepiece":{name:"Ribbon One-piece",price:89,category:"Swim & Resort",desc:"A pool-blue one-piece with supportive shape, ribbon side detail and an easy resort-to-lunch silhouette.",material:"Quick-dry supportive swim fabric",colors:["Pool Blue","Rose","Butter"],sizes:["XS","S","M","L","XL"],img:["memo-06.jpg","memo-09.jpg"]},
"ruffle-bikini":{name:"Ruffle Bikini Set",price:64,category:"Swim & Resort",desc:"Playful ruffle trim with adjustable fit and clean proportions for real movement.",material:"Quick-dry swim fabric",colors:["Rose","Pool Blue","Mint"],sizes:["XS","S","M","L","XL"],img:["memo-06.jpg","memo-09.jpg"]},
"rose-garden-slip":{name:"Rose Garden Slip Dress",price:88,category:"Silk & Lounge",desc:"Bias drape and light floral mood — hotel breakfast, city walk, dinner and after-hours.",material:"Washable satin / silk-touch blend",colors:["Peach Floral","Rose","Cream"],sizes:["XS","S","M","L","XL"],img:["memo-04.jpg","memo-11.jpg"]},
"dreamy-kimono":{name:"Dreamy Kimono Robe",price:92,category:"Silk & Lounge",desc:"Soft glow, wide sleeve and one signature trim. Sleep in it, leave the room in it.",material:"Washable satin",colors:["Rose","Lilac","Sky"],sizes:["XS","S","M","L","XL"],img:["memo-03.jpg","memo-12.jpg"]}
};
const params=new URLSearchParams(location.search); const id=params.get("id")||"scallop-bow-bra"; const p=catalog[id]||catalog["scallop-bow-bra"];
document.title=p.name+" — MEMO";
document.querySelector("[data-p-cat]").textContent=p.category+" · MEMO";
document.querySelector("[data-p-name]").textContent=p.name;
document.querySelector("[data-p-price]").textContent="$"+p.price;
document.querySelector("[data-p-desc]").textContent=p.desc;
document.querySelector("[data-p-material]").textContent=p.material;
const gallery=document.querySelector("[data-p-gallery]"); gallery.innerHTML=p.img.map((x,i)=>'<figure><img src="assets/campaign/'+x+'" alt="'+p.name+' look '+(i+1)+'"></figure>').join("");
const colors=document.querySelector("[data-p-colors]"); colors.innerHTML=p.colors.map((x,i)=>'<button class="'+(i===0?"active":"")+'">'+x+'</button>').join("");
const sizes=document.querySelector("[data-p-sizes]"); sizes.innerHTML=p.sizes.map((x,i)=>'<button class="'+(i===1?"active":"")+'">'+x+'</button>').join("");
document.querySelectorAll(".option-row").forEach(row=>row.addEventListener("click",e=>{if(e.target.tagName==="BUTTON"){row.querySelectorAll("button").forEach(b=>b.classList.remove("active"));e.target.classList.add("active")}}));
document.querySelector("[data-p-add]").addEventListener("click",()=>window.memoAddItem?.(p.name,p.price));
})();