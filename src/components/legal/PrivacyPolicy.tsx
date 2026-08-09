import { Link } from "react-router-dom";

import { contactInfo } from "../data/contactInfo";

const personalInformation = [
  "Full Name",
  "Email Address",
  "Phone Number",
  "Date of Birth, where applicable",
  "Gender, where applicable",
  "Residential Address, where applicable",
  "Information submitted through appointment booking forms",
  "Information submitted through contact forms",
  "Information shared when communicating with our support team",
];

const technicalInformation = [
  "IP Address",
  "Browser Type",
  "Device Information",
  "Operating System",
  "Pages Visited",
  "Time Spent on the Website",
  "Referral Sources",
  "Cookies and similar tracking technologies",
];

const informationUses = [
  "Process appointment requests.",
  "Respond to enquiries and support requests.",
  "Improve our healthcare services.",
  "Improve the performance and usability of our Website.",
  "Communicate important updates regarding appointments or services.",
  "Maintain the security and integrity of our Website.",
  "Analyse website traffic and user behaviour.",
  "Comply with legal and regulatory obligations.",
];

const thirdPartyServices = [
  "Google Analytics",
  "Google Maps",
  "Payment providers, where applicable",
  "Email communication services",
  "Website hosting providers",
];

const sharingReasons = [
  "Required by law.",
  "Necessary to protect our legal rights.",
  "Required to comply with lawful requests from regulatory authorities.",
  "Necessary to provide services through trusted third-party providers acting on our behalf.",
];

const retentionReasons = [
  "Provide healthcare-related services.",
  "Fulfil legal obligations.",
  "Resolve disputes.",
  "Maintain business records.",
];

const userRights = [
  "Request access to your personal information.",
  "Request correction of inaccurate information.",
  "Request deletion of personal information where legally permissible.",
  "Withdraw consent where processing is based on consent.",
  "Request restrictions on certain processing activities.",
];

const PolicySection = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
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

const PrivacyPolicy = () => {
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
            Privacy Policy
          </h1>

          <p className="mt-4 text-base leading-8 text-black">
            <strong>Effective Date:</strong> August 1, 2026
          </p>

          <p className="mt-6 text-base leading-8 text-black">
            Welcome to the Enekem Medicals website. At Enekem Medicals, we value
            your privacy and are committed to protecting your personal
            information. This Privacy Policy explains how we collect, use, store,
            and protect your information when you visit our website or use our
            online services.
          </p>

          <p className="mt-4 text-base leading-8 text-black">
            By accessing or using this website, you agree to the practices
            described in this Privacy Policy.
          </p>
        </header>

        <PolicySection title="Information We Collect">
          <p>We may collect the following types of information:</p>

          <h3 className="mt-6 text-xl font-bold text-black">
            Personal Information
          </h3>

          <p>
            When you interact with our website, you may voluntarily provide
            information such as:
          </p>

          <BulletList items={personalInformation} />

          <h3 className="mt-6 text-xl font-bold text-black">
            Technical Information
          </h3>

          <p>When you browse our website, we may automatically collect:</p>

          <BulletList items={technicalInformation} />
        </PolicySection>

        <PolicySection title="How We Use Your Information">
          <p>We use the information we collect to:</p>

          <BulletList items={informationUses} />

          <p>
            We only collect information necessary to provide our services
            effectively.
          </p>
        </PolicySection>

        <PolicySection title="Medical Information">
          <p>Information submitted through our website is handled with care.</p>

          <p>
            However, submitting information through this website does not
            establish a doctor-patient relationship.
          </p>

          <p>
            Medical advice, diagnosis, and treatment can only be provided
            following consultation with a qualified healthcare professional at
            Enekem Medicals.
          </p>

          <p>
            Please do not submit highly sensitive medical information through
            unsecured forms unless specifically requested.
          </p>
        </PolicySection>

        <PolicySection title="Appointment Requests">
          <p>
            Appointment requests submitted through our website are reviewed by
            our team.
          </p>

          <p>
            Submitting an appointment request does not guarantee a confirmed
            appointment until you receive confirmation from Enekem Medicals.
          </p>
        </PolicySection>

        <PolicySection title="Cookies and Tracking Technologies">
          <p>Our website may use cookies and similar technologies to:</p>

          <BulletList
            items={[
              "Improve website functionality.",
              "Remember user preferences.",
              "Analyse visitor behaviour.",
              "Enhance user experience.",
              "Measure website performance.",
            ]}
          />

          <p>
            You may disable cookies through your browser settings, although some
            features of the website may not function properly.
          </p>
        </PolicySection>

        <PolicySection title="Third-Party Services">
          <p>
            Our website may use trusted third-party providers, including but not
            limited to:
          </p>

          <BulletList items={thirdPartyServices} />

          <p>
            These providers may process certain information in accordance with
            their own privacy policies.
          </p>
        </PolicySection>

        <PolicySection title="Data Security">
          <p>
            We implement appropriate administrative, technical, and
            organisational measures to safeguard your personal information
            against unauthorised access, disclosure, alteration, or destruction.
          </p>

          <p>
            While we strive to protect your information, no internet
            transmission or electronic storage system can be guaranteed to be
            completely secure.
          </p>
        </PolicySection>

        <PolicySection title="Information Sharing">
          <p>We do not sell, rent, or trade your personal information.</p>

          <p>We may disclose your information only when:</p>

          <BulletList items={sharingReasons} />
        </PolicySection>

        <PolicySection title="Data Retention">
          <p>We retain personal information only for as long as necessary to:</p>

          <BulletList items={retentionReasons} />

          <p>
            When information is no longer required, it is securely deleted or
            anonymised where appropriate.
          </p>
        </PolicySection>

        <PolicySection title="Your Rights">
          <p>Depending on applicable laws, you may have the right to:</p>

          <BulletList items={userRights} />

          <p>
            Requests may be submitted using the contact details provided below.
          </p>
        </PolicySection>

        <PolicySection title="Children's Privacy">
          <p>
            Our website is not intended to knowingly collect personal
            information from children without the involvement of a parent or
            legal guardian.
          </p>

          <p>
            Parents or guardians should supervise the use of our online services
            by minors.
          </p>
        </PolicySection>

        <PolicySection title="External Links">
          <p>Our website may contain links to external websites.</p>

          <p>
            We are not responsible for the privacy practices or content of
            third-party websites.
          </p>

          <p>
            Users are encouraged to review the privacy policies of any external
            websites they visit.
          </p>
        </PolicySection>

        <PolicySection title="Changes to This Privacy Policy">
          <p>
            We may update this Privacy Policy from time to time to reflect
            changes in our services, legal requirements, or operational
            practices.
          </p>

          <p>
            Any updates will be published on this page together with the revised
            effective date.
          </p>

          <p>
            Your continued use of the website after any changes constitutes your
            acceptance of the updated Privacy Policy.
          </p>
        </PolicySection>

        <PolicySection title="Contact Us">
          <p>
            If you have any questions regarding this Privacy Policy or how your
            personal information is handled, please contact us.
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
          read, understood, and agreed to this Privacy Policy.
        </p>
      </section>
    </main>
  );
};

export default PrivacyPolicy;