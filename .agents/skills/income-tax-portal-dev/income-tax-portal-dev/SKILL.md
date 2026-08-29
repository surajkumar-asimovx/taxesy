---
name: income-tax-portal-dev
description: Continue development of the "income-tax-portal" React + Vite project — a pixel-matched recreation of a redesigned Indian Income Tax e-Filing homepage with elderly/accessibility-focused UI (accessibility toolbar, task-based "I want to..." grid, tabbed services, deadlines vs. announcements split, sticky help button). Use this skill any time the user asks to extend, modify, fix, restyle, add pages to, wire up functionality for, or otherwise keep working on this project or a project referred to as "the income tax site", "the e-filing portal", "the gov site clone", or similar — even if they don't name the project explicitly and just ask to "add a login page" or "make the read aloud button work" in this codebase. Always read references/architecture.md before making changes so new code matches existing conventions exactly.
---

# Income Tax Portal — Continued Development

This skill captures the conventions, structure, and known gaps of the `income-tax-portal` project so that further work stays visually and structurally consistent with what's already built, instead of drifting into generic patterns.

## Before touching any code

1. Locate the project. If it's already on disk (e.g. unzipped by the user), work there directly. If only the zip exists, unzip it to `/home/claude/income-tax-portal` first.
2. Read `references/architecture.md` in this skill — it has the full component map, design tokens, and a running list of what's real vs. cosmetic-only. Do not skip this: the project uses hand-picked hex values and spacing (not Tailwind, not a component library), and guessing at "close enough" colors will visibly clash.
3. Run `npm install` if `node_modules` isn't present, then `npm run build` once before starting, to confirm you're building from a known-good state. If the build fails before you've changed anything, fix that first and note it.

## Core conventions to preserve

- **Styling**: plain CSS in `src/index.css` using CSS custom properties (`--navy`, `--blue-primary`, `--green`, etc. — see architecture.md for the full palette). New components should reuse these variables, not introduce new hex literals inline. New utility classes follow the existing `bg-<color>` pattern used for icon tiles (`bg-green`, `bg-orange`, `bg-purple`, `bg-blue`, `bg-teal`, `bg-pink`, `bg-red`).
- **Icons**: `lucide-react` (currently v1.35) exclusively. This version dropped brand/social icons (no `Youtube`, `Twitter`, `Facebook`, `Instagram`, `Linkedin` exports) — the footer uses plain letter badges instead. Check `node_modules/lucide-react` exports before assuming an icon name exists; don't guess.
- **Component structure**: one file per section under `src/components/`, each a default-exported function component, composed together in `src/App.jsx`. Keep this pattern for new sections rather than inlining everything into `App.jsx`.
- **No routing yet**: this is currently a single-page homepage. If asked to add pages (e.g. an actual login page, a filing wizard, a forms library), introduce `react-router-dom` rather than hand-rolling view state, and keep the existing homepage as the `/` route unchanged unless told otherwise.
- **No backend**: all data (deadlines, announcements, tab contents, "What's New" items) is hardcoded as arrays at the top of each component file. If asked to make something dynamic, keep the same shape and swap the array for a fetch/state, don't restructure the JSX.
- **Accessibility toolbar is currently cosmetic beyond text size.** Text Size (A⁻/A/A⁺) is wired via `useState` in `App.jsx` and actually changes root font size. Read Aloud, High Contrast, and Language switching render correctly but have no behavior yet — see architecture.md's "Known gaps" section before claiming any of these "work."

## Typical tasks and where they land

- **Wiring Read Aloud** → use the Web Speech API (`SpeechSynthesisUtterance`) in `AccessibilityBar.jsx`; likely needs a way to grab the current page's visible text or a designated "readable" region wrapped around `<main>`.
- **Wiring High Contrast** → add a second CSS custom-property set (e.g. `[data-contrast="high"]` attribute on `<html>` or a `.high-contrast` class toggled via state) with near-black-on-white values layered on top of the existing token names, so components don't need to change.
- **Wiring Language switching** → this needs real content translation (react-i18next or similar) since all copy is currently hardcoded English JSX strings; flag to the user that this is a bigger lift than the other two and confirm scope before starting.
- **Adding a new task tile to "I want to..."** → edit the `primary` or `secondary` arrays in `IWantTo.jsx`; respect the 4-primary / rest-secondary split, don't just append to one flat list, since the visual hierarchy is the point of that section.
- **Adding a new tab to the services section** → edit the `tabs` array and add a matching key to the `panels` object in `ServiceTabs.jsx`; each item needs `icon`, `bg`, `title`, `desc`.
- **Adding a deadline or announcement** → edit the respective array in `DeadlinesAnnouncements.jsx`. Keep the distinction intentional: `deadlines` are only things with a real due date and countdown; `announcements` are news/features with no expiry. Don't blur this back together — it was a deliberate fix from an earlier design review.
- **Restyling or rebranding for a different (fictional) department/site** → update the CSS custom properties in `:root` first, then check every `bg-*` utility still reads correctly against the new palette before touching component markup.

## When the request is genuinely new territory

If the ask is for something structurally new (a real login flow, an actual ITR filing form, state management beyond a couple of `useState` calls, real API integration), treat `references/architecture.md` as the "what exists" baseline, but scope and build the new piece using ordinary React best practice — this skill governs consistency with the existing homepage, not a constraint on what the site can eventually become.

Always rebuild (`npm run build`) after non-trivial changes to catch import/export errors before handing back to the user, and strip `node_modules`/`dist` before re-zipping for delivery.
