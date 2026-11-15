# AGENTS.md

Astro 5 + Spruce CSS marketing/blog site. The README is still the default Astro starter and does not describe this project; trust the code and this file over it.

## Commands

- `npm run dev` (alias `npm start`) — dev server at http://localhost:4321. This is the reliable way to verify UI changes.
- `npm install` — local `node_modules` was installed by npm and `package-lock.json` matches it. `pnpm-lock.yaml` also exists and CodeSandbox uses pnpm; do not mix package managers or regenerate lockfiles.
- `npm run build` — runs `astro check` and then produces a static `dist/`. Both currently pass with 0 type errors, 0 warnings, and 0 hints.
- `npm run preview` — serves the built `dist/` after a successful build.
- `/search` is prerendered; it reads `?q=` and filters the build-time user list client-side (no adapter needed).
- The build emits one harmless upstream Vite warning from Astro internals (`remotePattern.js` imports `matchHostname`/`matchPathname`/`matchPort`/`matchProtocol` without using them). Don't chase it unless Astro is upgraded.
- No test, lint, format, or single-file typecheck scripts exist. `astro check` is whole-project only.
- No CI or deployment config is present.

## Architecture

- `src/layouts/RootLayout.astro` owns `<html>`, fonts, global styles, `LocalScript`, and `ScrollAnimate`. `BaseLayout.astro` adds header/footer/container; `AuthLayout.astro` is separate.
- Routes are file-based in `src/pages`; there are no API routes. Auth pages are static, and `ContactForm` POSTs to `/api/contact`, which does not exist.
- Page metadata flows `page -> BaseLayout -> RootLayout`; both layouts accept optional `title`/`description`, and `RootLayout` supplies defaults.
- Path aliases are in `tsconfig.json` (`@/*`, `@components/*`, `@layouts/*`, etc.). Note that `@components` points at `src/components`, so UI components live under `@components/ui/...`. Aliases such as `@hooks`, `@stores`, `@i18n`, and `@middleware` point to nonexistent folders.
- `src/data/site-data.ts` feeds header navigation, metadata, and social links. `SiteNavigation.astro` uses the `SiteNavigationLink` alias in `src/types/site-types.ts`.
- `@swup/astro` injects and initializes Swup automatically; don't add a manual `new Swup()` (a bare `swup` import in an inline script breaks the production build). Scripts that must re-run after navigation listen for `astro:page-loaded` / `astro:after-swap` (see `src/scripts/ScrollAnimate.astro`).

## Blog/content gotchas

- `/blog` and the home page list the `posts` content collection (`src/content/posts`, schema in `src/content/config.ts`).
- `/blog/[...slug]` does **not** render those markdown files. `getStaticPaths()` comes from the hardcoded array in `src/utils/posts.js`, and the page body is one shared hardcoded demo article in `[...slug].astro`.
- Adding a real post requires both: a markdown entry (so it appears in lists) and a matching object in `src/utils/posts.js` (so a detail route exists). Editing markdown alone will not change any article body.
- `PostCard.astro` formats `post.data.date` for display. The collection schema requires `title`, `date`, `tags`, `author`, and `thumbnailAlt`; `thumbnail` and `summary` are optional.
- Post thumbnails from the collection live in `src/assets` and go through `astro:assets`; the hardcoded article uses duplicate files in `public/img/blog`. Update both when swapping imagery.
- `src/content/{users,movies}/index.json` are JSON fixtures. `/search` embeds the users at build time and filters cards client-side; `movies` is currently unused.

## Styling

- Styling is Spruce CSS via Sass, not Tailwind. The single entrypoint is `src/styles/spruce-css.scss`, imported by `RootLayout`; it configures Spruce with `@use "sprucecss/scss/spruce" as * with (...)`, generates dark-theme variables under `:root[data-theme-mode="dark"]`, then loads the partial indexes with `meta.load-css` so CSS output order is preserved.
- Add a leaf partial under `src/styles/components/`, `blocks/`, or `addons/`, then register it in that folder's `_index.scss`. Leaf partials start with `@use "sprucecss/scss/spruce" as *;` so Spruce functions/mixins resolve.
- Theme switching uses `data-theme-mode` on `<html>` plus localStorage key `preferred-theme` (`src/components/ui/ThemeSwitcher.astro`). Theme-toggle markup is duplicated in `Footer.astro` with the same `id="theme-switcher"`; the script only wires the first match.
- The "vibrant" theme block in `spruce-css.scss` is commented out and references `$vibrant-colors`, while the map is named `$vibrent-colors`.
- Scroll-reveal effects require `data-scroll-animate` attributes and `.scroll-animation` on `<html>` (`src/styles/utils/_index.scss`).
- Sass is pinned to `1.93.2`. Use `meta.load-css("./folder")` (not legacy `@import`) for folder indexes; the emitted CSS is order-sensitive.

## Environment

- `.env` is gitignored and no environment variables are required to run the site. The map setup in `contact.astro` (and its `PUBLIC_GOOGLE_MAPS_API_KEY` usage) is currently commented out.
