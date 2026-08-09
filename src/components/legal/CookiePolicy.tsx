import { Link } from "react-router-dom";
import type { ReactNode } from "react";

import { contactInfo } from "../data/contactInfo";

const cookieUses = [
  "Ensure the website functions properly.",
  "Improve your browsing experience.",
  "Remember your preferences and settings.",
  "Analyse website traffic and visitor behaviour.",
  "Improve website performance and security.",
  "Measure the effectiveness of digital campaigns.",
  "Provide relevant content and services.",
];

const cookieTypes = [
  {
    title: "Essential Cookies",
    description:
      "These cookies are necessary for the website to function correctly. They enable core features such as page navigation, security, and access to certain areas of the website. Without these cookies, some parts of the website may not function properly.",
  },
  {
    title: "Performance & Analytics Cookies",
    description:
      "These cookies help us understand how visitors use the website by collecting anonymous information such as pages visited, time spent on pages, traffic sources, device and browser information, and user interactions.",
  },
  {
    title: "Functional Cookies",
    description:
      "Functional cookies remember your preferences, such as language or previously entered information, making future visits more convenient.",
  },
  {
    title: "Marketing Cookies",
    description:
      "Where applicable, marketing cookies may be used to measure the effectiveness of advertising campaigns and deliver more relevant content to users. These cookies may be provided by trusted third-party advertising partners.",
  },
];

const thirdPartyCookies = [
  "Google Analytics",
  "Google Maps",
  "Embedded videos",
  "Social media integrations",
  "Advertising and remarketing platforms, where applicable",
];

const browserControls = [
  "View stored cookies.",
  "Delete cookies.",
  "Block all cookies.",
  "Block cookies from specific websites.",
  "Receive notifications before cookies are stored.",
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

const CookiePolicy = () => {
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
            Cookie Policy
          </h1>

          <p className="mt-4 text-base leading-8 text-black">
            <strong>Effective Date:</strong> August 1, 2026
          </p>

          <p className="mt-6 text-base leading-8 text-black">
            This Cookie Policy explains how Enekem Medicals uses cookies and
            similar technologies on our website. It explains what cookies are,
            why we use them, and how you can manage your preferences.
          </p>

          <p className="mt-4 text-base leading-8 text-black">
            By continuing to use our website, you consent to the use of cookies
            in accordance with this Cookie Policy, unless you disable them
            through your browser settings.
          </p>
        </header>

        <PolicySection title="What Are Cookies?">
          <p>
            Cookies are small text files stored on your computer, smartphone, or
            other device when you visit a website. They help websites remember
            your preferences, improve performance, and provide a better browsing
            experience.
          </p>

          <p>
            Cookies do not typically identify you personally, but they may be
            linked to information you voluntarily provide through our website.
          </p>
        </PolicySection>

        <PolicySection title="Why We Use Cookies">
          <p>We use cookies to:</p>

          <BulletList items={cookieUses} />
        </PolicySection>

        <PolicySection title="Types of Cookies We Use">
          <div className="space-y-6">
            {cookieTypes.map((cookieType) => (
              <div key={cookieType.title}>
                <h3 className="text-xl font-bold text-black">
                  {cookieType.title}
                </h3>

                <p className="mt-2 text-base leading-8 text-black">
                  {cookieType.description}
                </p>
              </div>
            ))}
          </div>
        </PolicySection>

        <PolicySection title="Third-Party Cookies">
          <p>
            Our website may use trusted third-party services that place cookies
            on your device, including services such as:
          </p>

          <BulletList items={thirdPartyCookies} />

          <p>
            These providers have their own privacy and cookie policies governing
            how they process information.
          </p>
        </PolicySection>

        <PolicySection title="Managing Cookies">
          <p>Most web browsers allow you to:</p>

          <BulletList items={browserControls} />

          <p>
            Please note that disabling cookies may affect the functionality and
            performance of certain features on our website.
          </p>
        </PolicySection>

        <PolicySection title="Changes to This Cookie Policy">
          <p>
            We may update this Cookie Policy from time to time to reflect
            changes in technology, legal requirements, or our services.
          </p>

          <p>
            Any updates will be published on this page together with the revised
            effective date.
          </p>

          <p>
            Your continued use of the website after any updates constitutes
            acceptance of the revised Cookie Policy.
          </p>
        </PolicySection>

        <PolicySection title="Contact Us">
          <p>
            If you have any questions about this Cookie Policy or how cookies are
            used on our website, please contact us.
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
          By continuing to use the Enekem Medicals website, you acknowledge that
          you have read and understood this Cookie Policy.
        </p>
      </section>
    </main>
  );
};

export default CookiePolicy;