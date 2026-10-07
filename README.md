# ozcelikfu.github.io

Personal academic website of Furkan Özçelik — built with [Astro](https://astro.build), deployed to GitHub Pages.
A static site: no cookies, no analytics, no trackers.

## Develop

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # outputs to dist/
```

> Local Node is 22.9, so the project uses Astro 5. `astro check` needs
> `NODE_OPTIONS=--experimental-require-module` on Node < 22.12.

## Where the content lives

| What | File |
| --- | --- |
| Name, title, bio, interests, profile links | `src/data/profile.ts` |
| Publications, talks, book chapters | `src/data/publications.ts` |
| Positions, teaching, education & theses | `src/data/experience.ts` |
| Essays & book notes | `src/content/writing/*.md` |
| UI strings (EN + TR scaffold) | `src/i18n/ui.ts` |

- **Add a paper:** append an object to `publications` (set `highlight: true` to feature it, `theme` to place it on the home page / research page).
- **Add a post:** create `src/content/writing/my-post.md` with frontmatter `title`, `date`, `lang` (`en`/`tr`), `kind` (`essay` / `book-notes` / `note`), optional `series`, `book`, `author`, `summary`.
- **Profile links:** fill the empty strings in `profile.links`; empty links are hidden.

## Turkish version

i18n routing is configured (`en` default, `tr` under `/tr/`). To translate a page, create it under
`src/pages/tr/…`, pass `lang="tr"` to the `Base` layout, and add its path to `translatedPaths` in
`src/i18n/ui.ts` — the language switch and `hreflang` tags then appear automatically.

## Deploy

`.github/workflows/deploy.yml` builds and deploys on every push to `main`.
In the GitHub repo settings, set **Pages → Source** to **GitHub Actions** once.
