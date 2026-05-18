import type { ElementType } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  PhoneCall,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

import ServicesHero from "../services/ServicesHero";
import { contactInfo } from "../data/contactInfo";

import medicalServiceImg from "../../assets/images/MedicalCare.jpg";
import diagnosticServiceImg from "../../assets/images/test.jpg";
import pharmacyServiceImg from "../../assets/images/PharmCare.jpg";
import patientCareServiceImg from "../../assets/images/patientCare.jpg";

type ServiceItem = {
  title: string;
  description: string;
  supportText: string;
  image: string;
  points: string[];
};

type TrustItem = {
  title: string;
  description: string;
  icon: ElementType;
};

const services: ServiceItem[] = [
  {
    title: "Medical Services",
    description:
      "We offer professional medical consultations for a wide range of health concerns. Our medical team provides careful assessment, diagnosis, and treatment tailored to each patient’s condition.",
    points: [
      "General consultations",
      "Specialist consultations",
      "Health assessments",
      "Follow-up care and monitoring",
    ],
    supportText:
      "If you need medical guidance on any of these services, our team is available to support you through direct consultation.",
    image: medicalServiceImg,
  },
  {
    title: "Diagnostic Services",
    description:
      "Our diagnostic services are designed to support accurate medical decisions through reliable testing and results. We focus on precision and timely reporting to ensure effective treatment planning.",
    points: [
      "Laboratory testing",
      "Blood tests and screenings",
      "Ultrasound services",
      "ECG and basic imaging support",
    ],
    supportText:
      "Accurate diagnosis is essential for effective healthcare. Speak to our team for guidance on required tests or preparation.",
    image: diagnosticServiceImg,
  },
  {
    title: "Pharmacy Services",
    description:
      "Our pharmacy provides access to quality medications and healthcare products with professional supervision to ensure safe and effective use.",
    points: [
      "Prescription medications",
      "Over-the-counter drugs",
      "Health supplements",
      "Medical supplies and essentials",
    ],
    supportText:
      "We ensure that all medications are genuine, properly dispensed, and suited to patient needs.",
    image: pharmacyServiceImg,
  },
  {
    title: "Patient Care Services",
    description:
      "We are committed to supporting patients throughout their healthcare journey with continuous care and professional guidance.",
    points: [
      "Health advice and counseling",
      "Treatment support",
      "Preventive healthcare guidance",
      "Patient follow-up services",
    ],
    supportText:
      "Our focus is not only treatment but also long-term wellbeing and recovery support.",
    image: patientCareServiceImg,
  },
];

const trustItems: TrustItem[] = [
  {
    title: "Experienced Providers",
    description: "Professional and experienced healthcare providers.",
    icon: ShieldCheck,
  },
  {
    title: "Reliable Results",
    description: "Accurate diagnostics and reliable results.",
    icon: BadgeCheck,
  },
  {
    title: "Trusted Pharmacy",
    description: "Quality medications and trusted pharmacy services.",
    icon: Sparkles,
  },
  {
    title: "Patient-Centered Care",
    description: "A patient-centered care approach built around support.",
    icon: CheckCircle2,
  },
];

const Services = () => {
  return (
    <main className="w-full bg-white">
      <ServicesHero />

      {/* MAIN SERVICES FLIP CARDS */}
      <section className="relative overflow-hidden bg-white px-5 py-20 sm:px-8 lg:px-10">
        <div className="pointer-events-none absolute left-1/2 top-20 h-80 w-80 -translate-x-1/2 rounded-full bg-[#F0F7FF] blur-3xl" />

        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="services-page-heading mx-auto max-w-3xl text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-[#2F8F68]">
              Service Categories
            </p>

            <h2 className="text-3xl font-medium leading-tight text-[#102A43] sm:text-4xl">
              Care that supports every step of your health journey
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-[#64748B]">
              Explore our core service areas. Each service is designed to keep
              care simple, accessible, and dependable.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-2">
            {services.map((service, index) => (
              <article
                key={service.title}
                tabIndex={0}
                className={`services-page-card services-page-card-delay-${
                  index + 1
                } group h-[470px] rounded-[2rem] outline-none [perspective:1400px] sm:h-[430px] md:h-[440px]lg:h-[450px]`}
              >
                <div className="relative h-full w-full rounded-[2rem] transition-transform duration-900 ease-out [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] group-focus:[transform:rotateY(180deg)]">
                  {/* FRONT */}
                  <div className="absolute inset-0 overflow-hidden rounded-[2rem] border border-[#D8E8EE] bg-white shadow-[0_22px_70px_rgba(16,42,67,0.09)] [backface-visibility:hidden]">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#102A43]/65 via-[#102A43]/12 to-transparent" />

                    <div className="absolute bottom-0 left-0 right-0 p-7">
                      <p className="mb-3 inline-flex rounded-full bg-white/90 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[#2F8F68] backdrop-blur">
                        Enekem Service
                      </p>

                      <h3 className="max-w-xl text-2xl font-semibold text-white sm:text-3xl">
                        {service.title}
                      </h3>
                    </div>
                  </div>

                  {/* BACK */}
                  <div className="absolute inset-0 flex flex-col overflow-hidden rounded-[2rem] border border-[#D8E8EE] bg-[#01369E] p-4 text-[#102A43] shadow-[0_24px_80px_rgba(16,42,67,0.12)] [backface-visibility:hidden] [transform:rotateY(180deg)] sm:p-5 lg:p-6">

                    <div>
                      <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#44CC3A]">
                        Service Detail
                      </p>

                      <h3 className="text-2xl font-semibold text-white/90">
                        {service.title}
                      </h3>

                      <p className="mt-3 text-xs leading-relaxed text-[#44CC3A] sm:text-sm lg:text-base">
                          {service.description}
                      </p>
                     <div className="mt-4 grid gap-2 grid-cols-1 sm:grid-cols-2">
                        {service.points.map((point) => (
                          <div
                              key={point}
                              className="flex gap-2 rounded-xl border border-[#D8E8EE] bg-white p-2.5 text-xs text-[#526071] sm:text-sm"
                            >
                              <CheckCircle2
                                size={15}
                                className="mt-0.5 shrink-0 text-[#2F8F68]"
                                strokeWidth={2.5}
                              />
                              <span>{point}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                   <div className="mt-3 rounded-2xl bg-[#F0F7FF] p-3 sm:p-4">
                      <p className="text-xs leading-relaxed text-[#526071] sm:text-sm">
                        {service.supportText}
                      </p>

                      <Link
                        to="/book"
                        className="mt-3 inline-flex items-center gap-2 text-xs font-bold text-[#102A43] transition hover:text-[#2F8F68] sm:text-sm"
                      >
                        Book or ask about this service
                        <ArrowRight size={15} strokeWidth={2.5} />
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE ENEKEM */}
      <section className="bg-white px-5 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="services-trust-heading mx-auto max-w-3xl text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-[#2F8F68]">
              Why Choose Enekem Medicals
            </p>

            <h2 className="text-3xl font-medium leading-tight text-[#102A43] sm:text-4xl">
              Dependable healthcare that feels clear and accessible
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-[#64748B]">
              We are committed to delivering healthcare that is both dependable
              and accessible.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {trustItems.map((item, index) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className={`services-trust-card services-trust-delay-${
                    index + 1
                  } rounded-[1.7rem] border border-[#D8E8EE] bg-[#FCFDFD] p-6 shadow-[0_18px_50px_rgba(16,42,67,0.05)] transition-all duration-300 hover:-translate-y-2 hover:border-[#2F8F68]/40 hover:shadow-[0_24px_70px_rgba(16,42,67,0.1)]`}
                >
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F0F7FF] text-[#102A43]">
                    <Icon size={26} strokeWidth={2.5} />
                  </div>

                  <h3 className="text-lg font-semibold text-[#102A43]">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-[#64748B]">
                    {item.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* NEED ASSISTANCE CTA */}
      <section className="bg-white px-5 pb-20 sm:px-8 lg:px-10">
        <div className="services-cta mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-[#D8E8EE] bg-[#F0F7FF] shadow-[0_24px_80px_rgba(16,42,67,0.08)]">
          <div className="grid gap-0 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="p-8 sm:p-10 lg:p-12">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-[#2F8F68]">
                Need Assistance
              </p>

              <h2 className="max-w-2xl text-3xl font-medium leading-tight text-[#102A43] sm:text-4xl">
                Reach our medical team for service support, booking, or
                inquiries.
              </h2>

              <p className="mt-5 max-w-2xl text-base leading-relaxed text-[#64748B]">
                For any of our services, you can reach our medical team directly
                for support, booking, or inquiries.
              </p>
            </div>

            <div className="flex flex-col justify-center gap-4 bg-white p-8 sm:p-10 lg:p-12">
              <Link
                to="/book"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#01369E] px-7 py-4 text-sm font-bold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-[#0E3442]"
              >
                Book Appointment
                <ArrowRight size={18} strokeWidth={2.5} />
              </Link>

              <a
                href={contactInfo.whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[#D8E8EE] bg-white px-7 py-4 text-sm font-bold text-[#102A43] transition-all duration-300 hover:-translate-y-1 hover:border-[#25D366] hover:text-[#25D366]"
              >
                <FaWhatsapp className="text-lg text-[#25D366]" />
                Chat on WhatsApp
              </a>

              <a
                href={`tel:${contactInfo.phone1.replace(/\s+/g, "")}`}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[#D8E8EE] bg-white px-7 py-4 text-sm font-bold text-[#102A43] transition-all duration-300 hover:-translate-y-1 hover:border-[#2F8F68] hover:text-[#2F8F68]"
              >
                <PhoneCall size={18} strokeWidth={2.5} />
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Services;