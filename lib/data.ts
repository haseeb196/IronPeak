import type {
  Program,
  MembershipTier,
  Trainer,
  Testimonial,
  StatLine,
} from "./types";

export const programs: Program[] = [
  {
    id: "barbell-foundations",
    name: "Barbell Foundations",
    schedule: "Mon / Wed / Fri — 06:00, 12:00, 18:00",
    intensity: "Foundation",
    description:
      "Squat, press, pull, and hinge mechanics built from the ground up. Small coached groups, four lifters per rack.",
  },
  {
    id: "conditioning",
    name: "Conditioning Floor",
    schedule: "Tue / Thu / Sat — 06:30, 17:30",
    intensity: "Performance",
    description:
      "Mixed-modal work on rowers, sleds, and rigs. Built to hold pace under fatigue, not just survive the clock.",
  },
  {
    id: "summit-strength",
    name: "Summit Strength",
    schedule: "Mon / Thu — 19:00",
    intensity: "Elite",
    description:
      "Programmed for lifters chasing a total. Competition-style peaking blocks with a coach reviewing every session.",
  },
  {
    id: "open-floor",
    name: "Open Floor",
    schedule: "Daily — 05:00 to 22:00",
    intensity: "Performance",
    description:
      "Unsupervised access to the full platform floor, plate-loaded rigs, and conditioning bay for members running their own program.",
  },
];

export const membershipTiers: MembershipTier[] = [
  {
    id: "base-camp",
    name: "Base Camp",
    grade: "Grade I",
    price: 59,
    billing: "month",
    description: "Open floor access for lifters training on their own program.",
    features: [
      "Full platform & rig access, 5am–10pm",
      "Locker room and chalk bay",
      "One guest pass per month",
    ],
  },
  {
    id: "ascent",
    name: "Ascent",
    grade: "Grade II",
    price: 119,
    billing: "month",
    description: "Open floor plus unlimited coached class programming.",
    features: [
      "Everything in Base Camp",
      "Unlimited Barbell Foundations & Conditioning classes",
      "Monthly progress check-in with a coach",
      "Priority booking on class waitlists",
    ],
    featured: true,
  },
  {
    id: "summit",
    name: "Summit",
    grade: "Grade III",
    price: 189,
    billing: "month",
    description: "Full access with individualized coaching for competitive lifters.",
    features: [
      "Everything in Ascent",
      "Access to Summit Strength peaking blocks",
      "Weekly 1:1 programming review",
      "Meet-day coaching, twice yearly",
    ],
  },
];

export const trainers: Trainer[] = [
  {
    id: "maren-holt",
    name: "Maren Holt",
    role: "Head Coach",
    focus: "Powerlifting & barbell mechanics",
    bio: "Fifteen years coaching raw powerlifting. Maren built Iron Peak's foundations curriculum from the platform up.",
  },
  {
    id: "dez-abara",
    name: "Dez Abara",
    role: "Conditioning Coach",
    focus: "Engine building, mixed-modal work",
    bio: "Former collegiate rower turned conditioning specialist. Dez designs the weekly Conditioning Floor programming.",
  },
  {
    id: "priya-nandan",
    name: "Priya Nandan",
    role: "Strength Coach",
    focus: "Peaking cycles & meet prep",
    bio: "Competes nationally in the 76kg class. Priya runs Summit Strength and handles meet-day coaching.",
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    quote:
      "I'd trained on my own for years and plateaued hard. Six months into Ascent I added forty kilos to my total.",
    name: "Callum R.",
    detail: "Ascent member, 14 months",
  },
  {
    id: "t2",
    quote:
      "The coaching actually adjusts to how the session is going. Nobody hands you a printout and walks away.",
    name: "Yuki T.",
    detail: "Summit member, 2 years",
  },
  {
    id: "t3",
    quote:
      "Conditioning Floor is the only class I've kept showing up to at 6:30am. That says something.",
    name: "Bea M.",
    detail: "Base Camp member, 8 months",
  },
];

export const stats: StatLine[] = [
  { id: "s1", value: "11", label: "years on the platform floor" },
  { id: "s2", value: "3", label: "coached programs, weekly" },
  { id: "s3", value: "420+", label: "members training right now" },
];
