import { Link } from "react-router-dom";
import type { ReactNode } from "react";

import { contactInfo } from "../data/contactInfo";

const websiteRules = [
  "Use the website for fraudulent or unlawful activities.",
  "Attempt to gain unauthorised access to our systems.",
  "Upload malicious software or harmful code.",
  "Disrupt the operation or security of the website.",
  "Misrepresent your identity when using our services.",
  "Use automated tools to scrape or copy website content without permission.",
];

const aiAssistantLimits = [
  "Does not provide medical diagnosis.",
  "Does not prescribe medication.",
  "Does not replace consultations with qualified healthcare professionals.",
  "Should not be relied upon during medical emergencies.",
];

const intellectualPropertyItems = [
  "Text",
  "Images",
  "Videos",
  "Graphics",
  "Logos",
  "Icons",
  "Documents",
  "Website design",
  "Software",
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

const TermsAndConditions = () => {
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
            Terms & Conditions
          </h1>

          <p className="mt-4 text-base leading-8 text-black">
            <strong>Effective Date:</strong> August 1, 2026
          </p>

          <p className="mt-6 text-base leading-8 text-black">
            Welcome to the Enekem Medicals website. These Terms & Conditions
            govern your access to and use of this website and its services. By
            accessing or using this website, you agree to be bound by these
            Terms & Conditions.
          </p>

          <p className="mt-4 text-base leading-8 text-black">
            If you do not agree with any part of these Terms, please discontinue
            use of the website.
          </p>
        </header>

        <PolicySection title="About Enekem Medicals">
          <p>
            Enekem Medicals is committed to providing quality healthcare
            services and reliable health information through its physical
            facilities and digital platforms.
          </p>

          <p>
            This website is designed to provide information about our healthcare
            services, allow users to request appointments, access health-related
            resources, and communicate with our team.
          </p>
        </PolicySection>

        <PolicySection title="Acceptance of Terms">
          <p>
            By accessing this website, you confirm that you are at least 18
            years old or are using the website under the supervision of a parent
            or legal guardian.
          </p>

          <p>
            You agree to use this website lawfully and in accordance with these
            Terms & Conditions.
          </p>
        </PolicySection>

        <PolicySection title="Use of the Website">
          <p>You agree to use this website only for lawful purposes.</p>

          <p>You must not:</p>

          <BulletList items={websiteRules} />
        </PolicySection>

        <PolicySection title="Medical Information Disclaimer">
          <p>
            The information available on this website is provided for general
            educational and informational purposes only.
          </p>

          <p>
            It should not be considered medical advice, diagnosis, or treatment.
            Always consult a qualified healthcare professional regarding any
            medical condition or treatment decision.
          </p>

          <p>
            Do not ignore or delay seeking professional medical advice because
            of information obtained from this website.
          </p>

          <p>
            If you are experiencing a medical emergency, contact your nearest
            emergency healthcare provider immediately.
          </p>
        </PolicySection>

        <PolicySection title="Appointment Requests">
          <p>
            Appointments requested through the website are subject to
            availability.
          </p>

          <p>
            Submitting an appointment request does not guarantee a confirmed
            appointment.
          </p>

          <p>
            Your appointment is only confirmed after receiving communication
            from Enekem Medicals.
          </p>

          <p>
            Enekem Medicals reserves the right to reschedule or cancel
            appointments when necessary.
          </p>
        </PolicySection>

        <PolicySection title="AI Assistant">
          <p>
            Where available, the AI Assistant is intended solely to provide
            general health information and assist users in navigating the
            website.
          </p>

          <p>The AI Assistant:</p>

          <BulletList items={aiAssistantLimits} />

          <p>
            Users should always consult a licensed healthcare provider for
            personalised medical advice.
          </p>

          <p>
            For more details, please read the{" "}
            <Link
              to="/ai-automation"
              className="text-black underline underline-offset-4"
            >
              AI Assistant Disclaimer
            </Link>
            .
          </p>
        </PolicySection>

        <PolicySection title="Intellectual Property">
          <p>
            All content on this website is owned by or licensed to Enekem
            Medicals unless otherwise stated.
          </p>

          <p>This includes, but is not limited to:</p>

          <BulletList items={intellectualPropertyItems} />

          <p>
            No content may be copied, reproduced, modified, distributed, or
            republished without prior written permission.
          </p>
        </PolicySection>

        <PolicySection title="User Responsibilities">
          <p>
            Users are responsible for ensuring that any information submitted
            through the website is accurate, complete, and up to date.
          </p>

          <p>
            Providing false or misleading information may affect our ability to
            deliver appropriate services.
          </p>
        </PolicySection>

        <PolicySection title="Third-Party Links">
          <p>
            The website may contain links to third-party websites for user
            convenience.
          </p>

          <p>
            Enekem Medicals does not control or endorse the content, policies,
            or services of third-party websites and accepts no responsibility
            for them.
          </p>
        </PolicySection>

        <PolicySection title="Limitation of Liability">
          <p>
            While we strive to ensure that the information on this website is
            accurate and current, Enekem Medicals makes no guarantees regarding
            its completeness, accuracy, or availability.
          </p>

          <p>
            To the fullest extent permitted by law, Enekem Medicals shall not be
            liable for any direct, indirect, incidental, or consequential damages
            arising from the use of this website.
          </p>
        </PolicySection>

        <PolicySection title="Website Availability">
          <p>We aim to keep the website available at all times.</p>

          <p>
            However, we may temporarily suspend or restrict access for
            maintenance, upgrades, security purposes, or circumstances beyond our
            control.
          </p>
        </PolicySection>

        <PolicySection title="Privacy">
          <p>
            Your use of this website is also governed by our{" "}
            <Link
              to="/privacy-policy"
              className="text-black underline underline-offset-4"
            >
              Privacy Policy
            </Link>
            .
          </p>

          <p>
            We encourage all users to read the Privacy Policy to understand how
            personal information is collected, used, and protected.
          </p>
        </PolicySection>

        <PolicySection title="Changes to These Terms">
          <p>
            Enekem Medicals reserves the right to update or modify these Terms &
            Conditions at any time.
          </p>

          <p>
            Any changes will become effective immediately upon publication on
            this website unless otherwise stated.
          </p>

          <p>
            Continued use of the website constitutes acceptance of the revised
            Terms.
          </p>
        </PolicySection>

        <PolicySection title="Governing Law">
          <p>
            These Terms & Conditions shall be governed by and interpreted in
            accordance with the laws of the Federal Republic of Nigeria.
          </p>

          <p>
            Any disputes arising from the use of this website shall be subject
            to the jurisdiction of the competent courts in Nigeria.
          </p>
        </PolicySection>

        <PolicySection title="Contact Information">
          <p>
            If you have any questions regarding these Terms & Conditions, please
            contact us.
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
          By using the Enekem Medicals website, you acknowledge that you have
          read, understood, and agreed to these Terms & Conditions.
        </p>
      </section>
    </main>
  );
};

export default TermsAndConditions;