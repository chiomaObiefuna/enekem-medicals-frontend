import { Link } from "react-router-dom";
import ServiceDetails from "../common/ServiceDetails";
import dentalIcon from "../../assets/icons/dental.png";
import dentalImage from "../../assets/images/dental-tooth-transparent.png";

const dentalServices = [
  {
    number: "01",
    title: "Dental Consultation & Examination",
    text: "A careful oral health review to understand your concern and recommend the right next step.",
  },
  {
    number: "02",
    title: "Tooth Extraction",
    text: "Clinical removal of damaged or problematic teeth where extraction is medically required.",
  },
  {
    number: "03",
    title: "Dental Fillings",
    text: "Treatment for cavities or damaged tooth surfaces using restorative dental care.",
  },
  {
    number: "04",
    title: "Scaling & Polishing",
    text: "Professional teeth cleaning to remove plaque, stains, and support better oral hygiene.",
  },
  {
    number: "05",
    title: "Tooth Pain & Infection Care",
    text: "Assessment and treatment guidance for toothache, gum discomfort, and oral infections.",
  },
  {
    number: "06",
    title: "Basic Restorative Dental Care",
    text: "Support for broken teeth, sensitivity, and routine dental health concerns.",
  },
];

const suitableFor = [
  "Toothache or dental pain",
  "Bleeding gums",
  "Tooth sensitivity",
  "Broken or damaged teeth",
  "Routine dental check-ups",
  "General oral health concerns",
];

const visitNotes = [
  "Bring any previous dental records or X-ray results, if available.",
  "Tell the dentist about any medication you are currently taking.",
  "Explain how long the pain, sensitivity, or gum concern has lasted.",
  "If you use HMO, bring your HMO card or authorisation details.",
];

const visitSteps = [
  {
    number: "1",
    title: "Book your dental visit",
    text: "Choose Dental Services in the booking form and select a suitable appointment time.",
  },
  {
    number: "2",
    title: "Get examined at the clinic",
    text: "The dentist reviews your concern, checks your teeth and gums, and explains the findings.",
  },
  {
    number: "3",
    title: "Receive treatment guidance",
    text: "You are advised on treatment options, procedure fees where applicable, and next steps.",
  },
];

const Dental = () => {
  const bookingPath = "/book?service=dental&mode=physical";

  return (
    <main className="w-full overflow-hidden bg-[#F8FCFF] text-[#102A43]">
      {/* HERO */}
      <section className="relative overflow-hidden bg-white px-5 pb-20 pt-28 sm:px-8 lg:px-10 lg:pt-32">
        {/* Wavy stroke decorations */}
        {/* Premium wavy strokes - top left */}
<svg
  className="dental-premium-wave dental-premium-wave-one pointer-events-none absolute left-[-120px] top-20 h-[220px] w-[620px]"
  viewBox="0 0 620 220"
  fill="none"
  aria-hidden="true"
>
  <defs>
    <linearGradient id="dentalWaveGradientA" x1="0" y1="0" x2="620" y2="0">
      <stop offset="0%" stopColor="#6BCBEB" stopOpacity="0.35" />
      <stop offset="50%" stopColor="#3A9AD9" stopOpacity="0.95" />
      <stop offset="100%" stopColor="#6BCBEB" stopOpacity="0.45" />
    </linearGradient>

    <linearGradient id="dentalWaveGradientB" x1="0" y1="0" x2="620" y2="0">
      <stop offset="0%" stopColor="#3A9AD9" stopOpacity="0.12" />
      <stop offset="50%" stopColor="#3A9AD9" stopOpacity="0.45" />
      <stop offset="100%" stopColor="#6BCBEB" stopOpacity="0.16" />
    </linearGradient>
  </defs>

  <path
    d="M10 130C70 75 125 58 185 88C245 118 292 158 355 140C418 122 468 62 530 76C565 84 590 98 610 110"
    stroke="url(#dentalWaveGradientA)"
    strokeWidth="6"
    strokeLinecap="round"
  />
  <path
    d="M18 164C90 116 148 109 214 131C280 153 328 190 392 176C456 162 506 112 567 119C588 121 601 126 613 133"
    stroke="url(#dentalWaveGradientB)"
    strokeWidth="3"
    strokeLinecap="round"
  />
  <path
    d="M28 92C88 48 144 38 204 64C264 90 312 128 372 113C432 98 478 52 535 60C565 64 588 72 608 85"
    stroke="#3A9AD9"
    strokeOpacity="0.18"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeDasharray="10 14"
  />
</svg>

{/* Premium wavy strokes - bottom right */}
<svg
  className="dental-premium-wave dental-premium-wave-two pointer-events-none absolute bottom-10 right-[-130px] h-[240px] w-[680px]"
  viewBox="0 0 680 240"
  fill="none"
  aria-hidden="true"
>
  <defs>
    <linearGradient id="dentalWaveGradientC" x1="0" y1="0" x2="680" y2="0">
      <stop offset="0%" stopColor="#6BCBEB" stopOpacity="0.28" />
      <stop offset="45%" stopColor="#3A9AD9" stopOpacity="0.9" />
      <stop offset="100%" stopColor="#3A9AD9" stopOpacity="0.3" />
    </linearGradient>

    <linearGradient id="dentalWaveGradientD" x1="0" y1="0" x2="680" y2="0">
      <stop offset="0%" stopColor="#3A9AD9" stopOpacity="0.08" />
      <stop offset="50%" stopColor="#6BCBEB" stopOpacity="0.35" />
      <stop offset="100%" stopColor="#3A9AD9" stopOpacity="0.08" />
    </linearGradient>
  </defs>

  <path
    d="M18 118C92 72 155 70 225 106C295 142 355 192 428 176C501 160 554 96 620 102C643 104 658 110 670 118"
    stroke="url(#dentalWaveGradientC)"
    strokeWidth="7"
    strokeLinecap="round"
  />
  <path
    d="M8 156C82 118 146 122 214 150C282 178 345 214 414 202C483 190 536 140 603 142C631 143 651 147 670 154"
    stroke="url(#dentalWaveGradientD)"
    strokeWidth="3"
    strokeLinecap="round"
  />
  <path
    d="M30 82C104 36 166 34 236 70C306 106 364 148 434 132C504 116 558 60 624 68C646 71 659 75 670 81"
    stroke="#6BCBEB"
    strokeOpacity="0.18"
    strokeWidth="2"
    strokeLinecap="round"
    strokeDasharray="8 16"
  />
</svg>

        <div className="pointer-events-none absolute -right-28 top-16 h-96 w-96 rounded-full bg-[#3A9AD9]/10 blur-3xl" />
        <div className="pointer-events-none absolute -left-32 bottom-0 h-96 w-96 rounded-full bg-[#6BCBEB]/15 blur-3xl" />

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
            <span className="text-[#102A43]">Dental Services</span>
          </div>

          <div className="grid items-center gap-14 lg:grid-cols-[0.95fr_1.05fr]">
            {/* LEFT COPY */}
            <div className="dental-hero-copy">
              <div className="mb-6 flex items-center gap-4">
                <img
                  src={dentalIcon}
                  alt="Dental services icon"
                  className="h-16 w-16 shrink-0 object-contain sm:h-20 sm:w-20"
                />

                <div>
                  <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#3A9AD9]">
                    Physical Dental Care
                  </p>
                  <p className="mt-2 text-sm font-semibold text-[#5F6F82]">
                    Oral health support at the clinic.
                  </p>
                </div>
              </div>

              <h1 className="max-w-4xl text-4xl font-black leading-tight tracking-tight text-[#102A43] sm:text-5xl lg:text-6xl">
                Dental care for pain relief, cleaning, and everyday oral health.
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-[#5F6F82] sm:text-lg">
                Enekem Medicals offers general dental services including dental
                consultation and examination, tooth extraction, dental fillings,
                scaling and polishing, treatment of tooth pain and infections,
                and basic restorative dental care. Every dental visit is carried
                out physically at the clinic using appropriate dental equipment.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link
                  to={bookingPath}
                  className="inline-flex items-center justify-center rounded-xl bg-[#3A9AD9] px-7 py-4 text-sm font-extrabold text-white shadow-[0_20px_50px_rgba(58,154,217,0.28)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#2E85C0]"
                >
                  Book Dental Appointment
                </Link>

                <a
                  href="#dental-services"
                  className="inline-flex items-center justify-center rounded-xl border-2 border-[#3A9AD9]/35 bg-white px-7 py-4 text-sm font-extrabold text-[#102A43] transition-all duration-300 hover:-translate-y-1 hover:bg-[#3A9AD9] hover:text-white"
                >
                  View Dental Care
                </a>
              </div>
            </div>

           {/* RIGHT HERO VISUAL */}
          <div className="dental-hero-image relative flex min-h-[420px] items-center justify-center sm:min-h-[500px] lg:min-h-[560px]">
            {/* soft glow */}
            <div className="absolute h-[280px] w-[280px] rounded-full bg-[#6BCBEB]/30 blur-3xl sm:h-[340px] sm:w-[340px] lg:h-[400px] lg:w-[400px]" />

            {/* floating tooth */}
              <div className="dental-floating-tooth relative z-10">
                <img
                  src={dentalImage}
                  alt="3D molar tooth illustration for Dental Services"
                  className="w-[230px] object-contain drop-shadow-[0_35px_60px_rgba(16,42,67,0.22)] sm:w-[290px] lg:w-[360px]"
                />
              </div>

            {/* top floating card */}
            <div className="dental-float-card dental-float-card-top absolute right-0 top-6 z-20 rounded-[1.4rem] bg-white px-5 py-4 shadow-[0_22px_70px_rgba(16,42,67,0.14)]">
              <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#3A9AD9]">
                Consultation
              </p>
              <p className="mt-1 text-sm font-black text-[#102A43]">
                ₦15,000
              </p>
            </div>

            {/* bottom floating card */}
            <div className="dental-float-card dental-float-card-bottom absolute bottom-10 left-0 z-20 rounded-[1.4rem] bg-white px-5 py-4 shadow-[0_22px_70px_rgba(16,42,67,0.14)]">
              <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#3A9AD9]">
                Mode
              </p>
              <p className="mt-1 text-sm font-black text-[#102A43]">
                Physical Only
              </p>
            </div>

            {/* small accent badge */}
            <div className="dental-mini-badge absolute bottom-0 right-10 z-20 flex h-16 w-16 items-center justify-center rounded-full bg-[#3A9AD9] text-sm font-black text-white shadow-[0_16px_40px_rgba(58,154,217,0.35)]">
              Care
            </div>
          </div>
          </div>
        </div>
      </section>

      {/* FACT STRIP */}
      <section className="border-y border-[#D8E8EE] bg-[#F8FCFF] px-5 py-8 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-3">
          <div className="dental-fact rounded-[1.7rem] bg-white p-5 shadow-sm">
            <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#3A9AD9]">
              Mode
            </p>
            <p className="mt-2 text-base font-extrabold text-[#102A43]">
              Physical Only
            </p>
          </div>

          <div className="dental-fact dental-delay-1 rounded-[1.7rem] bg-white p-5 shadow-sm">
            <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#3A9AD9]">
              Consultation
            </p>
            <p className="mt-2 text-base font-extrabold text-[#102A43]">
              ₦15,000
            </p>
          </div>

          <div className="dental-fact dental-delay-2 rounded-[1.7rem] bg-white p-5 shadow-sm">
            <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#3A9AD9]">
              Duration
            </p>
            <p className="mt-2 text-base font-extrabold text-[#102A43]">
              15 to 45 minutes
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES WITH WAVE LINE */}
      <section
        id="dental-services"
        className="relative bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-10"
      >
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#3A9AD9]">
              Dental Care Options
            </p>

            <h2 className="mt-4 text-3xl font-black tracking-tight text-[#102A43] sm:text-4xl">
              Care for pain, cleaning, examination, and oral health concerns.
            </h2>

            <p className="mt-4 text-base leading-8 text-[#5F6F82]">
              Dental concerns are best assessed physically so the dentist can
              examine your teeth, gums, and mouth before recommending the right
              treatment.
            </p>
          </div>

          <div className="relative mt-14">
            <svg
              className="dental-service-wave pointer-events-none absolute left-0 top-8 hidden h-[540px] w-full lg:block"
              viewBox="0 0 1200 540"
              fill="none"
              aria-hidden="true"
            >
              <defs>
                <linearGradient id="serviceWaveBlueA" x1="0" y1="0" x2="1200" y2="0">
                  <stop offset="0%" stopColor="#6BCBEB" stopOpacity="0.08" />
                  <stop offset="50%" stopColor="#3A9AD9" stopOpacity="0.32" />
                  <stop offset="100%" stopColor="#6BCBEB" stopOpacity="0.08" />
                </linearGradient>

                <linearGradient id="serviceWaveBlueB" x1="0" y1="0" x2="1200" y2="0">
                  <stop offset="0%" stopColor="#3A9AD9" stopOpacity="0.06" />
                  <stop offset="50%" stopColor="#3A9AD9" stopOpacity="0.18" />
                  <stop offset="100%" stopColor="#3A9AD9" stopOpacity="0.05" />
                </linearGradient>
              </defs>

              <path
                d="M20 96C158 34 274 150 420 92C566 34 684 154 830 96C968 42 1078 54 1180 112"
                stroke="url(#serviceWaveBlueA)"
                strokeWidth="4"
                strokeLinecap="round"
              />
              <path
                d="M20 286C158 224 274 340 420 282C566 224 684 344 830 286C968 232 1078 244 1180 302"
                stroke="url(#serviceWaveBlueB)"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <path
                d="M20 190C158 128 274 244 420 186C566 128 684 248 830 190C968 136 1078 148 1180 206"
                stroke="#3A9AD9"
                strokeOpacity="0.10"
                strokeWidth="2"
                strokeLinecap="round"
                strokeDasharray="9 18"
              />
            </svg>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {dentalServices.map((service, index) => (
                <div
                  key={service.title}
                  className={`dental-service-card dental-service-card-${index} relative overflow-hidden rounded-[2rem] border border-[#D8E8EE] bg-[#F8FCFF] p-6 shadow-[0_18px_60px_rgba(16,42,67,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-[#3A9AD9]/50 hover:bg-white hover:shadow-[0_24px_80px_rgba(16,42,67,0.10)]`}
                >
                  <span className="absolute -right-5 -top-5 text-7xl font-black text-[#3A9AD9]/10">
                    {service.number}
                  </span>

                  <p className="text-sm font-black text-[#3A9AD9]">
                    {service.number}
                  </p>

                  <h3 className="mt-4 text-xl font-black text-[#102A43]">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-[#5F6F82]">
                    {service.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SUITABLE FOR + VISIT PREP */}
      <section className="bg-[#F8FCFF] px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="dental-panel rounded-[2.5rem] bg-white p-7 shadow-[0_20px_70px_rgba(16,42,67,0.08)] sm:p-9">
            <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#3A9AD9]">
              Suitable For
            </p>

            <h2 className="mt-4 text-3xl font-black tracking-tight text-[#102A43]">
              When to book dental services.
            </h2>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {suitableFor.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-[#3A9AD9]" />
                  <p className="text-sm font-semibold leading-7 text-[#102A43]">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="dental-panel dental-panel-delay rounded-[2.5rem] bg-[#102A43] p-7 text-white shadow-[0_24px_80px_rgba(16,42,67,0.18)] sm:p-9">
            <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#6BCBEB]">
              Before Your Visit
            </p>

            <h2 className="mt-4 text-3xl font-black tracking-tight text-white">
              Prepare for your dental appointment.
            </h2>

            <div className="mt-8 grid gap-4">
              {visitNotes.map((note) => (
                <div key={note} className="flex items-start gap-3">
                  <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-[#6BCBEB]" />
                  <p className="text-sm font-semibold leading-7 text-white/78">
                    {note}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* VISIT FLOW */}
<section className="bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
  <div className="mx-auto max-w-7xl">
    <div className="max-w-3xl">
      <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#3A9AD9]">
        Dental Visit Flow
      </p>

      <h2 className="mt-4 text-3xl font-black tracking-tight text-[#102A43] sm:text-4xl">
        What happens when you book dental care.
      </h2>

      <p className="mt-4 text-base leading-8 text-[#5F6F82]">
        Your dental appointment starts with a consultation and examination. If a
        procedure is needed, the dentist will explain the treatment option and
        any additional cost before proceeding.
      </p>
    </div>

    <div className="mt-12 grid gap-8 md:grid-cols-3">
      {visitSteps.map((step, index) => (
        <div
          key={step.title}
          className={`dental-visit-step dental-visit-step-${index} relative rounded-[2rem] bg-[#F8FCFF] p-7 shadow-[0_18px_60px_rgba(16,42,67,0.06)]`}
        >
          <span className="block text-7xl font-light leading-none text-[#3A9AD9]">
            {step.number}
          </span>

          <h3 className="mt-4 text-xl font-black text-[#102A43]">
            {step.title}
          </h3>

          <p className="mt-3 text-sm leading-7 text-[#5F6F82]">
            {step.text}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* BOOKING CTA */}
      <section className="relative overflow-hidden bg-[#3A9AD9] px-5 py-16 sm:px-8 lg:px-10">
        <svg
          className="dental-cta-wave pointer-events-none absolute inset-x-0 top-0 h-40 w-full opacity-30"
          viewBox="0 0 1200 160"
          fill="none"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M0 70C150 10 250 130 400 70C550 10 650 130 800 70C950 10 1050 130 1200 70"
            stroke="white"
            strokeWidth="6"
            strokeLinecap="round"
          />
          <path
            d="M0 115C150 55 250 175 400 115C550 55 650 175 800 115C950 55 1050 175 1200 115"
            stroke="white"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>

        <div className="dental-final-cta relative mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-white/75">
              Ready for dental care?
            </p>

            <h2 className="mt-4 max-w-3xl text-3xl font-black leading-tight tracking-tight text-white sm:text-4xl">
              Book your dental consultation before visiting the clinic.
            </h2>

            <p className="mt-4 max-w-2xl text-sm font-semibold leading-7 text-white/82">
              Dental services are provided physically at the clinic. Booking
              ahead helps the team prepare and manage your appointment flow.
            </p>
          </div>

          <Link
            to={bookingPath}
            className="inline-flex items-center justify-center rounded-xl bg-white px-8 py-4 text-sm font-extrabold text-[#102A43] shadow-[0_20px_50px_rgba(16,42,67,0.20)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#102A43] hover:text-white"
          >
            Continue to Booking
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Dental;