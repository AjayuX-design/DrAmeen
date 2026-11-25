import type { ReactNode } from "react"
import { Link } from "react-router"
import { CalendarIcon, ClockIcon, MapPinIcon, PhoneIcon } from "lucide-react"
import { buttonVariants } from "@/components/ui/button"
import { PHONE, PHONE_SHOW } from "@/site"

/**
 * CTA system (use these everywhere on pages):
 * - primary:   solid blue. One per section. The main action.
 * - secondary: blue outline. The alternative next to a primary, or a standalone link to another page.
 * - inverse:   primary for dark blue backgrounds; inverseOutline is its secondary.
 * Buttons are large, full width on phones, natural width and left aligned from sm up.
 */
const roles = {
  primary: "default",
  secondary: "outline",
  inverse: "secondary",
  inverseOutline: "onDark",
} as const
export const cta = (role: keyof typeof roles = "primary", full = false) =>
  buttonVariants({
    size: "lg",
    variant: roles[role],
    className: full ? "w-full" : "w-full sm:w-auto",
  })

export function CtaGroup({
  children,
  className = "",
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <div
      className={`flex flex-col gap-3 sm:flex-row sm:items-center ${className}`}
    >
      {children}
    </div>
  )
}

export function Section({
  children,
  tint,
  flush,
  snug,
  className = "",
}: {
  children: ReactNode
  tint?: boolean
  flush?: boolean
  snug?: boolean
  className?: string
}) {
  return (
    <section
      className={`${tint ? "bg-muted" : ""} ${flush ? "pt-0 pb-16 md:pb-24" : snug ? "py-10 md:py-12" : "py-16 md:py-24"}`}
    >
      <div className={`mx-auto max-w-5xl px-5 ${className}`}>{children}</div>
    </section>
  )
}

const clinicInfo = [
  [ClockIcon, <>Open 6 PM to 8 PM</>],
  [
    MapPinIcon,
    <>
      <span className="max-lg:hidden">Opp. Grand Modern Super Market, </span>
      Benz Circle, Vijayawada
    </>,
  ],
  [PhoneIcon, <>{PHONE_SHOW}</>],
] as const

export function CtaBand() {
  return (
    <section className="bg-primary py-16 text-center text-primary-foreground md:py-20">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-8 px-5">
        <h2 className="text-3xl font-bold md:text-4xl">
          Ready to talk to Dr. Ameen?
        </h2>
        <ul className="flex flex-col items-center gap-3 text-primary-foreground/90 lg:flex-row lg:gap-8">
          {clinicInfo.map(([Icon, text], i) => (
            <li key={i} className="flex items-center gap-2 whitespace-nowrap">
              <Icon className="size-5 shrink-0" aria-hidden />
              {text}
            </li>
          ))}
        </ul>
        <CtaGroup className="w-full sm:w-auto sm:justify-center">
          <Link to="/book" className={cta("inverse")}>
            <CalendarIcon data-icon="inline-start" />
            Book a visit
          </Link>
          <a href={`tel:${PHONE}`} className={cta("inverseOutline")}>
            <PhoneIcon data-icon="inline-start" />
            Call us
          </a>
        </CtaGroup>
      </div>
    </section>
  )
}
