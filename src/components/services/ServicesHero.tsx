import { Link } from "react-router-dom";
import { CalendarPlus, CheckCircle2 } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

import { contactInfo } from "../data/contactInfo";
import servicesHeroImg from "../../assets/images/services.jpg";

const ServicesHero = () => {
  return (
    <section className="relative overflow-hidden bg-white px-5 py-20 sm:px-8 lg:px-10">
      {/* Soft animated background accents */}
      <div className="services-hero-blob-one pointer-events-none absolute -left-28 top-20 h-80 w-80 rounded-full bg-[#F0F7FF] blur-3xl" />
      <div className="services-hero-blob-two pointer-events-none absolute -right-28 bottom-10 h-96 w-96 rounded-full bg-[#E7F1E8] blur-3xl" />

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[0.95fr_1.05fr]">
        {/* LEFT CONTENT */}
        <div className="services-hero-copy">
          <p className="mb-5 inline-flex rounded-full border border-[#D8E8EE] bg-[#F9FBFC] px-5 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-[#2F8F68]">
            Our Services
          </p>

          <h1 className="max-w-3xl text-3xl font-semibold leading-tight text-[#102A43] sm:text-4xl lg:text-[2.8rem]">
            Comprehensive Healthcare Services Designed Around Your Needs
          </h1>

          <div className="mt-6 max-w-2xl space-y-5 text-base leading-relaxed text-[#526071]">
            <p>
              Enekem Medicals provides a comprehensive range of healthcare
              services designed to deliver accurate diagnosis, effective
              treatment, and reliable patient support.
            </p>

            <p>
              Our services are structured to ensure that patients receive
              complete care in one trusted environment.
            </p>
          </div>

          <div className="services-hero-buttons mt-9 flex flex-col gap-4 sm:flex-row">
            <Link
              to="/book"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#01369E] px-7 py-4 text-sm font-bold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-[#01369E]"
            >
              <CalendarPlus size={18} strokeWidth={2.6} />
              Book Appointment
            </Link>

            <a
              href={contactInfo.whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-[#D8E8EE] bg-white px-7 py-4 text-sm font-bold text-[#102A43] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#44CC3A] hover:text-[#44CC3A]"
            >
              <FaWhatsapp className="text-lg text-[#25D366]" />
              Chat on WhatsApp
            </a>
          </div>

          <div className="services-hero-points mt-10 grid gap-4 sm:grid-cols-3">
            {["Consultation", "Diagnostics", "Pharmacy"].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-[#D8E8EE] bg-white/80 p-4 shadow-sm backdrop-blur"
              >
                <CheckCircle2 className="mb-3 text-[#2F8F68]" size={22} />
                <p className="text-sm font-semibold text-[#102A43]">{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT VISUAL */}
        <div className="services-hero-visual relative">
          <div className="absolute -inset-5 rounded-[3.5rem] bg-[#F0F7FF]" />

          <div className="services-hero-image-frame relative overflow-hidden rounded-[3rem] border border-[#D8E8EE] bg-white shadow-[0_35px_100px_rgba(16,42,67,0.16)]">
            <img
              src={servicesHeroImg}
              alt="Enekem Medicals healthcare team"
              className="h-[430px] w-full object-cover object-center sm:h-[520px] lg:h-[580px]"
            />

            <div className="absolute inset-0 bg-gradient-to-tr from-[#102A43]/18 via-transparent to-transparent" />
          </div>

          <div className="services-hero-floating-card absolute -bottom-8 left-6 max-w-sm rounded-3xl border border-[#D8E8EE] bg-white p-5 shadow-[0_24px_80px_rgba(16,42,67,0.16)] sm:left-10">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#2F8F68]">
              Complete Care
            </p>

            <p className="mt-2 text-base font-semibold leading-snug text-[#102A43]">
              Medical consultation, diagnostics, pharmacy, and patient support
              in one place.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesHero;