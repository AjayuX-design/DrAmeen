import { useEffect, useState } from "react"

import { treatmentImage } from "@/site"

/** True once the image file exists and has loaded. Missing files stay false. */
export function useImageReady(src: string) {
  const [ready, setReady] = useState(false)
  useEffect(() => {
    let alive = true
    const img = new Image()
    img.onload = () => alive && setReady(true)
    img.src = src
    return () => {
      alive = false
    }
  }, [src])
  return ready
}

/**
 * Top-of-card photo. Renders nothing until the image file exists, so cards
 * without a photo stay compact instead of showing an empty block.
 */
export function TreatmentImage({
  title,
  className,
}: {
  title: string
  className?: string
}) {
  const src = treatmentImage(title)
  const ready = useImageReady(src)
  if (!ready) return null
  return (
    <div
      className={
        className ??
        "-mt-(--card-spacing) aspect-[16/9] w-full overflow-hidden bg-secondary"
      }
    >
      <img src={src} alt="" loading="lazy" className="size-full object-cover" />
    </div>
  )
}

/** Wide banner for the top of a treatment page. Same photo as the card. */
export function TreatmentBanner({ title }: { title: string }) {
  const src = treatmentImage(title)
  const ready = useImageReady(src)
  if (!ready) return null
  return (
    <div className="mx-auto max-w-5xl px-5 pb-10 md:pb-14">
      <img
        src={src}
        alt=""
        className="aspect-[16/9] w-full rounded-3xl bg-secondary object-cover object-[50%_30%] sm:aspect-[5/2]"
      />
    </div>
  )
}
