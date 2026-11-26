import { type FormEvent, useState } from "react"
import {
  CalendarIcon,
  ClockIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
} from "lucide-react"

import { PageBanner } from "@/components/banner"
import { CtaGroup, Section, cta } from "@/components/page"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { NativeSelect, NativeSelectOption } from "@/components/ui/native-select"
import { Textarea } from "@/components/ui/textarea"
import { EMAIL, MAP, PHONE, PHONE_SHOW, wa } from "@/site"

const today = new Date().toISOString().slice(0, 10)

type Errors = Partial<Record<"name" | "phone" | "date", string>>

function validate(d: FormData): Errors {
  const e: Errors = {}
  if (!String(d.get("name")).trim()) e.name = "Enter your full name."
  if (String(d.get("phone")).replace(/\D/g, "").length < 8)
    e.phone = "Enter a phone number with at least 8 digits."
  const date = String(d.get("date"))
  if (!date) e.date = "Pick a date."
  else if (date < today) e.date = "Pick today or a later date."
  else if (new Date(date + "T00:00").getDay() === 0)
    e.date = "The clinic is closed on Sundays. Pick Monday to Saturday."
  return e
}

export default function Book() {
  const [errors, setErrors] = useState<Errors>({})
  const err = (k: keyof Errors) =>
    errors[k] ? (
      <p id={`${k}-error`} role="alert" className="text-sm text-destructive">
        {errors[k]}
      </p>
    ) : null
  const bad = (k: keyof Errors) =>
    errors[k] ? { "aria-invalid": true, "aria-describedby": `${k}-error` } : {}
  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const d = new FormData(form)
    const found = validate(d)
    setErrors(found)
    const first = Object.keys(found)[0]
    if (first) {
      form.querySelector<HTMLElement>(`#${first}`)?.focus()
      return
    }
    const msg = `Appointment request\nName: ${d.get("name")}\nPhone: ${d.get("phone")}\nDate: ${d.get("date")}\nTime: ${d.get("time")}\nType: ${d.get("type")}\nProblem: ${d.get("issue") || "-"}`
    window.open(wa(msg), "_blank", "noopener")
  }
  return (
    <>
      <PageBanner
        trail={[["Home", "/"]]}
        current="Book a visit"
        title="Book a visit"
        lead="Fill in the form. It opens WhatsApp with your details ready to send, and the clinic will confirm your slot."
      />
      <Section className="grid gap-10 md:grid-cols-[1.1fr_.9fr] md:gap-16">
        <Card className="bg-muted ring-0">
          <CardContent>
            <form onSubmit={submit} noValidate>
              <FieldGroup>
                <p className="text-sm text-muted-foreground">
                  Fields marked * are required.
                </p>
                <Field>
                  <FieldLabel htmlFor="name">Full name *</FieldLabel>
                  <Input
                    id="name"
                    name="name"
                    required
                    autoComplete="name"
                    {...bad("name")}
                  />
                  {err("name")}
                </Field>
                <Field>
                  <FieldLabel htmlFor="phone">
                    Phone or WhatsApp number *
                  </FieldLabel>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    inputMode="tel"
                    required
                    autoComplete="tel"
                    placeholder="Your mobile number"
                    {...bad("phone")}
                  />
                  {err("phone")}
                  <FieldDescription>
                    Add your country code if you are outside India.
                  </FieldDescription>
                </Field>
                <Field>
                  <FieldLabel htmlFor="date">Preferred date *</FieldLabel>
                  <Input
                    id="date"
                    name="date"
                    type="date"
                    min={today}
                    required
                    {...bad("date")}
                  />
                  <FieldDescription>
                    The clinic is open Monday to Saturday.
                  </FieldDescription>
                  {err("date")}
                </Field>
                <Field>
                  <FieldLabel htmlFor="time">Preferred time</FieldLabel>
                  <NativeSelect id="time" name="time" className="w-full">
                    <NativeSelectOption>6 PM to 7 PM</NativeSelectOption>
                    <NativeSelectOption>7 PM to 8 PM</NativeSelectOption>
                    <NativeSelectOption>No preference</NativeSelectOption>
                  </NativeSelect>
                  <FieldDescription>
                    The clinic will confirm your exact slot.
                  </FieldDescription>
                </Field>
                <Field>
                  <FieldLabel htmlFor="type">Visit type</FieldLabel>
                  <NativeSelect id="type" name="type" className="w-full">
                    <NativeSelectOption>Clinic visit</NativeSelectOption>
                    <NativeSelectOption>Video consultation</NativeSelectOption>
                    <NativeSelectOption>
                      Opinion on reports (international)
                    </NativeSelectOption>
                  </NativeSelect>
                </Field>
                <Field>
                  <FieldLabel htmlFor="issue">What is the problem?</FieldLabel>
                  <Textarea
                    id="issue"
                    name="issue"
                    placeholder="Back pain with leg numbness for 3 months"
                  />
                </Field>
                <Button type="submit" size="lg" className="w-full">
                  <CalendarIcon data-icon="inline-start" />
                  Continue on WhatsApp
                </Button>
                <FieldDescription>
                  No WhatsApp? Call{" "}
                  <a
                    className="font-semibold text-primary underline underline-offset-4"
                    href={`tel:${PHONE}`}
                  >
                    {PHONE_SHOW}
                  </a>{" "}
                  or email{" "}
                  <a
                    className="font-semibold text-primary underline underline-offset-4"
                    href={`mailto:${EMAIL}`}
                  >
                    {EMAIL}
                  </a>{" "}
                  to book. In an emergency, call 108 or go to the nearest
                  hospital. Do not wait for an appointment.
                </FieldDescription>
                <FieldDescription>
                  Privacy: your details are used only to confirm your visit and
                  are not shared. Consultation fees are shared by the clinic
                  when it confirms your slot.
                </FieldDescription>
              </FieldGroup>
            </form>
          </CardContent>
        </Card>

        <div className="flex flex-col gap-6">
          <h2 className="text-3xl font-bold">Find the clinic</h2>
          <ul className="flex flex-col gap-5">
            {[
              [
                MapPinIcon,
                "Dr. Ameen's Brain and Spine Clinic",
                "Opp. Grand Modern Super Market, Benz Circle, Vijayawada",
              ],
              [CalendarIcon, "Days", "Monday to Saturday"],
              [ClockIcon, "Timings", "6 PM to 8 PM"],
              [MapPinIcon, "Surgery", "Union Hospitals, Vijayawada"],
              [PhoneIcon, "Phone and WhatsApp", PHONE_SHOW],
              [MailIcon, "Email", EMAIL],
            ].map(([Icon, label, value]) => {
              const I = Icon as typeof MapPinIcon
              return (
                <li key={label as string} className="flex items-start gap-4">
                  <I
                    className="mt-0.5 size-5 shrink-0 text-primary"
                    aria-hidden
                  />
                  <div>
                    <p className="text-sm text-muted-foreground">
                      {label as string}
                    </p>
                    <p className="font-medium">{value as string}</p>
                  </div>
                </li>
              )
            })}
          </ul>
          <CtaGroup>
            <a
              className={cta("secondary")}
              target="_blank"
              rel="noopener"
              href={MAP}
            >
              <MapPinIcon data-icon="inline-start" />
              Get directions
            </a>
            <a className={cta("secondary")} href={`tel:${PHONE}`}>
              <PhoneIcon data-icon="inline-start" />
              Call
            </a>
          </CtaGroup>
        </div>
      </Section>
    </>
  )
}
