export interface Program {
  id: string;
  name: string;
  schedule: string; // e.g. "Mon / Wed / Fri — 06:00"
  intensity: "Foundation" | "Performance" | "Elite";
  description: string;
}

export interface MembershipTier {
  id: string;
  name: string;
  grade: string; // mountaineering-inspired grade label
  price: number;
  billing: "month";
  description: string;
  features: string[];
  featured?: boolean;
}

export interface Trainer {
  id: string;
  name: string;
  role: string;
  focus: string;
  bio: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  detail: string; // membership length or program
}

export interface StatLine {
  id: string;
  value: string;
  label: string;
}
