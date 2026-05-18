import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";


import { contactInfo } from "../data/contactInfo";
import AboutSnippet from "../home/AboutSnippet";
import ServicesOverview from "../home/ServiceOverview";
import WhyChooseUs from "../home/WhyChooseUs";
import ContactStrip from "../home/ContactStrip";




import bookAppointmentImg from "../../assets/images/book-appointment.jpg";
import labTestImg from "../../assets/images/lab-test.jpg";
import pharmacyImg from "../../assets/images/pharmacy.jpg";
import speakToDoctorImg from "../../assets/images/speak-to-a-doc.webp";

type SlideButtonProps = {
  label: string;
  href: string;
  variant?: "primary" | "whatsapp";
  external?: boolean;
  icon?: ReactNode;
};

const SlideButton = ({
  label,
  href,
  variant = "primary",
  external = false,
  icon,
}: SlideButtonProps) => {
  const colorClasses =
    variant === "primary"
      ? {
          border: "border-[#01369E]",
          text: "text-[#01369E]",
          fill: "bg-[#01369E]",
        }
      : {
          border: "border-[#44CC3A]",
          text: "text-[#44CC3A]",
          fill: "bg-[#44CC3A]",
        };

  const buttonClass = `
    group relative inline-flex items-center justify-center gap-2
    overflow-hidden rounded-full border-2 bg-white
    px-8 py-4 text-sm font-bold shadow-md
    transition-all duration-300 hover:-translate-y-1 hover:shadow-xl
    ${colorClasses.border} ${colorClasses.text}
  `;

  const buttonContent = (
    <>
      <span
        className={`
          absolute inset-0 -translate-x-full
          transition-transform duration-500 ease-out
          group-hover:translate-x-0
          ${colorClasses.fill}
        `}
      />

      <span className="relative z-10 flex items-center justify-center gap-2 transition-colors duration-300 group-hover:text-white">
        {icon}
        {label}
      </span>
    </>
  );

  if (external) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={buttonClass}>
        {buttonContent}
      </a>
    );
  }

  return (
    <Link to={href} className={buttonClass}>
      {buttonContent}
    </Link>
  );
};

type QuickAction = {
  title: string;
  description: string;
  buttonLabel: string;
  image: string;
  href: string;
  external?: boolean;
};

const quickActions: QuickAction[] = [
  {
    title: "Book Appointment",
    description: "Schedule a visit with our medical team.",
    buttonLabel: "Book Now",
    image: bookAppointmentImg,
    href: "/book",
  },
  {
    title: "Laboratory Tests",
    description: "Request diagnostic tests and screenings.",
    buttonLabel: "Run a Test",
    image: labTestImg,
    href: "/book",
  },
  {
    title: "Pharmacy Orders",
    description: "Order medications and health products.",
    buttonLabel: "Order Now",
    image: pharmacyImg,
    href: "/book",
  },
  {
    title: "Speak to a Doctor",
    description: "Get quick medical guidance and support.",
    buttonLabel: "Chat Now",
    image: speakToDoctorImg,
    href: contactInfo.whatsappLink,
    external: true,
  },
];

const Home = () => {
  return (
    <main className="w-full">
      
  {/* HERO SECTION */}
<section className="relative w-full overflow-hidden min-h-[420px] sm:min-h-[480px] lg:min-h-[540px]">

  
  <video
    autoPlay
    muted
    loop
    playsInline
    poster="/videos/poster.webp"
    className="absolute inset-0 h-full w-full object-cover object-center"
  >
    {/* Mobile — below 768px */}
    <source
      src="/videos/Mobile-Hero.webm"
      type="video/webm"
      media="(max-width: 767px)"
    />
    <source
      src="/videos/Mobile-Hero.mp4"
      type="video/mp4"
      media="(max-width: 767px)"
    />

    {/* Tablet — 768px to 1023px */}
    <source
      src="/videos/Tablet-Hero.webm"
      type="video/webm"
      media="(max-width: 1023px)"
    />
    <source
      src="/videos/Tablet-Hero.mp4"
      type="video/mp4"
      media="(max-width: 1023px)"
    />

    {/* Desktop — 1024px and above */}
    <source src="/videos/Desktop-Hero.webm" type="video/webm" />
    <source src="/videos/Desktop-Hero.mp4"  type="video/mp4"  />

    {/* Fallback for browsers that block video */}
    <img
      src="/videos/poster.PNG"
      alt="Enekem Medicals healthcare facility"
      className="absolute inset-0 h-full w-full object-cover object-center"
    />
  </video>

  
  {/* Very light scrim — just enough for text readability, video stays vivid */}
  <div className="absolute inset-0 bg-black/20" />

  {/* Hero content — minimal, clean, centered */}
  <div className="relative z-10 mx-auto flex min-h-[420px] max-w-7xl items-end px-5 pb-10 sm:min-h-[480px] sm:px-8 sm:pb-14 lg:min-h-[540px] lg:px-10 lg:pb-16">
    <div className="max-w-xl">

      {/* Short tagline only — no big headline, video does the talking */}
      <p
        className="hero-fade-up text-sm font-medium leading-relaxed text-white/80 sm:text-base lg:text-lg"
        style={{ textShadow: "0 1px 8px rgba(0,0,0,0.4)" }}
      >
        Reliable and professional healthcare services — consultation,
        diagnostics, and pharmacy, all in one place.
      </p>

      {/* Single CTA — Book Appointment only */}
      <div className="hero-fade-up hero-delay-1 mt-6">
        <SlideButton
          label="Book Appointment"
          href="/book"
          variant="primary"
        />
      </div>

    </div>
  </div>
</section>


      {/* QUICK ACTIONS GRID SECTION */}
      <section className="bg-white px-5 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="quick-action-fade-up mx-auto max-w-3xl text-center">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-[#01369E]">
              Quick Actions
            </p>

            <h2 className="text-3xl font-extrabold leading-tight text-[#102A43] sm:text-4xl lg:text-5xl">
              How Can We Help You Today?
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-[#64748B] sm:text-lg">
              Choose the service you need and connect with the Enekem Medicals
              team quickly.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-4">
            {quickActions.map((action, index) => (
              <article
                key={action.title}
                className={`quick-action-fade-up quick-action-delay-${index + 1} group flex h-full flex-col overflow-hidden rounded-3xl bg-[#FBF8F4] shadow-sm ring-1 ring-[#D8E8EE] transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl`}
              >
                <div className="h-56 overflow-hidden">
                  <img
                    src={action.image}
                    alt={action.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                <div className="flex flex-1 flex-col p-7">
                  <h3 className="text-2xl font-bold text-[#102A43]">
                    {action.title}
                  </h3>

                  <p className="mt-4 flex-1 text-base leading-relaxed text-[#526071]">
                    {action.description}
                  </p>

                  <div className="mt-8">
                    <SlideButton
                      label={action.buttonLabel}
                      href={action.href}
                      variant="primary"
                      external={action.external}
                    />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <AboutSnippet /> 
       <ServicesOverview />
       <WhyChooseUs />
      <ContactStrip />
    </main>
  );
};

export default Home;