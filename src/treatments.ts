export type Treatment = {
  slug: string
  title: string
  summary: string
  intro: string
  conditions: string[]
  symptoms: string[]
  urgent: string
  /** Where to keep the photo centred when it is cropped (CSS object-position). */
  focus?: string
}

/** Slugs match the treatment photo file names in public/images/treatments. */
export const treatments: Treatment[] = [
  {
    slug: "spine-surgery",
    title: "Spine surgery",
    summary: "For back and neck problems that need an operation.",
    intro:
      "Most back and neck pain gets better without surgery. Surgery is for problems where scans and your examination show pressure on the nerves or the spinal cord that medicine and rest cannot fix. Dr. Ameen will explain what he sees on your scans and whether an operation is needed at all.",
    conditions: [
      "Slipped disc",
      "Narrow spinal canal",
      "Spinal tuberculosis",
      "Fractures of the spine",
      "Tumors of the spine",
    ],
    symptoms: [
      "Back or neck pain that does not settle",
      "Pain, tingling or numbness spreading into an arm or leg",
      "Weakness in a hand or a leg",
      "Trouble walking or keeping your balance",
    ],
    urgent:
      "Sudden weakness in the legs, loss of control of urine or stools, or numbness around the groin needs emergency care. Go to the nearest hospital straight away.",
  },
  {
    slug: "endoscopic-spine-surgery",
    title: "Endoscopic spine surgery",
    summary:
      "Smaller cuts, less pain and a faster return to daily life, where it is safe.",
    intro:
      "Endoscopic and minimally invasive surgery uses small cuts and a thin camera. For suitable problems it can mean less pain after surgery and a quicker return to daily life. Not every spine problem can be treated this way. Dr. Ameen will tell you honestly whether yours can.",
    conditions: [
      "Minimally invasive spine procedures",
      "Endoscopic disc surgery",
      "Balloon kyphoplasty for weak, fractured bones",
    ],
    symptoms: [
      "Leg or arm pain from a pinched nerve",
      "Back pain after a fracture from weak bones",
      "Pain that limits walking, sitting or sleep",
    ],
    urgent:
      "Sudden weakness in the legs or loss of control of urine or stools needs emergency care. Go to the nearest hospital straight away.",
  },
  {
    slug: "brain-tumors",
    title: "Brain tumors",
    summary:
      "Diagnosis and surgery for tumors of the brain and the base of the skull.",
    intro:
      "A brain tumor needs a careful plan. Dr. Ameen reviews your scans, explains what the tumor is likely to be, and talks through whether surgery is needed and what your options are. He has advanced training in brain and skull base tumors from Fujita Health University in Japan.",
    conditions: [
      "Brain tumors",
      "Skull base tumors",
      "Tumors near the brain stem",
    ],
    symptoms: [
      "Headaches that are new or getting worse",
      "Seizures (fits)",
      "Weakness, numbness, or trouble with speech or vision",
      "Changes in memory, behavior or balance",
    ],
    urgent:
      "A first seizure, a sudden severe headache, or sudden weakness or trouble speaking needs urgent care at the nearest hospital.",
  },
  {
    slug: "vascular-neurosurgery",
    focus: "78% 40%",
    title: "Vascular neurosurgery",
    summary:
      "Problems with the blood vessels of the brain, treated with microsurgery.",
    intro:
      "These are problems with the blood vessels of the brain, such as an aneurysm, which is a weak, swollen spot in a vessel. Dr. Ameen trained in cerebrovascular surgery in Japan and has published research on microsurgical clipping of aneurysms.",
    conditions: [
      "Brain aneurysms",
      "Bleeding in the brain",
      "Cavernomas",
      "Microsurgical clipping",
    ],
    symptoms: [
      "Sudden, very severe headache",
      "Neck stiffness with vomiting",
      "Weakness on one side of the body",
      "Trouble speaking or seeing",
      "Many aneurysms cause no symptoms and are found on a scan done for another reason",
    ],
    urgent:
      "A sudden, very severe headache, or sudden weakness, confusion or trouble speaking needs emergency care. Go to the nearest hospital straight away.",
  },
  {
    slug: "head-and-spine-injury",
    title: "Head and spine injury",
    summary: "Care after accidents and falls, with proper follow-up.",
    intro:
      "After a road accident or a fall, a head or spine injury needs quick and proper assessment. Dr. Ameen provides neurosurgical care for these injuries, and follow-up care as you recover. The clinic runs in the evening, so for a fresh injury go to the nearest hospital first.",
    conditions: ["Head injury", "Spine injury", "Emergency neurosurgical care"],
    symptoms: [
      "Headache, vomiting or drowsiness after a blow to the head",
      "Loss of consciousness, even for a short time",
      "Neck or back pain after an accident",
      "Numbness or weakness in the arms or legs",
    ],
    urgent:
      "After a serious accident or fall, go to the nearest emergency room straight away. Do not wait for a clinic appointment. Do not move someone with a suspected neck or back injury unless they are in danger.",
  },
  {
    slug: "pediatric-neurosurgery",
    focus: "22% 40%",
    title: "Pediatric neurosurgery",
    summary:
      "Brain and spine problems in children, explained clearly to parents.",
    intro:
      "Brain and spine problems in children need special care and clear explanations for parents. Dr. Ameen has performed and assisted in pediatric neurosurgical procedures, including endoscopic treatment of hydrocephalus, which is a build-up of fluid in the brain.",
    conditions: [
      "Hydrocephalus",
      "Endoscopic third ventriculostomy",
      "Congenital spine and brain conditions",
      "Spine problems in children and teenagers",
    ],
    symptoms: [
      "A head that is growing faster than expected",
      "Repeated vomiting or unusual sleepiness",
      "Seizures (fits)",
      "Delayed milestones, or weakness in the arms or legs",
    ],
    urgent:
      "A child with repeated vomiting, a bulging soft spot on the head, a seizure, or unusual drowsiness needs urgent care at the nearest hospital.",
  },
]

export const bySlug = (slug?: string) => treatments.find((t) => t.slug === slug)

export const visitSteps = [
  ["Talk and examination", "Dr. Ameen listens to your story and examines you."],
  ["Review your scans", "He reviews your MRI, CT scans and reports."],
  [
    "Options in plain words",
    "You hear what is wrong and what your choices are, including not operating.",
  ],
  [
    "Plan and follow up",
    "You agree a plan together, and the clinic follows up with you.",
  ],
] as const

export const bringList = [
  "Your MRI and CT scans, as films or on a disc",
  "All medical reports and previous prescriptions",
  "A list of the medicines you take",
] as const
