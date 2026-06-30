# Slime Room Landing Demo

[![CI and GitHub Pages](https://github.com/reeesx3/Slime-room-landing-demo/actions/workflows/pages.yml/badge.svg)](https://github.com/reeesx3/Slime-room-landing-demo/actions/workflows/pages.yml)
[![Live Demo](https://img.shields.io/badge/demo-GitHub%20Pages-2ea44f?logo=github)](https://reeesx3.github.io/Slime-room-landing-demo/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

![Slime Room Landing Demo preview](assets/social-preview.png)

An unofficial, privacy-safe portfolio landing page for a fictional children's slime workshop. The project demonstrates a colorful responsive layout with service cards, birthday package pricing, reviews, a local-only demo contact form, and GitHub Pages deployment.

This is not an official website for a real organization. Brand names, address details, reviews, contact data, and visuals are fictional or project-owned demo assets.

## Live Demo

[https://reeesx3.github.io/Slime-room-landing-demo/](https://reeesx3.github.io/Slime-room-landing-demo/)

## Features

- Responsive landing page for desktop and mobile viewports.
- Hero, slime cards, birthday packages, pricing, reviews, contact, and footer sections.
- Local-only demo form: no CRM, email, Telegram bot, webhook, analytics, storage, or external submission.
- Fictional brand identity and project-owned SVG illustrations.
- Static GitHub Pages deployment through GitHub Actions.
- Repository safety checks for missing assets, broken local anchors, secrets, `.env` files, and unintended external links.

## Tech Stack

- HTML5
- CSS3
- Vanilla JavaScript
- SVG graphics
- Node.js utility scripts for validation and static build packaging
- GitHub Actions
- GitHub Pages

## Project Structure

```text
.
├── .github/workflows/pages.yml
├── assets/
│   ├── logo.svg
│   ├── hero-studio.svg
│   ├── clear-slime-fire-lava.svg
│   ├── crunch-slime-winter-crystal.svg
│   ├── butter-slime-star-dust.svg
│   ├── review-demo.svg
│   ├── demo-map.svg
│   └── social-preview.png
├── scripts/
│   ├── build.mjs
│   └── validate-site.mjs
├── index.html
├── styles.css
├── script.js
├── THIRD_PARTY_ASSETS.md
├── LICENSE
├── package.json
└── README.md
```

## Local Development

Clone the repository and serve it as a static site:

```powershell
git clone https://github.com/reeesx3/Slime-room-landing-demo.git
cd Slime-room-landing-demo
python -m http.server 4173
```

Open:

```text
http://localhost:4173/
```

The site can also be opened directly from `index.html`, because all runtime assets are local relative files.

## Scripts

```powershell
npm run lint
npm test
npm run build
```

- `npm run lint` checks JavaScript syntax and runs repository safety validation.
- `npm test` runs static integrity and privacy checks.
- `npm run build` creates a deployable `_site/` folder for GitHub Pages.

## Deployment

The repository is configured for GitHub Pages through GitHub Actions. Every push to `main` runs validation, builds `_site/`, uploads a Pages artifact, and deploys it to:

[https://reeesx3.github.io/Slime-room-landing-demo/](https://reeesx3.github.io/Slime-room-landing-demo/)

## Privacy And Safety

- No real organization name, logo, exact address, coordinates, map links, social links, phone numbers, email addresses, payment links, analytics IDs, CRM endpoints, webhooks, API keys, or passwords are included.
- `.env` files are ignored. `.env.example` intentionally contains only empty placeholder values.
- The contact form only shows a local demo response and does not submit or store personal data.
- Third-party asset decisions are documented in [THIRD_PARTY_ASSETS.md](THIRD_PARTY_ASSETS.md).

## License

MIT License. See [LICENSE](LICENSE).
