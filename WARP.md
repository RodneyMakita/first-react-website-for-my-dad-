# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Key commands

This project is a standard Create React App (CRA) single-page site.

- **Install dependencies** (if not already installed):
  - `npm install`
- **Start the dev server** (includes live reload and basic linting):
  - `npm start`
  - Serves at `http://localhost:3000` by default.
- **Run tests** (Jest via CRA, watch mode):
  - `npm test`
  - To focus on specific tests, use Jest pattern matching, e.g. `npm test -- App` to run tests whose file or test names match `App`.
- **Build for production** (output to `build/`):
  - `npm run build`
- **Eject CRA configuration** (rarely needed, irreversible):
  - `npm run eject`

No standalone lint script is defined; ESLint runs as part of `npm start` / `npm test`.

## High-level architecture

### Runtime overview

- The app is a **single-page React application** rendered into `public/index.html`.
- Entry point: `src/index.js` creates a root and renders `<App />`.
- `src/App.js` is the top-level layout component and simply composes a set of section components (Navbar, Hero, Feature, Services, About, Gallery, FAQ, Contact, CustomFooter) in order, plus Vercel Analytics.
- Navigation is **section-based** rather than route-based: components expose section IDs, and `react-scroll` in `Navbar.jsx` provides smooth scrolling to those sections.
- `BrowserRouter` is imported in `App.js` but not actually used; routing is effectively not enabled at this time.

### Layout and sections

All main content lives under `src/`:

- `src/App.js`
  - Orchestrates the page: `<Navbar />`, `<Hero />`, `<Feature />`, `<Services />`, `<About />`, `<Gallery />`, `<FAQ />`, `<Contact />`, `<CustomFooter />`.
  - Each section is a fairly self-contained presentational component with minimal shared state.

- `src/components/Navbar.jsx`
  - Responsive navigation bar built with **Headless UI** (`@headlessui/react`) and **Heroicons**.
  - Uses `react-scroll` `Link` components to scroll to section IDs (`hero`, `feature`, `services`, `about`, `gallery`, `faq`, `contact`).
  - Maintains mobile menu open/close state with local `useState`.

- `src/components/Hero.jsx`
  - Above-the-fold hero section with a responsive background image that switches between mobile and desktop versions using inline CSS media queries.
  - Uses `react-typed` for animated, looping text.
  - "Explore Services" button scrolls to the `services` section via `react-scroll`.

- `src/components/Services.jsx`
  - Grid of service cards describing the different offerings.
  - Uses `react-hover-animation` to animate cards on hover.

- `src/components/About.jsx`
  - High-level description of the business plus a couple of card-style subsections (mission, commitment), using Tailwind utility classes and subtle hover/animation effects.

- `src/components/Gallery.jsx`
  - Displays an image gallery sourced from files under `src/Assets/`.
  - Clicking an image opens a **modal lightbox** implemented with `react-image-lightbox`, allowing next/previous navigation within the gallery array.
  - Maintains local lightbox open/index state.

- `src/components/FAQ.jsx`
  - FAQ accordion implemented with semantic `<details>` / `<summary>` and Tailwind styling.
  - Icons for expand/collapse are rendered inline with SVG.

- `src/components/Contact.jsx`
  - Contact form component with local UI state for sending, validation, confirmation dialog visibility, and condition flags.
  - Uses **EmailJS** (`@emailjs/browser`) to submit form data via `emailjs.sendForm`.
  - Uses **Ant Design** (`antd`) for the submit `Button`, `Popconfirm`, and `message` notifications.
  - Form validation currently checks that all fields have non-empty values before sending; errors are surfaced via Ant Design `message.error`.
  - Also renders contact details (phone, email addresses) as clickable links.

- `src/components/CustomFooter.jsx`
  - Footer with logo, navigation links, social icons, and copyright.
  - Purely presentational; no state.

### Styling and assets

- **Tailwind CSS** is configured in `tailwind.config.js`:
  - `content` includes `./src/**/*.{js,jsx,ts,tsx}` plus Flowbite React ESM modules so Tailwind picks up utility classes from those components.
  - `plugins` includes `require('flowbite/plugin')` for Flowbite support.
- Global and component-level styles:
  - `src/index.css` and `src/app.css` (plus `components/input.css` / `popup.css`) define base and component-specific styles.
  - Many components rely primarily on Tailwind utility classes embedded in JSX.
- Assets:
  - Images and SVGs are under `src/Assets/` and are imported directly into components (e.g. hero background images, gallery images, logo).

### Analytics and external services

- **Vercel Analytics**: multiple components import `Analytics` from `@vercel/analytics/react`; `App.js`, `Hero.jsx`, `Services.jsx`, `About.jsx`, `Gallery.jsx`, `FAQ.jsx`, `Contact.jsx`, and `CustomFooter.jsx` include `<Analytics />` to emit page metrics.
- **EmailJS integration**:
  - Implemented only in `Contact.jsx` via `emailjs.sendForm` using a `form` ref.
  - If you modify the form fields or names, ensure the EmailJS template and form `name` attributes stay in sync.

### Notes for future changes

- The component tree is deliberately flat: new sections can typically be added by creating a component under `src/components/` and wiring it into `src/App.js` and `Navbar.jsx` (for navigation) using matching section IDs.
- There is no shared global state manager (Redux, Context, etc.) in use; state is local to each component. When introducing cross-section state or side effects, be explicit about where that state should live (likely `App.js` or a dedicated context provider).
- Routing is currently not in use despite the `react-router-dom` dependency; enabling multi-page flows would require wrapping `<App />` (or subtrees) in a `Router` and introducing `Route` components.