import type { ReactNode } from "react";
import { Link } from "react-router-dom";

export type ServiceMode = "online" | "physical" | "both";

export interface SubService {
  name: string;
  description?: string;
  slug?: string;
}

export interface RelatedService {
  label: string;
  path: string;
}

export interface ServiceFact {
  label: string;
  value: string;
}

export interface ServiceAction {
  label: string;
  path: string;
  variant?: "primary" | "secondary" | "outline";
}

export interface ServiceDetailProps {
  slug: string;
  name: string;
  category?: string;
  headline: string;
  tagline: string;
  introduction: string;
  heroImage?: string;
  heroImageAlt?: string;
  icon?: string;
  iconAlt?: string;
  mode: ServiceMode;
  facts?: ServiceFact[];
  suitableFor: string[];
  whatToBring?: string[];
  subServices?: SubService[];
  actions?: ServiceAction[];
  relatedServices?: RelatedService[];
}

const SectionBlock = ({
  eyebrow,
  title,
  children,
}: {
  eyebrow?: string;
  title?: string;
  children: ReactNode;
}) => {
  return (
    <section className="rounded-[2rem] bg-white p-6 shadow-[0_20px_70px_rgba(16,42,67,0.08)] sm:p-8">
      {eyebrow && (
        <div className="mb-5 flex items-center gap-3">
          <span className="h-[3px] w-10 rounded-full bg-[#44CC3A]" />
          <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#3A9AD9]">
            {eyebrow}
          </p>
        </div>
      )}

      {title && (
        <h2 className="mb-4 text-2xl font-extrabold tracking-tight text-[#102A43] sm:text-3xl">
          {title}
        </h2>
      )}

      {children}
    </section>
  );
};

const actionClasses = {
  primary:
    "bg-[#44CC3A] text-[#102A43] hover:-translate-y-0.5 hover:bg-[#53dd49]",
  secondary:
    "bg-[#102A43] text-white hover:-translate-y-0.5 hover:bg-[#3A9AD9]",
  outline:
    "border-2 border-[#3A9AD9] bg-white text-[#102A43] hover:-translate-y-0.5 hover:bg-[#F2FBFF]",
};

const ServiceDetails = ({
  name,
  category = "Healthcare Service",
  headline,
  tagline,
  introduction,
  heroImage,
  heroImageAlt,
  icon,
  iconAlt,
  facts = [],
  suitableFor,
  whatToBring = [],
  subServices = [],
  actions = [],
  relatedServices = [],
}: ServiceDetailProps) => {
  return (
    <main className="w-full bg-[#F8FCFF] text-[#102A43]">
      {/* HERO */}
      <section className="relative overflow-hidden bg-white px-5 pt-28 pb-16 sm:px-8 lg:px-10 lg:pt-32">
        <div className="pointer-events-none absolute -right-32 top-10 h-96 w-96 rounded-full bg-[#6BCBEB]/25 blur-3xl" />
        <div className="pointer-events-none absolute -left-40 bottom-0 h-96 w-96 rounded-full bg-[#44CC3A]/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <div className="mb-10 flex flex-wrap items-center gap-2 text-sm font-semibold text-[#5F6F82]">
            <Link to="/" className="transition hover:text-[#3A9AD9]">
              Home
            </Link>
            <span>/</span>
            <Link to="/services" className="transition hover:text-[#3A9AD9]">
              Services
            </Link>
            <span>/</span>
            <span className="text-[#102A43]">{name}</span>
          </div>

          <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
            {/* LEFT TEXT */}
            <div>
              <div className="mb-6 flex items-center gap-4">
                {icon && (
                  <img
                    src={icon}
                    alt={iconAlt || ""}
                    className="h-16 w-16 shrink-0 object-contain sm:h-20 sm:w-20"
                  />
                )}

                <div>
                  <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#3A9AD9]">
                    {category}
                  </p>
                  <p className="mt-2 text-sm font-semibold text-[#5F6F82]">
                    {tagline}
                  </p>
                </div>
              </div>

              <h1 className="max-w-4xl text-4xl font-black leading-tight tracking-tight text-[#102A43] sm:text-5xl lg:text-6xl">
                {headline}
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-[#5F6F82] sm:text-lg">
                {introduction}
              </p>

              {actions.length > 0 && (
                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  {actions.map((action) => (
                    <Link
                      key={action.label}
                      to={action.path}
                      className={`inline-flex items-center justify-center rounded-xl px-7 py-4 text-sm font-extrabold shadow-sm transition-all duration-300 ${
                        actionClasses[action.variant || "primary"]
                      }`}
                    >
                      {action.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* RIGHT IMAGE */}
            <div className="relative">
              <div className="absolute -left-6 -top-6 h-full w-full rounded-[45%_55%_60%_40%/45%_40%_60%_55%] bg-[#6BCBEB]/35" />

              <div className="relative overflow-hidden rounded-[42%_58%_57%_43%/43%_40%_60%_57%] bg-[#F2FBFF] p-3 shadow-[0_30px_90px_rgba(16,42,67,0.16)]">
                {heroImage ? (
                  <img
                    src={heroImage}
                    alt={heroImageAlt || name}
                    className="h-[360px] w-full rounded-[40%_60%_56%_44%/42%_42%_58%_58%] object-cover object-center sm:h-[430px] lg:h-[500px]"
                  />
                ) : (
                  <div className="flex h-[360px] items-center justify-center rounded-[40%_60%_56%_44%/42%_42%_58%_58%] bg-[#EAF8FF] text-center sm:h-[430px] lg:h-[500px]">
                    <p className="max-w-xs text-sm font-semibold leading-7 text-[#5F6F82]">
                      Add a service image to complete this section.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FACT STRIP */}
      {facts.length > 0 && (
        <section className="border-y border-[#D8E8EE] bg-white px-5 py-8 sm:px-8 lg:px-10">
          <div className="mx-auto grid max-w-7xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {facts.map((fact) => (
              <div
                key={fact.label}
                className="rounded-2xl border border-[#D8E8EE] bg-[#F8FCFF] p-5"
              >
                <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#3A9AD9]">
                  {fact.label}
                </p>
                <p className="mt-2 text-base font-extrabold text-[#102A43]">
                  {fact.value}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* BODY */}
      <section className="px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_0.8fr]">
          <div className="space-y-8">
            <SectionBlock eyebrow="How We Help" title={`What ${name} Covers`}>
              <div className="grid gap-4 sm:grid-cols-2">
                {suitableFor.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-[#44CC3A]" />
                    <p className="text-sm font-semibold leading-7 text-[#102A43]">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </SectionBlock>

            {whatToBring.length > 0 && (
              <SectionBlock eyebrow="Before Your Visit" title="What to Bring">
                <div className="space-y-4">
                  {whatToBring.map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-[#3A9AD9]" />
                      <p className="text-sm font-semibold leading-7 text-[#102A43]">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </SectionBlock>
            )}

            {subServices.length > 0 && (
              <SectionBlock eyebrow="Available Options" title="Choose a Service Option">
                <div className="grid gap-5 sm:grid-cols-2">
                  {subServices.map((sub) => (
                    <div key={sub.name} className="rounded-2xl bg-[#F8FCFF] p-5">
                      <p className="text-base font-extrabold text-[#102A43]">
                        {sub.name}
                      </p>

                      {sub.description && (
                        <p className="mt-2 text-sm leading-7 text-[#5F6F82]">
                          {sub.description}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </SectionBlock>
            )}
          </div>

          {/* ACTION PANEL */}
          <aside className="lg:sticky lg:top-28">
            <div className="overflow-hidden rounded-[2rem] bg-[#102A43] shadow-[0_24px_80px_rgba(16,42,67,0.18)]">
              <div className="p-7">
                <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#F2C94C]">
                  Ready for care?
                </p>

                <h3 className="mt-3 text-2xl font-extrabold text-white">
                  Choose how you want to continue.
                </h3>

                <p className="mt-3 text-sm leading-7 text-white/70">
                  Book online to start your appointment process, or visit the
                  clinic if you prefer in-person care.
                </p>

                {actions.length > 0 && (
                  <div className="mt-6 flex flex-col gap-3">
                    {actions.map((action) => (
                      <Link
                        key={`panel-${action.label}`}
                        to={action.path}
                        className={`inline-flex items-center justify-center rounded-xl px-6 py-4 text-sm font-extrabold transition-all duration-300 ${
                          action.variant === "outline"
                            ? "border border-white/25 text-white hover:bg-white hover:text-[#102A43]"
                            : "bg-[#44CC3A] text-[#102A43] hover:bg-[#53dd49]"
                        }`}
                      >
                        {action.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <div className="border-t border-white/10 bg-white/8 px-7 py-5">
                <p className="text-xs leading-6 text-white/65">
                  Walk-ins are welcome, but confirmed bookings are attended to
                  first.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* RELATED SERVICES */}
      {relatedServices.length > 0 && (
        <section className="border-t border-[#D8E8EE] bg-white px-5 py-12 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-7xl">
            <p className="mb-6 text-xs font-extrabold uppercase tracking-[0.18em] text-[#5F6F82]">
              Related Services
            </p>

            <div className="flex flex-wrap gap-3">
              {relatedServices.map((service) => (
                <Link
                  key={service.path}
                  to={service.path}
                  className="rounded-full border border-[#D8E8EE] bg-[#F8FCFF] px-5 py-3 text-sm font-extrabold text-[#102A43] transition hover:border-[#3A9AD9] hover:bg-[#EAF8FF] hover:text-[#3A9AD9]"
                >
                  {service.label} →
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
};

export default ServiceDetails;