import { MailIcon, MessageCircleIcon } from "lucide-react"

import { PageBanner } from "@/components/banner"
import { CtaBand, CtaGroup, Section, cta } from "@/components/page"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { EMAIL, steps, wa } from "@/site"

const faqs = [
  [
    "What should I send?",
    "MRI and CT scans, medical reports, a list of your medicines, and a short note on your problem and when it started.",
  ],
  [
    "How do I send it?",
    "On WhatsApp or by email. For large scan files, share a download link.",
  ],
  [
    "Can I have a video consultation?",
    "Choose video consultation in the booking form. The clinic confirms if it suits your case.",
  ],
  [
    "When should I travel?",
    "Wait for the opinion on your reports first, then pick a date with the clinic. The clinic is open Monday to Saturday, 6 PM to 8 PM.",
  ],
] as const

export default function International() {
  return (
    <>
      <PageBanner
        trail={[["Home", "/"]]}
        current="International Patient"
        title="Living abroad? Start with your reports"
        lead="Send your scans first. Know what to expect before you plan any travel."
      />
      <Section>
        <h2 className="sr-only">How it works</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {steps.map(([title, text], i) => (
            <Card key={title} className="bg-muted ring-0">
              <CardHeader>
                <span className="mb-2 grid size-9 place-items-center rounded-full bg-primary font-heading text-sm font-bold text-primary-foreground">
                  {i + 1}
                </span>
                <CardTitle className="font-heading text-lg font-semibold">
                  {title}
                </CardTitle>
                <CardDescription className="text-[15px]">
                  {text}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
        <CtaGroup className="mt-8">
          <a
            className={cta()}
            target="_blank"
            rel="noopener"
            href={wa(
              "Hello, I am writing from abroad and would like an opinion on my reports."
            )}
          >
            <MessageCircleIcon data-icon="inline-start" />
            Send reports on WhatsApp
          </a>
          <a className={cta("secondary")} href={`mailto:${EMAIL}`}>
            <MailIcon data-icon="inline-start" />
            Email the clinic
          </a>
        </CtaGroup>
      </Section>
      <Section tint className="flex flex-col gap-6">
        <h2 className="text-3xl font-bold">Common questions</h2>
        <Accordion defaultValue={[faqs[0][0]]} className="max-w-3xl">
          {faqs.map(([q, a]) => (
            <AccordionItem key={q} value={q}>
              <AccordionTrigger>{q}</AccordionTrigger>
              <AccordionContent>
                <p className="text-[15px] text-muted-foreground">{a}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Section>
      <CtaBand />
    </>
  )
}
