export const PHONE = "+919948658699"
export const PHONE_SHOW = "99486 58699"
export const EMAIL = "info@drameen.com"
export const wa = (text: string) =>
  `https://wa.me/919948658699?text=${encodeURIComponent(text)}`
export const MAP =
  "https://www.google.com/maps/search/?api=1&query=Opp+Grand+Modern+Super+Market+Benz+Circle+Vijayawada"

export const steps = [
  [
    "Send your reports",
    "Share your MRI, CT scans and reports on WhatsApp or email with a short note.",
  ],
  [
    "Get an opinion",
    "The clinic reviews your case and tells you what the options are.",
  ],
  [
    "Plan your visit",
    "If you decide to come, we help you pick a date and tell you what to bring.",
  ],
] as const

export const nav = [
  ["Home", "/"],
  ["About", "/about"],
  ["Treatments", "/treatments"],
  ["International Patient", "/international"],
  ["Book a visit", "/book"],
] as const

export const papers = [
  "Outcome analysis of surgical clipping for incidental internal carotid posterior communicating and anterior choroidal artery aneurysms. Asian J Neurosurg, 2019.",
  "Primary epidural intraspinal haemangiopericytoma. J Clin Diagn Res, 2019.",
  "Timing of surgery and surgical strategies in symptomatic brain stem cavernomas: review of the literature. Asian J Neurosurg, 2019.",
  "Loss of contralateral upper limb motor evoked potential due to occlusion of the internal carotid artery in microsurgical clipping of basilar tip aneurysm. Asian J Neurosurg, 2019.",
  "Multimodality techniques in microsurgical clipping as a gold standard treatment in the management of basilar tip aneurysms: a case series. Asian J Neurosurg, 2018.",
  "Outcome and management of spinal tuberculosis according to severity at a tertiary referral centre. Asian J Neurosurg, 2017.",
  "Dorsal spinal epidural cavernous haemangioma: a case report. IOSR-JDMS, 2015.",
  "Subarachnoid hemorrhage in a three year old boy with left middle cerebral aneurysm. Journal of Surgical Technique and Case Report, 2011.",
  "Large ventral foramen magnum meningioma: retromastoid suboccipital approach. Journal of Craniovertebral Junction and Spine, 2011.",
] as const

export const talks = [
  "Endoscopic third ventriculostomy in normal pressure hydrocephalus. Fujita Health University, Japan, 2020.",
  "Outcome and management of spinal tuberculosis. AP NEUROCON, Tirupati, 2014.",
  "Balloon kyphoplasty for osteoporotic compression fractures. AP NEUROCON, Guntur, 2013. Awarded 2nd prize for best poster.",
  "Clinical profile and surgical outcome of spinal disorders in children and adolescents. AP NEUROCON, Visakhapatnam, 2012.",
] as const

export const societies = [
  "Neurosurgical Society of Vijayawada (NSV), life member and Academic Secretary",
  "Andhra Pradesh Neuro Scientists Association (APNSA)",
  "Neurological Society of India (NSI)",
  "Neuro Spinal Surgeons Association (NSSA)",
  "Walter E. Dandy Neurosurgical Society (WEDNS)",
  "European Association of Neurological Societies (EANS)",
  "AO Spine Foundation",
] as const

/** Treatment photo path from the title, e.g. "Pediatric neurosurgery" -> /images/treatments/pediatric-neurosurgery.webp */
export const treatmentImage = (title: string) =>
  `/images/treatments/${title
    .toLowerCase()
    .replace(/'/g, "")
    .replace(/[^a-z]+/g, "-")
    .replace(/^-|-$/g, "")}.webp`
