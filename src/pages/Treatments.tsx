import { CtaBand, PageHead, Section, usePageTitle } from "@/components/page"
import { TreatmentCard } from "@/components/treatment-card"
import { treatments } from "@/treatments"

export default function Treatments() {
  usePageTitle(
    "Treatments",
    "Spine surgery, endoscopic spine surgery, brain tumors, vascular neurosurgery, head and spine injury and pediatric neurosurgery in Vijayawada."
  )
  return (
    <>
      <PageHead
        title="Treatments"
        lead="From back pain to complex brain surgery, you get a clear diagnosis and a plan you understand."
      />
      <Section flush>
        <div className="grid gap-4 md:grid-cols-2">
          {treatments.map((t) => (
            <TreatmentCard key={t.slug} t={t} showConditions />
          ))}
        </div>
        <p className="mt-8 max-w-xl text-sm text-muted-foreground">
          Not sure which one fits? Book a visit and Dr. Ameen will examine you,
          review your scans and explain your options.
        </p>
      </Section>
      <CtaBand />
    </>
  )
}
