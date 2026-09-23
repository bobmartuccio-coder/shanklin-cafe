# Recreate the Shanklin Cafe website

## Overview
Build a faithful, responsive recreation of the reference cafe website across five pages. Preserve its warm editorial character, exact supplied business details, menu pricing, reviews, and interactive three-step reservation experience.

## Pages and shared structure
- Add a shared sticky header with Shanklin branding, links for Menu, Story, and Visit, plus a prominent Book a table action.
- Add a responsive mobile navigation and a shared footer with address, contact details, opening hours, and page links.
- Create dedicated routes for Home, Menu, Story, Visit, and Book, each with unique search and social metadata.
- Keep navigation transitions, focus states, and interactive feedback smooth and accessible.

## Home page
- Build the full-width, image-led opening section with the supplied headline, supporting copy, rating pill, and two actions.
- Add “What we’re known for” with three signature items: Chilli Prawn Scramble, Baked Eggs Shakshuka, and The Shanklin Flat White.
- Add verified Local Guide review content and the 4.6 / 1,012 review summary.
- Add the “Hold your table” reservation callout.
- Add the location, contact, and seven-day opening-hours summary.

## Menu page
- Present “All Day Dining” and the 7:00 am–2:30 pm daily service note.
- Organize the supplied dishes into clear breakfast/lunch and specialty coffee sections while retaining descriptions, prices, and dietary/popular labels.
- Include all audited items: Chilli Prawn Scramble, Baked Eggs Shakshuka, Lamb Benny, Biscoff French Toast, Portobello Mushroom, Beirut Big Breakfast, Pulled Pork & Rosti, Scotch Steak Sandwich, Acai Superbowl, Flat White, Cold Drip, and Turkish De Latte.

## Story page
- Tell the story of two friends who stayed in hospitality, their neighborhood-cafe philosophy, rotating single-origin coffee, and Middle Eastern warmth.
- Use editorial photography and restrained pull quotes to preserve the reference’s welcoming, personal tone.

## Visit page
- Show the exact address, phone, email, and Monday–Sunday hours.
- Include the corner-of-Tooronga-Road location, nearby tram stop, parking guidance, and service attributes.
- Provide practical tap-to-call, email, directions, and booking actions.

## Reservation flow
- Build a three-step flow: Details, Payment/Deposit, and Confirmed.
- Details will validate a present-or-future date, 30-minute times from 7:00 am through 2:00 pm, 1–8 guests, and required name/email/phone fields.
- Payment will calculate and clearly summarize the $10-per-guest table hold; it will behave as a polished demo checkout without charging a real card.
- Confirmation will display the reservation summary and generate a reference in the `SHK-XXXXXX` format.
- Preserve entered details while moving backward and provide clear validation and completion states.

## Visual system and assets
- Use Fraunces for display headings and Work Sans for body/interface text.
- Define a warm cream, espresso, saffron, and clay semantic token palette with compact editorial labels, softened imagery, and rounded cards matching the reference.
- Generate and use a cohesive set of original cafe photographs for the opening section, signature dishes, coffee, and story content rather than hotlinking reference assets.
- Support desktop and mobile layouts, reduced-motion preferences, visible keyboard focus, and readable contrast.

## Technical notes
- Implement with the existing TanStack routing structure and reusable React components for navigation, footer, menu rows, review treatments, and booking steps.
- Keep reservation state in the browser only; no account, database, or real payment processor is included.
- Verify all five pages, mobile navigation, form validation, step transitions, metadata, and responsive layouts in the running preview.
