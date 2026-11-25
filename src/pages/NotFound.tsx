import { Link } from "react-router"
import { ArrowLeftIcon } from "lucide-react"

import { PageBanner } from "@/components/banner"
import { CtaGroup, cta } from "@/components/page"

export default function NotFound() {
  return (
    <PageBanner
      trail={[["Home", "/"]]}
      current="Page not found"
      title="We can't find that page"
      lead="The link may be old. Go back to the home page."
    >
      <CtaGroup>
        <Link to="/" className={cta()}>
          <ArrowLeftIcon data-icon="inline-start" />
          Back to home
        </Link>
      </CtaGroup>
    </PageBanner>
  )
}
