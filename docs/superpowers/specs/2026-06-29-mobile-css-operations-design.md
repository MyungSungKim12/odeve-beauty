# odeve beauty Mobile CSS Operations Design

## Goal

Improve the odeve beauty site as a mobile-first beauty booking page that is easier to operate after launch. Most visitors are expected to arrive on mobile, so the design should prioritize quick scanning, trust, service comparison, and booking/contact actions on small screens.

## Scope

- Keep the existing one-page flow: navigation, hero, trust bar, portfolio, services, booking, footer links.
- Replace broken Korean text with reasonable temporary Korean copy so the page looks finished now.
- Keep temporary copy easy to edit later by grouping repeated content such as services, portfolio items, booking steps, and footer links as data.
- Reduce scattered inline styling by moving reusable visual rules into global CSS classes and design tokens.
- Preserve the current Next.js App Router setup and Tailwind 4 usage.

## Non-Goals

- Do not add a CMS, admin page, backend, payment flow, or real booking integration.
- Do not attempt to source final official copy, pricing, addresses, phone numbers, or photos.
- Do not introduce a large design system or CSS architecture beyond what this small landing page needs.

## Recommended Approach

Use an operations-friendly redesign:

- Store editable content in small arrays or a shared content file so text and links can be changed without digging through layout code.
- Prefer a shared content file if multiple sections need owner-editable copy, because the owner plans to revise the text later.
- Use `app/globals.css` for global tokens, reset rules, typography helpers, button styles, section layout, cards, and mobile interaction states.
- Keep component files focused on structure and mapped content.
- Continue using Tailwind utilities where they are already useful, but avoid relying on long inline style objects for core UI.

This keeps the site simple while making it easier to polish and maintain.

## Visual Direction

The site should feel calm, premium, and appointment-oriented, without becoming a marketing-heavy landing page. The mobile screen should show the brand, what the studio does, and a clear booking action immediately.

Design characteristics:

- Warm neutral background with deeper text contrast for readability.
- Gold or muted accent only for important actions and small highlights.
- Elegant serif display type for brand and headings, clean sans-serif for Korean body copy.
- Compact cards, clear section boundaries, and stable spacing that works on narrow screens.
- Buttons large enough for mobile taps, with clear primary and secondary hierarchy.

## Content Structure

Editable data should include:

- Brand labels and hero copy.
- Trust stats.
- Portfolio categories.
- Service names, descriptions, prices, and extra notes.
- Booking steps and CTA links.
- Footer quick links.

Temporary Korean copy is acceptable, but every placeholder value should read naturally and be easy for the owner to replace later.

## Component Plan

- `layout.tsx`: fix metadata copy and use `next/font/google` instead of CSS `@import` for Google fonts.
- `page.tsx`: use a page shell class instead of inline max-width/background styles.
- `Nav`: show brand and booking CTA with stable sticky mobile header styling.
- `Hero`: present the main offer, service categories, and primary/secondary CTAs.
- `TrustBar`: keep a three-column proof strip with readable labels.
- `Portfolio`: use horizontal mobile cards with temporary image placeholders that can later be replaced with real photos.
- `Services`: use a scannable price list with consistent hierarchy and wrapping behavior.
- `Booking`: make contact steps and CTA buttons clear, using temporary links where official links are unknown.
- `Footer`: keep quick links and studio summary compact.

## Accessibility And UX

- Use semantic sections and readable headings.
- Keep tap targets at least 44px high.
- Ensure text does not overflow on small screens.
- Preserve reduced-motion handling.
- Ensure external links use `target="_blank"` with `rel="noopener noreferrer"`.
- Keep color contrast strong enough for key copy and buttons.

## Verification

- Run `npm run build`.
- Run `npm run lint` if available and useful for the changed files.
- Start the dev server and inspect the mobile layout visually if practical.
- Check that Korean text renders correctly, CTAs are visible, and horizontal cards do not break the page width.
