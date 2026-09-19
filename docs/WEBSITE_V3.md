# MEMO Direct Commerce Website — V3

## Hard Constraint
GitHub is the canonical source and deployment source for the website. Do not move the project to another builder.

## Live Architecture
- Home: `index.html`
- Shop: `shop.html`
- Travel: `travel.html`
- Men: `men.html`
- Fortune: `fortune.html`
- Our World: `world.html`
- Product catalog: `catalog.js`
- Client cart: `cart.js`
- Shared visual system: `styles.css`
- Brand SVG assets: `assets/`
- GitHub Pages workflow: `.github/workflows/pages.yml`

## Brand Promise
MEMO — A 24-Hour Soft Wardrobe for Women Who Still Feel Young.

Supporting positioning:
- Inside–Outside Wardrobe
- Premium Playful Everyday Intimates
- Travel-ready lifestyle wardrobe
- Business → Bar
- Home → Street
- Swim → Resort
- Same cat. Different mood.

## Next Commerce Integration
The storefront UI and cart are static/client-side. For production checkout, connect Stripe Checkout or Payment Links without moving the source of truth away from GitHub.
