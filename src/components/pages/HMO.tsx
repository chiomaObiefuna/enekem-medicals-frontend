import { Link } from "react-router-dom";
import { IoCall, IoLogoWhatsapp } from "react-icons/io5";

import { contactInfo } from "../data/contactInfo";

const hmoProviders = [
  "Bastion",
  "Reliance",
  "AXA Mansard",
  "Hadiel",
  "Redcare",
  "Aspire",
  "Leadway",
  "Noor",
  "NEM",
];

const hmoSteps = [
  {
    number: "01",
    title: "Confirm your HMO provider",
    description:
      "Check if your HMO provider is listed before visiting the clinic or requesting a service.",
  },
  {
    number: "02",
    title: "Bring your HMO details",
    description:
      "Come with your HMO card, authorisation code, approval note, referral document, or any required verification detail.",
  },
  {
    number: "03",
    title: "Verify service coverage",
    description:
      "The clinic team will confirm whether your HMO covers the selected service before care begins.",
  },
  {
    number: "04",
    title: "Proceed after confirmation",
    description:
      "Once your HMO details are verified, the team will guide you on the next step for consultation, diagnostics, or treatment.",
  },
];

const hmoChecklist = [
  "HMO card or policy details",
  "Authorisation code, if required",
  "Referral document, if required",
  "Valid means of identification",
  "Details of the service you want to use",
];

const paymentSteps = [
  {
    number: "01",
    title: "Submit your booking",
    description:
      "Book your consultation or service through the appointment form and provide the required details.",
  },
  {
    number: "02",
    title: "Receive payment details",
    description:
      "After your booking is reviewed, you will receive an email with the confirmed amount and a secure Paystack payment link.",
  },
  {
    number: "03",
    title: "Pay securely",
    description:
      "Complete payment through the secure payment link using the available Paystack payment option.",
  },
  {
    number: "04",
    title: "Get confirmation",
    description:
      "Once payment is completed, your booking confirmation will be sent to you by email.",
  },
];

const paymentMethods = ["Debit Card"];

const policies = [
  {
    title: "Refund Policy",
    description: "No refunds.",
  },
  {
    title: "Cancellation Policy",
    description: "48 hours notice is required for cancellation.",
  },
];

const PaymentHMO = () => {
  const hmoWhatsAppMessage = encodeURIComponent(
    `Hello Enekem Medicals, I would like to make an enquiry about Payment or HMO.

Full name:
HMO provider, if applicable:
Booking ID, if available:
Service needed:
Question:`
  );

  const whatsappSeparator = contactInfo.whatsappLink.includes("?") ? "&" : "?";
  const hmoWhatsAppLink = `${contactInfo.whatsappLink}${whatsappSeparator}text=${hmoWhatsAppMessage}`;
  const cleanPhoneNumber = contactInfo.phone1.replace(/\s+/g, "");

  return (
    <main className="w-full overflow-hidden bg-white text-[#102A43]">
      {/* HERO */}
      <section className="payment-hmo-hero-gradient relative overflow-hidden px-5 pb-10 pt-20 text-white sm:px-8 sm:pb-12 sm:pt-24 lg:px-10 lg:pb-14 lg:pt-28">
        <div className="relative mx-auto max-w-7xl">
          <div className="mb-6 flex flex-wrap items-center gap-2 text-sm font-semibold text-white/75">
            <Link to="/" className="transition hover:text-white">
              Home
            </Link>
            <span>/</span>
            <span className="text-white">Payment & HMO</span>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1fr_0.85fr] lg:items-end">
            <div className="payment-reveal">
              <p className="mb-4 inline-flex border-b border-white/40 pb-2 text-xs font-extrabold uppercase tracking-[0.22em] text-white">
                Patient Information
              </p>

              <h1 className="max-w-4xl text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
                Payment & HMO Information
              </h1>

              <p className="mt-5 max-w-3xl text-base leading-8 text-white/82 sm:text-lg">
                Find information about accepted HMO providers, secure payment
                after booking, available payment method, and important patient
                payment policies at Enekem Medicals.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Link
                  to="/book"
                  className="inline-flex items-center justify-center rounded-xl bg-white px-7 py-4 text-sm font-extrabold text-[#01369E] transition-all duration-300 hover:-translate-y-1 hover:bg-[#F4F7FF]"
                >
                  Book Appointment
                </Link>

                <a
                  href={`tel:${cleanPhoneNumber}`}
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/40 px-7 py-4 text-sm font-extrabold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-[#01369E]"
                >
                  <IoCall size={18} />
                  Call Enekem
                </a>
              </div>
            </div>

            <div className="payment-reveal payment-reveal-delay border-l-4 border-[#44CC3A] bg-white/10 p-6 backdrop-blur-sm">
              <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-white/80">
                Quick Reminder
              </p>

              <h2 className="mt-3 text-2xl font-black leading-tight text-white">
                Bring your HMO card where applicable.
              </h2>

              <p className="mt-4 text-sm leading-7 text-white/75">
                HMO patients may need verification before consultation,
                diagnostics, pharmacy support, or other clinic services are
                completed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* HMO PROVIDERS */}
      <section className="bg-[#F2FFF1] px-5 py-10 sm:px-8 sm:py-12 lg:px-10 lg:py-14">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="payment-reveal">
              <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#008000]">
                HMO Providers
              </p>

              <h2 className="mt-3 text-3xl font-black tracking-tight text-[#01369E] sm:text-4xl">
                Accepted HMO providers.
              </h2>

              <p className="mt-3 text-base leading-8 text-[#5F6F82]">
                Enekem Medicals currently works with the following HMO
                providers. If your provider is not listed, please call to
                confirm before your visit.
              </p>
            </div>

            <div className="payment-reveal payment-reveal-delay">
              <div className="grid gap-x-8 gap-y-0 sm:grid-cols-2">
                {hmoProviders.map((provider) => (
                  <div
                    key={provider}
                    className="border-b border-[#BFEAC0] py-4"
                  >
                    <p className="text-base font-black text-[#01369E]">
                      {provider}
                    </p>
                  </div>
                ))}
              </div>

              <p className="mt-6 border-l-4 border-[#44CC3A] pl-5 text-sm font-semibold leading-7 text-[#5F6F82]">
                If your HMO provider is not listed, please call Enekem Medicals
                to confirm whether your provider can be accepted before visiting
                the clinic.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* HOW TO USE HMO */}
      <section className="bg-[#F4F7FF] px-5 py-10 sm:px-8 sm:py-12 lg:px-10 lg:py-14">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
            <div className="payment-reveal">
              <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#44CC3A]">
                How To Use HMO
              </p>

              <h2 className="mt-3 text-3xl font-black tracking-tight text-[#01369E] sm:text-4xl">
                Simple steps for HMO patients.
              </h2>

              <p className="mt-3 text-base leading-8 text-[#5F6F82]">
                HMO use may require confirmation before care begins. These steps
                help patients prepare the right information before visiting the
                clinic.
              </p>
            </div>

            <div className="payment-reveal payment-reveal-delay divide-y divide-[#C9D7FF]">
              {hmoSteps.map((step) => (
                <article
                  key={step.title}
                  className="grid gap-3 py-5 sm:grid-cols-[80px_1fr]"
                >
                  <span className="text-4xl font-light leading-none text-[#44CC3A]">
                    {step.number}
                  </span>

                  <div>
                    <h3 className="text-xl font-black text-[#01369E]">
                      {step.title}
                    </h3>

                    <p className="mt-2 text-sm leading-7 text-[#5F6F82]">
                      {step.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="payment-reveal mt-8 border-t border-[#C9D7FF] pt-8">
            <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#44CC3A]">
              What To Bring
            </p>

            <div className="mt-5 grid gap-x-10 gap-y-4 md:grid-cols-2">
              {hmoChecklist.map((item) => (
                <div key={item} className="flex items-start gap-4">
                  <span className="mt-2.5 h-2.5 w-2.5 shrink-0 rounded-full bg-[#44CC3A]" />
                  <p className="text-sm font-semibold leading-7 text-[#5F6F82]">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PAYMENT AFTER BOOKING */}
      <section className="bg-[#ECFFF0] px-5 py-10 sm:px-8 sm:py-12 lg:px-10 lg:py-14">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="payment-reveal">
              <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#008000]">
                Payment After Booking
              </p>

              <h2 className="mt-3 text-3xl font-black tracking-tight text-[#01369E] sm:text-4xl">
                Payment is completed through a secure link after your booking is
                reviewed.
              </h2>

              <p className="mt-3 text-base leading-8 text-[#5F6F82]">
                After submitting a booking, you will receive an email with the
                confirmed amount and a secure Paystack payment link. Public bank
                account details are no longer displayed on the website.
              </p>

              <div className="mt-6 border-l-4 border-[#01369E] pl-5">
                <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#008000]">
                  Payment Method
                </p>

                <p className="mt-2 text-lg font-black text-[#01369E]">
                  {paymentMethods.join(", ")}
                </p>
              </div>
            </div>

            <div className="payment-reveal payment-reveal-delay divide-y divide-[#BFEAC0]">
              {paymentSteps.map((step) => (
                <article
                  key={step.title}
                  className="grid gap-3 py-5 sm:grid-cols-[80px_1fr]"
                >
                  <span className="text-4xl font-light leading-none text-[#44CC3A]">
                    {step.number}
                  </span>

                  <div>
                    <h3 className="text-xl font-black text-[#01369E]">
                      {step.title}
                    </h3>

                    <p className="mt-2 text-sm leading-7 text-[#5F6F82]">
                      {step.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* POLICIES */}
      <section className="bg-[#FFFDF2] px-5 py-10 sm:px-8 sm:py-12 lg:px-10 lg:py-14">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
            <div className="payment-reveal">
              <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#008000]">
                Payment Policies
              </p>

              <h2 className="mt-3 text-3xl font-black tracking-tight text-[#01369E] sm:text-4xl">
                Important payment and cancellation information.
              </h2>
            </div>

            <div className="payment-reveal payment-reveal-delay divide-y divide-[#E8DFA8]">
              {policies.map((policy) => (
                <article key={policy.title} className="py-5">
                  <h3 className="text-2xl font-black text-[#01369E]">
                    {policy.title}
                  </h3>

                  <p className="mt-2 text-base font-semibold leading-8 text-[#5F6F82]">
                    {policy.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SUPPORT ACTION STRIP */}
      <section className="bg-white px-5 py-10 sm:px-8 sm:py-12 lg:px-10 lg:py-14">
        <div className="mx-auto max-w-7xl">
          <div className="payment-action-strip overflow-hidden border-y border-[#D8E8EE]">
            <div className="grid gap-0 lg:grid-cols-[1fr_auto] lg:items-stretch">
              <div className="bg-[#F4F7FF] px-6 py-8 sm:px-8">
                <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#44CC3A]">
                  Need help with payment or HMO?
                </p>

                <h2 className="mt-3 max-w-3xl text-3xl font-black leading-tight tracking-tight text-[#01369E] sm:text-4xl">
                  Speak with the team before your visit.
                </h2>

                <p className="mt-3 max-w-2xl text-sm font-semibold leading-7 text-[#5F6F82]">
                  If you are unsure about your HMO provider, payment link,
                  required documents, or service verification, contact the
                  clinic team for guidance.
                </p>
              </div>

              <div className="grid bg-[#01369E] sm:grid-cols-3 lg:min-w-[420px] lg:grid-cols-1">
                <a
                  href={`tel:${cleanPhoneNumber}`}
                  className="flex items-center justify-center gap-2 border-b border-white/15 px-7 py-5 text-sm font-extrabold text-white transition hover:bg-white hover:text-[#01369E] sm:border-b-0 sm:border-r lg:border-b lg:border-r-0"
                >
                  <IoCall size={18} />
                  Call
                </a>

                <a
                  href={hmoWhatsAppLink}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 bg-[#44CC3A] px-7 py-5 text-sm font-extrabold text-[#01369E] transition hover:bg-[#53DD49]"
                >
                  <IoLogoWhatsapp size={18} />
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default PaymentHMO;