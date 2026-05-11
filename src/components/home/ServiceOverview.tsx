import type { ElementType } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, HeartPulse, Microscope, Pill } from "lucide-react";

type ServiceItem = {
  title: string;
  description: string;
  icon: ElementType;
};

const services: ServiceItem[] = [
  {
    title: "Medical Care",
    description:
      "General consultations and professional medical attention tailored to your needs.",
    icon: HeartPulse,
  },
  {
    title: "Diagnostics",
    description:
      "Accurate laboratory testing, ultrasound, and essential diagnostic services.",
    icon: Microscope,
  },
  {
    title: "Pharmacy",
    description:
      "Access to quality medications and health products with professional guidance.",
    icon: Pill,
  },
];

const ServicesOverview = () => {
  return (
    <section className="relative overflow-hidden bg-[#F3F8FA] px-5 py-20 sm:px-8 lg:px-10">
      {/* Soft background decoration */}
      <div className="pointer-events-none absolute -left-24 top-16 h-72 w-72 rounded-full bg-[#01369E]/5 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-10 h-80 w-80 rounded-full bg-[#44CC3A]/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="services-overview-heading mx-auto max-w-3xl text-center">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.22em] text-[#01369E]">
            Our Services
          </p>

          <h2 className="text-3xl font-extrabold leading-tight text-[#102A43] sm:text-4xl lg:text-5xl">
            Complete Healthcare Services{" "}
            <span className="text-[#01369E]">in One Place</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-[#64748B] sm:text-lg">
            From medical consultation to diagnostics and pharmacy support,
            Enekem Medicals provides essential healthcare services designed
            around patient needs.
          </p>
        </div>

        {/* Flip Service cards */}
        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <article
                key={service.title}
                tabIndex={0}
                className={`services-card services-card-delay-${
                  index + 1
                } group h-[320px] rounded-3xl outline-none [perspective:1200px]`}
              >
                <div className="relative h-full w-full rounded-3xl transition-transform duration-700 ease-out [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] group-focus:[transform:rotateY(180deg)]">
                  {/* FRONT SIDE */}
                  <div className="absolute inset-0 flex h-full w-full flex-col items-center justify-center rounded-3xl border border-[#D8E8EE] bg-white p-8 text-center shadow-[0_18px_45px_rgba(16,42,67,0.08)] [backface-visibility:hidden]">
                    <div className="mb-8 flex h-24 w-24 items-center justify-center rounded-3xl bg-[#EEF6F8] text-[#01369E] shadow-sm transition-all duration-300 group-hover:bg-[#01369E] group-hover:text-white">
                      <Icon size={56} strokeWidth={3} />
                    </div>

                    <h3 className="text-2xl font-extrabold text-[#102A43]">
                      {service.title}
                    </h3>
                  </div>

                  {/* BACK SIDE */}
                  <div className="absolute inset-0 flex h-full w-full flex-col justify-between rounded-3xl bg-[#44CC3A] p-8 text-white shadow-[0_24px_70px_rgba(16,42,67,0.16)] [backface-visibility:hidden] [transform:rotateY(180deg)]">
                    <div>
                      <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/15 text-white">
                        <Icon size={36} strokeWidth={3} />
                      </div>

                      <h3 className="text-2xl font-extrabold text-white">
                        {service.title}
                      </h3>

                      <p className="mt-4 text-base leading-relaxed text-white/90">
                        {service.description}
                      </p>
                    </div>

                    <Link
                      to="/services"
                      className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-white transition-all duration-300 hover:gap-3"
                    >
                      <span>Learn about service</span>
                      <ArrowRight size={18} strokeWidth={2.8} />
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* CTA button */}
        <div className="services-overview-cta mt-12 flex justify-center">
          <Link
            to="/services"
            className="
              group relative inline-flex items-center justify-center gap-2
              overflow-hidden rounded-full border-2 border-[#01369E] bg-white
              px-8 py-4 text-sm font-bold text-[#01369E] shadow-md
              transition-all duration-300 hover:-translate-y-1 hover:shadow-xl
            "
          >
            <span className="absolute inset-0 -translate-x-full bg-[#01369E] transition-transform duration-500 ease-out group-hover:translate-x-0" />

            <span className="relative z-10 flex items-center gap-2 transition-colors duration-300 group-hover:text-white">
              View All Services
              <ArrowRight size={18} strokeWidth={2.5} />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;