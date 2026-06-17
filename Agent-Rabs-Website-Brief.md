# Agent Rabs & Partners Ltd — Website Handoff Brief

**Prepared for:** Frontend developer
**Deliverable:** Public-facing single-page application (SPA)
**Status:** Structure & spec ready to build. Some content blocked pending owner input (flagged below).

---

## 0. How to read this document

Items are tagged so nothing gets treated as fact when it isn't:

- ✅ **CONFIRMED** — found from the company's public profile (still worth a final sign-off from the owner).
- 🟡 **VERIFY** — found publicly but should be confirmed before going live.
- 🔵 **INFERRED** — a reasonable assumption from the logo/industry; owner to approve.
- 🔴 **BLOCKING** — real content the owner must supply; build with placeholders until then.

---

## 1. Brand snapshot

| Field | Value | Tag |
|---|---|---|
| Trading name | Agent Rabs (social handle) | ✅ |
| Full/legal name | Agent Rabs & Partners Ltd (from logo) | 🟡 |
| Affiliated entity | Rabash & Co Estate Surveyors and Valuers | 🟡 |
| Industry | Real estate agency / property | ✅ |
| Base location | Kaduna, Kaduna State, Nigeria | 🟡 |
| Phone | +234 803 090 0568 | 🟡 |
| Email | — | 🔴 |
| Website | — (this project) | — |
| CAC / registration no. | — | 🔴 |
| Tagline | — | 🔴 |

> Note: the social profile name is "Agent Rabs" while the logo reads "Agent Rabs & Partners Ltd." Confirm the exact name to display. The "& Partners Ltd" implies a registered company — get the CAC number for the footer.

---

## 2. Brand & visual direction (from the logo)

The design will be delivered separately, but these are locked by the logo and should anchor it:

- **Primary palette:** gold / bronze (~`#C9A063`–`#D4A857`) on deep black (`#0A0A0A`–`#111`). Premium, luxury real-estate feel.
- **Accent:** white/off-white for body text on dark sections; consider a single supporting neutral for light sections.
- **Logo motifs:** twin handshakes (trust, partnership, closing deals) + modern high-rise skyline (property, development, urban growth). Reuse these as iconography and section art.
- **Brand personality:** trustworthy, partnership-driven, upmarket, locally rooted.
- **Asset needed:** logo in **vector (SVG)** or high-res PNG — the current file is a JPG and will not scale cleanly. 🔴

---

## 3. Site structure (single-page, anchor-scroll sections)

Sticky top nav linking to each anchor; smooth scroll; mobile hamburger menu.

### 3.1 Hero
- Logo, headline, sub-headline, primary CTA ("View Properties") + secondary CTA ("Talk to an Agent" → WhatsApp/phone).
- Background: skyline imagery in brand gold-on-black.
- **Placeholder copy:** *"Your trusted partner in property. Buy, sell, and rent with confidence across Nigeria."* 🔵

### 3.2 About
- Short company story built around the partnership/trust theme (matches the handshake logo).
- Lean on the mission they already use publicly: helping close Nigeria's housing deficit.
- **Placeholder copy:** *"Agent Rabs & Partners is a real estate firm dedicated to connecting people with homes and investments they can trust. We believe every Nigerian deserves access to quality housing, and we're here to make that process simple, transparent, and secure."* 🔵 (owner to replace with real story)

### 3.3 Services
Likely offering — **owner must confirm the real list** 🔴:
- Property sales (residential & commercial)
- Rentals / lettings
- Estate surveying & valuation (via Rabash & Co)
- Property / facility management
- Land sales
- Property investment advisory
- Display as cards with an icon (handshake/building motif), title, one-line description.

### 3.4 Featured listings
- Property cards: photo, title, location, beds/baths/BQ, price (₦), status (For Sale / For Rent / Sold).
- Optional: filter by type or location; "View all" if a catalogue exists later.
- **Real listings needed** 🔴. One confirmed example to use as the card template:
  - *3-bedroom, 2 living rooms + BQ — Millennium City, Kaduna State — ₦45,000,000* 🟡

### 3.5 Why choose us
- 3–4 trust points: experience, areas covered, professional valuation backing, transparent process.
- Optional stat counters (properties sold, clients served, years active) — **numbers from owner** 🔴.

### 3.6 Testimonials
- Carousel/grid of client quotes with name + (optional) photo.
- **Real testimonials needed** 🔴; build with placeholders.

### 3.7 Contact
- Phone: +234 803 090 0568 (click-to-call) 🟡
- **WhatsApp click-to-chat** (`https://wa.me/2348030900568`) — high-converting for Nigerian real estate leads. Confirm number is on WhatsApp. 🟡
- Contact form: name, phone, email, message → see §4 for handling.
- Office address + Google Maps embed 🔴
- Social links (Facebook confirmed ✅; Instagram/TikTok/X if any 🔴)

### 3.8 Footer
- Logo, quick links, contact line, social icons.
- Legal name + CAC number 🔴
- © current year, "All rights reserved."

---

## 4. Functional / technical notes

- **Type:** SPA, single HTML route with anchor navigation. No backend required for v1 unless the form is server-handled.
- **Contact form:** no backend specified, so use a no-server option — e.g. Formspree/Web3Forms, a `mailto:`, or direct WhatsApp deep link. Decide with owner. Do **not** collect sensitive data.
- **Responsive:** mobile-first. Most Nigerian property traffic is mobile — test on small Android viewports first.
- **Performance:** compress property images (WebP); lazy-load listing images.
- **SEO basics:** title, meta description, Open Graph image (use the logo/skyline) so shared links look good on WhatsApp/Facebook.
- **Accessibility:** sufficient contrast for gold-on-black text (run a contrast check — gold on black can fail at small sizes), alt text on all images.
- **Analytics:** optional — add a Google Analytics / Meta Pixel slot if owner wants lead tracking.

---

## 5. Outstanding items checklist (owner to provide)

- [ ] Exact name to display + CAC/registration number
- [ ] Official email address
- [ ] Confirmed office address(es) — is it Kaduna only, or also Kano/others?
- [ ] Confirm phone & WhatsApp number
- [ ] Final list of services
- [ ] 5–10 real property listings (photos, titles, locations, prices, status)
- [ ] Company story / About text
- [ ] Founder/team bio + photos (optional but builds trust)
- [ ] 2–4 client testimonials
- [ ] All social media links
- [ ] Logo in SVG or high-res PNG
- [ ] Tagline / slogan (if they have one)
- [ ] Sign-off on the publicly found details marked 🟡

---

## 6. Summary for the developer

You can build the **entire structure, layout, and design** from this brief plus the supplied design. The sections marked 🔵 ship with placeholder copy you can wire in immediately. The sections marked 🔴 (real listings, exact legal details, services, testimonials, photos) need the owner's content before the site is launch-ready — until then, build with dummy content that matches the card/section templates above.
