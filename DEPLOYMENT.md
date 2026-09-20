# MEMO Production Deployment

## Hosting decision

**Brand/source archive:** GitHub private repository `minyajing-rgb/Memo`  
**Live website host:** Base44  
**Base44 app:** `MEMO` / `6aae67beb0e43ded2c70db4b`

Reason:
- keep the GitHub repository private
- use Base44 for public hosting, future commerce/backend, and custom-domain binding
- avoid GitHub Pages plan/visibility restrictions
- avoid using GitHub Pages as the production host for an ecommerce-oriented site

## Current Base44 website

The Base44 version has been rebuilt as the active website implementation with:
- 24-hour soft wardrobe positioning
- Home / Shop system
- Inner → Outer
- Silk & Lounge
- Business → Bar
- Travel capsule
- Swim & Resort
- MEMO Men
- MEMO Fortune / 桃花双开
- Variable Cat / Memory of the Universe brand world
- front-end shopping bag prototype
- responsive layout

## Production flow

1. Continue product/brand source documentation in this GitHub repository.
2. Use Base44 app `6aae67beb0e43ded2c70db4b` as the production website.
3. Publish from the Base44 dashboard.
4. Bind the final custom domain in Base44.
5. Add commerce integrations after merchant setup:
   - Stripe
   - CRM / email capture
   - analytics
   - inventory / order flow
   - legal pages

## Domain

Final domain is not yet locked in this file. Once chosen, add it in Base44 custom-domain settings and update the canonical/SEO values in the website.
