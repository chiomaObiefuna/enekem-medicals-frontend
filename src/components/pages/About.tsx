import type { ElementType } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  BadgeCheck,
  CalendarPlus,
  CheckCircle2,
  Eye,
  HeartHandshake,
  HeartPulse,
  Lightbulb,
  Microscope,
  PhoneCall,
  Pill,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  Target,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

import { contactInfo } from "../data/contactInfo";
import teamImage from "../../assets/images/team2.jpg";

type ValueItem = {
  title: string;
  description: string;
  icon: ElementType;
};

type OfferItem = {
  title: string;
  description: string;
  icon: ElementType;
};

const coreValues: ValueItem[] = [
  {
    title: "Professionalism",
    description:
      "We uphold the highest standards in healthcare delivery, ensuring that every patient receives competent, ethical, and reliable medical attention.",
    icon: ShieldCheck,
  },
  {
    title: "Empathy",
    description:
      "We understand that quality healthcare goes beyond treatment. We are committed to listening, caring, and supporting every patient with compassion and respect.",
    icon: HeartHandshake,
  },
  {
    title: "Innovation",
    description:
      "We embrace modern healthcare solutions and continuous improvement to provide efficient, accurate, and effective medical services.",
    icon: Lightbulb,
  },
];

const offers: OfferItem[] = [
  {
    title: "Medical Consultations",
    description: "Medical consultations for general and specialized care.",
    icon: Stethoscope,
  },
  {
    title: "Diagnostic Services",
    description:
      "Diagnostic services including laboratory tests and essential screenings.",
    icon: Microscope,
  },
  {
    title: "Pharmacy Services",
    description:
      "Pharmacy services with access to quality medications and healthcare products.",
    icon: Pill,
  },
];

const trustPoints = [
  "Professional and experienced healthcare support.",
  "Reliable diagnostic services.",
  "Quality medications and healthcare products.",
  "A patient-first approach to care.",
];

const About = () => {
  return (
    <main className="w-full">
      {/* ABOUT HERO */}
      <section className="relative overflow-hidden bg-[#F0F7FF] px-5 py-20 sm:px-8 py-16 lg:px-8 lg:py-20">
        <div className="about-hero-blob-one pointer-events-none absolute -left-28 top-16 h-80 w-80 rounded-full bg-[#44CC3A]/15 blur-3xl" />
        <div className="about-hero-blob-two pointer-events-none absolute -right-28 bottom-10 h-96 w-96 rounded-full bg-[#102A43]/10 blur-3xl" />

        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] ">
          <div className="about-hero-copy">
            <p className="mb-4 inline-flex rounded-full bg-white px-5 py-2 text-sm font-bold uppercase tracking-[0.2em] text-[#2F8F68] shadow-sm">
              About Enekem Medicals
            </p>

            <h1 className="max-w-2xl text-3xl font-extrabold leading-tight text-[#102A43] sm:text-4xl lg:text-5xl">
              Reliable Healthcare, Built Around{" "}
              <span className="text-[#2F8F68]">Your Needs</span>
            </h1>

            <div className="mt-6 max-w-2xl space-y-5 text-base leading-relaxed text-[#526071] sm:text-lg">
              <p>
                Enekem Medicals is a dedicated healthcare provider committed to
                delivering reliable, accessible, and patient-centered medical
                services.
              </p>

              <p>
                We provide comprehensive healthcare solutions through
                consultation, diagnostics, and pharmacy services, ensuring that
                individuals and families receive the care they need in one
                trusted environment.
              </p>
            </div>

            <div className="about-hero-buttons mt-9 flex flex-col gap-4 sm:flex-row">
              <Link
                to="/services"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#102A43] px-7 py-4 text-sm font-bold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-[#0E3442] hover:shadow-xl"
              >
                Learn About Our Services
                <ArrowRight size={18} strokeWidth={2.6} />
              </Link>

              <Link
                to="/book"
                className="
                  group relative inline-flex items-center justify-center gap-2
                  overflow-hidden rounded-full border-2 border-[#102A43] bg-white
                  px-7 py-4 text-sm font-bold text-[#102A43] shadow-md
                  transition-all duration-300 hover:-translate-y-1 hover:shadow-xl
                "
              >
                <span className="absolute inset-0 -translate-x-full bg-[#102A43] transition-transform duration-500 ease-out group-hover:translate-x-0" />

                <span className="relative z-10 flex items-center gap-2 transition-colors duration-300 group-hover:text-white">
                  <CalendarPlus size={18} strokeWidth={2.6} />
                  Book Appointment
                </span>
              </Link>
            </div>

            <div className="about-hero-trust mt-10 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-[#D8E8EE] bg-white/80 p-4 shadow-sm backdrop-blur">
                <HeartPulse className="mb-3 text-[#2F8F68]" size={24} />
                <p className="text-sm font-bold text-[#102A43]">
                  Patient-centered care
                </p>
              </div>

              <div className="rounded-2xl border border-[#D8E8EE] bg-white/80 p-4 shadow-sm backdrop-blur">
                <ShieldCheck className="mb-3 text-[#2F8F68]" size={24} />
                <p className="text-sm font-bold text-[#102A43]">
                  Reliable diagnosis
                </p>
              </div>

              <div className="rounded-2xl border border-[#D8E8EE] bg-white/80 p-4 shadow-sm backdrop-blur">
                <Sparkles className="mb-3 text-[#2F8F68]" size={24} />
                <p className="text-sm font-bold text-[#102A43]">
                  Complete support
                </p>
              </div>
            </div>
          </div>

          <div className="about-hero-visual relative">
            <div className="about-hero-organic absolute -inset-6 rounded-[4rem] bg-[#CFEBDD]" />

            <div className="about-hero-image-frame relative overflow-hidden rounded-[3rem] border border-white/70 bg-white shadow-[0_35px_100px_rgba(16,42,67,0.22)]">
              <img
                src={teamImage}
                alt="Enekem Medicals team"
                className="h-[420px] w-full object-cover object-center sm:h-[500px] lg:h-[560px]"
              />

              <div className="absolute inset-0 bg-gradient-to-tr from-[#102A43]/20 via-transparent to-transparent" />
            </div>

            <div className="about-hero-floating-card hidden sm:absolute -bottom-8 left-6 max-w-sm rounded-3xl border border-[#D8E8EE] bg-white p-5 shadow-[0_24px_80px_rgba(16,42,67,0.18)] sm:left-10">
              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#E7F1E8] text-[#2F8F68]">
                  <ShieldCheck size={26} strokeWidth={2.7} />
                </div>

                <div>
                  <h3 className="text-base font-extrabold text-[#102A43]">
                    Trusted Healthcare Team
                  </h3>

                  <p className="mt-1 text-sm leading-relaxed text-[#64748B]">
                    Professional care, accurate diagnosis, and patient-centered
                    support.
                  </p>
                </div>
              </div>
            </div>

            <div className="about-hero-stat-card absolute -top-6 right-4 hidden rounded-2xl bg-[#102A43] px-5 py-4 text-white shadow-[0_20px_60px_rgba(16,42,67,0.25)] sm:block">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#BFE7D0]">
                Complete Care
              </p>
              <p className="mt-1 text-lg font-extrabold">
                One trusted environment
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PROFESSIONAL APPROACH */} 
      <section className="bg-white px-5 pb-12 pt-10 ;sm:px-8 sm:pb-14 sm:pt-12 lg:px-10 lg:py-20">
        <div className="about-approach-panel mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-[#102A43] text-white shadow-[0_28px_90px_rgba(16,42,67,0.18)]">
          <div className="grid gap-0 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="bg-[#0E3442] p-8 sm:p-10 lg:p-12">
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.22em] text-[#BFE7D0]">
                Our Approach
              </p>

              <h2 className="text-3xl font-extrabold leading-tight sm:text-4xl">
                Professionalism, Accuracy, and Compassion
              </h2>
            </div>

            <div className="p-8 sm:p-10 lg:p-12">
              <p className="text-base leading-relaxed text-[#D8E8EE] sm:text-lg">
                Our approach is built on professionalism, accuracy, and
                compassion. Every service we provide is designed to ensure
                quality healthcare delivery in a comfortable and supportive
                setting.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {["Professionalism", "Accuracy", "Compassion"].map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/10 bg-white/10 p-5"
                  >
                    <CheckCircle2 className="mb-3 text-[#BFE7D0]" size={24} />
                    <p className="text-sm font-bold">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION AND VISION */}
      <section className="bg-[#F0F7FF] px-5 pb-12 pt-10 text-white sm:px-8 sm:pb-14 sm:pt-12 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="about-section-heading mx-auto max-w-3xl text-center">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.22em] text-[#2F8F68]">
              Mission & Vision
            </p>

            <h2 className="text-3xl font-extrabold leading-tight text-[#102A43] sm:text-4xl">
              Our Purpose and Future Direction
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-[#64748B]">
              We are guided by a clear purpose to make healthcare more
              accessible, professional, and supportive for every patient we
              serve.
            </p>
          </div>

          <div className="mt-14 grid gap-8 lg:grid-cols-2">
            <div className="about-mission-card rounded-[2rem] border border-[#D8E8EE] bg-white p-8 shadow-[0_18px_50px_rgba(16,42,67,0.07)]">
              <div className="mb-7 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#102A43] text-white">
                <Target size={30} strokeWidth={2.7} />
              </div>

              <h3 className="text-2xl font-extrabold text-[#102A43]">
                Our Mission
              </h3>

              <p className="mt-4 text-base leading-relaxed text-[#526071]">
                To provide essential healthcare through exceptional
                professionalism and a comforting patient experience.
              </p>
            </div>

            <div className="about-mission-card about-mission-delay rounded-[2rem] border border-[#D8E8EE] bg-[#E7F1E8] p-8 shadow-[0_18px_50px_rgba(16,42,67,0.07)]">
              <div className="mb-7 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#2F8F68] text-white">
                <Eye size={30} strokeWidth={2.7} />
              </div>

              <h3 className="text-2xl font-extrabold text-[#102A43]">
                Our Vision
              </h3>

              <p className="mt-4 text-base leading-relaxed text-[#526071]">
                To be a global reference center for comprehensive healthcare
                under one roof.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="relative overflow-hidden bg-white px-5 pb-12 pt-10 text-white sm:px-8 sm:pb-14 sm:pt-12 lg:px-10 lg:py-20">
        <div className="pointer-events-none absolute -left-24 top-20 h-72 w-72 rounded-full bg-[#102A43]/5 blur-3xl" />
        <div className="pointer-events-none absolute -right-24 bottom-10 h-80 w-80 rounded-full bg-[#44CC3A]/10 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="about-section-heading mx-auto max-w-3xl text-center">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.22em] text-[#2F8F68]">
              Our Core Values
            </p>

            <h2 className="text-3xl font-extrabold leading-tight text-[#102A43] sm:text-4xl">
              The Principles Behind Our Care
            </h2>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {coreValues.map((value, index) => {
              const Icon = value.icon;

              return (
                <article
                  key={value.title}
                  className={`about-value-card about-value-delay-${
                    index + 1
                  } group rounded-[2rem] border border-[#D8E8EE] bg-white p-8 shadow-[0_18px_50px_rgba(16,42,67,0.06)] transition-all duration-300 hover:-translate-y-2 hover:border-[#2F8F68]/40 hover:shadow-[0_26px_70px_rgba(16,42,67,0.12)]`}
                >
                  <div className="mb-7 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#E7F1E8] text-[#2F8F68] transition-all duration-300 group-hover:bg-[#2F8F68] group-hover:text-white">
                    <Icon size={30} strokeWidth={2.7} />
                  </div>

                  <h3 className="text-xl font-extrabold text-[#102A43]">
                    {value.title}
                  </h3>

                  <p className="mt-4 text-sm leading-relaxed text-[#64748B]">
                    {value.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHAT WE OFFER */}
      <section className="bg-[#F3F8FA] px-5 pb-12 pt-10 text-white sm:px-8 sm:pb-14 sm:pt-12 lg:px-10 lg:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="about-offer-left">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.22em] text-[#2F8F68]">
              What We Offer
            </p>

            <h2 className="text-3xl font-extrabold leading-tight text-[#102A43] sm:text-4xl">
              Complete and Convenient Healthcare Solutions
            </h2>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-[#64748B]">
              We provide a broad range of healthcare services designed to meet
              everyday medical needs. Our goal is to provide complete and
              convenient healthcare solutions in one place.
            </p>
          </div>

          <div className="space-y-5">
            {offers.map((offer, index) => {
              const Icon = offer.icon;

              return (
                <div
                  key={offer.title}
                  className={`about-offer-item about-offer-delay-${
                    index + 1
                  } group flex gap-5 rounded-[1.7rem] border border-[#D8E8EE] bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#2F8F68]/40 hover:bg-[#F0F7FF] hover:shadow-lg`}
                >
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#F0F7FF] text-[#102A43] shadow-sm transition-all duration-300 group-hover:bg-[#102A43] group-hover:text-white">
                    <Icon size={26} strokeWidth={2.7} />
                  </div>

                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-extrabold text-[#102A43]">
                        {offer.title}
                      </h3>
                      <CheckCircle2
                        size={18}
                        className="text-[#2F8F68]"
                        strokeWidth={2.7}
                      />
                    </div>

                    <p className="mt-2 text-sm leading-relaxed text-[#64748B]">
                      {offer.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* COMMITMENT AND TRUST */}
      <section className="relative overflow-hidden bg-[#102A43] px-5 pb-12 pt-10 text-white sm:px-8 sm:pb-14 sm:pt-12 lg:px-10 lg:py-20">
        <div className="pointer-events-none absolute -left-24 top-16 h-80 w-80 rounded-full bg-[#44CC3A]/10 blur-3xl" />
        <div className="pointer-events-none absolute -right-24 bottom-10 h-96 w-96 rounded-full bg-[#F0F7FF]/10 blur-3xl" />

        <div className="relative z-10 mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_1fr]">
          <div className="about-commitment-panel">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.22em] text-[#BFE7D0]">
              Our Commitment
            </p>

            <h2 className="max-w-xl text-3xl font-extrabold leading-tight text-white sm:text-4xl">
              Quality Healthcare Delivered with Respect and Compassion
            </h2>

            <div className="mt-6 space-y-5 text-base leading-relaxed text-[#D8E8EE]">
              <p>
                At Enekem Medicals, we are committed to delivering quality
                healthcare through accurate diagnosis, dependable treatment, and
                patient-focused support.
              </p>

              <p>
                We believe every patient deserves access to professional medical
                care delivered with respect, integrity, and compassion.
              </p>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl bg-white/10 p-5">
                <HeartPulse className="mb-3 text-[#BFE7D0]" size={26} />
                <p className="text-sm font-bold">Accurate Diagnosis</p>
              </div>

              <div className="rounded-2xl bg-white/10 p-5">
                <ShieldCheck className="mb-3 text-[#BFE7D0]" size={26} />
                <p className="text-sm font-bold">Dependable Treatment</p>
              </div>

              <div className="rounded-2xl bg-white/10 p-5">
                <Sparkles className="mb-3 text-[#BFE7D0]" size={26} />
                <p className="text-sm font-bold">Patient Support</p>
              </div>
            </div>
          </div>

          <div className="about-trust-panel rounded-[2rem] border border-white/10 bg-white/[0.06] p-7 shadow-[0_28px_80px_rgba(0,0,0,0.18)] backdrop-blur">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.22em] text-[#BFE7D0]">
              Why Patients Trust Us
            </p>

            <h3 className="text-2xl font-extrabold text-white">
              Why Patients Trust Enekem Medicals
            </h3>

            <div className="mt-7 space-y-4">
              {trustPoints.map((point, index) => (
                <div
                  key={point}
                  className={`about-trust-tile about-trust-delay-${
                    index + 1
                  } flex gap-4 rounded-2xl border border-white/10 bg-white/10 p-5 transition-all duration-300 hover:translate-x-2 hover:border-[#BFE7D0]/40`}
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#BFE7D0] text-[#102A43]">
                    <BadgeCheck size={22} strokeWidth={2.7} />
                  </div>

                  <p className="text-sm font-semibold leading-relaxed text-[#F0F7FF]">
                    {point}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* VISIT US CTA */}
      <section className="bg-[#F0F7FF]  px-5 pb-12 pt-10 text-white sm:px-8 sm:pb-14 sm:pt-12 lg:px-10 lg:py-20">
        <div className="about-visit-cta mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-white shadow-[0_28px_80px_rgba(16,42,67,0.1)]">
          <div className="grid gap-0 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="p-8 sm:p-10 lg:p-12">
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.22em] text-[#2F8F68]">
                Visit Us
              </p>

              <h2 className="max-w-2xl text-3xl font-extrabold leading-tight text-[#102A43] sm:text-4xl">
                Our Team Is Ready to Guide and Support Your Healthcare Needs
              </h2>

              <p className="mt-5 max-w-2xl text-base leading-relaxed text-[#64748B]">
                We welcome you to visit our facility or contact us for medical
                assistance. Our team is always ready to guide and support your
                healthcare needs.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href={`tel:${contactInfo.phone1.replace(/\s+/g, "")}`}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#102A43] px-7 py-4 text-sm font-bold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-[#0E3442]"
                >
                  <PhoneCall size={18} strokeWidth={2.6} />
                  Call Now
                </a>

                <a
                  href={contactInfo.whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#2F8F68] px-7 py-4 text-sm font-bold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-[#257456]"
                >
                  <FaWhatsapp className="text-lg" />
                  Chat on WhatsApp
                </a>
              </div>
            </div>

            <div className="relative bg-[#102A43] p-8 text-white sm:p-10 lg:p-12">
              <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[#44CC3A]/20 blur-3xl" />

              <div className="relative z-10">
                <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#BFE7D0]">
                  Next Step
                </p>

                <h3 className="mt-4 text-2xl font-extrabold">
                  Need to explore our full services?
                </h3>

                <p className="mt-4 text-sm leading-relaxed text-[#D8E8EE]">
                  See how our medical consultation, diagnostic support, pharmacy
                  services, and patient care work together in one trusted
                  environment.
                </p>

                <Link
                  to="/services"
                  className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-white transition hover:text-[#BFE7D0]"
                >
                  View Services
                  <ArrowRight size={18} strokeWidth={2.7} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;