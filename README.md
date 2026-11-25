# Dr. Ameen's Brain and Spine Clinic

Website for Dr. Mohammad Abdul Ameen, neurosurgeon in Vijayawada. Built mobile first with Vite, React, Tailwind and shadcn/ui.

## Pages

- `/` Home
- `/about` About Dr. Ameen
- `/treatments` and `/treatments/:slug` Treatments and one page per treatment
- `/international` International patients
- `/book` Book a visit (opens WhatsApp with the form details)

## Run it

```bash
npm install
npm run dev      # local preview
npm run build    # production build in dist/
```

## Where to edit things

- Clinic phone, email and address: `src/site.ts`
- Treatment text: `src/treatments.ts`
- Treatment photos: `public/images/treatments/<slug>.jpg`, 1600 x 900 px. If a photo needs a different crop, set `focus` for that treatment in `src/treatments.ts`.
- Doctor photo: `public/images/dr-ameen.jpg`
- Buttons: three styles (primary, secondary, on-dark) defined at the top of `src/components/page.tsx`

## Hosting

Every page is a client-side route, so the host must send all addresses to `index.html` (a rewrite). Vercel and Netlify can do this with a single rule.

## Before launch

- Dr. Ameen should review the medical text in `src/treatments.ts`.
- Confirm clinic days and the hospital where surgery happens.
- Pre-render the pages for search engines.
