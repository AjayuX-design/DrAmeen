import { Fragment } from "react"
import { Link } from "react-router"
import { ArrowRightIcon, CalendarIcon } from "lucide-react"

import { BannerPhoto, PageBanner } from "@/components/banner"
import { CtaBand, CtaGroup, Section, cta } from "@/components/page"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Separator } from "@/components/ui/separator"
import { career, education, papers, societies, talks } from "@/site"
import { treatments } from "@/treatments"

const research = [
  ["Published papers", papers, "list-decimal"],
  ["Talks and awards", talks, "list-disc"],
  ["Societies", societies, "list-disc"],
] as const

function Timeline({
  title,
  rows,
}: {
  title: string
  rows: readonly (readonly [string, string, string])[]
}) {
  return (
    <div>
      <h2 className="text-2xl font-bold md:text-3xl">{title}</h2>
      <ol className="mt-6 flex flex-col">
        {rows.map(([when, what, where], i) => (
          <Fragment key={`${when}-${what}`}>
            {i > 0 && <Separator />}
            <li className="grid grid-cols-[6rem_1fr] gap-4 py-4">
              <span className="pt-0.5 font-heading text-sm font-semibold text-primary tabular-nums">
                {when}
              </span>
              <div>
                <p className="text-[17px] leading-snug font-semibold">{what}</p>
                <p className="mt-0.5 text-[15px] text-muted-foreground">
                  {where}
                </p>
              </div>
            </li>
          </Fragment>
        ))}
      </ol>
    </div>
  )
}

export default function About() {
  return (
    <>
      <PageBanner
        trail={[["Home", "/"]]}
        current="About"
        title="Dr. Mohammad Abdul Ameen"
        lead="Consultant Neurosurgeon at Union Hospitals, Vijayawada."
        art={<BannerPhoto src="/images/dr-ameen.jpg" focus="50% 12%" />}
      >
        <p className="text-lg text-pretty text-muted-foreground">
          MBBS, MS General Surgery, MCh Neurosurgery, FICS (USA) and FCVS
          (Japan). Medical Council of India Reg. No. 47206.
        </p>
        <CtaGroup>
          <Link to="/book" className={cta()}>
            <CalendarIcon data-icon="inline-start" />
            Book a visit
          </Link>
        </CtaGroup>
      </PageBanner>

      <Section>
        <p className="max-w-3xl font-heading text-2xl leading-snug font-semibold text-balance md:text-4xl">
          More than 5,000 brain and spine operations, in adults and children,
          over more than 20 years.
        </p>
        <div className="mt-10 grid gap-6 text-lg text-pretty text-muted-foreground md:grid-cols-2 md:gap-14">
          <p>
            Dr. Ameen has performed or assisted in each of them. His work covers
            vascular neurosurgery, brain tumors, spine surgery, minimally
            invasive and endoscopic spine surgery, brain and spine trauma, and
            pediatric neurosurgery.
          </p>
          <p>
            He also teaches. He is known for guiding medical students and junior
            doctors in the basics of surgery and ward management, and he has
            published research on aneurysms, spinal tuberculosis and brain stem
            cavernomas.
          </p>
        </div>
      </Section>

      <Section tint className="grid gap-8 lg:grid-cols-[.8fr_1.2fr] lg:gap-16">
        <div className="flex flex-col gap-3">
          <h2 className="text-3xl font-bold md:text-4xl">What he treats</h2>
          <p className="text-lg text-pretty text-muted-foreground">
            Each treatment has its own page with the signs to look out for and
            how your visit works.
          </p>
        </div>
        <ul className="flex flex-col">
          {treatments.map((t, i) => (
            <Fragment key={t.slug}>
              {i > 0 && <Separator />}
              <li>
                <Link
                  to={`/treatments/${t.slug}`}
                  className="group flex min-h-14 items-center justify-between gap-4 py-3 font-heading text-lg font-semibold transition-colors hover:text-primary"
                >
                  {t.title}
                  <ArrowRightIcon
                    className="size-5 shrink-0 text-primary transition-transform group-hover:translate-x-1"
                    aria-hidden
                  />
                </Link>
              </li>
            </Fragment>
          ))}
        </ul>
      </Section>

      <Section className="grid gap-14 lg:grid-cols-2 lg:gap-16">
        <Timeline title="Training and fellowships" rows={education} />
        <Timeline title="Career" rows={career} />
      </Section>

      <Section tint className="grid gap-8 lg:grid-cols-[.8fr_1.2fr] lg:gap-16">
        <div className="flex flex-col gap-3">
          <h2 className="text-3xl font-bold md:text-4xl">
            Research and societies
          </h2>
          <p className="text-lg text-pretty text-muted-foreground">
            Papers, talks and memberships, for colleagues who want the detail.
          </p>
        </div>
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
      </Section>
      <CtaBand />
    </>
  )
}
