import { Link } from "react-router-dom";
import { CheckCircle2, Stethoscope, Microscope, Pill, HeartPulse } from "lucide-react";

const aboutFeatures = [
  {
    title: "Medical Consultation",
    description: "Professional care and guidance for everyday health needs.",
    icon: Stethoscope,
  },
  {
    title: "Diagnostic Services",
    description: "Accurate testing and screenings to support better decisions.",
    icon: Microscope,
  },
  {
    title: "Pharmacy Support",
    description: "Reliable access to quality medications and health products.",
    icon: Pill,
  },
];

const AboutSnippet = () => {
  return (
    <section className="relative overflow-hidden bg-[#E7F1E8] px-5 py-20 sm:px-8 lg:px-10">
      {/* Soft background decorations */}
      <div className="pointer-events-none absolute -left-24 top-20 h-72 w-72 rounded-full bg-white/40 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-10 h-80 w-80 rounded-full bg-[#44CC3A]/10 blur-3xl" />

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
        {/* LEFT CONTENT */}
        <div className="about-snippet-left">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.22em] text-[#01369E]">
            About Enekem Medicals
          </p>

          <h2 className="max-w-xl text-3xl font-extrabold leading-tight text-[#102A43] sm:text-4xl lg:text-5xl">
            Reliable Healthcare, Built Around{" "}
            <span className="text-[#01369E]">Your Needs</span>
          </h2>

          <div className="mt-6 max-w-2xl space-y-5 text-base leading-relaxed text-[#526071] sm:text-lg">
            <p>
              Enekem Medicals is a trusted healthcare provider committed to
              delivering quality medical care, accurate diagnostics, and
              reliable pharmacy services.
            </p>

            <p>
              We are focused on making healthcare accessible, efficient, and
              patient-centered for individuals and families.
            </p>
          </div>

          <div className="mt-9">
            <Link
              to="/about"
              className="
                group relative inline-flex items-center justify-center
                overflow-hidden rounded-full border-2 border-[#01369E] bg-white
                px-8 py-4 text-sm font-bold text-[#01369E] shadow-md
                transition-all duration-300 hover:-translate-y-1 hover:shadow-xl
              "
            >
              <span className="absolute inset-0 -translate-x-full bg-[#01369E] transition-transform duration-500 ease-out group-hover:translate-x-0" />

              <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                Learn More
              </span>
            </Link>
          </div>
        </div>

        {/* RIGHT VISUAL CARD */}
        <div className="about-snippet-card relative">
          <div className="absolute -right-6 -top-6 hidden h-24 w-24 rounded-full bg-[#44CC3A]/20 lg:block" />
          <div className="absolute -bottom-6 -left-6 hidden h-32 w-32 rounded-full bg-[#01369E]/10 lg:block" />

          <div className="relative overflow-hidden rounded-3xl border border-[#D8E8EE] bg-white p-6 shadow-[0_24px_70px_rgba(16,42,67,0.12)] sm:p-8">
            <div className="mb-8 flex items-center justify-between gap-4">
              <div>
                <span className="inline-flex rounded-full bg-[#E7F1E8] px-4 py-2 text-sm font-bold text-[#01369E]">
                  Complete Care
                </span>

                <h3 className="mt-5 text-2xl font-extrabold text-[#102A43] sm:text-3xl">
                  Care in one trusted place
                </h3>
              </div>

              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-[#01369E] text-white shadow-lg">
                <HeartPulse size={30} strokeWidth={2.5} />
              </div>
            </div>

            <div className="space-y-4">
              {aboutFeatures.map((feature, index) => {
                const Icon = feature.icon;

                return (
                  <div
                    key={feature.title}
                    className={`about-feature about-feature-delay-${index + 1} flex gap-4 rounded-2xl border border-[#D8E8EE] bg-[#F9FCFA] p-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#44CC3A]/50 hover:shadow-md`}
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#E7F1E8] text-[#01369E]">
                      <Icon size={22} strokeWidth={2.3} />
                    </div>

                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="font-bold text-[#102A43]">
                          {feature.title}
                        </h4>
                        <CheckCircle2
                          size={17}
                          className="text-[#44CC3A]"
                          strokeWidth={2.5}
                        />
                      </div>

                      <p className="mt-2 text-sm leading-relaxed text-[#64748B]">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-8 rounded-2xl bg-[#01369E] p-5 text-white">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/70">
                Our Focus
              </p>
              <p className="mt-2 text-lg font-bold leading-snug">
                Professional care, accurate diagnosis, and patient-focused
                support.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSnippet;