

// ── TYPES ──────────────────────────────────────────────────────────────────

export interface DropdownItem {
  label: string;
  path: string;
  description: string;   
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
          },
          {
            label: "Specialist Consultation",
            path: "/services/specialist-consultation",
            description: "Expert care across 7 medical specialities",
          },
          {
            label: "Nursing Care",
            path: "/services/nursing-care",
            description: "Wound care, injections & clinical monitoring",
          },
          {
            label: "Telemedicine",
            path: "/services/telemedicine",
            description: "Consult a doctor from anywhere via call or video",
          },
          {
            label: "Family Planning",
            path: "/services/family-planning",
            description: "Implanon, Jadelle & IUD contraceptive services",
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
          },
          {
            label: "Ultrasound Scan",
            path: "/services/ultrasound",
            description: "Abdominal, pelvic, obstetric & breast scans",
          },
          {
            label: "ECG",
            path: "/services/ecg",
            description: "Heart rhythm and cardiac health assessment",
          },
          {
            label: "Dental Services",
            path: "/services/dental",
            description: "Extractions, fillings & oral health care",
          },
          {
            label: "Immunization",
            path: "/services/immunization",
            description: "Vaccines for children and adults",
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
            
          },
          {
            label: "Our Medical Team",
            path: "/about/medical-team",
            description: "Meet our doctors, nurses and specialists",
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
          },
          {
            label: "FAQ",
            path: "/faq",
            description: "Common questions about our services",
          },
          {
            label: "Payment & HMO",
            path: "/hmo",
            description: "How to pay and accepted HMO providers",
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