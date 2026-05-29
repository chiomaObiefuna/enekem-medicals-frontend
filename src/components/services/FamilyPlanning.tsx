import { Link } from "react-router-dom";
import familyPlanningIcon from "../../assets/icons/family-planning.png";
import familyPlanningImage from "../../assets/images/family-planning.jpg";

const planningOptions = [
  {
    number: "1",
    title: "Implanon",
    duration: "Up to 3 years",
    text: "A small rod inserted under the skin of the upper arm. It is highly effective, reversible, and suitable for long-term contraceptive protection.",
    path: "/book?service=family-planning&mode=physical&subservice=implanon",
  },
  {
    number: "2",
    title: "Jadelle",
    duration: "Up to 5 years",
    text: "Two small rods inserted under the skin of the upper arm. It provides longer-term protection and can be removed when pregnancy is desired.",
    path: "/book?service=family-planning&mode=physical&subservice=jadelle",
  },
  {
    number: "3",
    title: "IUD",
    duration: "5 to 10 years",
    text: "A small T-shaped device inserted into the womb. It may be hormonal or copper-based, depending on your health needs and preference.",
    path: "/book?service=family-planning&mode=physical&subservice=iud",
  },
];

const guidancePoints = [
  "Contraception counselling and advice",
  "Pregnancy spacing support",
  "Implant and IUD option discussion",
  "Reproductive health guidance",
  "Procedure counselling before insertion",
  "Support for choosing a reversible method",
];

const visitNotes = [
  "Bring any previous reproductive health records, if available.",
  "Tell the doctor about current medications or existing health conditions.",
  "Come prepared to discuss your goals, concerns, and preferred contraception timeline.",
  "If you use HMO, bring your HMO card or authorisation details.",
];

const careSteps = [
  {
    number: "1",
    title: "Discuss your goals",
    text: "The doctor listens to your needs, health history, concerns, and preferred pregnancy spacing plan.",
  },
  {
    number: "2",
    title: "Review your options",
    text: "You receive clear counselling on Implanon, Jadelle, IUD, and what each method means for your body.",
  },
  {
    number: "3",
    title: "Choose your method",
    text: "If you choose an insertable option, the procedure may be carried out during the same visit where appropriate.",
  },
];

const FamilyPlanning = () => {
  const bookingPath = "/book?service=family-planning&mode=physical";

  return (
    <main className="w-full overflow-hidden bg-[#E9ECEF] text-[#102A43]">
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#F7FAF7] px-5 pb-20 pt-28 sm:px-8 lg:px-10 lg:pt-32">
        <div className="family-soft-orb family-soft-orb-one pointer-events-none absolute -left-24 top-16 h-80 w-80 rounded-full bg-[#8CCB8C]/35 blur-3xl" />
        <div className="family-soft-orb family-soft-orb-two pointer-events-none absolute right-[-120px] bottom-[-80px] h-[420px] w-[420px] rounded-full bg-[#A67C00]/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <div className="mb-10 flex flex-wrap items-center gap-2 text-sm font-semibold text-[#5F6F82]">
            <Link to="/" className="transition hover:text-[#A67C00]">
              Home
            </Link>
            <span>/</span>
            <Link to="/services" className="transition hover:text-[#A67C00]">
              Services
            </Link>
            <span>/</span>
            <span className="text-[#102A43]">Family Planning</span>
          </div>

          <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]">
            {/* LEFT */}
            <div className="family-hero-copy">
              <div className="mb-6 flex items-center gap-4">
                <img
                  src={familyPlanningIcon}
                  alt="Family planning icon"
                  className="h-16 w-16 shrink-0 object-contain sm:h-20 sm:w-20"
                />

                <div>
                  <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#A67C00]">
                    Private Reproductive Care
                  </p>
                  <p className="mt-2 text-sm font-semibold text-[#5F6F82]">
                    Physical consultation with clear counselling.
                  </p>
                </div>
              </div>

              <h1 className="max-w-4xl text-4xl font-black leading-tight tracking-tight text-[#102A43] sm:text-5xl lg:text-6xl">
                Family planning support that helps you choose with confidence.
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-[#5F6F82] sm:text-lg">
                Family Planning at Enekem Medicals helps you make informed
                choices about contraception and reproductive health. Our doctor
                will counsel you on available options, explain how each method
                works, and support you in choosing the right option for your
                body, goals, and timeline.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link
                  to={bookingPath}
                  className="inline-flex items-center justify-center rounded-xl bg-[#8CCB8C] px-7 py-4 text-sm font-extrabold text-[#102A43] shadow-[0_20px_50px_rgba(140,203,140,0.35)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#79BE79]"
                >
                  Book Family Planning
                </Link>

                <a
                  href="#options"
                  className="inline-flex items-center justify-center rounded-xl border-2 border-[#A67C00]/35 bg-white px-7 py-4 text-sm font-extrabold text-[#102A43] transition-all duration-300 hover:-translate-y-1 hover:bg-[#A67C00] hover:text-white"
                >
                  View Options
                </a>
              </div>
            </div>

            {/* RIGHT IMAGE */}
            <div className="family-hero-image relative">
              <div className="absolute -left-5 -top-5 h-full w-full rounded-[2.5rem] bg-[#8CCB8C]/35" />

              <div className="relative overflow-hidden rounded-[2.5rem] bg-white p-4 shadow-[0_35px_100px_rgba(16,42,67,0.16)]">
                <img
                  src={familyPlanningImage}
                  alt="Family planning consultation at Enekem Medicals"
                  className="h-[360px] w-full rounded-[2rem] object-cover object-center sm:h-[430px] lg:h-[520px]"
                />
              </div>

              <div className="absolute -bottom-8 left-7 max-w-xs rounded-[1.7rem] bg-white px-6 py-5 shadow-[0_22px_70px_rgba(16,42,67,0.15)]">
                <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#A67C00]">
                  Physical Only
                </p>
                <p className="mt-2 text-2xl font-black text-[#102A43]">
                  ₦15,000
                </p>
                <p className="mt-1 text-xs font-semibold leading-5 text-[#5F6F82]">
                  Consultation fee. Contraceptive costs vary.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FACT STRIP */}
      <section className="border-y border-[#D8E8EE] bg-white px-5 py-8 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-3">
          <div className="family-fact rounded-[1.7rem] bg-[#F3F7F3] p-5">
            <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#A67C00]">
              Mode
            </p>
            <p className="mt-2 text-base font-extrabold text-[#102A43]">
              Physical Only
            </p>
          </div>

          <div className="family-fact family-delay-1 rounded-[1.7rem] bg-[#F6FFF6] p-5">
            <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#8CCB8C]">
              Consultation
            </p>
            <p className="mt-2 text-base font-extrabold text-[#102A43]">
              ₦15,000
            </p>
          </div>

          <div className="family-fact family-delay-2 rounded-[1.7rem] bg-[#F8F6EF] p-5">
            <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#A67C00]">
              Duration
            </p>
            <p className="mt-2 text-base font-extrabold text-[#102A43]">
              15 to 30 minutes
            </p>
          </div>
        </div>
      </section>

      {/* EXPECT / NUMBER PATTERN */}
      <section
        id="options"
        className="bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-10"
      >
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#A67C00]">
              Available Options
            </p>

            <h2 className="mt-4 text-3xl font-black tracking-tight text-[#102A43] sm:text-4xl">
              With Enekem Medicals family planning, you can discuss:
            </h2>
          </div>

          <div className="mt-14 grid gap-10 md:grid-cols-3">
            {planningOptions.map((option, index) => (
              <Link
                key={option.title}
                to={option.path}
                className={`family-option family-option-${index} group text-center transition-all duration-300 hover:-translate-y-2`}
              >
                <span className="block text-7xl font-light leading-none text-[#8CCB8C] sm:text-8xl">
                  {option.number}
                </span>

                <h3 className="mt-3 text-2xl font-black text-[#102A43] transition group-hover:text-[#A67C00]">
                  {option.title}
                </h3>

                <p className="mt-2 text-sm font-extrabold uppercase tracking-[0.16em] text-[#A67C00]">
                  {option.duration}
                </p>

                <p className="mx-auto mt-4 max-w-sm text-sm leading-7 text-[#5F6F82]">
                  {option.text}
                </p>

                <span className="mt-6 inline-flex rounded-full bg-[#E9ECEF] px-5 py-3 text-sm font-extrabold text-[#102A43] transition group-hover:bg-[#8CCB8C]">
                  Book this option
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* GUIDANCE + STEPS */}
      <section className="bg-[#E9ECEF] px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="family-guidance rounded-[2.5rem] bg-white p-7 shadow-[0_20px_70px_rgba(16,42,67,0.08)] sm:p-9">
            <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#A67C00]">
              Suitable For
            </p>

            <h2 className="mt-4 text-3xl font-black tracking-tight text-[#102A43]">
              Designed for informed reproductive choices.
            </h2>

            <div className="mt-8 grid gap-4">
              {guidancePoints.map((point) => (
                <div key={point} className="flex items-start gap-3">
                  <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-[#8CCB8C]" />
                  <p className="text-sm font-semibold leading-7 text-[#102A43]">
                    {point}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="family-steps rounded-[2.5rem] bg-[#102A43] p-7 text-white shadow-[0_24px_80px_rgba(16,42,67,0.18)] sm:p-9">
            <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#8CCB8C]">
              How The Visit Works
            </p>

            <h2 className="mt-4 text-3xl font-black tracking-tight text-white">
              A calm conversation before any decision.
            </h2>

            <div className="mt-10 space-y-8">
              {careSteps.map((step, index) => (
                <div
                  key={step.title}
                  className={`family-step family-step-${index}`}
                >
                  <span className="block text-6xl font-light leading-none text-[#8CCB8C]">
                    {step.number}
                  </span>

                  <h3 className="mt-2 text-xl font-black text-white">
                    {step.title}
                  </h3>

                  <p className="mt-2 text-sm leading-7 text-white/70">
                    {step.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* BEFORE VISIT + CTA */}
      <section className="bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_420px]">
          <div className="family-before rounded-[2.5rem] bg-[#F8F6EF] p-7 sm:p-9">
            <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#A67C00]">
              Before Your Visit
            </p>

            <h2 className="mt-4 text-3xl font-black tracking-tight text-[#102A43]">
              What to bring or prepare.
            </h2>

            <div className="mt-8 space-y-4">
              {visitNotes.map((note) => (
                <div key={note} className="flex items-start gap-3">
                  <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-[#A67C00]" />
                  <p className="text-sm font-semibold leading-7 text-[#102A43]">
                    {note}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <aside className="family-cta rounded-[2.5rem] bg-[#8CCB8C] p-7 shadow-[0_24px_80px_rgba(140,203,140,0.25)] sm:p-8">
            <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#102A43]/70">
              Ready to book?
            </p>

            <h3 className="mt-4 text-3xl font-black leading-tight text-[#102A43]">
              Book your family planning consultation.
            </h3>

            <p className="mt-4 text-sm leading-7 text-[#102A43]/80">
              Family planning services are provided physically at the clinic.
              Booking ahead helps the team prepare for your consultation and
              selected option.
            </p>

            <Link
              to={bookingPath}
              className="mt-7 inline-flex w-full items-center justify-center rounded-xl bg-[#102A43] px-6 py-4 text-sm font-extrabold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#A67C00]"
            >
              Continue to Booking
            </Link>

            <p className="mt-5 text-xs leading-6 text-[#102A43]/70">
              Consultation fee is ₦15,000. Contraceptive costs vary depending on
              the chosen option.
            </p>
          </aside>
        </div>
      </section>
    </main>
  );
};

export default FamilyPlanning;