# income-tax-portal — Architecture Reference

Vite + React 19 project. Plain CSS, no Tailwind, no component library, no backend, no router (yet).

## File map

```
income-tax-portal/
├── index.html                  — page title, root div, script tag
├── package.json                — deps: react, react-dom, lucide-react
├── src/
│   ├── main.jsx                — StrictMode + createRoot, imports index.css
│   ├── index.css                — ALL styling lives here (no CSS modules, no CSS-in-JS)
│   ├── App.jsx                  — composes every section in order, owns `textSize` state
│   └── components/
│       ├── AccessibilityBar.jsx    — text size / read aloud / high contrast / language
│       ├── TickerBar.jsx           — "Latest Updates" scrolling strip
│       ├── SiteHeader.jsx          — logo, search bar, popular search chips, login
│       ├── MainNav.jsx             — Home / Individual-HUF / Company / etc.
│       ├── Hero.jsx                — gradient hero + laptop illustration + quick strip
│       ├── IWantTo.jsx             — 4 primary + 6 secondary task tiles
│       ├── ServiceTabs.jsx         — e-File / e-Pay / e-Verify / Other Services tabs
│       ├── DeadlinesAnnouncements.jsx — two-panel deadlines vs. announcements
│       ├── WhatsNew.jsx            — 4-card grid + carousel dots
│       ├── NeedHelpPanel.jsx       — inline help panel (phone / chat / FAQ)
│       ├── SiteFooter.jsx          — 5-column footer + bottom bar
│       └── FloatingButtons.jsx     — sticky Need Help + scroll-to-top
```

Component order in `App.jsx` mirrors the visual order top-to-bottom. Keep new sections inserted at the correct point in that list, not just appended at the end.

## Design tokens (all in `src/index.css` under `:root`)

| Variable | Hex | Used for |
|---|---|---|
| `--navy` | `#0b3d91` | main nav background, ticker badge |
| `--navy-dark` | `#0a2a63` | footer background |
| `--blue-primary` | `#1a56d6` | primary buttons, links, active tab, badges |
| `--blue-primary-dark` | `#123fa3` | hero button text, popular-search chip text |
| `--blue-pale` | `#eaf1fd` | light icon tile backgrounds, chips |
| `--blue-pale-2` | `#f3f7fd` | laptop-mock screen backgrounds |
| `--page-bg` | `#eef2f9` | overall page background |
| `--text-dark` | `#16213e` | primary text |
| `--text-muted` | `#5b6478` | secondary/caption text |
| `--border-light` | `#e2e7f0` | all hairline borders |
| `--green` / `--green-bg` | `#1a9e5c` / `#e6f7ee` | File ITR tile, refund amount |
| `--orange` / `--orange-bg` | `#ee7d1a` / `#fdedde` | Pay Tax tile, warning icon |
| `--purple` / `--purple-bg` | `#7c3aed` / `#f1e9fe` | e-Verify tile, announcements icons |
| `--red` / `--red-bg` | `#dc2626` / `#fde8e8` | deadline badges, Respond-to-Notice tile |
| `--pink` / `--pink-bg` | `#d1447a` / `#fbe9ee` | reserved, currently unused in markup |
| `--teal-bg` | `#e6f7f5` | Update Profile tile |

Icon-tile color utility classes (`.bg-green`, `.bg-orange`, `.bg-purple`, `.bg-blue`, `.bg-teal`, `.bg-pink`, `.bg-red`) set both `background` and `color` together — always use the class, never set these inline.

## Layout conventions

- Global content width: `.container` = `max-width: 1200px`, centered, `24px` side padding.
- Section vertical rhythm: `.section { padding: 40px 0 8px; }` — reuse this class for any new full-width section rather than inventing new padding values.
- Card/panel corner radius is consistently `10px`–`12px` (`task-card`, `panel`, `wn-card`, `tab-item`). Match whichever is closest to the element you're adding.
- Responsive breakpoints already defined: `980px` (tablet — grids collapse from 4/6-wide to 2/3-wide) and `640px` (mobile — most grids go to 1–2 columns, tabs get horizontal scroll). Add new responsive rules inside these same two `@media` blocks rather than creating new breakpoints.

## Data shapes (all hardcoded arrays — no backend)

- `IWantTo.jsx`: `primary` and `secondary` arrays, each item `{ icon, bg, title, desc }`.
- `ServiceTabs.jsx`: `panels` object keyed by tab name, each value an array of `{ icon, bg, title, desc }`; `tabs` array controls tab order/labels.
- `DeadlinesAnnouncements.jsx`: `deadlines` array `{ icon, bg, title, desc, date, badge: [number, unitLabel] }`; `announcements` array `{ icon, bg, title, desc, date }` (no badge tuple — gets a static "New" pill instead).
- `WhatsNew.jsx`: `items` array `{ emoji, bg, title, date }` — thumbnails are emoji-in-a-colored-box, not real images, by design (no image assets in the project).

## Known gaps / cosmetic-only features

Be precise with the user about what's real vs. decorative — don't imply more is wired up than actually is:

- ✅ **Text Size (A⁻/A/A⁺)** — real. `App.jsx` holds `textSize` state, passed to `AccessibilityBar`, applied as inline root font-size.
- ⬜ **Read Aloud** — button renders, no click handler. Would need Web Speech API.
- ⬜ **High Contrast** — button renders, no click handler. Would need a second token set + toggle.
- ⬜ **Language pills (English/हिंदी/தமிழ்)** — visually switches active pill state only if wired; currently static markup, no i18n, no actual translated copy anywhere in the app.
- ⬜ **Search bar** — renders and accepts input, not connected to any results/routing.
- ⬜ **Login button** — no auth flow, no destination.
- ⬜ **Mic icon in search bar** — decorative, no speech-to-text wired.
- ⬜ **Tabs in ServiceTabs.jsx** — this one IS fully functional (real `useState` tab switching), unlike most of the above.

## Build/verify loop

```
npm install         # if node_modules missing
npm run dev          # local dev server
npm run build         # production build — run this after any non-trivial change
npm run preview      # serve the production build locally
```

There is no test suite and no linter enforced in CI — `npm run build` succeeding is the bar for "didn't break anything."
