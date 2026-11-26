import { useEffect, useState } from "react"
import { Link, NavLink, Outlet, useLocation } from "react-router"
import {
  CalendarIcon,
  MenuIcon,
  MessageCircleIcon,
  PhoneIcon,
} from "lucide-react"

import { Button, buttonVariants } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Separator } from "@/components/ui/separator"
import { useSeo } from "@/lib/use-seo"
import { EMAIL, PHONE, PHONE_SHOW, nav, wa } from "@/site"

const linkClass = ({ isActive }: { isActive: boolean }) =>
  `inline-flex min-h-11 items-center text-sm font-medium transition-colors ${isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"}`

function Header() {
  const [open, setOpen] = useState(false)
  const links = nav.slice(0, -1)
  return (
    <header className="glass sticky top-0 z-40 border-b border-border/60">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-5">
        <Link
          to="/"
          className="flex min-h-11 items-center gap-2.5 font-heading leading-tight font-bold text-primary"
        >
          <img
            src="/logo.png?v=3"
            alt=""
            width={40}
            height={40}
            className="size-10 shrink-0"
          />
          <span className="flex flex-col">
            Dr. Ameen's
            <span className="block text-xs font-medium tracking-wide text-muted-foreground uppercase">
              Brain and Spine Clinic
            </span>
          </span>
        </Link>
        <nav aria-label="Main" className="hidden items-center gap-8 md:flex">
          {links.map(([label, to]) => (
            <NavLink key={to} to={to} end={to === "/"} className={linkClass}>
              {label}
            </NavLink>
          ))}
          <Link to="/book" className={buttonVariants({ size: "sm" })}>
            Book a visit
          </Link>
        </nav>
        <div className="md:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              render={
                <Button variant="ghost" size="icon" aria-label="Open menu" />
              }
            >
              <MenuIcon />
            </SheetTrigger>
            <SheetContent side="right">
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
              </SheetHeader>
              <nav aria-label="Mobile" className="flex flex-col px-4">
                {links.map(([label, to]) => (
                  <NavLink
                    key={to}
                    to={to}
                    end={to === "/"}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      `border-b border-border py-4 font-heading text-xl font-semibold ${isActive ? "text-primary" : ""}`
                    }
                  >
                    {label}
                  </NavLink>
                ))}
              </nav>
              <div className="mt-auto flex flex-col gap-3 p-4">
                <a
                  href={`tel:${PHONE}`}
                  className={
                    buttonVariants({ size: "lg", variant: "outline" }) +
                    " w-full"
                  }
                >
                  <PhoneIcon data-icon="inline-start" />
                  Call {PHONE_SHOW}
                </a>
                <Link
                  to="/book"
                  onClick={() => setOpen(false)}
                  className={buttonVariants({ size: "lg" }) + " w-full"}
                >
                  <CalendarIcon data-icon="inline-start" />
                  Book a visit
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

function Footer() {
  return (
    <footer className="bleed-foreground bg-foreground pt-12 pb-32 text-sm text-background/70 md:pb-12">
      <div className="mx-auto grid max-w-5xl gap-8 px-5 md:grid-cols-[1.4fr_1fr_1fr]">
        <div className="flex flex-col gap-1">
          <img
            src="/logo.png?v=3"
            alt=""
            width={56}
            height={56}
            loading="lazy"
            className="mb-2 size-14"
          />
          <strong className="font-heading text-base text-background">
            Dr. Ameen's Brain and Spine Clinic
          </strong>
          <span>Opp. Grand Modern Super Market, Benz Circle, Vijayawada</span>
          <span>Days: Monday to Saturday</span>
          <span>Timings: 6 PM to 8 PM</span>
          <span>Surgery at Union Hospitals, Vijayawada</span>
          <span className="mt-2 font-medium text-background">
            Emergency? Call 108 or go to the nearest hospital.
          </span>
        </div>
        <nav aria-label="Footer" className="flex flex-col">
          {nav.map(([label, to]) => (
            <Link
              key={to}
              to={to}
              className="inline-flex min-h-11 items-center text-background hover:underline md:min-h-8"
            >
              {label}
            </Link>
          ))}
        </nav>
        <div className="flex flex-col">
          <a
            className="inline-flex min-h-11 items-center text-background hover:underline md:min-h-8"
            href={`tel:${PHONE}`}
          >
            +91 {PHONE_SHOW}
          </a>
          <a
            className="inline-flex min-h-11 items-center text-background hover:underline md:min-h-8"
            href={`mailto:${EMAIL}`}
          >
            {EMAIL}
          </a>
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-5xl px-5">
        <Separator className="bg-background/15" />
        <div className="flex flex-col gap-1 pt-4 md:flex-row md:items-center md:justify-between">
          <p>
            &copy; {new Date().getFullYear()} Dr. Ameen's Brain and Spine Clinic
          </p>
          <p className="flex items-center gap-1.5">
            Designed by
            <a
              href="https://www.pixxelnesst.com/"
              target="_blank"
              rel="noopener"
              className="inline-flex min-h-11 items-center font-semibold text-background underline underline-offset-4 hover:text-background/80 md:min-h-8"
            >
              Pixxelnesst
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}

function Dock() {
  return (
    <nav
      aria-label="Quick actions"
      className="glass fixed inset-x-0 bottom-0 z-40 grid grid-cols-3 gap-2 border-t border-border/60 px-3 pt-2 pb-[calc(0.5rem+env(safe-area-inset-bottom))] md:hidden"
    >
      <a
        href={`tel:${PHONE}`}
        className={buttonVariants({ variant: "outline" })}
      >
        <PhoneIcon data-icon="inline-start" />
        Call
      </a>
      <a
        href={wa(
          "Hello Dr. Ameen's clinic, I would like to book an appointment."
        )}
        target="_blank"
        rel="noopener"
        className={buttonVariants({ variant: "outline" })}
      >
        <MessageCircleIcon data-icon="inline-start" />
        WhatsApp
      </a>
      <Link to="/book" className={buttonVariants()}>
        <CalendarIcon data-icon="inline-start" />
        Book
      </Link>
    </nav>
  )
}

export function Layout() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  useSeo(pathname)
  return (
    <div className="flex min-h-svh flex-col">
      <a
        href="#main"
        className="sr-only z-50 rounded-full bg-primary px-5 py-3 font-semibold text-primary-foreground focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
      >
        Skip to content
      </a>
      <Header />
      <main id="main" tabIndex={-1} className="flex-1 outline-none">
        <Outlet />
      </main>
      <Footer />
      <Dock />
    </div>
  )
}
