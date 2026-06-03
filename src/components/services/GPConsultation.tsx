import ServiceDetails from "../common/ServiceDetails";

import gpIcon from "../../assets/icons/health.png";
import gpHeroImage from "../../assets/images/consultation.jpg";

const GPConsultation = () => {
  return (
    <ServiceDetails
      slug="gp-consultation"
      name="GP Consultation"
      icon={gpIcon}
      iconAlt="GP consultation icon"
      heroImage={gpHeroImage}
      heroImageAlt="Doctor attending to a patient during a GP consultation"
      category="Consultations"
      headline="GP Consultation"
      tagline="Your first point of contact for everyday health concerns."
      mode="both"
      introduction="A GP Consultation at Enekem Medicals is your first and most important point of contact for any health concern. Whether you are dealing with a fever, persistent cough, stomach pain, fatigue, or simply need a routine checkup, our General Practitioner will carefully assess your symptoms, review your medical history, provide a clear diagnosis, and prescribe medication where necessary. If your condition requires specialist attention, our GP will refer you promptly. For online sessions, your prescription is issued electronically. For physical visits, a full examination is carried out at the clinic. No appointment is too small. We are here to listen, assess, and guide you toward the right care."
      
      suitableFor={[
        "Fever and general illness",
        "Persistent cough, cold, or sore throat",
        "Headache, fatigue, or body weakness",
        "Stomach pain or digestive concerns",
        "Minor injuries and everyday health complaints",
        "Routine medical checkups",
        "Prescription renewals",
        "Medical assessment before specialist referral",
      ]}
      whatToBring={[
        "Any previous test results or medical reports, if available",
        "A list of current medications you are taking",
        "Your HMO card or authorisation details, if applicable",
        "A clear explanation of your symptoms and how long they have lasted",
      ]}
      actions={[
        {
          label: "Book Online",
          path: "/book?service=gp-consultation&visit=online",
          variant: "primary",
        },
        {
          label: "Visit the Clinic",
          path: "/contact#map",
          variant: "outline",
        },
      ]}
      relatedServices={[
        {
          label: "Telemedicine",
          path: "/services/telemedicine",
        },
        {
          label: "Laboratory Diagnosis",
          path: "/services/laboratory",
        },
        {
          label: "Specialist Consultation",
          path: "/services/specialist-consultation",
        },
      ]}
    />
  );
};

export default GPConsultation;