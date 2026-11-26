import type { ReactNode } from "react"
import { Link } from "react-router"
import { cn } from "cn"

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

/**
 * The banner at the top of every inner page.
 * Rules: one headline, one supporting line, at most one action row,
 * and an optional picture on the right (below the headline on phones).
 */
export function PageBanner({
  trail,
  current,
  title,
  lead,
  art,
  children,
}: {
  /** Parent pages for the breadcrumb, nearest last. */
  trail: [label: string, to: string][]
  current: string
  title: string
  lead?: ReactNode
  art?: ReactNode
  /** Extra text and the action buttons. */
  children?: ReactNode
}) {
  return (
    <section className="bg-muted pt-6 pb-10 md:pb-16">
      <div className="mx-auto max-w-5xl px-5">
        <Breadcrumb>
          <BreadcrumbList>
            {trail.map(([label, to]) => (
              <BreadcrumbItem key={to}>
                <BreadcrumbLink render={<Link to={to} />}>
                  {label}
                </BreadcrumbLink>
                <BreadcrumbSeparator />
              </BreadcrumbItem>
            ))}
            <BreadcrumbItem>
              <BreadcrumbPage>{current}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div
          className={cn(
            "mt-8 grid gap-8",
            art
              ? "lg:grid-cols-[1.1fr_.9fr] lg:gap-x-14 lg:gap-y-6"
              : "max-w-3xl"
          )}
        >
          <div className="flex flex-col items-start gap-4">
            <h1 className="text-4xl font-extrabold text-balance md:text-6xl">
              {title}
            </h1>
            {lead && (
              <p className="text-xl text-pretty text-muted-foreground">
                {lead}
              </p>
            )}
          </div>
          {art && (
            <div className="lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:self-stretch">
              {art}
            </div>
          )}
          {children && <div className="flex flex-col gap-6">{children}</div>}
        </div>
      </div>
    </section>
  )
}

/** One picture for the banner. `focus` keeps the important part in view when it is cropped. */
export function BannerPhoto({
  src,
  focus = "50% 30%",
}: {
  src: string
  focus?: string
}) {
  return (
    <img
      src={src}
      alt=""
      width={1000}
      height={563}
      fetchPriority="high"
      style={{ objectPosition: focus }}
      className="aspect-[16/9] w-full rounded-3xl bg-secondary object-cover lg:aspect-auto lg:h-full lg:min-h-72"
    />
  )
}

/** Three treatment photos as one picture, for the Treatments banner. */
export function BannerMosaic() {
  const img = "size-full rounded-2xl bg-secondary object-cover"
  return (
    <div className="grid aspect-[16/10] grid-cols-[1.2fr_1fr] grid-rows-2 gap-3 lg:aspect-auto lg:h-full lg:min-h-72">
      <img
        src="/images/treatments/spine-surgery.jpg"
        alt=""
        width={1000}
        height={563}
        className={cn(img, "row-span-2")}
      />
      <img
        src="/images/treatments/brain-tumors.jpg"
        alt=""
        width={1000}
        height={563}
        className={img}
      />
      <img
        src="/images/treatments/endoscopic-spine-surgery.jpg"
        alt=""
        width={1000}
        height={563}
        className={img}
      />
    </div>
  )
}
