import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import path from "node:path";

const root = process.cwd();
const read = (file) => readFileSync(path.join(root, file), "utf8");
const failures = [];

const fail = (message) => failures.push(message);

const walk = (dir, files = []) => {
  for (const entry of readdirSync(path.join(root, dir), { withFileTypes: true })) {
    const relativePath = path.join(dir, entry.name).replaceAll("\\", "/");
    if (relativePath.startsWith(".git/") || relativePath.startsWith("_site/")) continue;
    if (entry.isDirectory()) walk(relativePath, files);
    if (entry.isFile()) files.push(relativePath);
  }
  return files;
};

const files = walk(".");
const requiredFiles = [
  "index.html",
  "styles.css",
  "script.js",
  ".github/workflows/pages.yml",
  ".gitignore",
  ".env.example",
  ".nojekyll",
  "LICENSE",
  "README.md",
  "THIRD_PARTY_ASSETS.md",
  "package.json",
];

for (const file of requiredFiles) {
  if (!existsSync(path.join(root, file))) fail(`Missing required file: ${file}`);
}

for (const file of files) {
  const basename = path.basename(file);
  if (/^\.env(?:\..+)?$/.test(basename) && basename !== ".env.example") {
    fail(`Unexpected environment file: ${file}`);
  }
  if (/(^|\/)(node_modules|\.netlify|\.vercel|dist|build|output|coverage|\.cache|\.vite)\//.test(file)) {
    fail(`Unexpected generated or local-only file: ${file}`);
  }
}

const html = read("index.html");
const js = read("script.js");
const css = read("styles.css");
const workflow = read(".github/workflows/pages.yml");
const readme = read("README.md");

const ids = new Set([...html.matchAll(/\bid="([^"]+)"/g)].map((match) => match[1]));

for (const [, href] of html.matchAll(/href="([^"]+)"/g)) {
  if (href.startsWith("#")) {
    const id = href.slice(1);
    if (id && !ids.has(id)) fail(`Missing local anchor target: ${href}`);
    continue;
  }
  if (/^(https?:|mailto:|tel:)/i.test(href)) fail(`External link remains in site HTML: ${href}`);
  if (!existsSync(path.join(root, href))) fail(`Missing href target: ${href}`);
}

const htmlAssets = [...html.matchAll(/(?:src|href)="([^"]+\.(?:css|js|svg|png))"/g)].map((match) => match[1]);
const jsAssets = [...js.matchAll(/"([^"]+\.(?:svg|png))"/g)].map((match) => match[1]);

for (const asset of [...htmlAssets, ...jsAssets]) {
  if (!existsSync(path.join(root, asset))) fail(`Missing asset: ${asset}`);
}

const siteText = `${html}\n${js}\n${css}`;
const forbiddenSitePatterns = [
  [/\bfetch\s*\(/i, "Network fetch call"],
  [/\bXMLHttpRequest\b/i, "XMLHttpRequest usage"],
  [/\bsendBeacon\b/i, "Beacon usage"],
  [/\bWebSocket\b/i, "WebSocket usage"],
  [/mailto:/i, "Email link"],
  [/tel:/i, "Telephone link"],
  [/https?:\/\//i, "External URL in runtime site code"],
  [/\btelegram\b/i, "Telegram reference"],
  [/\bwebhook\b/i, "Webhook reference"],
  [/\bcrm\b/i, "CRM reference"],
  [/Калуга|РИО|Кирова|slimeclub|slimeroom|958/i, "Removed real-world brand/contact marker"],
];

for (const [pattern, label] of forbiddenSitePatterns) {
  if (pattern.test(siteText)) fail(`${label} found in runtime site code`);
}

const secretPatterns = [
  /AKIA[0-9A-Z]{16}/,
  /AIza[0-9A-Za-z_-]{35}/,
  /sk-[A-Za-z0-9_-]{20,}/,
  /xox[baprs]-[A-Za-z0-9-]+/,
  /gh[pousr]_[A-Za-z0-9_]{30,}/,
  /ya29\.[0-9A-Za-z_-]+/,
  /hooks\.slack\.com\/services\//,
  /discord(?:app)?\.com\/api\/webhooks\//,
  /[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}/,
];

for (const file of files) {
  if (/\.(png|jpg|jpeg|webp|gif)$/i.test(file)) continue;
  const content = readFileSync(path.join(root, file), "utf8");
  for (const pattern of secretPatterns) {
    if (pattern.test(content)) fail(`Secret-like pattern found in ${file}`);
  }
}

if (!html.includes("Демонстрационный проект для портфолио. Неофициальный сайт.")) {
  fail("Portfolio disclaimer is missing from the footer");
}
if (!html.includes('action="#"') || !html.includes("data-demo-form")) {
  fail("Contact form is not clearly local demo mode");
}
if (!workflow.includes("actions/deploy-pages@v5") || !workflow.includes("actions/upload-pages-artifact@v5")) {
  fail("GitHub Pages workflow is not using the expected Pages actions");
}
if (!readme.includes("https://reeesx3.github.io/Slime-room-landing-demo/")) {
  fail("README is missing the live GitHub Pages URL");
}
if (!readme.includes("assets/social-preview.png")) {
  fail("README is missing the preview image");
}
if (!read("THIRD_PARTY_ASSETS.md").includes("assets/social-preview.png")) {
  fail("THIRD_PARTY_ASSETS.md is missing the preview image entry");
}

for (const file of files) {
  if (!statSync(path.join(root, file)).isFile()) continue;
  if (statSync(path.join(root, file)).size === 0 && file !== ".nojekyll") {
    fail(`Unexpected empty file: ${file}`);
  }
}

if (failures.length) {
  console.error(failures.map((message) => `- ${message}`).join("\n"));
  process.exit(1);
}

console.log("Static site validation passed.");
