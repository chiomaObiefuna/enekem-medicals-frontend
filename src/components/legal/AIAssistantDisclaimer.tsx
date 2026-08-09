import { Link } from "react-router-dom";
import type { ReactNode } from "react";

import { contactInfo } from "../data/contactInfo";

const assistantPurposes = [
  "Provide general health and wellness information.",
  "Answer frequently asked questions about Enekem Medicals and its services.",
  "Help users navigate the website.",
  "Provide information about departments, healthcare services, and appointment processes.",
  "Assist users in locating relevant information available on the website.",
];

const assistantLimitations = [
  "Diagnose illnesses or medical conditions.",
  "Recommend or prescribe medications.",
  "Interpret laboratory results.",
  "Replace a physical medical examination.",
  "Make clinical decisions on your behalf.",
  "Provide personalised medical advice.",
];

const emergencyExamples = [
  "Difficulty breathing",
  "Chest pain",
  "Loss of consciousness",
  "Severe bleeding",
  "Seizures",
  "Stroke symptoms",
  "Any life-threatening condition",
];

const acceptancePoints = [
  "You understand that the AI Assistant is an informational tool only.",
  "You will not rely on it as a substitute for professional medical advice, diagnosis, or treatment.",
  "You will seek qualified medical care for any health concerns.",
  "You accept the limitations of artificial intelligence in providing healthcare information.",
];

const PolicySection = ({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) => (
  <section className="mt-10">
    <h2 className="text-2xl font-bold text-black">{title}</h2>

    <div className="mt-4 space-y-4 text-base leading-8 text-black">
      {children}
    </div>
  </section>
);

const BulletList = ({ items }: { items: string[] }) => (
  <ul className="mt-4 list-disc space-y-2 pl-6 text-base leading-8 text-black">
    {items.map((item) => (
      <li key={item}>{item}</li>
    ))}
  </ul>
);

const AIAssistantDisclaimer = () => {
  return (
    <main className="w-full bg-white text-black">
      <section className="mx-auto max-w-4xl px-5 py-24 sm:px-8 lg:py-28">
        <Link
          to="/"
          className="text-sm font-medium text-black underline underline-offset-4"
        >
          Back to Home
        </Link>

        <header className="mt-10">
          <h1 className="text-4xl font-bold text-black sm:text-5xl">
            AI Assistant Disclaimer
          </h1>

          <p className="mt-4 text-base leading-8 text-black">
            <strong>Effective Date:</strong> August 1, 2026
          </p>

          <p className="mt-6 text-base leading-8 text-black">
            The Enekem Medicals AI Assistant is designed to provide general
            health information, answer frequently asked questions, and assist
            users in navigating the Enekem Medicals website.
          </p>

          <p className="mt-4 text-base leading-8 text-black">
            By using the AI Assistant, you acknowledge and agree to the terms
            outlined in this Disclaimer.
          </p>
        </header>

        <PolicySection title="Purpose of the AI Assistant">
          <p>The AI Assistant is intended to:</p>

          <BulletList items={assistantPurposes} />

          <p>
            The AI Assistant is designed to improve your digital experience and
            should be used as an informational resource only.
          </p>
        </PolicySection>

        <PolicySection title="Not a Medical Professional">
          <p>
            The AI Assistant is not a doctor, nurse, pharmacist, or licensed
            healthcare professional.
          </p>

          <p>It cannot:</p>

          <BulletList items={assistantLimitations} />

          <p>
            Always seek the advice of a qualified healthcare professional
            regarding any medical concern or treatment decision.
          </p>
        </PolicySection>

        <PolicySection title="Medical Emergencies">
          <p>
            The AI Assistant must never be used during a medical emergency.
          </p>

          <p>
            If you or someone else is experiencing a medical emergency,
            including but not limited to:
          </p>

          <BulletList items={emergencyExamples} />

          <p>
            Seek immediate medical attention by visiting the nearest healthcare
            facility or contacting your local emergency services without delay.
          </p>

          <p>Do not rely on the AI Assistant in emergency situations.</p>
        </PolicySection>

        <PolicySection title="Accuracy of Information">
          <p>
            While we strive to ensure the AI Assistant provides helpful and
            up-to-date information, artificial intelligence may occasionally
            generate incomplete, outdated, or inaccurate responses.
          </p>

          <p>
            Information provided by the AI Assistant should always be verified
            with a qualified healthcare professional before making any
            healthcare decisions.
          </p>

          <p>
            Enekem Medicals does not guarantee the completeness, accuracy, or
            suitability of every AI-generated response.
          </p>
        </PolicySection>

        <PolicySection title="No Doctor-Patient Relationship">
          <p>Using the AI Assistant does not create:</p>

          <BulletList
            items={[
              "A doctor-patient relationship.",
              "A nurse-patient relationship.",
              "Any professional healthcare relationship with Enekem Medicals or its healthcare providers.",
            ]}
          />

          <p>
            Medical advice can only be provided following consultation with a
            licensed healthcare professional.
          </p>
        </PolicySection>

        <PolicySection title="Personal Information">
          <p>
            Users should avoid sharing highly sensitive personal or medical
            information with the AI Assistant unless specifically requested
            through secure and authorised channels provided by Enekem Medicals.
          </p>

          <p>
            Please refer to our{" "}
            <Link
              to="/privacy-policy"
              className="text-black underline underline-offset-4"
            >
              Privacy Policy
            </Link>{" "}
            for information on how personal information is collected, used, and
            protected.
          </p>
        </PolicySection>

        <PolicySection title="Limitation of Liability">
          <p>
            To the fullest extent permitted by law, Enekem Medicals shall not be
            liable for any loss, injury, damage, or consequences arising from
            reliance on information generated by the AI Assistant.
          </p>

          <p>
            Users are solely responsible for seeking professional medical advice
            where appropriate.
          </p>
        </PolicySection>

        <PolicySection title="Updates to the AI Assistant">
          <p>
            Enekem Medicals may improve, modify, suspend, or discontinue the AI
            Assistant or any of its features at any time without prior notice.
          </p>

          <p>
            Responses generated by the AI Assistant may change as the system is
            updated and improved.
          </p>
        </PolicySection>

        <PolicySection title="Acceptance of This Disclaimer">
          <p>By using the AI Assistant, you acknowledge that:</p>

          <BulletList items={acceptancePoints} />
        </PolicySection>

        <PolicySection title="Contact Us">
          <p>
            If you have questions regarding the AI Assistant or this Disclaimer,
            please contact us.
          </p>

          <div className="mt-4 space-y-2 text-base leading-8 text-black">
            <p>
              <strong>Enekem Medicals</strong>
            </p>

            <p>
              <strong>Website:</strong>{" "}
              <a
                href="https://www.enekemmedicals.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black underline underline-offset-4"
              >
                www.enekemmedicals.com
              </a>
            </p>

            <p>
              <strong>Email:</strong>{" "}
              <a
                href={`mailto:${contactInfo.email}`}
                className="text-black underline underline-offset-4"
              >
                {contactInfo.email}
              </a>
            </p>

            <p>
              <strong>Phone:</strong>{" "}
              <a
                href={`tel:${contactInfo.phone1.replace(/\s+/g, "")}`}
                className="text-black underline underline-offset-4"
              >
                {contactInfo.phone1}
              </a>
            </p>

            <p>
              <strong>Address:</strong> {contactInfo.address}
            </p>
          </div>
        </PolicySection>

        <p className="mt-10 text-base leading-8 text-black">
          By continuing to use the Enekem Medicals AI Assistant, you confirm
          that you have read, understood, and agreed to this AI Assistant
          Disclaimer.
        </p>
      </section>
    </main>
  );
};

export default AIAssistantDisclaimer;