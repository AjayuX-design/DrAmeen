import { useEffect } from "react"

import { SITE, seoFor } from "@/seo"

function setTag(
  selector: string,
  create: () => HTMLElement,
  attr: string,
  value: string
) {
  let el = document.head.querySelector<HTMLElement>(selector)
  if (!el) {
    el = create()
    document.head.appendChild(el)
  }
  el.setAttribute(attr, value)
}

const meta = (key: "name" | "property", value: string) => () => {
  const m = document.createElement("meta")
  m.setAttribute(key, value)
  return m
}

/** Keeps the tab title, description, canonical and social tags in step with the current page. */
export function useSeo(pathname: string) {
  useEffect(() => {
    const page = seoFor(pathname)
    if (!page) {
      document.title = "Page not found | Dr. Ameen's Brain and Spine Clinic"
      setTag(
        'meta[name="robots"]',
        meta("name", "robots"),
        "content",
        "noindex"
      )
      return
    }
    document.head.querySelector('meta[name="robots"]')?.remove()
    const url = SITE + (page.path === "/" ? "/" : page.path)
    const image = SITE + page.image
    document.title = page.title
    setTag(
      'meta[name="description"]',
      meta("name", "description"),
      "content",
      page.description
    )
    setTag(
      'link[rel="canonical"]',
      () => Object.assign(document.createElement("link"), { rel: "canonical" }),
      "href",
      url
    )
    setTag(
      'meta[property="og:title"]',
      meta("property", "og:title"),
      "content",
      page.title
    )
    setTag(
      'meta[property="og:description"]',
      meta("property", "og:description"),
      "content",
      page.description
    )
    setTag(
      'meta[property="og:url"]',
      meta("property", "og:url"),
      "content",
      url
    )
    setTag(
      'meta[property="og:image"]',
      meta("property", "og:image"),
      "content",
      image
    )
    setTag(
      'meta[name="twitter:image"]',
      meta("name", "twitter:image"),
      "content",
      image
    )
  }, [pathname])
}
