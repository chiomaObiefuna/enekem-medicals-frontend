import { Link } from "react-router-dom";
import {
  ArrowRight,
  BadgeCheck,
  HeartHandshake,
  Microscope,
  ShieldCheck,
  Stethoscope,
} from "lucide-react";

import { contactInfo } from "../data/contactInfo";

import pharmacyImg from "../../assets/images/phWW.jpg";
import scanImg from "../../assets/images/test.jpg";
import teamImg from "../../assets/images/team1.jpg";

const trustPoints = [
  {
    number: "01",
    title: "Qualified Professionals",
    description:
      "Care delivered by experienced medical personnel with a commitment to professional standards.",
    icon: Stethoscope,
  },
  {
    number: "02",
    title: "Accurate Diagnosis",
    description:
      "Reliable diagnostic support that helps patients receive clear guidance and better treatment decisions.",
    icon: Microscope,
  },
  {
    number: "03",
    title: "Accessible Healthcare",
    description:
      "Healthcare services designed to be dependable, reachable, and supportive for individuals and families.",
    icon: ShieldCheck,
  },
  {
    number: "04",
    title: "Patient-Focused Support",
    description:
      "A warm care experience built around listening, guidance, follow-up, and patient confidence.",
    icon: HeartHandshake,
  },
];

const WhyChooseUs = () => {
  return (
    <section className="relative overflow-hidden bg-[#0E3442] px-5 py-20 text-white sm:px-8 lg:px-10">
      {/* Background pattern */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.08]">
        <div className="absolute left-0 top-0 h-full w-full bg-[radial-gradient(circle_at_20%_20%,#BFE7D0_0,transparent_32%),radial-gradient(circle_at_80%_80%,#8FC7D8_0,transparent_30%)]" />
      </div>

      <div className="pointer-events-none absolute -left-24 top-24 h-80 w-80 rounded-full bg-[#2F8F68]/25 blur-3xl" />
      <div className="pointer-events-none absolute -right-28 bottom-20 h-96 w-96 rounded-full bg-[#8FC7D8]/20 blur-3xl" />

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
        {/* LEFT: Authentic image collage */}
        <div className="why-images relative">
          <div className="relative grid grid-cols-12 gap-4">
            {/* Main team image */}
            <div className="col-span-12 overflow-hidden rounded-[2rem] border border-white/10 bg-white/10 shadow-[0_30px_90px_rgba(0,0,0,0.28)] lg:col-span-8">
              <img
                src={teamImg}
                alt="Enekem Medicals healthcare team"
                className="h-[420px] w-full object-cover object-center transition-transform duration-700 hover:scale-105"
              />
            </div>

            {/* Side images */}
            <div className="col-span-12 grid gap-4 sm:grid-cols-2 lg:col-span-4 lg:grid-cols-1">
              <div className="why-image-small overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/10 shadow-[0_24px_60px_rgba(0,0,0,0.24)]">
                <img
                  src={scanImg}
                  alt="Diagnostic service at Enekem Medicals"
                  className="h-[200px] w-full object-cover object-center transition-transform duration-700 hover:scale-105"
                />
              </div>

              <div className="why-image-small why-image-delay overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/10 shadow-[0_24px_60px_rgba(0,0,0,0.24)]">
                <img
                  src={pharmacyImg}
                  alt="Pharmacy service at Enekem Medicals"
                  className="h-[200px] w-full object-cover object-center transition-transform duration-700 hover:scale-105"
                />
              </div>
            </div>
          </div>

          {/* Floating badge */}
          <div className="why-floating-badge absolute -bottom-7 left-6 max-w-xs rounded-2xl border border-white/15 bg-white/95 p-5 text-[#102A43] shadow-[0_24px_70px_rgba(0,0,0,0.24)] backdrop-blur">
            <div className="flex items-start gap-3">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#E7F1E8] text-[#2F8F68]">
                <BadgeCheck size={24} strokeWidth={2.7} />
              </div>

              <div>
                <p className="text-sm font-extrabold text-[#102A43]">
                  Trusted Local Healthcare
                </p>
                <p className="mt-1 text-sm leading-relaxed text-[#64748B]">
                  Real people, real care, and dependable support for the
                  community.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT: Why choose text and trust rows */}
        <div className="why-content lg:pl-4">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.22em] text-[#BFE7D0]">
            Why Choose Us
          </p>

          <h2 className="max-w-xl text-2xl font-extrabold leading-tight text-white sm:text-3xl lg:text-[2.4rem]">
            Trusted Care, Delivered with Professionalism
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-relaxed text-[#D8E8EE]">
            Enekem Medicals combines professional healthcare support, accurate
            diagnostics, reliable pharmacy access, and patient-centered service
            in one trusted environment.
          </p>

          <div className="mt-9 space-y-4">
            {trustPoints.map((point, index) => {
              const Icon = point.icon;

              return (
                <div
                  key={point.title}
                  className={`why-trust-row why-trust-delay-${
                    index + 1
                  } group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.06] p-5 transition-all duration-300 hover:translate-x-2 hover:border-[#BFE7D0]/40 hover:bg-white/[0.09]`}
                >
                  <span className="absolute left-0 top-0 h-full w-1 origin-top scale-y-0 bg-[#BFE7D0] transition-transform duration-300 group-hover:scale-y-100" />

                  <div className="flex gap-4">
                    <div className="pt-1 text-sm font-extrabold text-[#BFE7D0]">
                      {point.number}
                    </div>

                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/10 text-[#BFE7D0] transition-all duration-300 group-hover:bg-[#BFE7D0] group-hover:text-[#0E3442]">
                      <Icon size={24} strokeWidth={2.6} />
                    </div>

                    <div>
                      <h3 className="text-base font-extrabold text-white">
                        {point.title}
                      </h3>

                      <p className="mt-2 text-sm leading-relaxed text-[#D8E8EE]">
                        {point.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="why-actions mt-9 flex flex-col gap-4 sm:flex-row">
            <Link
              to="/book"
              className="inline-flex items-center justify-center rounded-full bg-white px-7 py-4 text-sm font-bold text-[#0E3442] shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-[#BFE7D0]"
            >
              Book Appointment
            </Link>

            <a
              href={contactInfo.whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 px-7 py-4 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:border-[#BFE7D0] hover:bg-white/10"
            >
              Chat on WhatsApp
              <ArrowRight size={17} strokeWidth={2.5} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;