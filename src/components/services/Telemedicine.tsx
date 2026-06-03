import { Link } from "react-router-dom";

import telemedicineIcon from "../../assets/icons/Telemedicine-Icon.png";
import telemedicineImage from "../../assets/images/Telemedicine.png";

const careHighlights = [
  {
    title: "Remote Consultation",
    text: "Speak with a qualified GP from your home, office, or wherever you are.",
  },
  {
    title: "Medical Advice",
    text: "Discuss your symptoms and receive professional guidance on what to do next.",
  },
  {
    title: "Electronic Prescription",
    text: "Where appropriate, your prescription can be issued electronically after consultation.",
  },
];

const suitableFor = [
  "Minor illnesses",
  "Follow-up consultations",
  "Medication reviews",
  "General health advice",
  "Situations where visiting the clinic is not immediately possible",
  "Non-emergency symptoms that can be discussed remotely",
];

const notSuitableFor = [
  "Medical emergencies",
  "Conditions requiring physical examination",
  "Laboratory tests",
  "Scans or imaging",
  "Procedures that must be done at the clinic",
];

const processSteps = [
  {
    step: "01",
    title: "Book your session",
    text: "Complete the booking form and select Telemedicine as your service.",
  },
  {
    step: "02",
    title: "Prepare for your consultation",
    text: "Keep your symptoms, medication list, and previous results ready before the call.",
  },
  {
    step: "03",
    title: "Speak with the doctor",
    text: "The doctor will review your concern, provide advice, and guide you on next steps.",
  },
];

const Telemedicine = () => {
  const bookingPath = "/book?service=Telemedicine&mode=online";

  return (
    <main className="w-full overflow-hidden bg-[#F7FFF8] text-[#102A43]">
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#102A43] px-5 pb-20 pt-28 sm:px-8 lg:px-10 lg:pt-32">
        <div className="tele-grid-pattern pointer-events-none absolute inset-0 opacity-25" />
        <div className="tele-orb tele-orb-one pointer-events-none absolute -left-28 top-20 h-80 w-80 rounded-full bg-[#44CC3A]/25 blur-3xl" />
        <div className="tele-orb tele-orb-two pointer-events-none absolute -right-32 bottom-0 h-[430px] w-[430px] rounded-full bg-[#6BCBEB]/20 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <div className="mb-10 flex flex-wrap items-center gap-2 text-sm font-semibold text-white/65">
            <Link to="/" className="transition hover:text-white">
              Home
            </Link>
            <span>/</span>
            <Link to="/services" className="transition hover:text-white">
              Services
            </Link>
            <span>/</span>
            <span className="text-white">Telemedicine</span>
          </div>

          <div className="grid items-center gap-14 lg:grid-cols-[0.92fr_1.08fr]">
            {/* LEFT CONTENT */}
            <div className="tele-hero-copy">
              <div className="mb-6 flex items-center gap-4">
                <img
                  src={telemedicineIcon}
                  alt="Telemedicine icon"
                  className="h-16 w-16 shrink-0 object-contain sm:h-20 sm:w-20"
                />

                <div>
                  <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#44CC3A]">
                    Online Only Care
                  </p>
                  <p className="mt-2 text-sm font-semibold text-white/70">
                    Remote access to medical guidance.
                  </p>
                </div>
              </div>

              <h1 className="max-w-4xl text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
                Speak with a doctor without coming to the clinic.
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-white/78 sm:text-lg">
                Telemedicine at Enekem Medicals allows you to consult with a
                qualified GP from the comfort of your home, office, or anywhere
                you are. During the session, the doctor will discuss your
                symptoms, provide medical advice, issue prescriptions where
                appropriate, and refer you for in-person tests or specialist care
                if needed.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link
                  to={bookingPath}
                  className="inline-flex items-center justify-center rounded-xl bg-[#44CC3A] px-7 py-4 text-sm font-extrabold text-[#102A43] shadow-[0_20px_50px_rgba(68,204,58,0.24)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#5BE052]"
                >
                  Book Telemedicine
                </Link>

                <a
                  href="#how-it-works"
                  className="inline-flex items-center justify-center rounded-xl border-2 border-white/25 px-7 py-4 text-sm font-extrabold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-[#102A43]"
                >
                  See How It Works
                </a>
              </div>
            </div>

            {/* RIGHT DIGITAL VISUAL */}
            <div className="tele-hero-screen relative">
              <div className="absolute -right-3 bottom-16 z-20 rounded-2xl bg-white px-5 py-4 shadow-[0_22px_70px_rgba(16,42,67,0.22)]">
                <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#3A9AD9]">
                  Mode
                </p>
                <p className="mt-1 text-sm font-black text-[#102A43]">
                  Online Only
                </p>
              </div>

              <div className="relative mx-auto max-w-[570px] rounded-[2.5rem] border-[10px] border-white bg-white shadow-[0_35px_110px_rgba(0,0,0,0.28)]">
                <div className="flex items-center justify-between border-b border-[#D8E8EE] px-5 py-4">
                  <div className="flex items-center gap-2">
                    <span className="h-3 w-3 rounded-full bg-[#FF6B6B]" />
                    <span className="h-3 w-3 rounded-full bg-[#F2C94C]" />
                    <span className="h-3 w-3 rounded-full bg-[#44CC3A]" />
                  </div>

                  <span className="rounded-full bg-[#F7FFF8] px-4 py-2 text-xs font-extrabold text-[#44CC3A]">
                    Secure Session
                  </span>
                </div>

                  <div className="nursing-hero-image relative flex justify-center lg:justify-end">
                    <img
                      src={telemedicineImage}
                      alt="Telemedicine consultation at Enekem Medicals"
                      className="h-[360px] w-full object-cover object-center sm:h-[430px] lg:h-[500px]"
                    />
                  </div>

                  
              </div>
              <div className="tele-pulse-ring absolute -bottom-10 left-1/2 h-28 w-28 -translate-x-1/2 rounded-full border border-[#44CC3A]/35" />
            </div>
          </div>
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section className="bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#44CC3A]">
              Remote Care
            </p>

            <h2 className="mt-4 text-3xl font-black tracking-tight text-[#102A43] sm:text-4xl">
              A practical way to access care when you cannot visit immediately.
            </h2>

            <p className="mt-4 text-base leading-8 text-[#5F6F82]">
              Telemedicine is built for convenience, continuity, and quick
              medical direction when your condition can be reviewed remotely.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {careHighlights.map((item, index) => (
              <div
                key={item.title}
                className={`tele-highlight tele-highlight-${index} rounded-[2rem] border border-[#D8E8EE] bg-[#F7FFF8] p-6 shadow-[0_18px_60px_rgba(16,42,67,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_80px_rgba(16,42,67,0.10)]`}
              >
                <div className="mb-5 h-1.5 w-16 rounded-full bg-[#44CC3A]" />

                <h3 className="text-xl font-black text-[#102A43]">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-[#5F6F82]">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SUITABLE / NOT SUITABLE */}
      <section className="bg-[#F7FFF8] px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2">
          <div className="tele-list-panel rounded-[2.5rem] bg-white p-7 shadow-[0_20px_70px_rgba(16,42,67,0.08)] sm:p-9">
            <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#44CC3A]">
              Suitable For
            </p>

            <h2 className="mt-4 text-3xl font-black tracking-tight text-[#102A43]">
              When telemedicine can help.
            </h2>

            <div className="mt-8 grid gap-4">
              {suitableFor.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-[#44CC3A]" />
                  <p className="text-sm font-semibold leading-7 text-[#102A43]">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="tele-warning-panel rounded-[2.5rem] bg-[#102A43] p-7 text-white shadow-[0_20px_70px_rgba(16,42,67,0.14)] sm:p-9">
            <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#F2C94C]">
              Not Suitable For
            </p>

            <h2 className="mt-4 text-3xl font-black tracking-tight text-white">
              Know when to come in physically.
            </h2>

            <div className="mt-8 grid gap-4">
              {notSuitableFor.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-[#F2C94C]" />
                  <p className="text-sm font-semibold leading-7 text-white/78">
                    {item}
                  </p>
                </div>
              ))}
            </div>

            <p className="mt-8 rounded-2xl bg-white/10 p-5 text-sm leading-7 text-white/75">
              For emergencies, come to the clinic physically or call Enekem
              Medicals immediately.
            </p>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section
        id="how-it-works"
        className="bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-10"
      >
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="tele-process-intro">
            <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#44CC3A]">
              How It Works
            </p>

            <h2 className="mt-4 text-3xl font-black tracking-tight text-[#102A43] sm:text-4xl">
              Simple steps to start your online consultation.
            </h2>

            <p className="mt-4 text-base leading-8 text-[#5F6F82]">
              Book first, prepare your information, then speak with the doctor
              for advice, prescriptions where appropriate, or referral for
              further care.
            </p>

            <Link
              to={bookingPath}
              className="mt-8 inline-flex rounded-xl bg-[#44CC3A] px-7 py-4 text-sm font-extrabold text-[#102A43] transition hover:-translate-y-1 hover:bg-[#5BE052]"
            >
              Continue to Booking
            </Link>
          </div>

          <div className="space-y-5">
            {processSteps.map((item, index) => (
              <div
                key={item.step}
                className={`tele-step tele-step-${index} grid gap-4 rounded-[2rem] bg-[#F7FFF8] p-6 shadow-[0_16px_60px_rgba(16,42,67,0.06)] sm:grid-cols-[80px_1fr] sm:items-start`}
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#44CC3A] text-sm font-black text-[#102A43]">
                  {item.step}
                </div>

                <div>
                  <h3 className="text-xl font-black text-[#102A43]">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-7 text-[#5F6F82]">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-[#44CC3A] px-5 py-16 sm:px-8 lg:px-10">
        <div className="tele-final-cta mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#102A43]/65">
              Ready to connect?
            </p>

            <h2 className="mt-4 max-w-3xl text-3xl font-black leading-tight tracking-tight text-[#102A43] sm:text-4xl">
              Start your telemedicine booking and receive care guidance online.
            </h2>

            <p className="mt-4 max-w-2xl text-sm font-semibold leading-7 text-[#102A43]/75">
              This service is online only and designed for patients who need
              convenient remote access to medical advice.
            </p>
          </div>

          <Link
            to={bookingPath}
            className="inline-flex items-center justify-center rounded-xl bg-[#102A43] px-8 py-4 text-sm font-extrabold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#0B1F33]"
          >
            Book Telemedicine
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Telemedicine;