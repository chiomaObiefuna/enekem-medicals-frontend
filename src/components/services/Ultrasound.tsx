// src/components/services/Ultrasound.tsx

import { Link } from "react-router-dom";

import ultrasoundIcon from "../../assets/icons/ultra-scan.png";
import ultrasoundImage from "../../assets/images/ultrascan.png";

const scanTypes = [
  {
    code: "US-01",
    title: "Abdominal Ultrasound",
    text: "Used to assess abdominal pain, organs, swelling, and other internal concerns.",
    path: "/book?service=ultrasound&mode=physical&subservice=abdominal-ultrasound",
  },
  {
    code: "US-02",
    title: "Pelvic Ultrasound",
    text: "Supports pelvic assessment and investigation of reproductive or lower abdominal concerns.",
    path: "/book?service=ultrasound&mode=physical&subservice=pelvic-ultrasound",
  },
  {
    code: "US-03",
    title: "Obstetric Ultrasound",
    text: "Pregnancy scan support for monitoring fetal development and pregnancy progress.",
    path: "/book?service=ultrasound&mode=physical&subservice=obstetric-ultrasound",
  },
  {
    code: "US-04",
    title: "Breast Ultrasound",
    text: "Used to assess breast lumps, pain, or other soft tissue concerns.",
    path: "/book?service=ultrasound&mode=physical&subservice=breast-ultrasound",
  },
  {
    code: "US-05",
    title: "Scrotal Ultrasound",
    text: "Supports assessment of scrotal pain, swelling, lumps, or related concerns.",
    path: "/book?service=ultrasound&mode=physical&subservice=scrotal-ultrasound",
  },
];

const suitableFor = [
  "Pregnancy monitoring",
  "Abdominal pain investigation",
  "Pelvic assessments",
  "Breast lumps or breast pain",
  "Soft tissue imaging",
  "Doctor-requested scan review",
];

const visitNotes = [
  "Bring previous scan results if available.",
  "Bring any referral document or doctor’s request, if you have one.",
  "Tell the sonographer if you are pregnant or suspect pregnancy.",
  "Arrive early enough for preparation before the scan.",
];

const scanProcess = [
  {
    number: "01",
    title: "Book your scan",
    text: "Choose Ultrasound Scan Services and select the scan type that matches your need.",
  },
  {
    number: "02",
    title: "Visit the clinic",
    text: "Ultrasound requires specialist equipment and a trained sonographer physically present.",
  },
  {
    number: "03",
    title: "Receive review",
    text: "Your scan is reviewed by a qualified doctor and discussed with you on the same visit.",
  },
];

const Ultrasound = () => {
  const bookingPath = "/book?service=ultrasound&mode=physical";

  return (
    <main className="w-full overflow-hidden bg-[#F5FAFF] text-[#102A43]">
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#01369E] px-5 pb-20 pt-28 sm:px-8 lg:px-10 lg:pt-32">
        {/* Diagnostic grid background */}
        <div className="ultra-grid pointer-events-none absolute inset-0 opacity-20" />
        <div className="ultra-scan-line pointer-events-none absolute left-0 top-0 h-full w-full" />
        <div className="ultra-orb-one pointer-events-none absolute -left-32 top-20 h-96 w-96 rounded-full bg-[#44CC3A]/20 blur-3xl" />
        <div className="ultra-orb-two pointer-events-none absolute -right-40 bottom-0 h-[460px] w-[460px] rounded-full bg-white/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <div className="mb-10 flex flex-wrap items-center gap-2 text-sm font-semibold text-white/70">
            <Link to="/" className="transition hover:text-white">
              Home
            </Link>
            <span>/</span>
            <Link to="/services" className="transition hover:text-white">
              Services
            </Link>
            <span>/</span>
            <span className="text-white">Ultrasound Scan Services</span>
          </div>

          <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]">
            {/* LEFT COPY */}
            <div className="ultra-hero-copy">
              <div className="mb-6 flex items-center gap-4">
                <img
                  src={ultrasoundIcon}
                  alt="Ultrasound scan icon"
                  className="h-16 w-16 shrink-0 object-contain sm:h-20 sm:w-20"
                />

                <div>
                  <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#44CC3A]">
                    Diagnostic Imaging
                  </p>
                  <p className="mt-2 text-sm font-semibold text-white/75">
                    Physical scan service with same-visit review.
                  </p>
                </div>
              </div>

              <h1 className="max-w-4xl text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
                Clear ultrasound imaging for better clinical decisions.
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-white/80 sm:text-lg">
                Enekem Medicals offers a full range of ultrasound scanning
                services using modern equipment. Our ultrasound services include
                abdominal, pelvic, obstetric, breast, and scrotal scans. Each
                scan is reviewed by a qualified doctor and discussed with you on
                the same visit.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link
                  to={bookingPath}
                  className="inline-flex items-center justify-center rounded-xl bg-[#44CC3A] px-7 py-4 text-sm font-extrabold text-[#102A43] shadow-[0_20px_50px_rgba(68,204,58,0.24)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#5BE052]"
                >
                  Book Ultrasound Scan
                </Link>

                <a
                  href="#scan-types"
                  className="inline-flex items-center justify-center rounded-xl border-2 border-white/25 px-7 py-4 text-sm font-extrabold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-[#01369E]"
                >
                  View Scan Types
                </a>
              </div>
            </div>

            {/* RIGHT DIAGNOSTIC VISUAL */}
            {/* RIGHT HERO IMAGE */}
          <div className="ultra-hero-visual relative">
            <div className="relative overflow-hidden rounded-[2.5rem]">
              <img
                src={ultrasoundImage}
                alt="Pregnant patient receiving an ultrasound scan at Enekem Medicals"
                className="h-[360px] w-full object-cover object-center sm:h-[430px] lg:h-[520px]"
              />

              {/* subtle scan effect only, no frame */}
              <div className="ultra-image-overlay pointer-events-none absolute inset-0" />
              <div className="ultra-moving-beam pointer-events-none absolute inset-0" />
            </div>

            <div className="ultra-mini-panel ultra-mini-panel-one absolute -left-3 top-10 rounded-2xl bg-white px-5 py-4 shadow-[0_22px_70px_rgba(16,42,67,0.20)]">
              <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#01369E]">
                Duration
              </p>
              <p className="mt-1 text-sm font-black text-[#102A43]">
                20 to 45 mins
              </p>
            </div>

            <div className="ultra-mini-panel ultra-mini-panel-two absolute -right-2 bottom-12 rounded-2xl bg-white px-5 py-4 shadow-[0_22px_70px_rgba(16,42,67,0.20)]">
              <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#44CC3A]">
                Price
              </p>
              <p className="mt-1 text-sm font-black text-[#102A43]">
                Varies by scan
              </p>
            </div>
          </div>
           </div>
        </div>
      </section>

      {/* FACT STRIP */}
      <section className="border-y border-[#D8E8EE] bg-white px-5 py-8 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-3">
          <div className="ultra-fact rounded-[1.7rem] bg-[#F5FAFF] p-5">
            <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#01369E]">
              Mode
            </p>
            <p className="mt-2 text-base font-extrabold text-[#102A43]">
              Physical Only
            </p>
          </div>

          <div className="ultra-fact ultra-delay-1 rounded-[1.7rem] bg-[#F7FFF6] p-5">
            <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#44CC3A]">
              Price
            </p>
            <p className="mt-2 text-base font-extrabold text-[#102A43]">
              Varies by scan type
            </p>
          </div>

          <div className="ultra-fact ultra-delay-2 rounded-[1.7rem] bg-[#F5FAFF] p-5">
            <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#01369E]">
              Duration
            </p>
            <p className="mt-2 text-base font-extrabold text-[#102A43]">
              20 to 45 minutes
            </p>
          </div>
        </div>
      </section>

      {/* SCAN TYPES */}
      <section
        id="scan-types"
        className="relative bg-[#F5FAFF] px-5 py-16 sm:px-8 sm:py-20 lg:px-10"
      >
        <div className="pointer-events-none absolute right-0 top-10 h-[420px] w-[420px] rounded-full bg-[#44CC3A]/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#44CC3A]">
              Scan Types
            </p>

            <h2 className="mt-4 text-3xl font-black tracking-tight text-[#102A43] sm:text-4xl">
              Choose the ultrasound scan that matches your concern.
            </h2>

            <p className="mt-4 text-base leading-8 text-[#5F6F82]">
              Ultrasound scans require specialist equipment and a trained
              sonographer physically present at the clinic. If you are unsure
              which scan to book, start with a GP consultation or contact the
              team for guidance.
            </p>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-[1fr_1fr]">
            {scanTypes.map((scan, index) => (
              <Link
                key={scan.title}
                to={scan.path}
                className={`ultra-scan-card ultra-scan-card-${index} group relative overflow-hidden rounded-[2.2rem] bg-white p-6 shadow-[0_18px_60px_rgba(16,42,67,0.07)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_80px_rgba(16,42,67,0.12)]`}
              >
                <div className="absolute right-0 top-0 h-full w-1.5 bg-[#44CC3A] opacity-0 transition group-hover:opacity-100" />

                <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[#01369E] text-xs font-black text-white">
                    {scan.code}
                  </div>

                  <div>
                    <h3 className="text-xl font-black text-[#102A43]">
                      {scan.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-[#5F6F82]">
                      {scan.text}
                    </p>

                    <span className="mt-5 inline-flex rounded-full bg-[#F7FFF6] px-5 py-3 text-sm font-extrabold text-[#102A43] transition group-hover:bg-[#44CC3A]">
                      Book this scan
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SUITABLE FOR + WHAT TO BRING */}
      <section className="bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_0.95fr]">
          <div className="ultra-panel rounded-[2.5rem] bg-[#01369E] p-7 text-white shadow-[0_24px_80px_rgba(1,54,158,0.18)] sm:p-9">
            <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#44CC3A]">
              Suitable For
            </p>

            <h2 className="mt-4 text-3xl font-black tracking-tight text-white">
              When an ultrasound scan may be useful.
            </h2>

            <div className="mt-8 grid gap-4">
              {suitableFor.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-[#44CC3A]" />
                  <p className="text-sm font-semibold leading-7 text-white/82">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="ultra-panel ultra-panel-delay rounded-[2.5rem] bg-[#F7FFF6] p-7 shadow-[0_20px_70px_rgba(16,42,67,0.08)] sm:p-9">
            <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#01369E]">
              Before Your Scan
            </p>

            <h2 className="mt-4 text-3xl font-black tracking-tight text-[#102A43]">
              What to bring or prepare.
            </h2>

            <div className="mt-8 grid gap-4">
              {visitNotes.map((note) => (
                <div key={note} className="flex items-start gap-3">
                  <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-[#01369E]" />
                  <p className="text-sm font-semibold leading-7 text-[#102A43]">
                    {note}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-[#F5FAFF] px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#44CC3A]">
              Appointment Flow
            </p>

            <h2 className="mt-4 text-3xl font-black tracking-tight text-[#102A43] sm:text-4xl">
              How your ultrasound appointment works.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {scanProcess.map((step, index) => (
              <div
                key={step.title}
                className={`ultra-process ultra-process-${index} relative rounded-[2.2rem] bg-white p-7 shadow-[0_18px_60px_rgba(16,42,67,0.07)]`}
              >
                <span className="block text-6xl font-light leading-none text-[#44CC3A]">
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

      {/* CTA */}
      <section className="relative overflow-hidden bg-[#01369E] px-5 py-16 sm:px-8 lg:px-10">
        <div className="ultra-grid pointer-events-none absolute inset-0 opacity-15" />

        <div className="ultra-final-cta relative mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#44CC3A]">
              Ready for your scan?
            </p>

            <h2 className="mt-4 max-w-3xl text-3xl font-black leading-tight tracking-tight text-white sm:text-4xl">
              Book your ultrasound scan before visiting the clinic.
            </h2>

            <p className="mt-4 max-w-2xl text-sm font-semibold leading-7 text-white/75">
              Ultrasound services are provided physically at the clinic. Booking
              ahead helps the team prepare for your scan type and appointment
              flow.
            </p>
          </div>

          <Link
            to={bookingPath}
            className="inline-flex items-center justify-center rounded-xl bg-[#44CC3A] px-8 py-4 text-sm font-extrabold text-[#102A43] shadow-[0_20px_50px_rgba(68,204,58,0.24)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#5BE052]"
          >
            Continue to Booking
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Ultrasound;