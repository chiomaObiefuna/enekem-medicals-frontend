import { useEffect, useRef, useState } from "react";
import {
  FaPhone,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaClock,
  FaEnvelope,
  FaExclamationTriangle,
} from "react-icons/fa";
import { contactInfo } from "../data/contactInfo";

// ─────────────────────────────────────────
// INFO BLOCK — reusable
// ─────────────────────────────────────────
interface InfoBlockProps {
  icon: React.ReactNode;
  label: string;
  lines: React.ReactNode[];
  delay: string;
  isVisible: boolean;
}
const InfoBlock = ({ icon, label, lines, delay, isVisible }: InfoBlockProps) => (
  <div
    className={`contact-info-block flex items-start gap-4 ${
      isVisible ? "contact-info-block--visible" : ""
    }`}
    style={{ transitionDelay: isVisible ? delay : "0s" }}
  >
    {/* Icon circle — navy on light bg */}
    <div className="mt-0.5 flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-[#01369E]/10 text-[#01369E]">
      {icon}
    </div>

    <div>
      <p className="mb-1 text-xs font-bold uppercase tracking-widest text-[#102A43]/40">
        {label}
      </p>
      {lines.map((line, i) => (
        <p key={i} className="text-[15px] font-medium leading-relaxed text-[#102A43]/80">
          {line}
        </p>
      ))}
    </div>
  </div>
);

// ─────────────────────────────────────────
// FLOATING WHATSAPP BUBBLE
// Fixed bottom-right corner, always visible.
// ─────────────────────────────────────────
const FloatingWhatsApp = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="fixed bottom-6 right-6 z-[999] flex items-center gap-3"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Tooltip label — slides in from right on hover */}
      <div
        className={`
          rounded-xl bg-white px-4 py-2.5 shadow-xl
          border border-[#D8E8EE]
          transition-all duration-300 ease-out
          ${hovered
            ? "opacity-100 translate-x-0 pointer-events-auto"
            : "opacity-0 translate-x-4 pointer-events-none"
          }
        `}
      >
        <p className="whitespace-nowrap text-sm font-semibold text-[#102A43]">
          Need Help? Chat with us
        </p>
      </div>

      {/* WhatsApp bubble button */}
      <a
        href={contactInfo.whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="
          relative flex h-14 w-14 flex-shrink-0 items-center justify-center
          rounded-full bg-[#25D366] text-white shadow-lg
          transition-transform duration-200 hover:-translate-y-1 hover:shadow-xl
        "
      >
        {/* Pulse ring — uses whatsapp-pulse keyframe from index.css */}
        <span className="whatsapp-pulse absolute inset-0 rounded-full bg-[#25D366]" />
        {/* Icon sits above the pulse ring */}
        <FaWhatsapp size={26} className="relative z-10" />
      </a>
    </div>
  );
};

// ─────────────────────────────────────────
// MAIN COMPONENT
// ─────────────────────────────────────────
const ContactStrip = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* ── CONTACT STRIP SECTION ── */}
      <section
        ref={sectionRef}
        className="w-full overflow-hidden bg-[#F8FBFF] py-20 lg:py-28"
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

          {/* Label */}
          <div
            className={`contact-label mb-3 flex items-center gap-3 ${
              isVisible ? "contact-label--visible" : ""
            }`}
          >
            <span className="h-[2px] w-8 bg-[#44CC3A]" />
            <span className="text-sm font-bold uppercase tracking-widest text-[#44CC3A]">
              Visit or Contact Us
            </span>
          </div>

          {/* Headline */}
          <h2
            className={`contact-heading mb-3 text-3xl font-extrabold leading-tight text-[#102A43] sm:text-4xl lg:text-[2.6rem] ${
              isVisible ? "contact-heading--visible" : ""
            }`}
          >
            We're Here When{" "}
            <span className="text-[#01369E]">You Need Us.</span>
          </h2>

          {/* Subtext */}
          <p
            className={`contact-subtext mb-12 max-w-xl text-base leading-relaxed text-[#102A43]/55 ${
              isVisible ? "contact-subtext--visible" : ""
            }`}
          >
            Visit our facility or reach out through any channel below.
            Our team is always ready to guide and support your healthcare needs.
          </p>

          {/* Two-column layout */}
          <div className="grid items-stretch gap-10 lg:grid-cols-2 lg:gap-16">

            {/* ── LEFT: Info + CTAs ── */}
            <div className="flex flex-col gap-7">

              <InfoBlock
                icon={<FaMapMarkerAlt size={18} />}
                label="Our Address"
                lines={[contactInfo.address]}
                delay="0.1s"
                isVisible={isVisible}
              />

              <InfoBlock
                icon={<FaPhone size={16} />}
                label="Phone Numbers"
                lines={[
                  <a
                    key="phone1"
                    href={`tel:${contactInfo.phone1.replace(/\s+/g, "")}`}
                    className="transition hover:text-[#01369E] hover:underline"
                  >
                    {contactInfo.phone1}
                  </a>,
                  <a
                    key="phone2"
                    href={`tel:${contactInfo.phone2.replace(/\s+/g, "")}`}
                    className="transition hover:text-[#01369E] hover:underline"
                  >
                    {contactInfo.phone2}
                  </a>,
                ]}
                delay="0.22s"
                isVisible={isVisible}
              />

              <InfoBlock
                icon={<FaEnvelope size={16} />}
                label="Email Address"
                lines={[contactInfo.email]}
                delay="0.34s"
                isVisible={isVisible}
              />

              <InfoBlock
                icon={<FaClock size={16} />}
                label="Opening Hours"
                lines={[contactInfo.hoursWeekdays, contactInfo.hoursSunday]}
                delay="0.46s"
                isVisible={isVisible}
              />

              {/* Divider */}
              <div
                className={`contact-divider h-[1px] w-full bg-[#D8E8EE] ${
                  isVisible ? "contact-divider--visible" : ""
                }`}
              />

              {/* CTA Buttons */}
              <div
                className={`contact-ctas flex flex-wrap gap-4 ${
                  isVisible ? "contact-ctas--visible" : ""
                }`}
              >
                {/* Call Now — navy outline */}
                <a
                  href={`tel:${contactInfo.phone1.replace(/\s+/g, "")}`}
                  className="
                    group relative inline-flex items-center justify-center gap-2
                    overflow-hidden rounded-full border-2 border-[#01369E]
                    px-6 py-3.5 text-sm font-bold text-[#01369E]
                    transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg
                  "
                >
                  <span className="absolute inset-0 -translate-x-full bg-[#01369E] transition-transform duration-[350ms] ease-out group-hover:translate-x-0" />
                  <span className="relative z-10 flex items-center gap-2 transition-colors duration-300 group-hover:text-white">
                    <FaPhone size={14} />
                    Call {contactInfo.phone1}
                          </span>
                </a>

                {/* WhatsApp — green filled */}
                <a
                  href={contactInfo.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    group relative inline-flex items-center justify-center gap-2
                    overflow-hidden rounded-full border-2 border-[#44CC3A]
                    bg-[#44CC3A] px-7 py-3.5 text-sm font-bold text-white
                    transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#44CC3A]/25
                  "
                >
                  <span className="absolute inset-0 -translate-x-full bg-[#38b531] transition-transform duration-[350ms] ease-out group-hover:translate-x-0" />
                  <span className="relative z-10 flex items-center gap-2">
                    <FaWhatsapp size={17} />
                    Chat on WhatsApp
                  </span>
                </a>
              </div>
            </div>

            {/* ── RIGHT: Map ── */}
            <div
              className={`contact-map min-h-[340px] overflow-hidden rounded-2xl border border-[#D8E8EE] shadow-lg lg:min-h-[420px] ${
                isVisible ? "contact-map--visible" : ""
              }`}
            >
              {/*
                REPLACE src="" with your real Google Maps embed URL:
                1. Go to maps.google.com
                2. Search "2 Dapo Bode Thomas Street, Montgomery Rd, Yaba, Lagos"
                3. Share → Embed a map → copy the src URL only
              */}
              <iframe
                title="Enekem Medicals Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.9!2d3.3792!3d6.5244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMzEnMjguMCJOIDPCsDIyJzQ1LjEiRQ!5e0!3m2!1sen!2sng!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "420px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Emergency notice */}
          <div
            className={`contact-notice mt-12 flex items-start gap-3 rounded-xl border border-red-200 bg-red-50 px-5 py-4 ${
              isVisible ? "contact-notice--visible" : ""
            }`}
          >
            <span className="mt-0.5 text-red-400">
              <FaExclamationTriangle size={14} />
            </span>
            <p className="text-sm leading-relaxed text-red-500">
              <span className="font-bold">Emergency Notice: </span>
              For urgent medical situations, please call us directly or visit
              the facility immediately rather than waiting for online responses.
            </p>
          </div>

        </div>
      </section>

      {/* ── FLOATING WHATSAPP BUBBLE ── renders on top of everything */}
      <FloatingWhatsApp />
    </>
  );
};

export default ContactStrip;