import { Link } from "react-router-dom";
import nursingIcon from "../../assets/icons/nursing-care.png";
import nursingImage from "../../assets/images/nursing-care-2.png";

const nursingServices = [
  {
    title: "Wound Dressing & Management",
    text: "Careful wound cleaning, dressing, monitoring, and support for proper healing.",
  },
  {
    title: "Injections & Infusions",
    text: "Safe administration of prescribed injections and infusion-based care at the clinic.",
  },
  {
    title: "Vital Signs Monitoring",
    text: "Blood pressure, temperature, pulse, oxygen level checks, and routine monitoring.",
  },
  {
    title: "Post-Surgical Care",
    text: "Clinical support after procedures, including wound observation and recovery care.",
  },
  {
    title: "Catheter Care",
    text: "Hands-on nursing support for patients requiring catheter-related care.",
  },
  {
    title: "Patient Support & Education",
    text: "Guidance to help patients understand their care needs and recovery instructions.",
  },
];

const visitNotes = [
  "Bring any doctor’s instruction or prescription related to the care required.",
  "Bring previous medical reports or discharge notes, if available.",
  "Arrive with a clear explanation of the care or monitoring you need.",
  "If you are using HMO, bring your HMO card or authorisation details.",
];

const NursingCare = () => {
  const bookingPath = "/book?service=nursing-care&mode=physical";

  return (
    <main className="w-full overflow-hidden bg-[#F8FCFF] text-[#102A43]">
      {/* HERO */}
<section className="relative overflow-hidden bg-[#3A9AD9] px-5 pb-12 pt-24 sm:px-8 sm:pb-14 sm:pt-28 lg:px-10 lg:pb-16 lg:pt-32">
  {/* Background design */}
  <div className="nursing-float-slow pointer-events-none absolute -left-28 top-20 h-80 w-80 rounded-full bg-white/15 blur-3xl" />
  <div className="nursing-float pointer-events-none absolute right-[-120px] bottom-[-80px] h-[420px] w-[420px] rounded-full bg-[#6BCBEB]/35 blur-3xl" />
  <div className="pointer-events-none absolute bottom-0 left-0 h-28 w-full bg-[linear-gradient(180deg,rgba(255,255,255,0),rgba(248,252,255,0.92))]" />

  <div className="relative mx-auto max-w-7xl">
    <div className="mb-8 flex flex-wrap items-center gap-2 text-sm font-semibold text-white/75 lg:mb-10">
      <Link to="/" className="transition hover:text-white">
        Home
      </Link>
      <span>/</span>
      <Link to="/services" className="transition hover:text-white">
        Services
      </Link>
      <span>/</span>
      <span className="text-white">Nursing Care</span>
    </div>

    <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start lg:gap-12">
      {/* Left text */}
      <div className="nursing-hero-copy">
        <div className="mb-5 flex items-center gap-4 sm:mb-6">
          <img
            src={nursingIcon}
            alt="Nursing care icon"
            className="h-14 w-14 shrink-0 object-contain sm:h-20 sm:w-20"
          />

          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#F2C94C]">
              Physical Nursing Support
            </p>
            <p className="mt-2 text-sm font-semibold text-white/80">
              Hands-on care delivered by qualified nurses.
            </p>
          </div>
        </div>

        <h1 className="max-w-4xl text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
          Compassionate nursing care when you need clinical support.
        </h1>

        <p className="mt-5 max-w-2xl text-base leading-8 text-white/85 sm:text-lg lg:mt-6">
          Nursing Care at Enekem Medicals provides hands-on clinical support for
          patients who need wound dressing, injections, infusions, vital signs
          monitoring, post-surgical care, catheter care, or guidance during
          recovery. Our nurses support you with calm, professional care inside
          the clinic.
        </p>

        <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:gap-4 lg:mt-8">
          <Link
            to={bookingPath}
            className="inline-flex items-center justify-center rounded-xl bg-[#102A43] px-7 py-4 text-sm font-extrabold text-white shadow-[0_20px_50px_rgba(16,42,67,0.25)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#0B1F33]"
          >
            Book Nursing Care
          </Link>

          <Link
            to="/contact#map"
            className="inline-flex items-center justify-center rounded-xl border-2 border-white/55 bg-white/10 px-7 py-4 text-sm font-extrabold text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-[#102A43]"
          >
            Visit the Clinic
          </Link>
        </div>
      </div>

     {/* Right image */}
<div className="nursing-hero-image relative w-full lg:flex lg:-mt-6 lg:justify-end lg:self-start">
  <div className="relative w-full max-w-[760px] overflow-hidden bg-[#3A9AD9]">
    <img
      src={nursingImage}
      alt="Nurse providing nursing care to a patient"
      className="block h-[240px] w-full object-cover object-center sm:h-[320px] lg:h-[430px]"
    />

    {/* Softer fade into hero background */}
    <div className="pointer-events-none absolute inset-y-0 left-0 w-10 bg-[linear-gradient(90deg,rgba(58,154,217,0.55),transparent)] sm:w-14 lg:w-16" />
    <div className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-[linear-gradient(270deg,rgba(58,154,217,0.55),transparent)] sm:w-14 lg:w-16" />
    <div className="pointer-events-none absolute inset-x-0 top-0 h-8 bg-[linear-gradient(180deg,rgba(58,154,217,0.5),transparent)] sm:h-10 lg:h-12" />
    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-8 bg-[linear-gradient(0deg,rgba(58,154,217,0.5),transparent)] sm:h-10 lg:h-12" />
  </div>
</div>
    </div>
  </div>
</section>
     

      {/* CARE SERVICES */}
      <section className="bg-[#F8FCFF] px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#3A9AD9]">
              What Our Nurses Support With
            </p>

            <h2 className="mt-4 text-3xl font-black tracking-tight text-[#102A43] sm:text-4xl">
              Hands-on clinical care in a calm, supportive setting.
            </h2>

            <p className="mt-4 text-base leading-8 text-[#5F6F82]">
              Nursing care is suitable for patients who need clinical
              procedures, careful monitoring, wound support, injections, or
              post-procedure assistance at the clinic.
            </p>
          </div>

          <div className="mt-12 space-y-5">
            {nursingServices.map((service, index) => (
              <div
                key={service.title}
                className={`nursing-care-row nursing-care-row-${index} group grid gap-5 overflow-hidden rounded-[2rem] bg-white p-5 shadow-[0_18px_60px_rgba(16,42,67,0.07)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_80px_rgba(16,42,67,0.11)] md:grid-cols-[90px_1fr] md:items-center`}
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#3A9AD9] text-xl font-black text-white md:h-20 md:w-20">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div>
                  <h3 className="text-xl font-black text-[#102A43]">
                    {service.title}
                  </h3>

                  <p className="mt-2 max-w-3xl text-sm leading-7 text-[#5F6F82]">
                    {service.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VISIT PREPARATION + BOOKING */}
      <section className="bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_420px] lg:items-start">
          <div className="nursing-visit-panel rounded-[2.5rem] bg-[#F2FBFF] p-7 sm:p-9">
            <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#3A9AD9]">
              Before Your Visit
            </p>

            <h2 className="mt-4 text-3xl font-black tracking-tight text-[#102A43]">
              What to bring for nursing care.
            </h2>

            <div className="mt-8 grid gap-4">
              {visitNotes.map((note) => (
                <div key={note} className="flex items-start gap-3">
                  <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-[#3A9AD9]" />
                  <p className="text-sm font-semibold leading-7 text-[#102A43]">
                    {note}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <aside className="nursing-book-panel rounded-[2.5rem] bg-[#102A43] p-7 shadow-[0_24px_80px_rgba(16,42,67,0.18)] sm:p-8">
            <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#F2C94C]">
              Ready for care?
            </p>

            <h3 className="mt-4 text-3xl font-black leading-tight text-white">
              Book your nursing care before visiting.
            </h3>

            <p className="mt-4 text-sm leading-7 text-white/70">
              Nursing care is provided physically at the clinic. Booking ahead
              helps the team prepare for the care or monitoring you need.
            </p>

            <Link
              to={bookingPath}
              className="mt-7 inline-flex w-full items-center justify-center rounded-xl bg-[#3A9AD9] px-6 py-4 text-sm font-extrabold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#6BCBEB] hover:text-[#102A43]"
            >
              Continue to Booking
            </Link>

            <Link
              to="/contact#map"
              className="mt-4 inline-flex w-full items-center justify-center rounded-xl border border-white/20 px-6 py-4 text-sm font-extrabold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-[#102A43]"
            >
              View Clinic Location
            </Link>

            <p className="mt-5 text-xs leading-6 text-white/55">
              Walk-ins are welcome, but confirmed bookings are attended to
              first.
            </p>
          </aside>
        </div>
      </section>
    </main>
  );
};

export default NursingCare;