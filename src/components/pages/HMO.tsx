import { useState } from "react";
import { Link } from "react-router-dom";
import {
  IoCall,
  IoLogoWhatsapp,
  IoCalendar,
  IoCheckmarkCircle,
  IoCopyOutline,
  IoCheckmark,
  IoAlertCircleOutline,
} from "react-icons/io5";
import { contactInfo } from "../data/contactInfo";

// ─────────────────────────────────────────
// HMO PROVIDERS — pill tag cloud style
// ─────────────────────────────────────────
const hmoProviders = [
  { name: "HCI" },
  { name: "Bastion" },
  { name: "Reliance" },
  { name: "AXA Mansard" },
  { name: "Hadiel" },
  { name: "Redcare" },
  { name: "Aspire" },
  { name: "Leadway" },
  { name: "Noor" },
  { name: "NEM" },
];

// ─────────────────────────────────────────
// PAYMENT STEPS — timeline style
// ─────────────────────────────────────────
const paymentSteps = [
  {
    number: "1",
    title: "Book your appointment",
    body: "Visit our website and complete the booking form. Select your service, preferred date and time, and fill in your details.",
  },
  {
    number: "2",
    title: "Receive your Booking ID",
    body: "You will get an email with your unique Booking ID and a secure payment link immediately after submitting.",
  },
  {
    number: "3",
    title: "Complete your payment",
    body: "Pay via the secure link using your debit card, bank transfer, or USSD. Or transfer directly to our Globus Bank account.",
  },
  {
    number: "4",
    title: "Get your confirmation",
    body: "Your booking is confirmed the moment payment is received. An email confirmation is sent to you immediately.",
  },
];

// ─────────────────────────────────────────
// COPY ACCOUNT NUMBER BUTTON
// ─────────────────────────────────────────
const CopyButton = ({ value }: { value: string }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback for older browsers
      const el = document.createElement("textarea");
      el.value = value;
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <button
      onClick={handleCopy}
      title="Copy account number"
      className={`
        flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-bold
        transition-all duration-200
        ${copied
          ? "bg-[#44CC3A]/15 text-[#2a8a22]"
          : "bg-white/15 text-white hover:bg-white/25"
        }
      `}
    >
      {copied ? (
        <>
          <IoCheckmark size={13} />
          Copied
        </>
      ) : (
        <>
          <IoCopyOutline size={13} />
          Copy
        </>
      )}
    </button>
  );
};

// ─────────────────────────────────────────
// MAIN PAGE
// ─────────────────────────────────────────
const HMO = () => {
  return (
    <main className="w-full bg-white">

      {/* ══════════════════════════════════════════
          HERO — asymmetric split layout
          Left: large editorial headline + context
          Right: accent panel with quick facts
      ══════════════════════════════════════════ */}
      <section className="w-full overflow-hidden pt-24 sm:pt-28 lg:pt-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid min-h-[340px] gap-0 lg:grid-cols-[1.1fr_0.9fr]">

            {/* Left — editorial headline */}
            <div className="flex flex-col justify-center pb-12 pr-0 lg:pb-16 lg:pr-16">
              {/* Eyebrow */}
              <p className="mb-6 text-xs font-bold uppercase tracking-[0.25em] text-[#44CC3A]">
                HMO & Insurance · Payment
              </p>

              {/* Large headline — editorial style */}
              <h1 className="mb-6 text-5xl font-black leading-[1.05] text-[#011F5E] sm:text-6xl lg:text-7xl">
                Your health
                <br />
                <span className="text-[#01369E]">plan works</span>
                <br />
                here.
              </h1>

              <p className="mb-8 max-w-md text-base leading-relaxed text-[#102A43]/60">
                We accept 10 HMO providers and offer simple, secure payment
                options so nothing stands between you and the care you need.
              </p>

              {/* Inline CTAs */}
              <div className="flex flex-wrap gap-3">
                <Link
                  to="/book"
                  className="inline-flex items-center gap-2 rounded-full bg-[#011F5E] px-6 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#01369E]"
                >
                  <IoCalendar size={15} />
                  Book Appointment
                </Link>
                <a
                  href={`tel:${contactInfo.phone1.replace(/\s+/g, "")}`}
                  className="inline-flex items-center gap-2 rounded-full border-2 border-[#D8E8EE] px-6 py-3 text-sm font-bold text-[#011F5E] transition hover:-translate-y-0.5 hover:border-[#01369E]"
                >
                  <IoCall size={15} />
                  Confirm your HMO
                </a>
              </div>
            </div>

            {/* Right — accent panel with key facts */}
            <div className="relative hidden overflow-hidden rounded-tl-[3rem] bg-[#011F5E] lg:flex lg:flex-col lg:justify-center lg:px-12 lg:py-12">
              {/* Decorative circle */}
              <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-[#01369E]/40" />
              <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-[#44CC3A]/10" />

              <div className="relative z-10 flex flex-col gap-6">
                {[
                  { value: "10", label: "Accepted HMO Providers" },
                  { value: "24/7", label: "Always Open, No Exceptions" },
                  { value: "₦15k", label: "Physical Consultation Fee" },
                  { value: "₦20k", label: "Online Consultation Fee" },
                ].map((fact) => (
                  <div key={fact.label} className="flex items-baseline gap-4">
                    <span className="text-4xl font-black text-white">
                      {fact.value}
                    </span>
                    <span className="text-sm font-medium text-white/50">
                      {fact.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* Full-width divider line */}
        <div className="h-px w-full bg-[#D8E8EE]" />
      </section>

      {/* ══════════════════════════════════════════
          HMO PROVIDERS — tag cloud style
          Providers displayed as organic pill tags
          not a rigid grid of identical boxes
      ══════════════════════════════════════════ */}
      <section className="w-full px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">

            {/* Left — headline + context */}
            <div>
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-[#44CC3A]">
                Accepted Providers
              </p>
              <h2 className="mb-5 text-3xl font-extrabold leading-tight text-[#011F5E] sm:text-4xl">
                Is your HMO plan
                <br />
                accepted here?
              </h2>
              <p className="mb-8 text-sm leading-relaxed text-[#102A43]/60">
                We currently accept the 10 providers listed. If your HMO is not
                on the list, call us — we are always expanding our network.
              </p>

              {/* What to bring */}
              <div className="rounded-2xl bg-[#F4F7FF] p-5">
                <p className="mb-3 text-xs font-bold uppercase tracking-widest text-[#01369E]/60">
                  When you visit, bring
                </p>
                {[
                  "Your valid HMO card",
                  "Authorisation letter if required by your provider",
                  "A valid means of identification",
                ].map((item) => (
                  <div key={item} className="mb-2.5 flex items-start gap-2.5">
                    <IoCheckmarkCircle
                      size={16}
                      className="mt-0.5 shrink-0 text-[#44CC3A]"
                    />
                    <p className="text-sm text-[#102A43]/70">{item}</p>
                  </div>
                ))}
              </div>

              {/* Not listed */}
              <p className="mt-6 text-sm text-[#102A43]/55">
                Provider not listed?{" "}
                <a
                  href={`tel:${contactInfo.phone1.replace(/\s+/g, "")}`}
                  className="font-bold text-[#01369E] hover:underline"
                >
                  Call us to confirm
                </a>
              </p>
            </div>

            {/* Right — tag cloud of HMO providers */}
            <div className="flex flex-wrap items-center gap-3">
              {hmoProviders.map((provider, index) => {
                // Alternate styling for visual variety — not a uniform grid
                const styles = [
                  "bg-[#011F5E] text-white text-base px-6 py-3",
                  "border-2 border-[#01369E] text-[#01369E] text-sm px-5 py-2.5",
                  "bg-[#EAF2FF] text-[#01369E] text-lg font-black px-7 py-3.5",
                  "border border-[#D8E8EE] text-[#102A43] text-sm px-5 py-2.5",
                  "bg-[#44CC3A] text-white text-base px-6 py-3",
                  "border-2 border-[#D8E8EE] text-[#102A43]/70 text-sm px-5 py-2",
                  "bg-[#F4F7FF] text-[#011F5E] text-base font-bold px-6 py-3",
                  "border border-[#01369E]/20 text-[#01369E] text-sm px-4 py-2",
                  "bg-[#011F5E]/8 text-[#011F5E] text-base px-6 py-3",
                  "border-2 border-[#44CC3A] text-[#2a8a22] text-sm px-5 py-2.5",
                ];
                return (
                  <span
                    key={provider.name}
                    className={`rounded-full font-bold transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md cursor-default ${styles[index % styles.length]}`}
                  >
                    {provider.name}
                  </span>
                );
              })}
            </div>

          </div>
        </div>
      </section>

      {/* Full-width divider */}
      <div className="h-px w-full bg-[#D8E8EE]" />

      {/* ══════════════════════════════════════════
          PAYMENT SECTION
          Left: vertical timeline of steps
          Right: bank card design + payment methods
      ══════════════════════════════════════════ */}
      <section className="w-full bg-[#F4F7FF] px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
        <div className="mx-auto max-w-7xl">

          <div className="mb-12">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#44CC3A]">
              Making Payment
            </p>
            <h2 className="text-3xl font-extrabold text-[#011F5E] sm:text-4xl">
              Simple steps to confirm
              <br />
              your booking.
            </h2>
          </div>

          <div className="grid gap-12 lg:grid-cols-[1fr_420px] lg:items-start">

            {/* Left — vertical timeline */}
            <div className="relative">
              {/* Connecting vertical line */}
              <div className="absolute left-5 top-5 h-[calc(100%-60px)] w-px bg-[#D8E8EE]" />

              <div className="flex flex-col gap-8">
                {paymentSteps.map((step, index) => (
                  <div key={step.number} className="relative flex items-start gap-6">
                    {/* Node on the timeline */}
                    <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#011F5E] text-sm font-extrabold text-white shadow-md">
                      {step.number}
                    </div>

                    {/* Step content */}
                    <div className="flex-1 pb-2 pt-1.5">
                      <h3 className="mb-1.5 text-[15px] font-bold text-[#011F5E]">
                        {step.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-[#102A43]/60">
                        {step.body}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Alternative payment note */}
              <div className="mt-8 ml-16 flex items-start gap-3 rounded-2xl border border-[#D8E8EE] bg-white p-5">
                <IoAlertCircleOutline
                  size={18}
                  className="mt-0.5 shrink-0 text-[#01369E]"
                />
                <p className="text-sm leading-relaxed text-[#102A43]/65">
                  Alternatively, transfer directly to our bank account and
                  send proof of payment via WhatsApp to{" "}
                  <a
                    href={contactInfo.whatsappLink}
                    className="font-bold text-[#44CC3A] hover:underline"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {contactInfo.phone1}
                  </a>
                  . Quote your Booking ID in the message.
                </p>
              </div>
            </div>

            {/* Right — bank card + payment methods */}
            <div className="flex flex-col gap-5 lg:sticky lg:top-24">

              {/* Bank card — physical card design */}
              <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-[#011F5E] via-[#01369E] to-[#0147C8] p-7 shadow-[0_20px_60px_rgba(1,31,94,0.3)]">

                {/* Card top row */}
                <div className="mb-8 flex items-start justify-between">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">
                      Bank Name
                    </p>
                    <p className="mt-1 text-lg font-extrabold text-white">
                      {contactInfo.bankName}
                    </p>
                  </div>
                  {/* Decorative card chip */}
                  <div className="h-8 w-10 rounded-md bg-gradient-to-br from-yellow-300 to-yellow-500 opacity-90" />
                </div>

                {/* Account number — with copy button */}
                <div className="mb-6">
                  <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">
                    Account Number
                  </p>
                  <div className="flex items-center justify-between">
                    <p className="font-mono text-3xl font-black tracking-[0.15em] text-white">
                      {contactInfo.accountNumber}
                    </p>
                    <CopyButton value={contactInfo.accountNumber} />
                  </div>
                </div>

                {/* Account name */}
                <div>
                  <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">
                    Account Name
                  </p>
                  <p className="text-base font-bold text-white/90">
                    {contactInfo.accountName}
                  </p>
                </div>

                {/* Decorative circles */}
                <div className="absolute -right-8 -bottom-8 h-32 w-32 rounded-full bg-white/5" />
                <div className="absolute -right-2 -bottom-2 h-16 w-16 rounded-full bg-white/5" />
              </div>

              {/* After transfer — send proof */}
              <a
                href={contactInfo.whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 rounded-2xl border-2 border-[#44CC3A] bg-white px-6 py-4 text-sm font-bold text-[#44CC3A] transition hover:-translate-y-0.5 hover:bg-[#44CC3A] hover:text-white"
              >
                <IoLogoWhatsapp size={18} />
                Send Proof of Payment on WhatsApp
              </a>

              {/* Payment methods */}
              <div className="rounded-2xl border border-[#D8E8EE] bg-white p-5">
                <p className="mb-4 text-xs font-bold uppercase tracking-widest text-[#102A43]/40">
                  We accept
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Debit Card", "Bank Transfer", "USSD"].map((method) => (
                    <span
                      key={method}
                      className="rounded-full border border-[#D8E8EE] bg-[#F4F7FF] px-4 py-2 text-xs font-bold text-[#011F5E]"
                    >
                      {method}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          POLICIES — minimal, text-forward
      ══════════════════════════════════════════ */}
      <section className="w-full px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2">

            {/* Refund */}
            <div>
              <div className="mb-4 flex items-center gap-3">
                <div className="h-px flex-1 bg-[#D8E8EE]" />
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#102A43]/40">
                  Refund Policy
                </p>
              </div>
              <p className="text-[15px] leading-relaxed text-[#102A43]/70">
                Enekem Medicals does not offer refunds once payment has been
                made. If you need to cancel or reschedule, please contact us
                as early as possible and we will find you an alternative
                appointment at no additional charge.
              </p>
            </div>

            {/* Cancellation */}
            <div>
              <div className="mb-4 flex items-center gap-3">
                <div className="h-px flex-1 bg-[#D8E8EE]" />
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#102A43]/40">
                  Cancellation Policy
                </p>
              </div>
              <p className="text-[15px] leading-relaxed text-[#102A43]/70">
                Cancellations must be requested at least{" "}
                <span className="font-bold text-[#011F5E]">48 hours</span>{" "}
                before your scheduled appointment. Call{" "}
                <a
                  href={`tel:${contactInfo.phone1.replace(/\s+/g, "")}`}
                  className="font-bold text-[#01369E] hover:underline"
                >
                  {contactInfo.phone1}
                </a>{" "}
                or{" "}
                <a
                  href={`tel:${contactInfo.phone2.replace(/\s+/g, "")}`}
                  className="font-bold text-[#01369E] hover:underline"
                >
                  {contactInfo.phone2}
                </a>
                . No refunds are issued but we will reschedule you at no
                extra charge.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          BOTTOM CTA — minimal, text-forward
      ══════════════════════════════════════════ */}
      <section className="w-full border-t border-[#D8E8EE] bg-[#011F5E] px-5 py-14 sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-start gap-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#44CC3A]">
              We are open 24/7
            </p>
            <h2 className="mt-2 text-2xl font-extrabold text-white sm:text-3xl">
              Ready when you are.
            </h2>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link
              to="/book"
              className="inline-flex items-center gap-2 rounded-full bg-[#44CC3A] px-7 py-3.5 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#35A82D]"
            >
              <IoCalendar size={16} />
              Book Appointment
            </Link>
            <a
              href={`tel:${contactInfo.phone1.replace(/\s+/g, "")}`}
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-7 py-3.5 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-white/20"
            >
              <IoCall size={16} />
              {contactInfo.phone1}
            </a>
            <a
              href={contactInfo.whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-7 py-3.5 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-white/20"
            >
              <IoLogoWhatsapp size={16} />
              WhatsApp
            </a>
          </div>
        </div>
      </section>

    </main>
  );
};

export default HMO;