import { CtaBand, PageHead, Section, usePageTitle } from "@/components/page"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { credentials, papers, societies, talks } from "@/site"

const research = [
  ["Published papers", papers, "list-decimal"],
  ["Talks and awards", talks, "list-disc"],
  ["Societies", societies, "list-disc"],
] as const

export default function About() {
  usePageTitle(
    "About Dr. Ameen",
    "Dr. Mohammad Abdul Ameen: MCh Neurosurgery, FICS (USA), FCVS (Japan). More than 20 years and 5,000+ brain and spine surgeries in Vijayawada."
  )
  return (
    <>
      <PageHead
        title="Dr. Mohammad Abdul Ameen"
        lead="Consultant Neurosurgeon at Union Hospitals, Vijayawada, with more than 20 years of experience."
      />
      <Section
        flush
        className="grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:gap-16"
      >
        <img
          src="/images/dr-ameen.jpg"
          alt="Dr. Mohammad Abdul Ameen, neurosurgeon"
          width={996}
          height={932}
          className="aspect-[4/3] w-full rounded-3xl bg-secondary object-cover object-[50%_15%] md:aspect-[16/9] lg:aspect-auto lg:h-full lg:min-h-[420px]"
        />
        <div className="flex flex-col gap-5 text-lg text-muted-foreground lg:justify-center">
          <p>
            Dr. Ameen has performed or assisted in more than 5,000 adult and
            pediatric brain and spine surgeries. His work covers vascular
            neurosurgery, brain tumors, spine surgery, minimally invasive and
            endoscopic spine surgery, brain and spine trauma, and pediatric
            neurosurgery.
          </p>
          <p>
            He also teaches. He is known for guiding medical students and junior
            doctors in the basics of surgery and ward management.
          </p>
          <div className="flex flex-wrap gap-2">
            {[
              "MBBS",
              "MS General Surgery",
              "MCh Neurosurgery",
              "FICS (USA)",
              "FCVS (Japan)",
            ].map((c) => (
              <Badge key={c} variant="secondary" className="h-7 px-3 text-sm">
                {c}
              </Badge>
            ))}
          </div>
          <p className="text-sm">Medical Council of India Reg. No. 47206</p>
        </div>
      </Section>

      <Section tint className="grid gap-8 lg:grid-cols-[.8fr_1.2fr] lg:gap-16">
        <h2 className="text-3xl font-bold md:text-5xl">Training and career</h2>
        <Accordion defaultValue={["Training"]}>
          {credentials.map(([title, rows]) => (
            <AccordionItem key={title} value={title}>
              <AccordionTrigger>{title}</AccordionTrigger>
              <AccordionContent>
                <ul className="flex list-disc flex-col gap-2 pl-5 text-[15px] text-muted-foreground">
                  {rows.map((r) => (
                    <li key={r}>{r}</li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Section>

      <Section className="grid gap-8 lg:grid-cols-[.8fr_1.2fr] lg:gap-16">
        <div className="flex flex-col gap-3">
          <h2 className="text-3xl font-bold md:text-5xl">
            Research and recognition
          </h2>
          <p className="text-lg text-muted-foreground">
            Papers, talks and society memberships, for colleagues who want the
            detail.
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
