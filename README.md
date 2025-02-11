# cmubig.github.io

[![Built with Starlight](https://astro.badg.es/v2/built-with-starlight/tiny.svg)](https://starlight.astro.build)

# Installation

```bash
brew install node@23
brew install yarn
brew install git-lfs
git lfs install

# start local dev server at `localhost:4321`
yarn dev

# formatter
yarn prettier . --write

# build static content
yarn build

# check dist/ that was just built
yarn preview

# check that files are tracked by git-lfs
git lfs status
# or
git lfs ls-files
```

# Usage

- Add your `{andrew_id}.jpg` profile image to `src/assets/person/`, and update `src/content/docs/people.mdx`.
- Add research media to `public/research/` (for static, unprocessed files), and update `src/content/docs/research.mdx`.

Development tips:

- Content in `.md` and `.mdx` files in `src/content/docs/`.
- Custom components in `src/components/`.
- Starlight custom [CSS variables](https://github.com/withastro/starlight/tree/main/packages/starlight/style).
- Global CSS in `src/tailwind.css`.

## Project Structure

Inside of your Astro + Starlight project, you'll see the following folders and files:

```
.
├── public/
├── src/
│   ├── assets/
│   ├── content/
│   │   ├── docs/
│   └── content.config.ts
├── astro.config.mjs
├── package.json
├── tailwind.config.mjs
└── tsconfig.json
```

Starlight looks for `.md` or `.mdx` files in the `src/content/docs/` directory. Each file is exposed as a route based on its file name.

Images can be added to `src/assets/` and embedded in Markdown with a relative link.

Static assets, like favicons, can be placed in the `public/` directory.

## Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

```
yarn create astro --template starlight/tailwind
yarn add --dev prettier prettier-plugin-astro remark-parse
git lfs track "src/assets"
git lfs track "*.jpg" "*.png" "*.gif" "*.mp4" "*.mov" "*.pdf"
```
