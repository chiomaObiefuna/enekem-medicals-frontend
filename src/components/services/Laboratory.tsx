import { Link } from "react-router-dom";

import laboratoryIcon from "../../assets/icons/laboratory-icon.png";
import laboratoryImage from "../../assets/images/laboratory.png";

const labTests = [
  {
    label: "Blood Tests",
    text: "Full blood count, blood glucose, lipid profile, liver function, kidney function, and other blood investigations.",
  },
  {
    label: "Urine Analysis",
    text: "Routine urine checks to support diagnosis and clinical decision-making.",
  },
  {
    label: "Pregnancy Test",
    text: "Fast pregnancy testing carried out physically at the clinic.",
  },
  {
    label: "Malaria Test",
    text: "Diagnostic testing for malaria symptoms and related clinical concerns.",
  },
  {
    label: "Typhoid Test",
    text: "Testing to support diagnosis where typhoid infection is suspected.",
  },
  {
    label: "HIV Screening",
    text: "Confidential screening carried out by trained laboratory professionals.",
  },
];

const suitableFor = [
  "Doctor-requested laboratory tests",
  "Routine health checks",
  "Fever or infection investigations",
  "Pregnancy confirmation",
  "Malaria and typhoid screening",
  "Blood sugar, cholesterol, liver, or kidney function checks",
];

const visitNotes = [
  "Bring any doctor’s request or referral document, if available.",
  "Bring previous test results if you have them.",
  "Bring a list of current medications you are taking.",
  "Ask the team if your test requires fasting or special preparation.",
];

const labProcess = [
  {
    number: "01",
    title: "Book your lab visit",
    text: "Choose Laboratory Diagnosis and select a suitable appointment time.",
  },
  {
    number: "02",
    title: "Sample collection",
    text: "A physical sample such as blood, urine, or swab is collected at the clinic.",
  },
  {
    number: "03",
    title: "Testing and result review",
    text: "Your sample is analysed on-site, and results are shared based on the test type.",
  },
];

const Laboratory = () => {
  const bookingPath = "/book?service=laboratory&mode=physical";

  return (
    <main className="w-full overflow-hidden bg-[#F4F7FF] text-[#102A43]">
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#F4F7FF] px-5 pb-20 pt-28 sm:px-8 lg:px-10 lg:pt-32">
        {/* Bubble background */}
        <div className="lab-bubble lab-bubble-one" />
        <div className="lab-bubble lab-bubble-two" />
        <div className="lab-bubble lab-bubble-three" />
        <div className="lab-bubble lab-bubble-four" />

        <div className="relative mx-auto max-w-7xl">
          <div className="mb-10 flex flex-wrap items-center gap-2 text-sm font-semibold text-[#5F6F82]">
            <Link to="/" className="transition hover:text-[#102A43]">
              Home
            </Link>
            <span>/</span>
            <Link to="/services" className="transition hover:text-[#102A43]">
              Services
            </Link>
            <span>/</span>
            <span className="text-[#102A43]">Laboratory Diagnosis</span>
          </div>

          <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]">
            {/* LEFT COPY */}
            <div className="lab-hero-copy">
              <div className="mb-6 flex items-center gap-4">
                <img
                  src={laboratoryIcon}
                  alt="Laboratory diagnosis icon"
                  className="h-16 w-16 shrink-0 object-contain sm:h-20 sm:w-20"
                />

                <div>
                  <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#A67C00]">
                    On-site Laboratory Testing
                  </p>
                  <p className="mt-2 text-sm font-semibold text-[#5F6F82]">
                    Physical sample collection and diagnostic support.
                  </p>
                </div>
              </div>

              <h1 className="max-w-4xl text-4xl font-black leading-tight tracking-tight text-[#102A43] sm:text-5xl lg:text-6xl">
                Reliable laboratory diagnosis for clearer health decisions.
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-[#5F6F82] sm:text-lg">
                Enekem Medicals provides on-site laboratory diagnosis for a wide
                range of investigations, including blood tests, urine analysis,
                pregnancy tests, malaria tests, typhoid tests, HIV screening,
                and other diagnostic checks. Samples are collected physically at
                the clinic and analysed by trained laboratory professionals.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link
                  to={bookingPath}
                  className="inline-flex items-center justify-center rounded-xl bg-[#ffe97f] px-7 py-4 text-sm font-extrabold text-[#102A43] shadow-[0_20px_50px_rgba(255,233,127,0.4)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#F2C94C]"
                >
                  Book Laboratory Test
                </Link>

                <a
                  href="#lab-tests"
                  className="inline-flex items-center justify-center rounded-xl border-2 border-[#102A43]/15 bg-white px-7 py-4 text-sm font-extrabold text-[#102A43] transition-all duration-300 hover:-translate-y-1 hover:bg-[#102A43] hover:text-white"
                >
                  View Tests
                </a>
              </div>
            </div>

            {/* RIGHT IMAGE WITH BUBBLE FEEL */}
            <div className="lab-hero-image relative">
              <div className="lab-image-bubble lab-image-bubble-one" />
              <div className="lab-image-bubble lab-image-bubble-two" />
              <div className="lab-image-bubble lab-image-bubble-three" />

              <div className="relative overflow-hidden rounded-[3rem] bg-white p-3 shadow-[0_35px_100px_rgba(16,42,67,0.14)]">
                <img
                  src={laboratoryImage}
                  alt="Medical laboratory diagnosis at Enekem Medicals"
                  className="h-[360px] w-full rounded-[2.4rem] object-cover object-center sm:h-[430px] lg:h-[520px]"
                />
              </div>

              <div className="lab-floating-card lab-floating-card-one absolute -left-2 top-10 rounded-[1.5rem] bg-white px-5 py-4 shadow-[0_22px_70px_rgba(16,42,67,0.16)]">
                <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#A67C00]">
                  Price
                </p>
                <p className="mt-1 text-sm font-black text-[#102A43]">
                  Varies by test
                </p>
              </div>

              <div className="lab-floating-card lab-floating-card-two absolute -right-2 bottom-12 rounded-[1.5rem] bg-white px-5 py-4 shadow-[0_22px_70px_rgba(16,42,67,0.16)]">
                <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#102A43]/60">
                  Duration
                </p>
                <p className="mt-1 text-sm font-black text-[#102A43]">
                  15 to 30 mins
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FACT STRIP */}
      <section className="border-y border-[#D8E8EE] bg-white px-5 py-8 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-3">
          <div className="lab-fact rounded-[2rem] bg-[#F4F7FF] p-5">
            <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#A67C00]">
              Mode
            </p>
            <p className="mt-2 text-base font-extrabold text-[#102A43]">
              Physical Only
            </p>
          </div>

          <div className="lab-fact lab-delay-1 rounded-[2rem] bg-[#FFF9CC] p-5">
            <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#A67C00]">
              Price
            </p>
            <p className="mt-2 text-base font-extrabold text-[#102A43]">
              Varies by test
            </p>
          </div>

          <div className="lab-fact lab-delay-2 rounded-[2rem] bg-[#F4F7FF] p-5">
            <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#A67C00]">
              Duration
            </p>
            <p className="mt-2 text-base font-extrabold text-[#102A43]">
              15 to 30 minutes
            </p>
          </div>
        </div>
      </section>

      {/* TESTS */}
      <section
        id="lab-tests"
        className="relative bg-[#FFFFFF] px-5 py-16 sm:px-8 sm:py-20 lg:px-10"
      >
        <div className="lab-section-bubble lab-section-bubble-one" />
        <div className="lab-section-bubble lab-section-bubble-two" />

        <div className="relative mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#A67C00]">
              Diagnostic Tests
            </p>

            <h2 className="mt-4 text-3xl font-black tracking-tight text-[#102A43] sm:text-4xl">
              Laboratory checks for everyday and doctor-requested investigations.
            </h2>

            <p className="mt-4 text-base leading-8 text-[#5F6F82]">
              Laboratory tests require physical samples such as blood, urine, or
              swabs. Samples are collected and processed at the clinic.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {labTests.map((test, index) => (
              <div
                key={test.label}
                className={`lab-test-card lab-test-card-${index} group relative overflow-hidden rounded-[2.2rem] bg-[#F4F7FF] p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[0_24px_80px_rgba(16,42,67,0.10)]`}
              >
                <span className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-[#ffe97f]/45 transition group-hover:scale-125" />

                <div className="relative">
                  <span className="mb-5 block h-3 w-16 rounded-full bg-[#ffe97f]" />

                  <h3 className="text-xl font-black text-[#102A43]">
                    {test.label}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-[#5F6F82]">
                    {test.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SUITABLE + PREP */}
      <section className="bg-[#F4F7FF] px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="lab-panel rounded-[2.5rem] bg-white p-7 shadow-[0_20px_70px_rgba(16,42,67,0.08)] sm:p-9">
            <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#A67C00]">
              Suitable For
            </p>

            <h2 className="mt-4 text-3xl font-black tracking-tight text-[#102A43]">
              When laboratory diagnosis can help.
            </h2>

            <div className="mt-8 grid gap-4">
              {suitableFor.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-[#ffe97f]" />
                  <p className="text-sm font-semibold leading-7 text-[#102A43]">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="lab-panel lab-panel-delay rounded-[2.5rem] bg-[#102A43] p-7 text-white shadow-[0_24px_80px_rgba(16,42,67,0.18)] sm:p-9">
            <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#ffe97f]">
              Before Your Test
            </p>

            <h2 className="mt-4 text-3xl font-black tracking-tight text-white">
              What to bring or ask before testing.
            </h2>

            <div className="mt-8 grid gap-4">
              {visitNotes.map((note) => (
                <div key={note} className="flex items-start gap-3">
                  <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-[#ffe97f]" />
                  <p className="text-sm font-semibold leading-7 text-white/78">
                    {note}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#A67C00]">
              Lab Visit Flow
            </p>

            <h2 className="mt-4 text-3xl font-black tracking-tight text-[#102A43] sm:text-4xl">
              From sample collection to result guidance.
            </h2>
          </div>

          <div className="mt-14 grid gap-10 md:grid-cols-3">
            {labProcess.map((step, index) => (
              <div
                key={step.title}
                className={`lab-process lab-process-${index} text-center`}
              >
                <span className="block text-7xl font-light leading-none text-[#ffe97f] sm:text-8xl">
                  {step.number}
                </span>

                <h3 className="mt-3 text-2xl font-black text-[#102A43]">
                  {step.title}
                </h3>

                <p className="mx-auto mt-4 max-w-sm text-sm leading-7 text-[#5F6F82]">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-[#ffe97f] px-5 py-16 sm:px-8 lg:px-10">
        <div className="lab-cta-bubble lab-cta-bubble-one" />
        <div className="lab-cta-bubble lab-cta-bubble-two" />

        <div className="lab-final-cta relative mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#102A43]/65">
              Ready for your test?
            </p>

            <h2 className="mt-4 max-w-3xl text-3xl font-black leading-tight tracking-tight text-[#102A43] sm:text-4xl">
              Book your laboratory diagnosis before visiting the clinic.
            </h2>

            <p className="mt-4 max-w-2xl text-sm font-semibold leading-7 text-[#102A43]/75">
              Laboratory testing is done physically at the clinic because
              samples must be collected and analysed on-site.
            </p>
          </div>

          <Link
            to={bookingPath}
            className="inline-flex items-center justify-center rounded-xl bg-[#102A43] px-8 py-4 text-sm font-extrabold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#243B53]"
          >
            Continue to Booking
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Laboratory;