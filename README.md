# Slime Room Landing Demo

Неофициальный демо-лендинг детской творческой студии для GitHub-портфолио. Проект показывает яркую посадочную страницу со слайм-мастер-классами, днями рождения, прайсом, отзывами и локальной демо-формой.

Это концепт для портфолио, не сайт реальной организации. Название, адрес, контакты, отзывы и визуальные материалы заменены демонстрационными данными.

## Demo

GitHub Pages после публикации репозитория:

```text
https://<github-username>.github.io/slime-room-landing-demo/
```

## Stack

- HTML5
- CSS3
- Vanilla JavaScript
- SVG/CSS graphics
- GitHub Actions + GitHub Pages for static deployment

## Features

- Адаптивный первый экран, карточки услуг, блок праздника, прайс и отзывы.
- Демо-форма заявки без отправки данных, CRM, Telegram, email, webhook или аналитики.
- Нейтральный вымышленный бренд `Липкая Лаборатория`.
- Собственные SVG-изображения без EXIF и сторонних фото.
- Документированный аудит ассетов в `THIRD_PARTY_ASSETS.md`.

## Local Run

Открыть как статический сайт:

```powershell
python -m http.server 4173
```

Затем перейти на:

```text
http://localhost:4173/
```

Также можно открыть `index.html` напрямую в браузере.

## Build

Проект статический и не требует сборки:

```text
No build step required.
```

GitHub Actions собирает публикационный артефакт из `index.html`, `styles.css`, `script.js`, `assets/` и `.nojekyll`.

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
│   └── demo-map.svg
├── index.html
├── script.js
├── styles.css
├── THIRD_PARTY_ASSETS.md
└── README.md
```

## Deployment

The repository is compatible with GitHub Pages. After pushing to GitHub:

1. Open repository settings.
2. Go to **Pages**.
3. Select **GitHub Actions** as the source.
4. Push to `main` or run the workflow manually.

The workflow uses relative asset paths, so the site works under the repository base path `/slime-room-landing-demo/`.

## Public Safety Notes

- No original `.git`, history, `node_modules`, build output, Netlify metadata, promo output, or cache files are included.
- No real organization name, logo, exact address, coordinates, map links, social links, mobile numbers, email addresses, payment links, analytics IDs, CRM endpoints, webhooks, API keys, or passwords are included.
- `.env` files are ignored; `.env.example` contains only empty placeholder values.
