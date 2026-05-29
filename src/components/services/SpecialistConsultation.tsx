import { Link, useSearchParams } from "react-router-dom";

import specialistIcon from "../../assets/icons/specialist-consultation.png";
import specialistImage from "../../assets/images/specialist-consultation.jpg";

const specialists = [
  {
    name: "Paediatrician",
    slug: "paediatrician",
    focus: "Children’s health, infant care, child fever, growth and development.",
  },
  {
    name: "Cardiologist",
    slug: "cardiologist",
    focus: "Chest pain, high blood pressure, palpitations, and heart concerns.",
  },
  {
    name: "Endocrinologist",
    slug: "endocrinologist",
    focus: "Diabetes, thyroid disorders, hormones, obesity, and metabolic concerns.",
  },
  {
    name: "General Surgeon",
    slug: "general-surgeon",
    focus: "Surgical conditions, hernia, lumps, abdominal concerns, and assessments.",
  },
  {
    name: "Orthopaedic Surgeon",
    slug: "orthopaedic-surgeon",
    focus: "Bones, joints, fractures, back pain, knee problems, and injuries.",
  },
  {
    name: "Urologist",
    slug: "urologist",
    focus: "Urinary tract, kidney, prostate, bladder, and male health concerns.",
  },
  {
    name: "Gynaecologist",
    slug: "gynaecologist",
    focus: "Women’s health, pregnancy concerns, menstrual issues, and fertility support.",
  },
];

const appointmentSteps = [
  {
    title: "Choose your specialist",
    text: "Select the area of care that matches your health concern.",
  },
  {
    title: "Book your appointment",
    text: "Complete the booking form and select a suitable date and time.",
  },
  {
    title: "Visit the clinic",
    text: "Come in for your physical consultation and specialist assessment.",
  },
];

const SpecialistConsultation = () => {
  const [searchParams] = useSearchParams();
  const selectedSpecialist = searchParams.get("specialist");

  const bookingPath = selectedSpecialist
    ? `/book?service=specialist-consultation&mode=physical&specialist=${selectedSpecialist}`
    : "/book?service=specialist-consultation&mode=physical";

  return (
    <main className="w-full overflow-hidden bg-[#FFFDF4] text-[#102A43]">
      {/* HERO */}
      <section className="relative min-h-[620px] overflow-hidden bg-[#102A43] px-5 pt-28 pb-16 sm:px-8 lg:px-10 lg:pt-32">
        {/* Animated background shapes */}
        <div className="specialist-float-slow pointer-events-none absolute -left-24 top-24 h-72 w-72 rounded-full bg-[#F2C94C]/25 blur-3xl" />
        <div className="specialist-float pointer-events-none absolute right-0 top-10 h-96 w-96 rounded-full bg-[#6BCBEB]/25 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 left-0 h-40 w-full bg-[linear-gradient(90deg,rgba(242,201,76,0.12),rgba(107,203,235,0.10),rgba(68,204,58,0.08))]" />

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
            <span className="text-white">Specialist Consultation</span>
          </div>

          <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]">
            {/* LEFT */}
            <div className="specialist-reveal">
              <div className="mb-6 flex items-center gap-4">
                <img
                  src={specialistIcon}
                  alt="Specialist consultation icon"
                  className="h-16 w-16 shrink-0 object-contain sm:h-20 sm:w-20"
                />

                <div>
                  <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#F2C94C]">
                    Physical Specialist Care
                  </p>
                  <p className="mt-2 text-sm font-semibold text-white/65">
                    No referral required. Book directly with a specialist.
                  </p>
                </div>
              </div>

              <h1 className="max-w-3xl text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
                Advanced care for complex health concerns.
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-white/75 sm:text-lg">
                A specialist consultation connects you with a doctor who has
                advanced training in a specific area of medicine. It is ideal
                for complex, chronic, or focused health concerns that require
                expert diagnosis and management beyond general practice.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link
                  to={bookingPath}
                  className="inline-flex items-center justify-center rounded-xl bg-[#F2C94C] px-7 py-4 text-sm font-extrabold text-[#102A43] shadow-[0_18px_45px_rgba(242,201,76,0.25)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#ffe06a]"
                >
                  Book Specialist Consultation
                </Link>

                <a
                  href="#specialists"
                  className="inline-flex items-center justify-center rounded-xl border-2 border-white/25 px-7 py-4 text-sm font-extrabold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-[#102A43]"
                >
                  View Specialists
                </a>
              </div>
            </div>

            {/* RIGHT IMAGE */}
            <div className="specialist-image-reveal relative">
              <div className="absolute -right-5 -top-5 h-full w-full rounded-[3rem] border-2 border-[#F2C94C]/70" />
              <div className="absolute -left-6 bottom-8 h-28 w-28 rounded-full bg-[#44CC3A]/80" />

              <div className="relative rotate-[-2deg] overflow-hidden rounded-[3rem] border-[10px] border-white bg-white shadow-[0_35px_100px_rgba(0,0,0,0.28)] transition duration-500 hover:rotate-0">
                <img
                  src={specialistImage}
                  alt="Specialist doctor consultation at Enekem Medicals"
                  className="h-[360px] w-full object-cover object-center sm:h-[440px] lg:h-[520px]"
                />
              </div>

              <div className="absolute -bottom-6 left-8 max-w-xs rounded-2xl bg-white px-6 py-5 shadow-[0_20px_60px_rgba(16,42,67,0.18)]">
                <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-[#3A9AD9]">
                  Consultation Fee
                </p>
                <p className="mt-1 text-2xl font-black text-[#102A43]">
                  ₦60,000
                </p>
                <p className="mt-1 text-xs font-semibold text-[#5F6F82]">
                  Physical consultation only. 10 to 15 minutes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK FACTS */}
      <section className="border-y border-[#D8E8EE] bg-white px-5 py-8 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-4 sm:grid-cols-3">
          <div className="specialist-pop rounded-2xl bg-[#FFF8DD] p-5">
            <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#102A43]/60">
              Mode
            </p>
            <p className="mt-2 text-base font-extrabold text-[#102A43]">
              Physical Only
            </p>
          </div>

          <div className="specialist-pop specialist-delay-1 rounded-2xl bg-[#F2FBFF] p-5">
            <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#3A9AD9]">
              Fee
            </p>
            <p className="mt-2 text-base font-extrabold text-[#102A43]">
              ₦60,000
            </p>
          </div>

          <div className="specialist-pop specialist-delay-2 rounded-2xl bg-[#F7FFF6] p-5">
            <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#44CC3A]">
              Duration
            </p>
            <p className="mt-2 text-base font-extrabold text-[#102A43]">
              10 to 15 minutes
            </p>
          </div>
        </div>
      </section>

      {/* SPECIALISTS GRID */}
      <section
        id="specialists"
        className="relative bg-[#FFFDF4] px-5 py-16 sm:px-8 sm:py-20 lg:px-10"
      >
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#3A9AD9]">
              Our Specialists
            </p>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-[#102A43] sm:text-4xl">
              Choose the right specialist for your concern.
            </h2>
            <p className="mt-4 text-base leading-8 text-[#5F6F82]">
              Specialist consultations are designed for conditions that require
              focused medical expertise, careful physical examination, and
              review of investigations where needed.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {specialists.map((specialist, index) => {
              const isSelected = selectedSpecialist === specialist.slug;

              return (
                <Link
                  key={specialist.slug}
                  to={`/book?service=specialist-consultation&mode=physical&specialist=${specialist.slug}`}
                  className={`specialist-card specialist-card-${index} group relative overflow-hidden rounded-[2rem] p-6 transition-all duration-300 hover:-translate-y-1 ${
                    isSelected
                      ? "bg-[#102A43] text-white shadow-[0_22px_70px_rgba(16,42,67,0.24)]"
                      : "bg-white text-[#102A43] shadow-[0_18px_60px_rgba(16,42,67,0.08)]"
                  }`}
                >
                  <div className="absolute right-0 top-0 h-24 w-24 rounded-bl-full bg-[#F2C94C]/20 transition group-hover:bg-[#F2C94C]/40" />

                  <p
                    className={`text-xl font-black ${
                      isSelected ? "text-white" : "text-[#102A43]"
                    }`}
                  >
                    {specialist.name}
                  </p>

                  <p
                    className={`mt-3 text-sm leading-7 ${
                      isSelected ? "text-white/70" : "text-[#5F6F82]"
                    }`}
                  >
                    {specialist.focus}
                  </p>

                  <span
                    className={`mt-5 inline-flex rounded-full px-4 py-2 text-xs font-extrabold ${
                      isSelected
                        ? "bg-[#F2C94C] text-[#102A43]"
                        : "bg-[#F2FBFF] text-[#3A9AD9]"
                    }`}
                  >
                    Book this specialist
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* PROCESS + BOOKING CTA */}
      <section className="bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#3A9AD9]">
              Appointment Flow
            </p>

            <h2 className="mt-4 text-3xl font-black tracking-tight text-[#102A43] sm:text-4xl">
              How your specialist visit works.
            </h2>

            <p className="mt-4 text-base leading-8 text-[#5F6F82]">
              Because specialist consultations require physical examination and
              review of clinical details, they are conducted at the clinic.
              Booking ahead helps the team prepare and manage appointment flow.
            </p>
          </div>

          <div className="space-y-5">
            {appointmentSteps.map((step, index) => (
              <div
                key={step.title}
                className="specialist-step flex gap-5 rounded-[2rem] bg-[#F8FCFF] p-6"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#F2C94C] text-sm font-black text-[#102A43]">
                  {index + 1}
                </div>

                <div>
                  <h3 className="text-lg font-black text-[#102A43]">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-[#5F6F82]">
                    {step.text}
                  </p>
                </div>
              </div>
            ))}

            <div className="rounded-[2rem] bg-[#102A43] p-7">
              <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#F2C94C]">
                Ready to book?
              </p>

              <h3 className="mt-3 text-2xl font-black text-white">
                Book your specialist consultation before visiting.
              </h3>

              <p className="mt-3 text-sm leading-7 text-white/70">
                Patients with confirmed bookings are attended to first, so we
                recommend booking ahead before coming to the clinic.
              </p>

              <Link
                to={bookingPath}
                className="mt-6 inline-flex w-full items-center justify-center rounded-xl bg-[#44CC3A] px-6 py-4 text-sm font-extrabold text-[#102A43] transition hover:bg-[#53dd49]"
              >
                Continue to Booking
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default SpecialistConsultation;