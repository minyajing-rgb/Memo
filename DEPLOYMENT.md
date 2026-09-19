# MEMO Website Deployment

## Current state
- Static website is ready in the repository root.
- Main entry: `index.html`
- Shop page: `shop.html`
- Travel page: `travel.html`
- Shared styling: `styles.css`
- Shared interaction: `script.js`

## Recommended deployment
Vercel static deployment from the GitHub repository `minyajing-rgb/Memo`.

### Build settings
- Framework preset: **Other**
- Root directory: repository root
- Build command: none
- Output directory: repository root

## Production before launch
1. Replace CSS art placeholders with final campaign/product photography.
2. Connect domain.
3. Add analytics.
4. Add email capture backend / CRM.
5. Add commerce:
   - SKU variants
   - size selector
   - cart
   - Stripe
   - order confirmation
6. Add legal:
   - Privacy Policy
   - Terms
   - Shipping / Returns
   - Contact

## Suggested routes
- /
- /shop
- /travel
- /world
- /fortune
- /men
- /journal

The current build is a visual brand + product prototype, not yet a transactional store.
