// src/components/data/navLinks.ts
// Updated to support mega-menu dropdowns.
//
// STRUCTURE:
//   Each nav item has a label and path.
//   Items with dropdowns have hasDropdown: true and a dropdownGroups array.
//   Each group has a groupLabel and an array of items.
//   Each item has a label, path, description, and icon name (lucide).
//
// USAGE IN Header.tsx:
//   navLinks.map(link => link.hasDropdown ? <MegaMenu /> : <NavLink />)

// ── TYPES ──────────────────────────────────────────────────────────────────

export interface DropdownItem {
  label: string;
  path: string;
  description: string;   // one-line description shown in the dropdown
  icon: string;          // lucide icon name e.g. "Stethoscope", "TestTube"
  badge?: "online" | "physical" | "both"; // service mode badge
}

export interface DropdownGroup {
  groupLabel: string;    // group heading inside the dropdown
  items: DropdownItem[];
}

export interface NavLink {
  label: string;
  path: string;
  hasDropdown: boolean;
  dropdownGroups?: DropdownGroup[];
  // Optional bottom action shown at the foot of the dropdown
  dropdownFooter?: {
    label: string;
    path: string;
  };
}

// ── NAV LINKS DATA ─────────────────────────────────────────────────────────

const navLinks: NavLink[] = [

  // ── HOME — no dropdown ──────────────────────────────────────────────────
  {
    label: "Home",
    path: "/",
    hasDropdown: false,
  },

  // ── SERVICES — mega-menu with 10 services in 2 groups ──────────────────
  {
    label: "Services",
    path: "/services",
    hasDropdown: true,
    dropdownGroups: [
      {
        groupLabel: "Consultation & Care",
        items: [
          {
            label: "GP Consultation",
            path: "/services/gp-consultation",
            description: "General health concerns, prescriptions & referrals",
            icon: "Stethoscope",
            badge: "both",
          },
          {
            label: "Specialist Consultation",
            path: "/services/specialist-consultation",
            description: "Expert care across 7 medical specialities",
            icon: "UserRound",
            badge: "physical",
          },
          {
            label: "Nursing Care",
            path: "/services/nursing-care",
            description: "Wound care, injections & clinical monitoring",
            icon: "HeartPulse",
            badge: "physical",
          },
          {
            label: "Telemedicine",
            path: "/services/telemedicine",
            description: "Consult a doctor from anywhere via call or video",
            icon: "Video",
            badge: "online",
          },
          {
            label: "Family Planning",
            path: "/services/family-planning",
            description: "Implanon, Jadelle & IUD contraceptive services",
            icon: "Shield",
            badge: "physical",
          },
        ],
      },
      {
        groupLabel: "Diagnostics & Procedures",
        items: [
          {
            label: "Laboratory Diagnosis",
            path: "/services/laboratory",
            description: "Blood tests, urine analysis & screenings",
            icon: "TestTubeDiagonal",
            badge: "physical",
          },
          {
            label: "Ultrasound Scan",
            path: "/services/ultrasound",
            description: "Abdominal, pelvic, obstetric & breast scans",
            icon: "ScanLine",
            badge: "physical",
          },
          {
            label: "ECG",
            path: "/services/ecg",
            description: "Heart rhythm and cardiac health assessment",
            icon: "Activity",
            badge: "physical",
          },
          {
            label: "Dental Services",
            path: "/services/dental",
            description: "Extractions, fillings & oral health care",
            icon: "Smile",
            badge: "physical",
          },
          {
            label: "Immunization",
            path: "/services/immunization",
            description: "Vaccines for children and adults",
            icon: "Syringe",
            badge: "physical",
          },
        ],
      },
    ],
    dropdownFooter: {
      label: "View All Services",
      path: "/services",
    },
  },

  // ── ABOUT — dropdown with 3 items ───────────────────────────────────────
  {
    label: "About",
    path: "/about",
    hasDropdown: true,
    dropdownGroups: [
      {
        groupLabel: "About Enekem",
        items: [
          {
            label: "About Us",
            path: "/about",
            description: "Our story, mission and vision",
            icon: "Building2",
          },
          {
            label: "Our Medical Team",
            path: "/about#team",
            description: "Meet our doctors, nurses and specialists",
            icon: "Users",
          },
          {
            label: "HMO & Insurance",
            path: "/hmo",
            description: "10 accepted HMO providers including AXA, Reliance",
            icon: "BadgeCheck",
          },
        ],
      },
    ],
  },

  // ── PATIENT INFO — dropdown with booking and info links ─────────────────
  {
    label: "Patient Info",
    path: "/book",
    hasDropdown: true,
    dropdownGroups: [
      {
        groupLabel: "Your Visit",
        items: [
          {
            label: "Book Appointment",
            path: "/book",
            description: "Schedule a consultation or procedure",
            icon: "CalendarDays",
          },
          {
            label: "Pricing & Fees",
            path: "/book#pricing",
            description: "Consultation fees and service costs",
            icon: "CircleDollarSign",
          },
          {
            label: "FAQ",
            path: "/faq",
            description: "Common questions about our services",
            icon: "CircleHelp",
          },
          {
            label: "Payment & HMO",
            path: "/hmo",
            description: "How to pay and accepted HMO providers",
            icon: "CreditCard",
          },
        ],
      },
    ],
    dropdownFooter: {
      label: "Book an Appointment",
      path: "/book",
    },
  },

  // ── CONTACT — no dropdown ───────────────────────────────────────────────
  {
    label: "Contact",
    path: "/contact",
    hasDropdown: false,
  },
];

export default navLinks;