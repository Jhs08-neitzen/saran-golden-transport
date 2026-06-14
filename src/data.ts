import { Route, Service } from './types';

export const OWNER_NAME = "Diwanshu Kohli";
export const COMPANY_NAME = "Saran Golden Transport Company";
export const BRAND_NAME = "BATALA KANDLA ROADLINE";
export const PHONE_NUMBER = "+919592529758";
export const WHATS_APP_NUMBER = "919592529758";
export const ESTABLISHED_YEAR = 2014; // Giving around 12 years of experience by 2026
export const EXPERIENCE_YEARS = 12;

export const COMPANY_ADDRESS = {
  shop: "Shop No. 115",
  market: "Shastri Market",
  city: "Batala",
  subOffice: "B.O. Sandhu Kand",
  road: "DERA ROAD",
  district: "Gurdaspur",
  state: "Punjab",
  pincode: "143505"
};

export const ORIGIN_HUBS = [
  "Batala",
  "Amritsar",
  "Mehta",
  "Gurdaspur",
  "Pathankot",
  "Dera Baba Nanak",
  "Kalanaur",
  "Harchowal",
  "Qadian (Akadiyan)"
];

export const DESTINATIONS = [
  "Kandla Port (Gujarat)",
  "Mundra Port (Gujarat)",
  "Ahmedabad (Gujarat)",
  "Mumbai (Maharashtra)",
  "Delhi NCR",
  "Indore (Madhya Pradesh)",
  "Jaipur (Rajasthan)",
  "Chennai (Tamil Nadu)",
  "Kolkata (West Bengal)",
  "Bangalore (Karnataka)",
  "Hyderabad (Telangana)",
  "Visakhapatnam (Andhra Pradesh)"
];

export const SAMPLE_ROUTES: Route[] = [
  {
    id: "r1",
    from: "Batala",
    to: "Kandla Port (Gujarat)",
    distance: "1,140 km",
    majorHubs: ["Mehta", "Amritsar", "Bikaner", "Gandhidham"],
    duration: "36 hrs",
    status: "High Demand"
  },
  {
    id: "r2",
    from: "Amritsar",
    to: "Mundra Port (Gujarat)",
    distance: "1,190 km",
    majorHubs: ["Jaipur", "Patan", "Bhuj"],
    duration: "38 hrs",
    status: "Active"
  },
  {
    id: "r3",
    from: "Gurdaspur",
    to: "Mumbai (Maharashtra)",
    distance: "1,680 km",
    majorHubs: ["Delhi", "Jaipur", "Ahmedabad", "Surat"],
    duration: "48 hrs",
    status: "Express"
  },
  {
    id: "r4",
    from: "Batala",
    to: "Delhi NCR",
    distance: "460 km",
    majorHubs: ["Jalandhar", "Ludhiana", "Ambala", "Panipat"],
    duration: "12 hrs",
    status: "Active"
  },
  {
    id: "r5",
    from: "Pathankot",
    to: "Chennai (Tamil Nadu)",
    distance: "2,580 km",
    majorHubs: ["Gwalior", "Nagpur", "Hyderabad", "Nellore"],
    duration: "72 hrs",
    status: "Express"
  },
  {
    id: "r6",
    from: "Qadian (Akadiyan)",
    to: "Ahmedabad (Gujarat)",
    distance: "1,080 km",
    majorHubs: ["Batala", "Ludhiana", "Jaipur", "Mehsana"],
    duration: "32 hrs",
    status: "High Demand"
  }
];

export const SERVICES: Service[] = [
  {
    id: "s1",
    title: "Full Truck Transport (All India)",
    description: "We carry heavy goods across India using big trucks. We specialize in routes from Batala (Punjab) to major seaport gates like Kandla Port (Gujarat).",
    iconName: "Truck",
    features: [
      "Minimum weight limit of 10 Tons",
      "We handle full truck loads (FTL) only",
      "Direct routes from Batala to Kandla Port",
      "Regular status updates via phone/WhatsApp"
    ],
    loadRange: "10 Tons to 50+ Tons"
  },
  {
    id: "s2",
    title: "Truck Booking Agent (Commission)",
    description: "We help match factory owners with truck drivers. We find the right truck for your load, negotiate cheap prices, and handle all the paperwork.",
    iconName: "Handshake",
    features: [
      "Quick matching with verified truck owners",
      "Large network of trucks and trailers",
      "Best price guarantee with transparent rates",
      "Easy border documents and invoice support"
    ],
    loadRange: "Booking & Mediation"
  },
  {
    id: "s3",
    title: "Monthly Factory Contracts",
    description: "Best for iron factories, builders, and grain shippers in Batala and Amritsar who need regular trucks on monthly or yearly basis.",
    iconName: "ShieldCheck",
    features: [
      "Get direct trucks on priority",
      "Special safety covers and wrapping for cargo",
      "Fixed transport rates to avoid price spikes",
      "Clear monthly billing and simple records"
    ],
    loadRange: "Monthly/Yearly Contracts"
  }
];

export const STATS = [
  { id: "stat-1", value: `${EXPERIENCE_YEARS}+`, label: "Years in Business", desc: "Serving trust copy since 2014" },
  { id: "stat-2", value: "50+", label: "Routes Covered", desc: "All over India" },
  { id: "stat-3", value: "10 Tons", label: "Minimum Weight", desc: "Built for heavy goods" },
  { id: "stat-4", value: "100%", label: "Safe & On Time", desc: "Committed to secure transport" }
];
