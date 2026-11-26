import { Link } from "react-router"
import { CalendarIcon, GlobeIcon, PhoneIcon } from "lucide-react"

import { CtaBand, CtaGroup, Section, cta } from "@/components/page"
import { TreatmentPhotoTile } from "@/components/treatment-card"
import { PHONE, steps } from "@/site"
import { treatments } from "@/treatments"

const stats = [
  ["20+", "years of experience"],
  ["10,000+", "brain and spine surgeries"],
  ["3", "fellowships"],
  ["9", "published papers"],
] as const

export default function Home() {
  return (
    <>
      <section className="mx-auto grid max-w-5xl gap-10 px-5 pt-10 pb-16 md:pt-16 md:pb-20 lg:grid-cols-[1.1fr_.9fr] lg:items-stretch lg:gap-16">
        <div className="flex flex-col gap-6 lg:justify-center">
          <h1 className="text-[2.5rem] font-extrabold md:text-6xl">
            Expert care for your brain and spine
          </h1>
          <p className="max-w-md text-lg text-muted-foreground">
            Dr. Mohammad Abdul Ameen is a neurosurgeon in Vijayawada. He treats
            adults and children with clear advice, careful surgery and honest
            follow-up.
          </p>
          <CtaGroup>
            <Link to="/book" className={cta()}>
              <CalendarIcon data-icon="inline-start" />
              Book a visit
            </Link>
            <a href={`tel:${PHONE}`} className={cta("secondary")}>
              <PhoneIcon data-icon="inline-start" />
              Call us
            </a>
          </CtaGroup>
        </div>
        <img
          src="/images/dr-ameen.webp"
          alt="Dr. Mohammad Abdul Ameen, neurosurgeon"
          fetchPriority="high"
          width={996}
          height={932}
          className="aspect-[4/3] w-full rounded-3xl bg-secondary object-cover object-[50%_15%] md:aspect-[16/9] lg:aspect-auto lg:h-full lg:min-h-[400px]"
        />
      </section>

      <section
        className="bg-muted py-14 md:py-20"
        aria-labelledby="stats-heading"
      >
        <div className="mx-auto max-w-5xl px-5 text-center">
          <h2 id="stats-heading" className="text-3xl font-bold md:text-4xl">
            Over 20 years in neurosurgery
          </h2>
          <dl className="mt-10 grid grid-cols-2 gap-y-10 lg:grid-cols-4">
            {stats.map(([n, l], i) => (
              <div
                key={l}
                className={`flex flex-col items-center gap-2 px-3 ${i % 2 === 1 ? "border-l border-border" : ""} ${i > 0 ? "lg:border-l lg:border-border" : "lg:border-l-0"}`}
              >
                <dt className="order-last text-[15px] text-muted-foreground">
                  {l}
                </dt>
                <dd className="font-heading text-5xl leading-none font-extrabold tracking-tight text-primary md:text-6xl">
                  {n}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <Section snug>
        <h2 className="text-3xl font-bold md:text-4xl">What we treat</h2>
        <p className="mt-2 text-lg text-muted-foreground">
          Choose a treatment to see what it covers and how your visit works.
        </p>
        <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
          {treatments.map((t) => (
            <TreatmentPhotoTile key={t.slug} t={t} />
          ))}
        </div>
      </Section>

      <Section
        tint
        className="grid items-center gap-10 lg:grid-cols-[1fr_1.15fr] lg:gap-16"
      >
        <div className="flex flex-col gap-4">
          <h2 className="text-3xl font-bold md:text-4xl">
            Living abroad? Start with your reports
          </h2>
          <p className="text-lg text-muted-foreground">
            Send your scans first. You will know what to expect before you plan
            any travel.
          </p>
          <CtaGroup className="mt-2">
            <Link to="/international" className={cta()}>
              <GlobeIcon data-icon="inline-start" />
              International patients
            </Link>
          </CtaGroup>
        </div>
        <ol className="grid gap-3">
          {steps.map(([title, text], i) => (
            <li
              key={title}
              className="flex items-start gap-4 rounded-2xl bg-card p-5 ring-1 ring-foreground/8"
            >
              <span className="grid size-9 shrink-0 place-items-center rounded-full bg-primary font-heading text-sm font-bold text-primary-foreground">
                {i + 1}
              </span>
              <div>
                <p className="font-heading text-lg font-semibold">{title}</p>
                <p className="text-[15px] text-muted-foreground">{text}</p>
              </div>
            </li>
          ))}
        </ol>
      </Section>

      <CtaBand />
    </>
  )
}
