import { cp, mkdir, rm, copyFile } from "node:fs/promises";

const outputDir = "_site";

await rm(outputDir, { recursive: true, force: true });
await mkdir(outputDir, { recursive: true });

for (const file of ["index.html", "styles.css", "script.js", ".nojekyll"]) {
  await copyFile(file, `${outputDir}/${file}`);
}

await cp("assets", `${outputDir}/assets`, { recursive: true });

console.log(`Built static site in ${outputDir}/`);
