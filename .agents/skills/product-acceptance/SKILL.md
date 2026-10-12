---
name: product-acceptance
description: Independently inspect every product page/state/feature/flow against PRD, real mockups and architecture; fix/retest before owner review and verify actual live versions after authorized release.
metadata:
  standard_version: 1.0.0
---
Read product-definition and complete approved inputs. Record exact commit/build/environment/URL/browser/device/viewport/locale. ALL concrete pages/branches/tabs/modals/states are the denominator. PASS/FAIL/BLOCKED/NA_WITH_REASON; untested cannot pass.
Open ACTUAL desktop/mobile screenshots against mockups; inspect layout/hierarchy/type/spacing/color/contrast/owned images/readability/controls/clipping/overlap/zoom/focus/reduced motion. DOM-only tests and builder claims are not visual review. Exercise every CTA and actual success/error/empty/loading/timeout/permission/cancel/back/refresh/deeplink/storage-denied/repeat result. Safely verify applicable auth/RLS/data/API/model/form/payment, never unauthorized charges/messages/data exposure or permission weakening.
Defects need severity, reproduction, expected/actual, evidence, fixing commit and RETEST. Check real visitor value and architecture/privacy/locale/performance/SEO. Fix/retest regressions. No internal acceptance with incomplete coverage, uninspected UI, open P0/P1 or unaccepted P2.
Separate implementation/preview/internal acceptance/owner review/deployed/live-verified. After authorized deployment check actual live version/hash and all routes/critical flows; preview is not live proof. Preserve old site where requested, no repeated backup diversion or review reminders. Deliver self-checked candidate only; unfinished is NOT_READY.
Full standard/templates: minyajing-rgb/GGC-AI-Spirituality-Research @ b50cc78567641341419c45a5759811b70f9d0456, .agents/skills/product-acceptance/SKILL.md and skills/product-delivery/.
