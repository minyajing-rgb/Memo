# MEMO website deployment

Live domain: https://memo.saga1001.com/
Hosting: GitHub Pages, main branch, /docs directory.
Alibaba Cloud is DNS only. Do not move to Base44 or Vercel.

Build: python scripts/prepare_assets.py && python scripts/build_site.py
Shared styles and interactions: docs/site.css, docs/site.js
Exact artwork: brand/approved/website-reference.png
Web assets: docs/assets/locked/

Current release: locked-20260920-r1
Pages: home, collection, product details, travel, world, wishlist, bag, fit notes, contact, preview/privacy, 404.

Commerce status: frontend collection preview only. No real payments, orders or email subscription backend. Prices, colours and sizes are concepts pending final production confirmation.

Acceptance: check real browser rendering and interactions, not just GitHub workflow status. Never replace the approved assets by image search, CSS clothing drawings or unrelated stock.
