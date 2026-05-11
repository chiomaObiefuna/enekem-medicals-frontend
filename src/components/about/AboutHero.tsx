import { Link } from "react-router-dom";
import {
  ArrowRight,
  CalendarPlus,
  HeartPulse,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import teamImage from "../../assets/images/team2ww (1).jpg";

const AboutHero = () => {
  return (
    <section className="relative overflow-hidden bg-[#F0F7FF] px-5 py-20 sm:px-8 lg:px-10">
      {/* Animated background shapes */}
      <div className="about-hero-blob-one pointer-events-none absolute -left-28 top-16 h-80 w-80 rounded-full bg-[#44CC3A]/15 blur-3xl" />
      <div className="about-hero-blob-two pointer-events-none absolute -right-28 bottom-10 h-96 w-96 rounded-full bg-[#102A43]/10 blur-3xl" />

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]">
        {/* LEFT CONTENT */}
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
              individuals and families receive the care they need in one trusted
              environment.
            </p>
          </div>

          {/* CTA buttons */}
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

          {/* Small trust row */}
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

        {/* RIGHT IMAGE AREA */}
        <div className="about-hero-visual relative">
          {/* Green organic background panel */}
          <div className="about-hero-organic absolute -inset-6 rounded-[4rem] bg-[#CFEBDD]" />

          {/* Image frame */}
          <div className="about-hero-image-frame relative overflow-hidden rounded-[3rem] border border-white/70 bg-white shadow-[0_35px_100px_rgba(16,42,67,0.22)]">
            <img
              src={teamImage}
              alt="Enekem Medicals team"
              className="h-[420px] w-full object-cover object-center sm:h-[500px] lg:h-[560px]"
            />

            <div className="absolute inset-0 bg-gradient-to-tr from-[#102A43]/20 via-transparent to-transparent" />
          </div>

          {/* Floating badge */}
          <div className="about-hero-floating-card absolute -bottom-8 left-6 max-w-sm rounded-3xl border border-[#D8E8EE] bg-white p-5 shadow-[0_24px_80px_rgba(16,42,67,0.18)] sm:left-10">
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

          {/* Small floating stat */}
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
  );
};

export default AboutHero;