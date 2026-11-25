import { BannerMosaic, PageBanner } from "@/components/banner"
import { CtaBand, Section } from "@/components/page"
import { TreatmentCard } from "@/components/treatment-card"
import { treatments } from "@/treatments"

export default function Treatments() {
  return (
    <>
      <PageBanner
        trail={[["Home", "/"]]}
        current="Treatments"
        title="Treatments"
        lead="From back pain to complex brain surgery, you get a clear diagnosis and a plan you understand."
        art={<BannerMosaic />}
      />
      <Section>
        <h2 className="sr-only">All treatments</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {treatments.map((t) => (
            <TreatmentCard key={t.slug} t={t} showConditions />
          ))}
        </div>
        <p className="mt-8 max-w-xl text-sm text-pretty text-muted-foreground">
          Not sure which one fits? Book a visit and Dr. Ameen will examine you,
          review your scans and explain your options.
        </p>
      </Section>
      <CtaBand />
    </>
  )
}
