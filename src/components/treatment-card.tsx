import { Link } from "react-router"
import {
  AmbulanceIcon,
  ArrowRightIcon,
  BabyIcon,
  BoneIcon,
  BrainIcon,
  HeartPulseIcon,
  MicroscopeIcon,
  type LucideIcon,
} from "lucide-react"

import { TreatmentImage, useImageReady } from "@/components/treatment-image"
import { treatmentImage } from "@/site"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import type { Treatment } from "@/treatments"

/** The whole card is one link to the treatment's own page. */
export function TreatmentCard({
  t,
  showConditions,
}: {
  t: Treatment
  showConditions?: boolean
}) {
  return (
    <Link
      to={`/treatments/${t.slug}`}
      className="group block rounded-2xl outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
    >
      <Card className="h-full bg-muted ring-0 transition-colors group-hover:bg-secondary">
        <TreatmentImage title={t.title} />
        <CardHeader>
          <CardTitle className="font-heading text-xl font-semibold">
            {t.title}
          </CardTitle>
          <CardDescription className="text-[15px]">{t.summary}</CardDescription>
        </CardHeader>
        {showConditions && (
          <CardContent>
            <ul className="flex list-disc flex-col gap-1.5 pl-5 text-[15px]">
              {t.conditions.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </CardContent>
        )}
        <CardContent className="mt-auto">
          <span className="inline-flex items-center gap-1.5 font-semibold text-primary">
            Learn more
            <ArrowRightIcon
              className="size-4 transition-transform group-hover:translate-x-1"
              aria-hidden
            />
          </span>
        </CardContent>
      </Card>
    </Link>
  )
}

const icons: Record<string, LucideIcon> = {
  "spine-surgery": BoneIcon,
  "endoscopic-spine-surgery": MicroscopeIcon,
  "brain-tumors": BrainIcon,
  "vascular-neurosurgery": HeartPulseIcon,
  "head-and-spine-injury": AmbulanceIcon,
  "pediatric-neurosurgery": BabyIcon,
}

/**
 * Photo tile for the Home page: the photo sits on top, unobstructed, and the
 * name sits on its own row underneath. Until a photo exists, a soft panel with
 * an icon is shown in its place.
 */
export function TreatmentPhotoTile({ t }: { t: Treatment }) {
  const src = treatmentImage(t.title)
  const ready = useImageReady(src)
  const Icon = icons[t.slug] ?? BrainIcon
  return (
    <Link
      to={`/treatments/${t.slug}`}
      className="group block h-full overflow-hidden rounded-2xl bg-muted transition-colors outline-none hover:bg-secondary focus-visible:ring-3 focus-visible:ring-ring/50"
    >
      <span className="relative block aspect-[3/2] overflow-hidden bg-secondary sm:aspect-[16/9]">
        {ready ? (
          <img
            src={src}
            alt=""
            style={{ objectPosition: t.focus ?? "50% 50%" }}
            className="absolute inset-0 size-full object-cover transition-transform duration-500 group-hover:scale-105 motion-reduce:transition-none"
          />
        ) : (
          <span className="absolute inset-0 grid place-items-center text-primary/40">
            <Icon className="size-12 sm:size-14" aria-hidden />
          </span>
        )}
      </span>
      <span className="flex min-h-14 items-center justify-between gap-2 px-3 py-2.5 sm:min-h-0 sm:px-4 sm:py-3.5">
        <h3 className="font-heading text-[13px] leading-snug font-semibold sm:text-base">
          {t.title}
        </h3>
        <ArrowRightIcon
          className="size-4 shrink-0 text-primary transition-transform group-hover:translate-x-1"
          aria-hidden
        />
      </span>
    </Link>
  )
}

/**
 * Small tile for the "Other treatments" strip on a treatment page so all five
 * fit in view. Phone: a slim row with a thumbnail. Tablet and up: five across.
 */
export function TreatmentMiniTile({ t }: { t: Treatment }) {
  const src = treatmentImage(t.title)
  const ready = useImageReady(src)
  const Icon = icons[t.slug] ?? BrainIcon
  return (
    <Link
      to={`/treatments/${t.slug}`}
      className="group flex items-center gap-3 overflow-hidden rounded-2xl bg-card p-2.5 ring-1 ring-foreground/8 transition-colors outline-none hover:bg-secondary focus-visible:ring-3 focus-visible:ring-ring/50 md:flex-col md:items-stretch md:gap-0 md:p-0"
    >
      <span className="relative block size-14 shrink-0 overflow-hidden rounded-xl bg-secondary md:aspect-[3/2] md:size-auto md:w-full md:rounded-none">
        {ready ? (
          <img
            src={src}
            alt=""
            style={{ objectPosition: t.focus ?? "50% 50%" }}
            className="absolute inset-0 size-full object-cover transition-transform duration-500 group-hover:scale-105 motion-reduce:transition-none"
          />
        ) : (
          <span className="absolute inset-0 grid place-items-center text-primary/40">
            <Icon className="size-6 md:size-8" aria-hidden />
          </span>
        )}
      </span>
      <span className="flex flex-1 items-center justify-between gap-2 pr-1 md:min-h-16 md:px-3 md:py-2.5 md:pr-3">
        <h3 className="font-heading text-[15px] leading-snug font-semibold md:text-[13px]">
          {t.title}
        </h3>
        <ArrowRightIcon
          className="size-4 shrink-0 text-primary transition-transform group-hover:translate-x-1"
          aria-hidden
        />
      </span>
    </Link>
  )
}
