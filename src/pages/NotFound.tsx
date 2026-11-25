import { Link } from "react-router"
import { ArrowLeftIcon } from "lucide-react"
import { CtaGroup, PageHead, cta, usePageTitle } from "@/components/page"

export default function NotFound() {
  usePageTitle("Page not found")
  return (
    <>
      <PageHead
        title="We can't find that page"
        lead="The link may be old. Go back to the home page."
      />
      <div className="mx-auto max-w-5xl px-5 pb-24">
        <CtaGroup>
          <Link to="/" className={cta()}>
            <ArrowLeftIcon data-icon="inline-start" />
            Back to home
          </Link>
        </CtaGroup>
      </div>
    </>
  )
}
