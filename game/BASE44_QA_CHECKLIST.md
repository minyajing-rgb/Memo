# MEMO Life Studio — Base44 Iteration QA Checklist

This checklist is the acceptance gate for the Base44 web-game prototype.

## Global hard gates

A build does **not** pass if any of these are true:
- the screen is only a full-page poster with fake buttons baked into the image
- the original giant concept board is used as one flat background for an interactive screen
- core buttons are no longer clickable after visual replacement
- images are stretched or cropped into visibly wrong aspect ratios
- the app loses the existing wardrobe / cat / travel logic
- the visual style drifts into generic casual game / childish pink UI
- the girl + grey-blue cat are missing from the emotional center of the product

Required design language:
- Mediterranean seaside
- white / cream architecture
- bougainvillea
- warm daylight
- Archive Pink / Lilac / Pool Blue / Mint / Cream accents
- editorial feminine lifestyle
- soft glass cards + line icons
- premium, airy, healing, playful-not-childish

---

## Iteration 1 — Landing

### Visual
- [ ] Hero uses the MEMO master atmosphere, not the old CSS gradient room
- [ ] Girl + grey-blue cat + sea + home are visible immediately
- [ ] MEMO logo/wordmark is clear
- [ ] Hero retains readable editable HTML text / CTA layers
- [ ] Feature cards are separate components, not baked into one image
- [ ] Home / Dress Up / Travel / Cat / Create / Social / UGC are all represented

### Interaction
- [ ] Start / Enter Home CTA works
- [ ] Feature cards navigate to the intended module
- [ ] No dead buttons
- [ ] Desktop and mobile hero do not overflow

### Pass condition
Within 10 seconds a new user understands: this is a MEMO lifestyle simulation game about home, fashion, travel, cat companionship, creativity and friends.

---

## Iteration 2 — Home / Decoration

### Scene
- [ ] Main scene shows semi-open home + courtyard / sea atmosphere
- [ ] Home scene is a scene layer, not a screenshot of all UI
- [ ] Bedroom / Living / Wardrobe / Balcony / Courtyard tabs are real clickable UI
- [ ] Girl and cat remain part of the living world

### Editing UI
- [ ] Left rail exists: Save / Auto / Undo / Redo / Hide UI
- [ ] Bottom furniture category shelf exists
- [ ] Categories: Furniture / Decor / Wall-Floor / Storage / Plants / Cat / Garden
- [ ] Selected furniture gets Rotate / Cancel / Place controls
- [ ] Daily-task card exists
- [ ] Mood and Home Beauty stats exist
- [ ] Shop and Done CTA exist

### Interaction
- [ ] Room/courtyard switching still works
- [ ] Selecting an item visibly changes state
- [ ] Save does not destroy current game state
- [ ] Existing local save behavior is preserved until backend save replaces it

### Pass condition
The screen reads as an actual editable MEMO home, not a static mood board.

---

## Iteration 3 — Dress Up / Travel

### Dress Up
- [ ] Wardrobe categories are real components
- [ ] Hair / Top / Bottom / Dress / Outerwear / Shoes / Bag / Accessories are represented
- [ ] Selecting a wearable updates the avatar/preview state
- [ ] Save Look works
- [ ] Outfit score card shows Chic / Comfort / Flirty / Travel Ready

### Travel
- [ ] Destination selection exists
- [ ] Packing checklist is interactive
- [ ] Departure state works
- [ ] Existing trip countdown remains functional
- [ ] Postcard return loop remains functional
- [ ] Postcards are individual cards/data, not baked image text
- [ ] Friends / on-site teaser area exists

### Pass condition
The page clearly connects outfit selection → packing → trip → postcard / memory → return reward.

---

## Iteration 4 — Cat / Social / Healing / Feng Shui / UGC

### Cat
- [ ] Cat care actions: feed / pet or groom / clean / play
- [ ] Cat state is visible: happiness / hunger / cleanliness / trust or bond
- [ ] Cat mood is not cosmetic only; state changes after actions
- [ ] Cat remains grey-blue / soft grey MEMO companion

### Growth
- [ ] Bond / growth progression is shown
- [ ] At least one growth-stage or memory progression view exists

### Mood / Healing
- [ ] Player mood / energy remain visible
- [ ] Healing actions are presented as gentle lifestyle routines
- [ ] Meditation / tea / journaling / painting / movement can be represented without medical claims

### Feng Shui
- [ ] Simplified home-energy layer is present
- [ ] It is framed as light gameplay / balance scoring, not deterministic real-world prediction

### Social
- [ ] Social feed is real list/card content
- [ ] Like / comment affordances are visible
- [ ] Friend list exists
- [ ] Player can conceptually visit/share/co-create

### UGC
- [ ] Outfit customization module exists
- [ ] Color/material/motif options are separate controls
- [ ] Save Design is real UI
- [ ] Future room/garden UGC has an extensible slot

### Pass condition
This screen group demonstrates MEMO's unique loop: cat + home + wellbeing + self-expression + friends.

---

## Iteration 5 — Global Polish

### Visual consistency
- [ ] Same card radius system across screens
- [ ] Same button hierarchy across screens
- [ ] Same typography hierarchy across screens
- [ ] Same icon style
- [ ] Same pink / cream / lilac / blue palette logic
- [ ] No random colors from old prototype remain
- [ ] Image crops are intentional on 16:9, desktop, tablet and mobile

### Performance
- [ ] No giant source boards loaded where module assets are available
- [ ] WebP assets used
- [ ] Avoid unnecessary duplicate images
- [ ] Main screens load without visible layout jump
- [ ] No console-breaking runtime errors
- [ ] `npm run build` passes

### Product coherence
- [ ] Home, Dress Up, Travel, Cat, Social, Create and UGC feel like one game
- [ ] MEMO e-commerce identity does not overwhelm the game identity
- [ ] Game remains a separate product that can later be linked from the MEMO website

---

## Build / Regression Check After Every Iteration

1. Run `npm run build`.
2. Open preview.
3. Test all visible buttons on the modified screen.
4. Test room switch.
5. Test wardrobe item change.
6. Test cat care action.
7. Test start trip.
8. Advance day until postcard is returned.
9. Refresh and confirm local game state persists.
10. Check mobile viewport.

If any existing gameplay flow breaks, fix regression before starting the next visual iteration.
