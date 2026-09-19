# MEMO — GitHub Pages One-Time Setup

The website source and deployment workflow are already committed.

Current observed workflow state:
- Checkout: success
- Setup Pages: failure
- Upload / Deploy: skipped

This means the static site code is present; GitHub Pages itself has not yet been enabled/available for this repository.

## One-time GitHub UI step

Open:
**Repository → Settings → Pages**

Then choose:
- **Source: GitHub Actions**

If GitHub does not show Pages for this private repository, the account/plan must support private-repository Pages, or the repository visibility must be changed according to the brand's publishing decision.

After Pages is enabled:
1. Open **Actions**
2. Select **Deploy MEMO static site to GitHub Pages**
3. Run workflow (or push any site commit)
4. GitHub will display the production Pages URL in the deployment result.

## Canonical source
Do not move the website to Base44 or another builder. GitHub remains the source of truth.
