// src/components/pages/PaymentHMO.tsx

import { Link } from "react-router-dom";
import { IoCall, IoLogoWhatsapp } from "react-icons/io5";

import { contactInfo } from "../data/contactInfo";

const hmoProviders = [
  "HCI",
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
    title: "Confirm the service",
    description:
      "Speak with the team to confirm the service you need before making payment.",
  },
  {
    number: "02",
    title: "Make payment",
    description:
      "Payment can be made through any accepted payment method provided by the clinic.",
  },
  {
    number: "03",
    title: "Send proof of payment",
    description:
      "If payment is made by transfer, send your proof of payment through WhatsApp for confirmation.",
  },
  {
    number: "04",
    title: "Wait for confirmation",
    description:
      "The team will confirm your payment and guide you on the next step.",
  },
];

const paymentMethods = ["Debit Card", "Bank Transfer", "USSD"];

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
Service needed:
Question:`
  );

  const proofOfPaymentMessage = encodeURIComponent(
    `Hello Enekem Medicals, I would like to send proof of payment.

Full name:
Service paid for:
Payment method:
Payment reference:
Proof of payment attached below:`
  );

  const whatsappSeparator = contactInfo.whatsappLink.includes("?") ? "&" : "?";

  const hmoWhatsAppLink = `${contactInfo.whatsappLink}${whatsappSeparator}text=${hmoWhatsAppMessage}`;
  const proofOfPaymentLink = `${contactInfo.whatsappLink}${whatsappSeparator}text=${proofOfPaymentMessage}`;

  const cleanPhoneNumber = contactInfo.phone1.replace(/\s+/g, "");

  return (
    <main className="w-full overflow-hidden bg-[#F8FBFF] text-[#102A43]">
      {/* HERO */}
      <section className="payment-hmo-hero-gradient relative overflow-hidden px-5 pb-16 pt-24 text-white sm:px-8 sm:pb-20 sm:pt-28 lg:px-10 lg:pt-32">
        <div className="relative mx-auto max-w-7xl">
          <div className="mb-8 flex flex-wrap items-center gap-2 text-sm font-semibold text-white/75">
            <Link to="/" className="transition hover:text-white">
              Home
            </Link>
            <span>/</span>
            <span>Patient Info</span>
            <span>/</span>
            <span className="text-white">Payment & HMO</span>
          </div>

          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
            <div className="payment-hero-copy">
              <p className="mb-5 inline-flex rounded-full border border-white/25 bg-white/12 px-5 py-3 text-xs font-extrabold uppercase tracking-[0.22em] text-white shadow-sm backdrop-blur-md">
                Patient Information
              </p>

              <h1 className="max-w-4xl text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
                Payment & HMO Information
              </h1>

              <p className="mt-6 max-w-3xl text-base leading-8 text-white/82 sm:text-lg">
                Find information about accepted HMO providers, payment methods,
                bank transfer details, proof of payment, and important patient
                payment policies at Enekem Medicals.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link
                  to="/book"
                  className="inline-flex items-center justify-center rounded-xl bg-white px-7 py-4 text-sm font-extrabold text-[#01369E] shadow-md transition-all duration-300 hover:-translate-y-1 hover:bg-[#F4F7FF]"
                >
                  Book Appointment
                </Link>

                <a
                  href={`tel:${cleanPhoneNumber}`}
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/30 bg-white/10 px-7 py-4 text-sm font-extrabold text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-[#01369E]"
                >
                  <IoCall size={18} />
                  Call Enekem
                </a>
              </div>
            </div>

            <div className="payment-hero-panel rounded-[2.2rem] border border-white/20 bg-white/95 p-7 shadow-[0_24px_80px_rgba(0,0,0,0.16)] backdrop-blur-md sm:p-8">
              <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#44CC3A]">
                Quick Reminder
              </p>

              <h2 className="mt-4 text-2xl font-black leading-tight text-[#01369E]">
                Bring your HMO card or payment confirmation details.
              </h2>

              <p className="mt-4 text-sm leading-7 text-[#5F6F82]">
                HMO patients may need verification before consultation,
                diagnostics, pharmacy support, or other clinic services are
                completed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* HMO PROVIDERS */}
      <section className="bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="payment-section-reveal text-xs font-extrabold uppercase tracking-[0.22em] text-[#44CC3A]">
              HMO Providers
            </p>

            <h2 className="payment-section-reveal payment-delay-1 mt-4 text-3xl font-black tracking-tight text-[#01369E] sm:text-4xl">
              Accepted HMO providers.
            </h2>

            <p className="payment-section-reveal payment-delay-2 mt-4 text-base leading-8 text-[#5F6F82]">
              Enekem Medicals currently works with the following HMO providers.
              If your provider is not listed, please call to confirm before your
              visit.
            </p>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {hmoProviders.map((provider, index) => (
              <div
                key={provider}
                className={`payment-provider payment-provider-${index} rounded-[1.4rem] border border-[#D8E8EE] bg-[#F8FBFF] p-5 text-center transition-all duration-300 hover:-translate-y-1 hover:border-[#44CC3A]/70 hover:bg-white hover:shadow-[0_18px_50px_rgba(1,54,158,0.08)]`}
              >
                <p className="text-base font-black text-[#01369E]">
                  {provider}
                </p>
              </div>
            ))}
          </div>

          <div className="payment-provider-notice mt-8 rounded-[1.7rem] border border-[#D8E8EE] bg-[#F4F7FF] p-6">
            <p className="text-sm font-semibold leading-7 text-[#5F6F82]">
              If your HMO provider is not listed, please call Enekem Medicals to
              confirm whether your provider can be accepted before visiting the
              clinic.
            </p>
          </div>
        </div>
      </section>

      {/* HOW TO USE HMO */}
      <section className="bg-[#F8FBFF] px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="payment-left-copy">
            <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#44CC3A]">
              How To Use HMO
            </p>

            <h2 className="mt-4 text-3xl font-black tracking-tight text-[#01369E] sm:text-4xl">
              Simple steps for HMO patients.
            </h2>

            <p className="mt-4 text-base leading-8 text-[#5F6F82]">
              HMO use may require confirmation before care begins. These steps
              help patients prepare the right information before visiting the
              clinic.
            </p>
          </div>

          <div className="grid gap-5">
            {hmoSteps.map((step, index) => (
              <article
                key={step.title}
                className={`payment-step-card payment-step-card-${index} rounded-[1.8rem] bg-white p-6 shadow-[0_18px_60px_rgba(1,54,158,0.07)]`}
              >
                <div className="flex flex-col gap-4 sm:flex-row">
                  <span className="text-5xl font-light leading-none text-[#44CC3A]">
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
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mx-auto mt-10 max-w-7xl rounded-[2.2rem] bg-white p-7 shadow-[0_20px_70px_rgba(1,54,158,0.08)] sm:p-8">
          <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#44CC3A]">
            What To Bring
          </p>

          <h3 className="mt-4 text-2xl font-black text-[#01369E]">
            HMO checklist.
          </h3>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
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
      </section>

      {/* PAYMENT STEPS + BANK DETAILS */}
      <section className="bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-3xl">
            <p className="payment-section-reveal text-xs font-extrabold uppercase tracking-[0.22em] text-[#44CC3A]">
              Payment Steps
            </p>

            <h2 className="payment-section-reveal payment-delay-1 mt-4 text-3xl font-black tracking-tight text-[#01369E] sm:text-4xl">
              How payment confirmation works.
            </h2>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="grid gap-5 sm:grid-cols-2">
              {paymentSteps.map((step, index) => (
                <article
                  key={step.title}
                  className={`payment-info-card payment-info-card-${index} rounded-[2rem] border border-[#D8E8EE] bg-[#F8FBFF] p-6`}
                >
                  <span className="block text-4xl font-light leading-none text-[#44CC3A]">
                    {step.number}
                  </span>

                  <h3 className="mt-4 text-lg font-black text-[#01369E]">
                    {step.title}
                  </h3>

                  <p className="mt-2 text-sm leading-7 text-[#5F6F82]">
                    {step.description}
                  </p>
                </article>
              ))}
            </div>

            <aside className="payment-bank-card rounded-[2.2rem] bg-[#01369E] p-7 text-white shadow-[0_24px_80px_rgba(1,54,158,0.18)] sm:p-8">
              <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#44CC3A]">
                Bank Details
              </p>

              <h3 className="mt-4 text-3xl font-black leading-tight">
                Transfer information.
              </h3>

              <div className="mt-8 space-y-5">
                <div className="rounded-[1.5rem] bg-white/10 p-5">
                  <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-white/60">
                    Bank
                  </p>
                  <p className="mt-2 text-xl font-black">Globus Bank</p>
                </div>

                <div className="rounded-[1.5rem] bg-white/10 p-5">
                  <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-white/60">
                    Account Name
                  </p>
                  <p className="mt-2 text-xl font-black">
                    Enekem Medicals Ltd
                  </p>
                </div>

                <div className="rounded-[1.5rem] bg-white/10 p-5">
                  <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-white/60">
                    Account Number
                  </p>
                  <p className="mt-2 text-2xl font-black tracking-wide">
                    1000222016
                  </p>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* PAYMENT METHODS + PROOF */}
      <section className="bg-[#F8FBFF] px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="payment-left-copy">
            <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#44CC3A]">
              Payment Methods
            </p>

            <h2 className="mt-4 text-3xl font-black tracking-tight text-[#01369E] sm:text-4xl">
              Accepted payment options.
            </h2>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {paymentMethods.map((method) => (
                <div
                  key={method}
                  className="rounded-[1.5rem] border border-[#D8E8EE] bg-white p-5 text-center shadow-sm"
                >
                  <p className="text-sm font-black text-[#01369E]">{method}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="payment-guideline-panel rounded-[2.2rem] bg-white p-7 shadow-[0_20px_70px_rgba(1,54,158,0.08)] sm:p-8">
            <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#44CC3A]">
              Alternative Payment
            </p>

            <h3 className="mt-4 text-2xl font-black text-[#01369E]">
              Send proof of payment through WhatsApp.
            </h3>

            <p className="mt-4 text-sm leading-7 text-[#5F6F82]">
              If you make payment by bank transfer, send your proof of payment
              through WhatsApp with your full name, service paid for, payment
              method, and payment reference.
            </p>

            <a
              href={proofOfPaymentLink}
              target="_blank"
              rel="noreferrer"
              className="mt-7 inline-flex items-center justify-center gap-2 rounded-full bg-[#44CC3A] px-7 py-4 text-sm font-extrabold text-[#01369E] shadow-md transition-all duration-300 hover:-translate-y-1 hover:bg-[#53DD49]"
            >
              <IoLogoWhatsapp size={18} />
              Send Proof on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* POLICIES */}
      <section className="bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 max-w-3xl">
            <p className="payment-section-reveal text-xs font-extrabold uppercase tracking-[0.22em] text-[#44CC3A]">
              Payment Policies
            </p>

            <h2 className="payment-section-reveal payment-delay-1 mt-4 text-3xl font-black tracking-tight text-[#01369E] sm:text-4xl">
              Important payment and cancellation information.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {policies.map((policy, index) => (
              <article
                key={policy.title}
                className={`payment-policy-card payment-policy-card-${index} rounded-[2rem] border border-[#D8E8EE] bg-[#F8FBFF] p-7`}
              >
                <div className="mb-6 h-1.5 w-16 rounded-full bg-[#44CC3A]" />

                <h3 className="text-2xl font-black text-[#01369E]">
                  {policy.title}
                </h3>

                <p className="mt-4 text-base font-semibold leading-8 text-[#5F6F82]">
                  {policy.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="bg-[#F8FBFF] px-5 py-16 sm:px-8 lg:px-10">
        <div className="payment-contact-panel mx-auto max-w-7xl rounded-[2.5rem] border border-[#D8E8EE] bg-white p-7 shadow-[0_24px_80px_rgba(1,54,158,0.08)] sm:p-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#44CC3A]">
                Need help with payment or HMO?
              </p>

              <h2 className="mt-4 max-w-3xl text-3xl font-black leading-tight tracking-tight text-[#01369E] sm:text-4xl">
                Speak with the team before your visit.
              </h2>

              <p className="mt-4 max-w-2xl text-sm font-semibold leading-7 text-[#5F6F82]">
                If you are unsure about your HMO provider, payment confirmation,
                required documents, or service verification, contact the clinic
                team for guidance.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row lg:flex-col">
          
              <a
                href={`tel:${cleanPhoneNumber}`}
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#01369E] bg-white px-7 py-4 text-sm font-extrabold text-[#01369E] transition-all duration-300 hover:-translate-y-1 hover:bg-[#01369E] hover:text-white"
              >
                <IoCall size={18} />
                Call
              </a>

              <a
                href={hmoWhatsAppLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#44CC3A] px-7 py-4 text-sm font-extrabold text-[#01369E] shadow-md transition-all duration-300 hover:-translate-y-1 hover:bg-[#53DD49]"
              >
                <IoLogoWhatsapp size={18} />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default PaymentHMO;