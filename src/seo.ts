// Single source for every page's search and sharing details.
// Used by the app (tab title, canonical, social tags) and by scripts/postbuild.mjs,
// so it only uses relative imports and erasable TypeScript.
import { treatments } from "./treatments.ts"

/** The public address of the site. Change this if the domain changes. */
export const SITE = "https://www.drameen.com"
export const OG_DEFAULT = "/og-image.jpg"

export type Seo = {
  path: string
  title: string
  description: string
  image: string
  h1: string
  paragraphs: string[]
  lists: { title: string; items: string[] }[]
}

const nav = [
  ["Home", "/"],
  ["About", "/about"],
  ["Treatments", "/treatments"],
  ["International patients", "/international"],
  ["Book a visit", "/book"],
] as const

export const navLinks = nav

export const pages: Seo[] = [
  {
    path: "/",
    title: "Neurosurgeon in Vijayawada | Dr. Mohammad Abdul Ameen",
    description:
      "Brain and spine surgery for adults and children at Benz Circle, Vijayawada. 20+ years of experience. Open Monday to Saturday, 6 PM to 8 PM.",
    image: OG_DEFAULT,
    h1: "Expert care for your brain and spine",
    paragraphs: [
      "Dr. Mohammad Abdul Ameen is a neurosurgeon in Vijayawada. He treats adults and children with clear advice, careful surgery and honest follow-up.",
      "Clinic: Opp. Grand Modern Super Market, Benz Circle, Vijayawada. Open Monday to Saturday, 6 PM to 8 PM. Phone and WhatsApp: 99486 58699.",
    ],
    lists: [{ title: "What we treat", items: treatments.map((t) => t.title) }],
  },
  {
    path: "/about",
    title: "About Dr. Mohammad Abdul Ameen, Neurosurgeon",
    description:
      "MCh Neurosurgery, FICS (USA) and FCVS (Japan). More than 20 years and 10,000 brain and spine operations in Vijayawada. Read his training, career and research.",
    image: OG_DEFAULT,
    h1: "Dr. Mohammad Abdul Ameen",
    paragraphs: [
      "Consultant Neurosurgeon at Union Hospitals, Vijayawada, with more than 20 years of experience. Medical Council of India Reg. No. 47206.",
      "He has performed or assisted in more than 10,000 adult and pediatric brain and spine operations, and he teaches medical students and junior doctors.",
    ],
    lists: [],
  },
  {
    path: "/treatments",
    title: "Brain and Spine Treatments in Vijayawada | Dr. Ameen",
    description:
      "Spine surgery, endoscopic spine surgery, brain tumors, vascular neurosurgery, head and spine injury and pediatric neurosurgery with Dr. Ameen in Vijayawada.",
    image: OG_DEFAULT,
    h1: "Treatments",
    paragraphs: [
      "From back pain to complex brain surgery, you get a clear diagnosis and a plan you understand.",
    ],
    lists: [{ title: "Treatments", items: treatments.map((t) => t.title) }],
  },
  {
    path: "/international",
    title: "Neurosurgery Opinion for Patients Abroad | Dr. Ameen",
    description:
      "Living abroad? Send your MRI, CT scans and reports to Dr. Ameen in Vijayawada and get an opinion before you plan any travel.",
    image: OG_DEFAULT,
    h1: "Living abroad? Start with your reports",
    paragraphs: [
      "Send your scans first. You will know what to expect before you plan any travel.",
      "Email info@drameen.com or message 99486 58699 on WhatsApp.",
    ],
    lists: [],
  },
  {
    path: "/book",
    title: "Book a Visit with Neurosurgeon Dr. Ameen | Vijayawada",
    description:
      "Request an appointment with Dr. Ameen at Benz Circle, Vijayawada. Clinic hours Monday to Saturday, 6 PM to 8 PM. Call or WhatsApp 99486 58699.",
    image: OG_DEFAULT,
    h1: "Book a visit",
    paragraphs: [
      "Clinic: Opp. Grand Modern Super Market, Benz Circle, Vijayawada. Open Monday to Saturday, 6 PM to 8 PM. Call or WhatsApp 99486 58699.",
    ],
    lists: [],
  },
  ...treatments.map((t): Seo => ({
    path: `/treatments/${t.slug}`,
    title: `${t.title} in Vijayawada | Dr. Ameen`,
    description: `${t.summary} Consult Dr. Mohammad Abdul Ameen, neurosurgeon at Benz Circle, Vijayawada.`,
    image: `/images/treatments/${t.slug}.jpg`,
    h1: t.title,
    paragraphs: [t.summary, t.intro, `Get urgent help if: ${t.urgent}`],
    lists: [
      { title: "What we treat", items: t.conditions },
      { title: "Signs to look out for", items: t.symptoms },
    ],
  })),
]

export const seoFor = (path: string) => {
  const clean = path.length > 1 ? path.replace(/\/+$/, "") : path
  return pages.find((p) => p.path === clean)
}
