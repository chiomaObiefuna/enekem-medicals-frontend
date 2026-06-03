import doctorIcon from "../../assets/icons/doctor.png";
import specialistIcon from "../../assets/icons/specialist-consultation.png";
import nurseIcon from "../../assets/icons/nursing-care.png";
import laboratoryIcon from "../../assets/icons/laboratory-icon.png";
import pharmacyIcon from "../../assets/icons/hand_pill.png";
import supportIcon from "../../assets/icons/Telemedicine-icon.png";


export interface TeamDepartment {
  title: string;
  description: string;
  highlight: string;
}

export interface TeamRole {
  title: string;
  department: string;
  description: string;
  icon: string;
  iconAlt: string;
}

export interface CareStandard {
  title: string;
  description: string;
}

export const teamDepartments: TeamDepartment[] = [
  {
    title: "Doctors & Specialists",
    description:
      "Our doctors and specialists provide consultations, diagnosis, treatment plans, referrals, and specialist-led clinical care.",
    highlight: "Clinical Assessment",
  },
  {
    title: "Nursing Team",
    description:
      "Our nurses support patients through wound care, injections, monitoring, immunization, and hands-on clinical assistance.",
    highlight: "Hands-on Care",
  },
  {
    title: "Laboratory Team",
    description:
      "Our laboratory team supports diagnosis through sample collection, testing, screening, and result preparation.",
    highlight: "Reliable Testing",
  },
  {
    title: "Pharmacy Team",
    description:
      "Our pharmacy team supports safe dispensing, medication guidance, prescription fulfilment, and patient education.",
    highlight: "Medication Support",
  },
  {
    title: "Patient Support Team",
    description:
      "Our front desk and patient support staff help with bookings, enquiries, patient flow, and appointment coordination.",
    highlight: "Smooth Experience",
  },
];

export const teamRoles: TeamRole[] = [
  {
    title: "General Practitioners",
    department: "Consultations",
    description:
      "The first point of contact for general health concerns, diagnosis, prescriptions, and referrals where specialist care is needed.",
      icon: doctorIcon,
      iconAlt: "General Practitioners Icon",
  },
  {
    title: "Specialist Consultants",
    department: "Specialist Care",
    description:
      "Focused clinical support for complex concerns across paediatrics, cardiology, gynaecology, orthopaedics, urology, and other areas.",
      icon: specialistIcon,
      iconAlt: "Specialist Consultants Icon",
  },
  {
    title: "Registered Nurses",
    department: "Nursing Care",
    description:
      "Hands-on care for injections, wound dressing, vital signs monitoring, immunization, and patient recovery support.",
      icon: nurseIcon,
      iconAlt: "Registered Nurses Icon",
  },
  {
    title: "Laboratory Professionals",
    department: "Diagnostics",
    description:
      "Support accurate diagnosis through blood tests, urine analysis, screening, sample collection, and other laboratory investigations.",
      icon: laboratoryIcon,
      iconAlt: "Laboratory Professionals Icon",
  },
  {
    title: "Pharmacy Staff",
    department: "Medication",
    description:
      "Support prescription fulfilment, medication availability, and patient guidance on safe medication use.",
      icon: pharmacyIcon,
      iconAlt: "Pharmacy Staff Icon",
  },
  {
    title: "Patient Support Staff",
    department: "Administration",
    description:
      "Assist with appointment booking, patient enquiries, service guidance, and smooth clinic coordination.",
      icon: supportIcon,
      iconAlt: "Patient Support Staff Icon",
  },
];

export const careStandards: CareStandard[] = [
  {
    title: "Patient-centred communication",
    description:
      "We listen carefully, explain clearly, and help patients understand the next step in their care.",
  },
  {
    title: "Coordinated clinical support",
    description:
      "Our team works across consultation, diagnostics, pharmacy, and nursing care to support better patient outcomes.",
  },
  {
    title: "Reliable service flow",
    description:
      "From booking to consultation and follow-up, our staff work together to make the care process smoother.",
  },
];