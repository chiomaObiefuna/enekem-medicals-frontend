import { Link } from "react-router-dom";
import ecgIcon from "../../assets/icons//ecg.png";

const ecgUses = [
  {
    title: "Chest Pain Review",
    text: "An ECG can help investigate chest pain and identify signs that may need urgent or specialist attention.",
  },
  {
    title: "Heart Rhythm Check",
    text: "Useful for checking irregular heartbeat, palpitations, dizziness, and rhythm-related concerns.",
  },
  {
    title: "Pre-Operative Assessment",
    text: "ECG may be requested before surgery to support safe clinical decision-making.",
  },
  {
    title: "Known Heart Conditions",
    text: "Patients with existing heart concerns may need ECG monitoring as part of ongoing care.",
  },
];

const suitableFor = [
  "Chest pain",
  "Palpitations or irregular heartbeat",
  "Shortness of breath",
  "Dizziness or fainting concerns",
  "Routine cardiac screening",
  "Pre-operative assessment",
];

const visitNotes = [
  "Wear comfortable clothing so electrodes can be placed properly.",
  "Bring any previous ECG results or heart-related reports, if available.",
  "Bring a list of current medications you are taking.",
  "Tell the team if you have chest pain, dizziness, or shortness of breath.",
];

const ecgFlow = [
  {
    number: "01",
    title: "Book your ECG",
    text: "Choose ECG in the booking form and select a suitable appointment time.",
  },
  {
    number: "02",
    title: "Electrode placement",
    text: "Small electrodes are placed on your body to record your heart’s electrical activity.",
  },
  {
    number: "03",
    title: "Doctor review",
    text: "Your ECG result is interpreted by the cardiologist or GP and discussed with you.",
  },
];

const ECG = () => {
  const bookingPath = "/book?service=ecg&mode=physical";

  return (
    <main className="w-full overflow-hidden bg-[#edf2fb] text-[#102A43]">
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#004b23] px-5 pb-20 pt-28 sm:px-8 lg:px-10 lg:pt-32">
        {/* Background ECG pattern */}
        <div className="ecg-grid pointer-events-none absolute inset-0 opacity-25" />

        <svg
          className="ecg-bg-line ecg-bg-line-one pointer-events-none absolute left-0 top-24 h-28 w-full opacity-30"
          viewBox="0 0 1200 140"
          fill="none"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M0 80H120L150 80L170 35L205 115L235 80H330L360 80L385 50L415 105L445 80H560L590 80L612 30L650 120L682 80H795L825 80L850 48L880 108L910 80H1200"
            stroke="#9ef01a"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        <svg
          className="ecg-bg-line ecg-bg-line-two pointer-events-none absolute bottom-16 left-0 h-28 w-full opacity-20"
          viewBox="0 0 1200 140"
          fill="none"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M0 80H90L120 80L145 52L174 108L204 80H300L330 80L355 38L392 118L424 80H520L550 80L575 54L604 104L634 80H760L790 80L815 35L850 118L885 80H1200"
            stroke="#abc4ff"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        <div className="ecg-orb ecg-orb-one pointer-events-none absolute -left-28 top-20 h-80 w-80 rounded-full bg-[#9ef01a]/18 blur-3xl" />
        <div className="ecg-orb ecg-orb-two pointer-events-none absolute -right-36 bottom-0 h-[420px] w-[420px] rounded-full bg-[#abc4ff]/20 blur-3xl" />

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
            <span className="text-white">Electrocardiography ECG</span>
          </div>

          <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]">
            {/* LEFT COPY */}
            <div className="ecg-hero-copy">
              <div className="mb-6 flex items-center gap-4">
                <img
                  src={ecgIcon}
                  alt="ECG service icon"
                  className="h-16 w-16 shrink-0 object-contain sm:h-20 sm:w-20"
                />

                <div>
                  <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#9ef01a]">
                    Heart Activity Test
                  </p>
                  <p className="mt-2 text-sm font-semibold text-white/75">
                    Physical ECG recording at the clinic.
                  </p>
                </div>
              </div>

              <h1 className="max-w-4xl text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
                Check your heart rhythm with a fast ECG test.
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-white/80 sm:text-lg">
                An ECG records the electrical activity of your heart. It helps
                detect rhythm abnormalities, investigate chest pain, assess heart
                health before surgery, and monitor known heart conditions. The
                test is performed physically at the clinic using specialist
                equipment.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link
                  to={bookingPath}
                  className="inline-flex items-center justify-center rounded-xl bg-[#9ef01a] px-7 py-4 text-sm font-extrabold text-[#004b23] shadow-[0_20px_50px_rgba(158,240,26,0.22)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#b6ff4d]"
                >
                  Book ECG Test
                </Link>

                <a
                  href="#ecg-uses"
                  className="inline-flex items-center justify-center rounded-xl border-2 border-white/25 px-7 py-4 text-sm font-extrabold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-[#004b23]"
                >
                  What ECG Checks
                </a>
              </div>
            </div>

            {/* RIGHT ECG CONSOLE */}
            <div className="ecg-hero-console relative">
              <div className="relative mx-auto max-w-[590px] rounded-[2.7rem] border border-white/12 bg-[#061B14]/90 p-5 shadow-[0_35px_110px_rgba(0,0,0,0.32)] backdrop-blur-md">
                <div className="mb-5 flex items-center justify-between">
                  <div>
                    <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#9ef01a]">
                      ECG Monitor
                    </p>
                    <p className="mt-1 text-xs font-semibold text-white/50">
                      Heart activity recording
                    </p>
                  </div>

                  <span className="rounded-full bg-[#9ef01a] px-4 py-2 text-xs font-extrabold text-[#004b23]">
                    Physical Only
                  </span>
                </div>

                <div className="relative overflow-hidden rounded-[2rem] border border-[#9ef01a]/20 bg-[#021F10] p-5">
                  <div className="ecg-monitor-grid absolute inset-0 opacity-35" />

                  <svg
                    className="relative z-10 h-[260px] w-full sm:h-[330px] lg:h-[390px]"
                    viewBox="0 0 760 360"
                    fill="none"
                    preserveAspectRatio="none"
                    aria-hidden="true"
                  >
                    <path
                      className="ecg-monitor-line ecg-monitor-line-shadow"
                      d="M0 190H80L110 190L135 85L175 300L210 190H295L325 190L350 135L383 240L414 190H505L535 190L560 70L603 310L640 190H760"
                      stroke="#9ef01a"
                      strokeWidth="8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      opacity="0.18"
                    />

                    <path
                      className="ecg-monitor-line"
                      d="M0 190H80L110 190L135 85L175 300L210 190H295L325 190L350 135L383 240L414 190H505L535 190L560 70L603 310L640 190H760"
                      stroke="#9ef01a"
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>

                  <div className="ecg-sweep pointer-events-none absolute inset-0" />
                </div>
              </div>

              <div className="ecg-floating-note absolute -bottom-7 left-6 max-w-xs rounded-[1.7rem] bg-white px-6 py-5 shadow-[0_22px_70px_rgba(16,42,67,0.18)]">
                <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#004b23]">
                  Same Visit Discussion
                </p>
                <p className="mt-2 text-sm font-bold leading-6 text-[#5F6F82]">
                  Results are interpreted and discussed with you at the clinic.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ECG USES */}
      <section
        id="ecg-uses"
        className="relative bg-[#edf2fb] px-5 pb-12 pt-10 sm:px-8 sm:pb-14 sm:pt-12 lg:px-10 lg:py-20"
      >
        <div className="pointer-events-none absolute right-0 top-16 h-96 w-96 rounded-full bg-[#abc4ff]/35 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#004b23]">
              What ECG Helps With
            </p>

            <h2 className="mt-4 text-3xl font-black tracking-tight text-[#102A43] sm:text-4xl">
              A quick test for important heart activity checks.
            </h2>

            <p className="mt-4 text-base leading-8 text-[#5F6F82]">
              ECG testing supports clinical decisions when symptoms or medical
              history suggest the heart’s rhythm or electrical activity needs to
              be checked.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {ecgUses.map((item, index) => (
              <div
                key={item.title}
                className={`ecg-use-card ecg-use-card-${index} group relative overflow-hidden rounded-[2.2rem] bg-white p-6 shadow-[0_18px_60px_rgba(16,42,67,0.07)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_80px_rgba(16,42,67,0.12)]`}
              >
                <div className="absolute right-0 top-0 h-full w-1.5 bg-[#9ef01a] opacity-0 transition group-hover:opacity-100" />

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

      {/* SUITABLE + PREP */}
      <section className="bg-white px-5 pb-12 pt-10 sm:px-8 sm:pb-14 sm:pt-12 lg:px-10 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="ecg-panel rounded-[2.5rem] bg-[#004b23] p-7 text-white shadow-[0_24px_80px_rgba(0,75,35,0.18)] sm:p-9">
            <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#9ef01a]">
              Suitable For
            </p>

            <h2 className="mt-4 text-3xl font-black tracking-tight text-white">
              When an ECG may be recommended.
            </h2>

            <div className="mt-8 grid gap-4">
              {suitableFor.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-[#9ef01a]" />
                  <p className="text-sm font-semibold leading-7 text-white/82">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="ecg-panel ecg-panel-delay rounded-[2.5rem] bg-[#edf2fb] p-7 shadow-[0_20px_70px_rgba(16,42,67,0.08)] sm:p-9">
            <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#004b23]">
              Before Your ECG
            </p>

            <h2 className="mt-4 text-3xl font-black tracking-tight text-[#102A43]">
              What to know before coming in.
            </h2>

            <div className="mt-8 grid gap-4">
              {visitNotes.map((note) => (
                <div key={note} className="flex items-start gap-3">
                  <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-[#004b23]" />
                  <p className="text-sm font-semibold leading-7 text-[#102A43]">
                    {note}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FLOW */}
      <section className="bg-[#edf2fb] px-5 pb-12 pt-10 sm:px-8 sm:pb-14 sm:pt-12 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#004b23]">
              ECG Visit Flow
            </p>

            <h2 className="mt-4 text-3xl font-black tracking-tight text-[#102A43] sm:text-4xl">
              How your ECG appointment works.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {ecgFlow.map((step, index) => (
              <div
                key={step.title}
                className={`ecg-flow-card ecg-flow-card-${index} rounded-[2.2rem] bg-white p-7 shadow-[0_18px_60px_rgba(16,42,67,0.07)]`}
              >
                <span className="block text-6xl font-light leading-none text-[#9ef01a]">
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
      <section className="relative overflow-hidden bg-[#004b23] px-5 py-16 sm:px-8 lg:px-10">
        <svg
          className="ecg-cta-line pointer-events-none absolute left-0 top-8 h-24 w-full opacity-35"
          viewBox="0 0 1200 120"
          fill="none"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M0 70H120L150 70L172 35L205 105L235 70H330L360 70L382 40L415 100L445 70H560L590 70L612 30L650 110L682 70H795L825 70L850 40L880 100L910 70H1200"
            stroke="#9ef01a"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        <div className="ecg-final-cta relative mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#9ef01a]">
              Ready for your ECG?
            </p>

            <h2 className="mt-4 max-w-3xl text-3xl font-black leading-tight tracking-tight text-white sm:text-4xl">
              Book your ECG test before visiting the clinic.
            </h2>

            <p className="mt-4 max-w-2xl text-sm font-semibold leading-7 text-white/75">
              ECG is performed physically because electrodes must be placed on
              the body and specialist equipment is required.
            </p>
          </div>

          <Link
            to={bookingPath}
            className="inline-flex items-center justify-center rounded-xl bg-[#9ef01a] px-8 py-4 text-sm font-extrabold text-[#004b23] shadow-[0_20px_50px_rgba(158,240,26,0.22)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#b6ff4d]"
          >
            Continue to Booking
          </Link>
        </div>
      </section>
    </main>
  );
};

export default ECG;