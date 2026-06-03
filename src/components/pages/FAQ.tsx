import { useState } from "react";
import { Link } from "react-router-dom";
import { IoChevronDown, IoCall, IoLogoWhatsapp,} from "react-icons/io5";
import { contactInfo } from "../data/contactInfo";

// ─────────────────────────────────────────
// TYPES
// ─────────────────────────────────────────
interface FAQItem {
  question: string;
  answer: string;
}

interface FAQCategory {
  id: string;
  label: string;
  color: string;       
  items: FAQItem[];
}

// ─────────────────────────────────────────
// FAQ DATA — from most common questions we get asked by patients, grouped into categories
// ─────────────────────────────────────────
const faqCategories: FAQCategory[] = [
  {
    id: "general",
    label: "General Information",
    color: "#01369E",
    items: [
      {
        question: "What are your opening hours?",
        answer:
          "Enekem Medicals is open 24 hours a day, 7 days a week. We are always available including weekends and all public holidays. We never close.",
      },
      {
        question: "Where are you located?",
        answer:
          "We are located at 2 Dapo Bode Thomas Street, off Thorborn Avenue, Yaba, Lagos, Nigeria.",
      },
      {
        question: "Is there parking at the clinic?",
        answer:
          "Yes. Parking is available at Enekem Medicals.",
      },
      {
        question: "Are you open on weekends?",
        answer:
          "Yes. We are open every day of the week including Saturdays and Sundays, 24 hours a day.",
      },
      {
        question: "Can I walk in without an appointment?",
        answer:
          "Yes. Walk-ins are welcome at any time. However, patients with confirmed bookings are attended to first, so you may experience a wait. Booking in advance is recommended to secure your preferred time.",
      },
      {
        question: "Do you accept HMO?",
        answer:
          "Yes. We accept several HMO providers including Reliance, Bastion, Leadway, AXA Mansard, Noor, HCI, Hadiel, Redcare, Aspire, and NEM. If your provider is not listed please call us to confirm.",
      },
    ],
  },
  {
    id: "booking",
    label: "Appointments & Booking",
    color: "#01369E",
    items: [
      {
        question: "How do I book an appointment?",
        answer:
          "Visit our website and click on Book Appointment. Select your preferred service, choose Online or Physical where both options are available, pick your preferred date and time, and fill in your details. You will receive an email with your Booking ID and a payment link to confirm your slot.",
      },
      {
        question: "How far in advance can I book?",
        answer:
          "You can book up to 30 days in advance. Same day bookings are also accepted subject to availability.",
      },
      {
        question: "Can I consult online?",
        answer:
          "Yes. We offer two online consultation options. GP Consultation online at ₦20,000 for 30 minutes, or Telemedicine at ₦20,000 for 30 minutes. Both are conducted via phone or video call.",
      },
      {
        question: "Do I need a referral to see a specialist?",
        answer:
          "No. You can book directly with any of our specialists without seeing a GP first.",
      },
      {
        question: "How do I cancel my appointment?",
        answer:
          "Enekem Medicals explicitly discourages the cancellation of booked appointments. If an urgent cancellation is unavoidable, it must be requested at least 48 hours before your scheduled time. Call us on +234 806 427 8568 or +234 901 660 9310. Please note we do not offer refunds but we can reschedule your booking to another available date at no extra charge.",
      },
      {
        question: "How do I reschedule my appointment?",
        answer:
          "To reschedule, call us on either of our phone numbers and we will find you the next available suitable slot.",
      },
      {
        question: "What happens if I arrive late?",
        answer:
          "Please arrive at least 10 minutes before your appointment time. If you arrive more than 15 minutes late, your appointment may be rescheduled to the next available slot.",
      },
      {
        question: "What should I bring to my appointment?",
        answer:
          "Please bring any previous test results or investigations and a list of current medications you are taking. For scans, bring previous scan reports if available. For immunization, bring your child's yellow immunization card.",
      },
    ],
  },
  {
    id: "services",
    label: "Services & Pricing",
    color: "#01369E",
    items: [
      {
        question: "How much does a consultation cost?",
        answer:
          "Online GP Consultation and Telemedicine cost ₦20,000 each and last 30 minutes. Physical consultation at the clinic costs ₦15,000 and lasts 10 to 15 minutes. Specialist consultation costs ₦60,000 and is physical only.",
      },
      {
        question: "How long is a consultation?",
        answer:
          "Online consultations and Telemedicine last 30 minutes. Physical consultations last 10 to 15 minutes. Specialist appointments may take longer depending on the case.",
      },
      {
        question: "Do you have a laboratory?",
        answer:
          "Yes. We have a fully equipped on-site laboratory. We carry out blood tests, urine analysis, pregnancy tests, malaria tests, typhoid tests, HIV screening, and many other diagnostic tests. Results are available same day for most tests.",
      },
      {
        question: "Do you do ultrasound scans?",
        answer:
          "Yes. We offer a full range of ultrasound scan services including abdominal, pelvic, obstetric (pregnancy), breast, and scrotal scans. All scans are reviewed by a qualified doctor and results are discussed with you on the same visit.",
      },
      {
        question: "What dental services do you offer?",
        answer:
          "We offer general dental services including dental consultation and examination, tooth extraction, fillings, scaling and polishing (teeth cleaning), treatment of dental pain and infections, and basic restorative dental care.",
      },
      {
        question: "Do you have a children's doctor?",
        answer:
          "Yes. We have a qualified Paediatrician who specialises in the health of infants, children, and adolescents.",
      },
      {
        question: "Can I bring my child for immunization?",
        answer:
          "Yes. We offer immunization services for children following the Nigerian national immunization schedule including BCG, Hepatitis B, Polio, DPT, Measles, Yellow Fever, and other scheduled vaccines. Please bring your child's yellow immunization card if they have one.",
      },
      {
        question: "What family planning options do you offer?",
        answer:
          "We offer Implanon (arm implant, up to 3 years of protection), Jadelle (arm implant, up to 5 years of protection), and IUD — Intrauterine Device (5 to 10 years depending on type). Our doctor will counsel you on all options at your appointment and can carry out the procedure on the same visit.",
      },
    ],
  },
  {
    id: "payment",
    label: "Payment",
    color: "#01369E",
    items: [
      {
        question: "How do I pay?",
        answer:
          "After booking, you will receive an email with your Booking ID and a secure payment link. Click the link and complete payment using your debit card, bank transfer, or USSD. Alternatively, transfer directly to our Globus Bank account and send proof of payment (screenshot) to our WhatsApp with your Booking ID.",
      },
      {
        question: "What is your account number?",
        answer:
          "Bank: Globus Bank. Account Name: Enekem Medicals Ltd. Account Number: 1000222016.",
      },
      {
        question: "Do you give refunds?",
        answer:
          "No. Payments are non-refundable once made. However, if you cancel at least 48 hours before your booking, we can reschedule your appointment to another available date at no extra charge.",
      },
      {
        question: "When is my booking confirmed?",
        answer:
          "Your booking is confirmed automatically once payment is received. You will receive an email confirmation immediately.",
      },
    ],
  },
  {
    id: "policies",
    label: "Policies & Patient Rights",
    color: "#01369E",
    items: [
      {
        question: "Is my information kept confidential?",
        answer:
          "Yes. All patient information including medical records, test results, and personal details are kept strictly confidential. Your information will not be shared with any third party without your explicit consent except where required by law.",
      },
      {
        question: "What are my rights as a patient?",
        answer:
          "Every registered patient at Enekem Medicals has the right to be treated with dignity and respect, receive clear information about their diagnosis and treatment options, refuse treatment after being informed of the consequences, access their own medical records, seek a second opinion, and have their privacy protected at all times.",
      },
      {
        question: "What is your appointment policy?",
        answer:
          "Patients with confirmed bookings are attended to in order of their appointment time. Walk-in patients are attended to after booked patients. Booking in advance is strongly recommended.",
      },
    ],
  },
  {
    id: "emergency",
    label: "Emergency & Urgent Care",
    color: "#DC2626",
    items: [
      {
        question: "Do you have emergency services?",
        answer:
          "Yes. We handle medical emergencies at any time. Call us immediately on +234 806 427 8568 or +234 901 660 9310 and come to the clinic as quickly as possible. We are open 24 hours every day and will always attend to emergencies as a priority.",
      },
      {
        question: "How do I reach you urgently?",
        answer:
          "Call us immediately on +234 806 427 8568 or +234 901 660 9310. You can also come in physically to the clinic at any time. We are open 24 hours every day.",
      },
    ],
  },
];

// ─────────────────────────────────────────
// ACCORDION ITEM
// ─────────────────────────────────────────
const AccordionItem = ({
  item,
  isOpen,
  onToggle,
  accentColor,
}: {
  item: FAQItem;
  isOpen: boolean;
  onToggle: () => void;
  accentColor: string;
}) => (
  <div
    className={`overflow-hidden rounded-2xl border transition-all duration-200 ${
      isOpen
        ? "border-[#D8E8EE] shadow-sm"
        : "border-[#D8E8EE]"
    }`}
  >
    {/* Question row */}
    <button
      onClick={onToggle}
      className="flex w-full items-center justify-between gap-4 bg-white px-6 py-5 text-left transition-colors hover:bg-[#F4F7FF]"
      aria-expanded={isOpen}
    >
      <span
        className={`text-sm font-semibold leading-snug sm:text-[15px] ${
          isOpen ? "text-[#01369E]" : "text-[#102A43]"
        }`}
      >
        {item.question}
      </span>
      <IoChevronDown
        size={18}
        className={`shrink-0 transition-transform duration-300 ${
          isOpen ? "rotate-180 text-[#01369E]" : "text-[#102A43]/40"
        }`}
      />
    </button>

    {/* Answer — animated expand */}
    <div
      className={`transition-all duration-300 ease-in-out ${
        isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
      } overflow-hidden`}
    >
      <div className="border-t border-[#D8E8EE] bg-[#F4F7FF] px-6 py-5">
        {/* Left accent bar */}
        <div className="flex gap-4">
          <div
            className="mt-1 w-0.5 shrink-0 rounded-full"
            style={{ backgroundColor: accentColor, minHeight: "100%" }}
          />
          <p className="text-sm leading-relaxed text-[#102A43]/75">
            {item.answer}
          </p>
        </div>
      </div>
    </div>
  </div>
);

// ─────────────────────────────────────────
// MAIN PAGE
// ─────────────────────────────────────────
const FAQ = () => {
  const [openItem, setOpenItem] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const toggle = (key: string) => {
    setOpenItem(openItem === key ? null : key);
  };

  const activeCategoryLabel =
    activeCategory === "all"
      ? "General FAQ"
      : faqCategories.find((cat) => cat.id === activeCategory)?.label || "FAQ";

  const faqWhatsAppMessage = encodeURIComponent(
    `Hello Enekem Medicals, I have a question after reading your FAQ page.

FAQ category: ${activeCategoryLabel}
Full name:
Question:
Service related to this question, if any:`
  );

  const whatsappSeparator = contactInfo.whatsappLink.includes("?") ? "&" : "?";

  const faqWhatsAppLink = `${contactInfo.whatsappLink}${whatsappSeparator}text=${faqWhatsAppMessage}`;

  const filteredCategories =
    activeCategory === "all"
      ? faqCategories
      : faqCategories.filter((cat) => cat.id === activeCategory);
  return (
    <main className="w-full bg-white">

      {/* ══════════════════════════════════════════
          HERO
      ══════════════════════════════════════════ */}
      <section className="w-full pb-14 pt-28 sm:pt-32 sm:pb-16 lg:pt-36 lg:pb-20">
        <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">

          {/* Label */}
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/8 px-4 py-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#44CC3A]" />
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#011F5E]">
              Help Centre
            </span>
          </div>

          <h1 className="mb-4 text-4xl font-extrabold leading-tight text-[#011F5E] sm:text-5xl">
            Frequently Asked
            <span className="block text-[#44CC3A]">Questions</span>
          </h1>

          <p className="mx-auto max-w-xl text-base leading-relaxed text-[#011F5E]">
            Everything you need to know about our services, appointments,
            payment, and clinic policies. Can't find what you're looking for?
            Contact us directly.
          </p>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          CATEGORY FILTER TABS
      ══════════════════════════════════════════ */}
      <div className="sticky top-0 z-40 border-b border-[#D8E8EE] bg-white">
        <div className="mx-auto max-w-4xl overflow-x-auto px-5 sm:px-8">
          <div className="flex gap-1 py-3">
            {/* All tab */}
            <button
              onClick={() => setActiveCategory("all")}
              className={`shrink-0 rounded-full px-4 py-2 text-xs font-bold transition-all ${
                activeCategory === "all"
                  ? "bg-[#01369E] text-white"
                  : "text-[#102A43]/60 hover:bg-[#F4F7FF] hover:text-[#01369E]"
              }`}
            >
              All Questions
            </button>

            {/* Category tabs */}
            {faqCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`shrink-0 rounded-full px-4 py-2 text-xs font-bold transition-all ${
                  activeCategory === cat.id
                    ? cat.id === "emergency"
                      ? "bg-red-600 text-white"
                      : "bg-[#01369E] text-white"
                    : "text-[#102A43]/60 hover:bg-[#F4F7FF] hover:text-[#01369E]"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════
          FAQ ACCORDION
      ══════════════════════════════════════════ */}
      <section className="w-full bg-[#F4F7FF] px-5 py-14 sm:px-8 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-4xl">
          <div className="flex flex-col gap-10">
            {filteredCategories.map((category) => (
              <div key={category.id}>

                {/* Category heading */}
                <div className="mb-5 flex items-center gap-3">
                  <span
                    className="h-[2px] w-8 rounded-full"
                    style={{ backgroundColor: category.color }}
                  />
                  <h2
                    className="text-xs font-bold uppercase tracking-[0.18em]"
                    style={{ color: category.color }}
                  >
                    {category.label}
                  </h2>
                  <span className="ml-1 rounded-full bg-white px-2.5 py-0.5 text-[11px] font-bold text-[#102A43]/40 border border-[#D8E8EE]">
                    {category.items.length}
                  </span>
                </div>

                {/* Accordion items */}
                <div className="flex flex-col gap-3">
                  {category.items.map((item, index) => {
                    const key = `${category.id}-${index}`;
                    return (
                      <AccordionItem
                        key={key}
                        item={item}
                        isOpen={openItem === key}
                        onToggle={() => toggle(key)}
                        accentColor={category.color}
                      />
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          BOTTOM CTA — still need help?
      ══════════════════════════════════════════ */}
      <section className="w-full border-t border-[#D8E8EE] bg-white px-5 py-14 sm:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-3 text-2xl font-extrabold text-[#011F5E] sm:text-3xl">
            Still have a question?
          </h2>
          <p className="mb-8 text-sm leading-relaxed text-[#102A43]/55 sm:text-base">
            Our team is available 24 hours a day, 7 days a week.
            Reach out and we will be happy to help.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href={`tel:${contactInfo.phone1.replace(/\s+/g, "")}`}
              className="inline-flex items-center gap-2 rounded-full bg-[#01369E] px-7 py-3.5 text-sm font-bold text-white shadow-md transition hover:-translate-y-0.5 hover:bg-[#011F5E]"
            >
              <IoCall size={16} />
              {contactInfo.phone1}
            </a>
               <a
                  href={faqWhatsAppLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border-2 border-[#44CC3A] bg-white px-7 py-3.5 text-sm font-bold text-[#44CC3A] shadow-md transition hover:-translate-y-0.5 hover:bg-[#44CC3A] hover:text-white"
                 >
                  <IoLogoWhatsapp size={16} />
                  Chat on WhatsApp
               </a>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-[#D8E8EE] bg-[#F4F7FF] px-7 py-3.5 text-sm font-bold text-[#01369E] shadow-sm transition hover:-translate-y-0.5 hover:border-[#01369E]"
            >
              Visit Contact Page
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
};

export default FAQ;