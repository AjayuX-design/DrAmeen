import { Fragment } from "react"
import { Link, useParams } from "react-router"
import {
  CalendarIcon,
  CheckIcon,
  CircleIcon,
  ClockIcon,
  MapPinIcon,
  PhoneIcon,
  TriangleAlertIcon,
} from "lucide-react"

import { BannerPhoto, PageBanner } from "@/components/banner"
import { CtaBand, CtaGroup, cta } from "@/components/page"
import { TreatmentMiniTile } from "@/components/treatment-card"
import { useImageReady } from "@/components/treatment-image"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import NotFound from "@/pages/NotFound"
import { PHONE, PHONE_SHOW, treatmentImage } from "@/site"
import { bringList, bySlug, treatments, visitSteps } from "@/treatments"

export default function TreatmentDetail() {
  const { slug } = useParams()
  const t = bySlug(slug)
  const hasPhoto = useImageReady(treatmentImage(t?.title ?? ""))
  if (!t) return <NotFound />

  const at = treatments.indexOf(t)
  const more = [1, 2, 3, 4, 5].map(
    (n) => treatments[(at + n) % treatments.length]
  )

  return (
    <>
      <PageBanner
        trail={[
          ["Home", "/"],
          ["Treatments", "/treatments"],
        ]}
        current={t.title}
        title={t.title}
        lead={t.summary}
        art={
          hasPhoto ? (
            <BannerPhoto src={treatmentImage(t.title)} focus={t.focus} />
          ) : undefined
        }
      >
        <p className="text-lg text-pretty text-muted-foreground">{t.intro}</p>
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
      </PageBanner>

      {/* Details */}
      <div className="mx-auto grid max-w-5xl gap-12 px-5 py-14 md:py-20 lg:grid-cols-[1fr_20rem] lg:gap-16">
        <div className="flex flex-col gap-14">
          <section className="flex flex-col gap-5">
            <h2 className="text-2xl font-bold md:text-3xl">What we treat</h2>
            <div className="flex flex-wrap gap-2">
              {t.conditions.map((c) => (
                <Badge
                  key={c}
                  variant="secondary"
                  className="h-9 px-4 text-[15px]"
                >
                  <CheckIcon data-icon="inline-start" />
                  {c}
                </Badge>
              ))}
            </div>
          </section>

          <section className="flex flex-col gap-5">
            <h2 className="text-2xl font-bold md:text-3xl">
              Signs to look out for
            </h2>
            <Card className="bg-muted ring-0">
              <CardContent>
                <ul className="flex flex-col gap-4">
                  {t.symptoms.map((s, i) => (
                    <Fragment key={s}>
                      {i > 0 && <Separator />}
                      <li className="flex items-start gap-3 text-[17px]">
                        <CircleIcon
                          className="mt-2 size-2 shrink-0 fill-primary text-primary"
                          aria-hidden
                        />
                        {s}
                      </li>
                    </Fragment>
                  ))}
                </ul>
              </CardContent>
            </Card>
            <Alert variant="destructive" className="p-4 md:p-5">
              <TriangleAlertIcon aria-hidden />
              <AlertTitle className="text-base font-semibold">
                Get urgent help if
              </AlertTitle>
              <AlertDescription className="text-[15px]">
                {t.urgent}
              </AlertDescription>
            </Alert>
          </section>

          <section className="flex flex-col gap-6">
            <h2 className="text-2xl font-bold md:text-3xl">
              How your visit works
            </h2>
            <ol className="flex flex-col">
              {visitSteps.map(([title, text], i) => (
                <li key={title} className="relative flex gap-4 pb-8 last:pb-0">
                  <span className="z-10 grid size-10 shrink-0 place-items-center rounded-full bg-primary font-heading font-bold text-primary-foreground">
                    {i + 1}
                  </span>
                  {i < visitSteps.length - 1 && (
                    <Separator
                      orientation="vertical"
                      className="absolute top-10 left-5 h-[calc(100%-2.5rem)]"
                    />
                  )}
                  <div className="pt-1.5">
                    <p className="font-heading text-lg font-semibold">
                      {title}
                    </p>
                    <p className="text-[15px] text-muted-foreground">{text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          <section className="flex flex-col gap-5">
            <h2 className="text-2xl font-bold md:text-3xl">Please bring</h2>
            <Card className="bg-muted ring-0">
              <CardContent>
                <ul className="flex flex-col gap-3">
                  {bringList.map((b) => (
                    <li key={b} className="flex items-start gap-3 text-[17px]">
                      <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground">
                        <CheckIcon className="size-3.5" aria-hidden />
                      </span>
                      {b}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </section>

          <p className="text-sm text-muted-foreground">
            This page is general information, not medical advice. Every patient
            is different, so Dr. Ameen will advise you after examining you.
          </p>
        </div>

        {/* Sticky booking card, desktop only. Phones already have the bottom action bar. */}
        <aside className="hidden lg:block">
          <Card className="sticky top-24">
            <CardHeader>
              <CardTitle className="font-heading text-xl font-bold">
                Talk to Dr. Ameen
              </CardTitle>
              <CardDescription>
                Evening clinic at Benz Circle, Vijayawada.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-5">
              <ul className="flex flex-col gap-3 text-[15px]">
                <li className="flex items-start gap-3">
                  <ClockIcon
                    className="mt-0.5 size-5 shrink-0 text-primary"
                    aria-hidden
                  />
                  Monday to Saturday, 6 PM to 8 PM
                </li>
                <li className="flex items-start gap-3">
                  <MapPinIcon
                    className="mt-0.5 size-5 shrink-0 text-primary"
                    aria-hidden
                  />
                  Opp. Grand Modern Super Market, Benz Circle, Vijayawada
                </li>
                <li className="flex items-start gap-3">
                  <PhoneIcon
                    className="mt-0.5 size-5 shrink-0 text-primary"
                    aria-hidden
                  />
                  {PHONE_SHOW}
                </li>
              </ul>
              <Separator />
              <div className="flex flex-col gap-3">
                <Link to="/book" className={cta("primary", true)}>
                  <CalendarIcon data-icon="inline-start" />
                  Book a visit
                </Link>
                <a href={`tel:${PHONE}`} className={cta("secondary", true)}>
                  <PhoneIcon data-icon="inline-start" />
                  Call us
                </a>
              </div>
            </CardContent>
          </Card>
        </aside>
      </div>

      {/* Other treatments */}
      <section className="bg-muted py-12 md:py-16">
        <div className="mx-auto max-w-5xl px-5">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <h2 className="text-2xl font-bold md:text-3xl">Other treatments</h2>
            <CtaGroup>
              <Link to="/treatments" className={cta("secondary")}>
                All treatments
              </Link>
            </CtaGroup>
          </div>
          <div className="mt-6 grid gap-2 md:grid-cols-5 md:gap-3">
            {more.map((o) => (
              <TreatmentMiniTile key={o.slug} t={o} />
            ))}
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  )
}
