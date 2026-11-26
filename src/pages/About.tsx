import { Fragment } from "react"
import { Link } from "react-router"
import { CalendarIcon, MapPinIcon } from "lucide-react"

import { BannerPhoto, PageBanner } from "@/components/banner"
import { CtaBand, CtaGroup, Section, cta } from "@/components/page"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { MAP, papers, societies, talks } from "@/site"
import { treatments, visitSteps } from "@/treatments"

const qualifications = [
  "MBBS",
  "MS General Surgery",
  "MCh Neurosurgery",
  "FICS (USA)",
  "FCVS (Japan)",
  "Advanced neuroendoscopy fellowship",
]

const research = [
  ["Published papers", papers, "list-decimal"],
  ["Talks and awards", talks, "list-disc"],
  ["Societies", societies, "list-disc"],
] as const

export default function About() {
  return (
    <>
      <PageBanner
        trail={[["Home", "/"]]}
        current="About"
        title="Dr. Mohammad Abdul Ameen"
        lead="A neurosurgeon for adults and children, with more than 20 years of experience in brain and spine surgery."
        art={<BannerPhoto src="/images/dr-ameen.jpg" focus="50% 12%" />}
      >
        <p className="text-lg text-pretty text-muted-foreground">
          He is a consultant neurosurgeon at Union Hospitals in Vijayawada, and
          he sees patients at his clinic in Benz Circle from 6 PM to 8 PM.
        </p>
        <CtaGroup>
          <Link to="/book" className={cta()}>
            <CalendarIcon data-icon="inline-start" />
            Book a visit
          </Link>
          <a
            href={MAP}
            target="_blank"
            rel="noopener"
            className={cta("secondary")}
          >
            <MapPinIcon data-icon="inline-start" />
            Find the clinic
          </a>
        </CtaGroup>
      </PageBanner>

      {/* Who he treats */}
      <Section>
        <p className="max-w-3xl font-heading text-2xl leading-snug font-semibold text-balance md:text-4xl">
          More than 5,000 brain and spine operations, in adults and children.
        </p>
        <p className="mt-6 max-w-2xl text-lg text-pretty text-muted-foreground">
          Dr. Ameen has performed or assisted in all of them. He treats problems
          of the spine, brain tumors, blood vessel problems in the brain,
          injuries, and brain and spine conditions in children.
        </p>
        <ul className="mt-8 flex flex-wrap gap-2">
          {treatments.map((t) => (
            <li key={t.slug}>
              <Link
                to={`/treatments/${t.slug}`}
                className="inline-flex h-10 items-center rounded-full bg-secondary px-4 text-[15px] font-medium text-secondary-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                {t.title}
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      {/* What a visit is like */}
      <Section tint className="grid gap-8 lg:grid-cols-[.8fr_1.2fr] lg:gap-16">
        <div className="flex flex-col gap-3">
          <h2 className="text-3xl font-bold md:text-4xl">
            What a visit with Dr. Ameen is like
          </h2>
          <p className="text-lg text-pretty text-muted-foreground">
            You are listened to, examined, and told your options in plain words.
            Surgery is never the only choice you hear about.
          </p>
        </div>
        <ol className="flex flex-col">
          {visitSteps.map(([title, text], i) => (
            <Fragment key={title}>
              {i > 0 && <Separator />}
              <li className="py-5">
                <p className="font-heading text-xl font-semibold">{title}</p>
                <p className="mt-1 text-[17px] text-pretty text-muted-foreground">
                  {text}
                </p>
              </li>
            </Fragment>
          ))}
        </ol>
      </Section>

      {/* Training, in a few lines */}
      <Section className="grid gap-8 lg:grid-cols-[.8fr_1.2fr] lg:gap-16">
        <h2 className="text-3xl font-bold md:text-4xl">
          Trained in India, Japan and the USA
        </h2>
        <div className="flex flex-col gap-6">
          <p className="text-lg text-pretty text-muted-foreground">
            Dr. Ameen completed his MCh in Neurosurgery at the Sri Venkateswara
            Institute of Medical Sciences in Tirupati. He went on to train in
            Japan at Fujita Health University, in surgery for the blood vessels
            of the brain and for tumors at the base of the skull. He also
            completed a fellowship in advanced neuroendoscopy in Jabalpur, which
            is surgery done through a thin camera. He is a Fellow of the
            International College of Surgeons in the USA.
          </p>
          <ul className="flex flex-wrap gap-2">
            {qualifications.map((q) => (
              <li key={q}>
                <Badge variant="secondary" className="h-8 px-3.5 text-sm">
                  {q}
                </Badge>
              </li>
            ))}
          </ul>
          <p className="text-sm text-muted-foreground">
            Medical Council of India Reg. No. 47206
          </p>
        </div>
      </Section>

      {/* Teaching and research, for colleagues */}
      <Section tint className="grid gap-8 lg:grid-cols-[.8fr_1.2fr] lg:gap-16">
        <h2 className="text-3xl font-bold md:text-4xl">
          Teaching and research
        </h2>
        <div className="flex flex-col gap-6">
          <p className="text-lg text-pretty text-muted-foreground">
            Dr. Ameen teaches. He is known for guiding medical students and
            junior doctors in the basics of surgery and ward management. He has
            also published research on brain aneurysms, spinal tuberculosis and
            cavernomas of the brain stem. The full lists are here for
            colleagues.
          </p>
          <Accordion>
            {research.map(([title, rows, bullet]) => (
              <AccordionItem key={title} value={title}>
                <AccordionTrigger>
                  {title} ({rows.length})
                </AccordionTrigger>
                <AccordionContent>
                  <ul
                    className={`flex ${bullet} flex-col gap-3 pl-5 text-[15px] text-muted-foreground`}
                  >
                    {rows.map((r) => (
                      <li key={r}>{r}</li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Section>
      <CtaBand />
    </>
  )
}
