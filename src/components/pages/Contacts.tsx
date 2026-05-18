
// COLORS:
//   #01369E  — primary navy (headings, icons, borders)
//   #25D366  — WhatsApp green (buttons, accents)
//   #F0F7FF  — soft section background
//   #F8FBFF  — form card background
//   #102A43  — dark text
//   #D8E8EE  — soft borders
//
// Floating WhatsApp bubble reused from ContactStrip pattern

import { useState,type ChangeEvent } from "react";
import {
  FaPhone,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaClock,
  FaEnvelope,
  FaExclamationTriangle,
} from "react-icons/fa";
import {
  Send,
  CheckCircle2,
  AlertTriangle,
  PhoneCall,
  CalendarDays,
} from "lucide-react";
import { Link } from "react-router-dom";
import { contactInfo } from "../data/contactInfo";

// ─────────────────────────────────────────
// FLOATING WHATSAPP BUBBLE
// Same pattern as ContactStrip — pulse ring + tooltip
// ─────────────────────────────────────────
const FloatingWhatsApp = () => {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className="fixed bottom-6 right-6 z-[999] flex items-center gap-3"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className={`rounded-xl border border-[#D8E8EE] bg-white px-4 py-2.5 shadow-xl transition-all duration-300 ease-out ${
          hovered
            ? "pointer-events-auto translate-x-0 opacity-100"
            : "pointer-events-none translate-x-4 opacity-0"
        }`}
      >
        <p className="whitespace-nowrap text-sm font-semibold text-[#102A43]">
          Need Help? Chat with us
        </p>
      </div>
      <a
        href={contactInfo.whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="relative flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform duration-200 hover:-translate-y-1 hover:shadow-xl"
      >
        <span className="whatsapp-pulse absolute inset-0 rounded-full bg-[#25D366]" />
        <FaWhatsapp size={26} className="relative z-10" />
      </a>
    </div>
  );
};

// ─────────────────────────────────────────
// CONTACT INFO ROW
// ─────────────────────────────────────────
interface ContactRowProps {
  icon: React.ReactNode;
  label: string;
  lines: (string | React.ReactNode)[];
}

const ContactRow = ({ icon, label, lines }: ContactRowProps) => (
  <div className="flex items-start gap-4">
    <div className="mt-0.5 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-[#01369E]/8 text-[#01369E]">
      {icon}
    </div>
    <div>
      <p className="mb-0.5 text-[11px] font-bold uppercase tracking-widest text-[#102A43]/40">
        {label}
      </p>
      {lines.map((line, i) => (
        <p key={i} className="text-[14px] font-medium leading-relaxed text-[#102A43]/80">
          {line}
        </p>
      ))}
    </div>
  </div>
);

// ─────────────────────────────────────────
// INQUIRY FORM STATE
// ─────────────────────────────────────────
type InquiryForm = {
  fullName: string;
  phone: string;
  email: string;
  message: string;
};

const emptyForm: InquiryForm = {
  fullName: "",
  phone: "",
  email: "",
  message: "",
};

// ─────────────────────────────────────────
// SECTION WRAPPER
// Left sticky label + right content (Evercare-style)
// ─────────────────────────────────────────
interface SectionWrapperProps {
  sectionTag: string;
  sideLabel: string;
  sideColor: string;
  sideNumber: string; // ghost watermark number e.g. "01", "02"
  children: React.ReactNode;
}

const SectionWrapper = ({
  sectionTag,
  sideLabel,
  sideColor,
  sideNumber,
  children,
}: SectionWrapperProps) => (
  <div className="grid gap-0 lg:grid-cols-[220px_1fr]">

    {/* ── LEFT: Sticky sidebar ──
        position:sticky + top:0 + min-height:100%
        keeps the label centered while right content scrolls.
        Ghost number sits behind as a large watermark.     */}
    <div
      className="hidden lg:block"
      style={{ backgroundColor: sideColor }}
    >
      <div
        className="sticky top-0 flex min-h-screen flex-col items-start justify-center overflow-hidden px-8 py-14"
        style={{ backgroundColor: sideColor }}
      >
        {/* Ghost watermark number — large, faded, absolutely positioned */}
        <span
          className="pointer-events-none absolute -bottom-6 -right-4 select-none font-extrabold leading-none text-white/[0.07]"
          style={{ fontSize: "160px" }}
          aria-hidden="true"
        >
          {sideNumber}
        </span>

        {/* Top decorative line */}
        <span className="mb-5 block h-[2px] w-10 rounded-full bg-white/30" />

        {/* Small tag text */}
        <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.25em] text-white/55">
          {sectionTag}
        </p>

        {/* Main heading — preserves \n line breaks */}
        <h2 className="whitespace-pre-line text-3xl font-extrabold leading-tight text-white">
          {sideLabel}
        </h2>

        {/* Bottom accent dot */}
        <span
          className="mt-6 block h-2 w-2 rounded-full bg-white/40"
        />
      </div>
    </div>

    {/* ── RIGHT: Content area ── */}
    <div className="bg-white px-5 py-12 sm:px-10 lg:px-14 lg:py-14">

      {/* Mobile label — only shows on screens below lg */}
      <div className="mb-8 lg:hidden">
        <span
          className="mb-3 block h-[2px] w-8 rounded-full"
          style={{ backgroundColor: sideColor }}
        />
        <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#102A43]/40">
          {sectionTag}
        </p>
        <h2
          className="mt-1 whitespace-pre-line text-2xl font-extrabold"
          style={{ color: sideColor }}
        >
          {sideLabel}
        </h2>
      </div>

      {children}
    </div>
  </div>
);
// ─────────────────────────────────────────
// MAIN PAGE
// ─────────────────────────────────────────
const Contacts = () => {
  const [form, setForm] = useState<InquiryForm>(emptyForm);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [formError, setFormError] = useState("");

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setFormError("");
    if (submitted) setSubmitted(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.fullName.trim() || !form.phone.trim() || !form.message.trim()) {
      setFormError("Please fill in your name, phone number, and message.");
      return;
    }
    setSubmitting(true);
    try {
      // Replace with real API call when backend is ready
      await new Promise((res) => setTimeout(res, 700));
      setSubmitted(true);
      setForm(emptyForm);
    } catch {
      setFormError("Could not send your message. Please try WhatsApp instead.");
    } finally {
      setSubmitting(false);
    }
  };

  const inputClass = (hasError?: boolean) =>
    `w-full rounded-2xl border bg-[#F8FBFF] px-4 py-3.5 text-sm text-[#102A43] outline-none transition
     focus:border-[#01369E] focus:ring-4 focus:ring-[#01369E]/8
     ${hasError ? "border-red-300" : "border-[#D8E8EE]"}`;

  return (
    <main className="w-full">

      {/* ══════════════════════════════════════
          SECTION 1 — CONTACT US
          Left: #01369E sidebar
          Right: info rows + small map + CTA buttons
      ══════════════════════════════════════ */}
      <SectionWrapper
        sectionTag="Contact Us"
        sideLabel={"Contact\nUs"}
        sideColor="#01369E"
        sideNumber="01" 
      >
        <div className="grid gap-10 xl:grid-cols-[1fr_300px]">

          {/* Contact info */}
          <div className="flex flex-col gap-6">
            <h3 className="text-xl font-bold text-[#102A43]">
              Get in Touch
            </h3>

            <ContactRow
              icon={<FaMapMarkerAlt size={16} />}
              label="Visit Us"
              lines={[contactInfo.address]}
            />

            <ContactRow
              icon={<FaPhone size={14} />}
              label="Phone Numbers"
              lines={[
                <a
                  key="p1"
                  href={`tel:${contactInfo.phone1.replace(/\s+/g, "")}`}
                  className="inline-flex items-center gap-2 text-[#01369E] transition hover:underline"
                >
                  {contactInfo.phone1}
                  <span className="rounded-full bg-[#25D366]/15 px-2 py-0.5 text-[11px] font-bold text-[#25D366]">
                    Available 24/7
                  </span>
                </a>,

                <a
                  key="p2"
                  href={`tel:${contactInfo.phone2.replace(/\s+/g, "")}`}
                  className="text-[#01369E] transition hover:underline"
                >
                  {contactInfo.phone2}
                </a>,
              ]}
            />

            <ContactRow
              icon={<FaEnvelope size={14} />}
              label="Email Address"
              lines={[
                <a
                  key="email"
                  href={`mailto:${contactInfo.email}`}
                  className="text-[#01369E] hover:underline"
                >
                  {contactInfo.email}
                </a>,
              ]}
            />

            <ContactRow
              icon={<FaClock size={14} />}
              label="Opening Hours"
              lines={[contactInfo.hoursWeekdays, contactInfo.hoursSunday]}
            />

            {/* CTA buttons */}
            <div className="mt-2 flex flex-wrap gap-3">
              {/* Call Now */}
             <a
                    href={`tel:${contactInfo.phone1.replace(/\s+/g, "")}`}
                    className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full border-2 border-[#01369E] px-6 py-3 text-sm font-bold text-[#01369E] transition-all duration-300 hover:-translate-y-0.5 hover:text-white"
                  >
                    <span className="absolute inset-0 -translate-x-full bg-[#01369E] transition-transform duration-[350ms] ease-out group-hover:translate-x-0" />
                    <span className="relative z-10 flex items-center gap-2 transition-colors duration-300 group-hover:text-white">
                      <PhoneCall size={15} />
                      Call {contactInfo.phone1}
                    </span>
              </a>

                  
              {/* WhatsApp */}
              <a
                href={contactInfo.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full border-2 border-[#25D366] bg-[#25D366] px-6 py-3 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#25D366]/25"
              >
                <span className="absolute inset-0 -translate-x-full bg-[#1aad4f] transition-transform duration-[350ms] ease-out group-hover:translate-x-0" />
                <span className="relative z-10 flex items-center gap-2">
                  <FaWhatsapp size={16} />
                  Chat on WhatsApp
                </span>
              </a>

              {/* Book Appointment */}
              <Link
                to="/book"
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full border-2 border-[#D8E8EE] bg-[#F0F7FF] px-6 py-3 text-sm font-bold text-[#01369E] transition-all duration-300 hover:-translate-y-0.5"
              >
                <CalendarDays size={15} />
                Book Appointment
              </Link>
            </div>
          </div>

          {/* Small map — matches Evercare reference style */}
          <div className="flex flex-col gap-4">
            {/* Map thumbnail */}
            <div className="overflow-hidden rounded-2xl border border-[#D8E8EE] shadow-md">
              
              
            
              <iframe
                title="Enekem Medicals - Yaba Lagos"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.9!2d3.3792!3d6.5244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMzEnMjguMCJOIDPCsDIyJzQ1LjEiRQ!5e0!3m2!1sen!2sng"
                width="100%"
                height="180"
                style={{ border: 0, display: "block" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Location card below map */}
            <div className="rounded-2xl border border-[#D8E8EE] bg-[#F0F7FF] p-4">
              <p className="text-[11px] font-bold uppercase tracking-widest text-[#01369E]">
                Enekem Medicals
              </p>
              <p className="mt-1 text-sm leading-relaxed text-[#102A43]/70">
                {contactInfo.address}
              </p>
              <a
                href="https://maps.google.com/?q=2+Dapo+Bode+Thomas+Street+Yaba+Lagos"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center gap-1 text-xs font-bold text-[#01369E] hover:underline"
              >
                <FaMapMarkerAlt size={11} />
                Find Us on Google Maps
              </a>
            </div>
          </div>

        </div>
      </SectionWrapper>

      {/* Divider */}
      <div className="h-[1px] bg-[#D8E8EE]" />

      {/* ══════════════════════════════════════
          SECTION 2 — SEND A MESSAGE
          Left: #25D366 sidebar
          Right: inquiry form
      ══════════════════════════════════════ */}
      <SectionWrapper
        sectionTag="Send a Message"
        sideLabel={"Send a\nMessage"}
        sideColor="#25D366"
        sideNumber="02"  
      >
        <div className="max-w-2xl">
          <h3 className="mb-2 text-xl font-bold text-[#102A43]">
            Send us an inquiry
          </h3>
          <p className="mb-8 text-sm leading-relaxed text-[#102A43]/55">
            Have a question or need more information? Fill in the form and
            our team will get back to you promptly.
          </p>

          {/* Success */}
          {submitted && (
            <div className="mb-6 flex gap-3 rounded-2xl border border-[#b3f0cc] bg-[#f0fbf4] p-4">
              <CheckCircle2 size={20} className="mt-0.5 shrink-0 text-[#25D366]" strokeWidth={2.5} />
              <div>
                <p className="font-semibold text-[#102A43]">Message sent!</p>
                <p className="mt-0.5 text-sm text-[#102A43]/60">
                  Our team will respond to your inquiry shortly.
                </p>
              </div>
            </div>
          )}

          {/* Error */}
          {formError && (
            <div className="mb-6 flex gap-3 rounded-2xl border border-red-200 bg-red-50 p-4">
              <AlertTriangle size={18} className="mt-0.5 shrink-0 text-red-400" strokeWidth={2.5} />
              <p className="text-sm text-red-500">{formError}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} noValidate className="space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-semibold text-[#102A43]">
                  Full Name
                </label>
                <input
                  name="fullName"
                  type="text"
                  value={form.fullName}
                  onChange={handleChange}
                  placeholder="Your full name"
                  className={inputClass()}
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-semibold text-[#102A43]">
                  Phone Number
                </label>
                <input
                  name="phone"
                  type="tel"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="Your phone number"
                  className={inputClass()}
                />
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-[#102A43]">
                Email Address
                
              </label>
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Your email address"
                className={inputClass()}
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-[#102A43]">
                Message
              </label>
              <textarea
                name="message"
                rows={5}
                value={form.message}
                onChange={handleChange}
                placeholder="Tell us how we can help you"
                className={`${inputClass()} resize-none`}
              />
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="inline-flex items-center gap-2 rounded-full bg-[#01369E] px-8 py-4 text-sm font-bold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#002D82] hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-70"
            >
              <Send size={16} strokeWidth={2.5} />
              {submitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </SectionWrapper>

      {/* Divider */}
      <div className="h-[1px] bg-[#D8E8EE]" />

      {/* ══════════════════════════════════════
          EMERGENCY NOTICE — subtle red strip
      ══════════════════════════════════════ */}
      <div className="bg-white px-5 py-6 sm:px-10 lg:px-14">
        <div className="mx-auto flex max-w-4xl items-center gap-2 text-red-400">
          <FaExclamationTriangle size={13} className="shrink-0" />
          <p className="text-xs leading-relaxed text-red-400">
            <span className="font-semibold">Emergency Notice: </span>
            For urgent medical situations, please call us directly or visit
            the facility immediately rather than waiting for online responses.
          </p>
        </div>
      </div>

      {/* Floating WhatsApp bubble */}
      <FloatingWhatsApp />
    </main>
  );
};

export default Contacts;