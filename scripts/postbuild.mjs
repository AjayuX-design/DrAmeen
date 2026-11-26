// Runs after `vite build`. Writes one HTML file per page, with its own title,
// description, canonical and social tags plus a plain-text fallback, and writes sitemap.xml.
// Run with: node --experimental-strip-types scripts/postbuild.mjs
import { mkdirSync, readFileSync, writeFileSync } from "node:fs"
import { dirname, join } from "node:path"
import { fileURLToPath } from "node:url"

import { SITE, navLinks, pages } from "../src/seo.ts"

const dist = join(dirname(fileURLToPath(import.meta.url)), "..", "dist")
const template = readFileSync(join(dist, "index.html"), "utf8")
const esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
const urlOf = (path) => SITE + (path === "/" ? "/" : path)

function fallback(page) {
  const nav = navLinks.map(([label, href]) => `<li><a href="${href}">${esc(label)}</a></li>`).join("")
  const paras = page.paragraphs.map((p) => `<p>${esc(p)}</p>`).join("")
  const lists = page.lists
    .map((l) => `<h2>${esc(l.title)}</h2><ul>${l.items.map((i) => `<li>${esc(i)}</li>`).join("")}</ul>`)
    .join("")
  return (
    `<noscript><header><p><a href="/">Dr. Ameen's Brain and Spine Clinic, Vijayawada</a></p><nav><ul>${nav}</ul></nav></header>` +
    `<main><h1>${esc(page.h1)}</h1>${paras}${lists}</main>` +
    `<footer><p>Dr. Ameen's Brain and Spine Clinic, Opp. Grand Modern Super Market, Benz Circle, Vijayawada. Open Monday to Saturday, 6 PM to 8 PM. 99486 58699. info@drameen.com</p></footer></noscript>`
  )
}

function breadcrumbs(page) {
  if (!page.path.startsWith("/treatments/")) return ""
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      ["Home", "/"],
      ["Treatments", "/treatments"],
      [page.h1, page.path],
    ].map(([name, path], i) => ({ "@type": "ListItem", position: i + 1, name, item: urlOf(path) })),
  }
  return `<script type="application/ld+json">${JSON.stringify(data)}</script>`
}

function render(page) {
  const url = urlOf(page.path)
  const image = SITE + page.image
  const head =
    `<link rel="canonical" href="${url}" />` +
    `<meta property="og:title" content="${esc(page.title)}" />` +
    `<meta property="og:description" content="${esc(page.description)}" />` +
    `<meta property="og:url" content="${url}" />` +
    `<meta property="og:image" content="${image}" />` +
    `<meta name="twitter:image" content="${image}" />` +
    breadcrumbs(page)
  return template
    .replace(/<title>[\s\S]*?<\/title>/, `<title>${esc(page.title)}</title>`)
    .replace(/<meta name="description"[^>]*>/, `<meta name="description" content="${esc(page.description)}" />`)
    .replace(/<meta property="og:(title|description)"[^>]*>\s*/g, "")
    .replace("</head>", `${head}</head>`)
    .replace('<div id="root"></div>', `<div id="root">${fallback(page)}</div>`)
}

const warnings = []
for (const page of pages) {
  if (page.title.length > 60) warnings.push(`title ${page.title.length} chars: ${page.path}`)
  if (page.description.length > 160) warnings.push(`description ${page.description.length} chars: ${page.path}`)
  const file = page.path === "/" ? join(dist, "index.html") : join(dist, `${page.path.slice(1)}.html`)
  mkdirSync(dirname(file), { recursive: true })
  writeFileSync(file, render(page))
}

// A real 404 page: the app shows its "not found" screen, search engines are told not to index it.
writeFileSync(
  join(dist, "404.html"),
  template
    .replace(/<title>[\s\S]*?<\/title>/, "<title>Page not found | Dr. Ameen's Brain and Spine Clinic</title>")
    .replace("</head>", '<meta name="robots" content="noindex" /></head>')
    .replace(
      '<div id="root"></div>',
      `<div id="root"><noscript><main><h1>We can't find that page</h1><p><a href="/">Go to the home page</a></p></main></noscript></div>`,
    ),
)

const today = new Date().toISOString().slice(0, 10)
const sitemap =
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
  pages.map((p) => `  <url><loc>${urlOf(p.path)}</loc><lastmod>${today}</lastmod></url>`).join("\n") +
  `\n</urlset>\n`
writeFileSync(join(dist, "sitemap.xml"), sitemap)

console.log(`postbuild: wrote ${pages.length} pages, 404.html and sitemap.xml`)
for (const w of warnings) console.warn(`postbuild warning: ${w}`)
