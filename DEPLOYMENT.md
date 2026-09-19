# MEMO Production Deployment

## Hosting decision

**Source of truth:** GitHub private repository `minyajing-rgb/Memo`  
**Production hosting:** Vercel  
**Reason:** keep the code private while still getting automatic deploys and custom-domain support.

## Repository status

The production-ready static website is already in the repository root:

- `index.html` — Home
- `shop.html` — Catalog + filters + size/color selection + cart
- `travel.html` — Travel capsule
- `men.html` — MEMO Men
- `fortune.html` — Fortune Edition
- `world.html` — Our World
- `styles.css` — shared design system
- `script.js` — shared navigation
- `catalog.js` — product data
- `cart.js` — local cart
- `assets/` — MEMO SVG assets
- `vercel.json` — Vercel config

## Vercel import

Import this GitHub repository directly in Vercel:

**Repository:** `minyajing-rgb/Memo`

Recommended settings:
- Framework preset: **Other**
- Root directory: **./**
- Build command: **None**
- Output directory: **./**
- Production branch: **main**

After import, every push to `main` will redeploy automatically.

## Custom domain

After the project is live:
1. Add the chosen production domain in **Vercel → Project → Settings → Domains**.
2. Update DNS at the domain provider using the exact Vercel records shown there.
3. Keep GitHub as the source of truth; do not move the site to another builder.

## Commerce status

The current site includes a working front-end catalog and cart prototype. It does **not** charge money yet.

Next production integrations:
- Stripe Checkout / Payment Links
- CRM / email capture
- Analytics
- inventory source
- privacy / terms / shipping / returns
