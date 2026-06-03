import { Link } from "react-router-dom";
import immunizationIcon from "../../assets/icons/immunization.png";

const vaccineGroups = [
  {
    number: "01",
    title: "Routine Child Immunization",
    text: "Routine vaccines for newborns, infants, and children following the Nigerian national immunization schedule.",
  },
  {
    number: "02",
    title: "Adult Vaccines",
    text: "Selected adult vaccines such as Hepatitis B, Tetanus, Yellow Fever, and other required vaccines.",
  },
  {
    number: "03",
    title: "Travel Vaccines",
    text: "Vaccination support for travellers who need specific vaccines before travel.",
  },
];

const childVaccines = [
  "BCG",
  "Hepatitis B",
  "Polio",
  "DPT",
  "Measles",
  "Yellow Fever",
  "Other scheduled vaccines",
];

const suitableFor = [
  "Newborns and infants",
  "Children following the immunization schedule",
  "Adults requiring specific vaccines",
  "Travellers requiring travel vaccines",
  "Parents updating a child’s vaccination record",
  "Patients advised to receive a vaccine by a doctor",
];

const visitNotes = [
  "Bring your child’s yellow immunization card if they have one.",
  "Bring any previous vaccine record if available.",
  "Tell the nurse or doctor about any allergies or previous vaccine reactions.",
  "Arrive with enough time for registration and vaccine confirmation.",
];

const visitFlow = [
  {
    number: "1",
    title: "Book your visit",
    text: "Choose Immunization in the booking form and select a suitable appointment time.",
  },
  {
    number: "2",
    title: "Confirm the vaccine",
    text: "The nurse or doctor checks the vaccine needed, patient age, schedule, and previous record.",
  },
  {
    number: "3",
    title: "Receive immunization",
    text: "The vaccine is administered physically at the clinic by a qualified nurse or doctor.",
  },
];

const Immunization = () => {
  const bookingPath = "/book?service=Immunization&mode=physical";

  return (
    <main className="w-full overflow-hidden bg-[#edf2fb] text-[#01369E]">
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#edf2fb] px-5 pb-20 pt-28 sm:px-8 lg:px-10 lg:pt-32">
        <div className="immunization-soft-grid pointer-events-none absolute inset-0 opacity-40" />
        <div className="immunization-orb immunization-orb-one pointer-events-none absolute -left-28 top-20 h-80 w-80 rounded-full bg-[#b6ccfe]/55 blur-3xl" />
        <div className="immunization-orb immunization-orb-two pointer-events-none absolute -right-32 bottom-0 h-[420px] w-[420px] rounded-full bg-[#008000]/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <div className="mb-10 flex flex-wrap items-center gap-2 text-sm font-semibold text-[#5F6F82]">
            <Link to="/" className="transition hover:text-[#008000]">
              Home
            </Link>
            <span>/</span>
            <Link to="/services" className="transition hover:text-[#008000]">
              Services
            </Link>
            <span>/</span>
            <span className="text-[#01369E]">Immunization</span>
          </div>

          <div className="grid items-center gap-14 lg:grid-cols-[0.95fr_1.05fr]">
            {/* LEFT COPY */}
            <div className="immunization-hero-copy">
              <div className="mb-6 flex items-center gap-4">
                <img
                  src={immunizationIcon}
                  alt="Immunization service icon"
                  className="h-16 w-16 shrink-0 object-contain sm:h-20 sm:w-20"
                />

                <div>
                  <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#008000]">
                    Child & Adult Immunization
                  </p>
                  <p className="mt-2 text-sm font-semibold text-[#5F6F82]">
                    Physical vaccine administration at the clinic.
                  </p>
                </div>
              </div>

              <h1 className="max-w-4xl text-4xl font-black leading-tight tracking-tight text-[#01369E] sm:text-5xl lg:text-6xl">
                Immunization support for children, adults, and travellers.
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-[#5F6F82] sm:text-lg">
                Enekem Medicals provides immunization services for children and
                adults following the Nigerian national immunization schedule.
                Children can receive routine immunizations including BCG,
                Hepatitis B, Polio, DPT, Measles, Yellow Fever, and other
                scheduled vaccines. Adult vaccines including Hepatitis B,
                Tetanus, and Yellow Fever are also available.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link
                  to={bookingPath}
                  className="inline-flex items-center justify-center rounded-xl bg-[#008000] px-7 py-4 text-sm font-extrabold text-white shadow-[0_20px_50px_rgba(0,128,0,0.22)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#006B00]"
                >
                  Book Immunization
                </Link>

                <a
                  href="#vaccine-groups"
                  className="inline-flex items-center justify-center rounded-xl border-2 border-[#b6ccfe] bg-white px-7 py-4 text-sm font-extrabold text-[#01369E] transition-all duration-300 hover:-translate-y-1 hover:border-[#008000] hover:text-[#008000]"
                >
                  View Vaccine Groups
                </a>
              </div>
            </div>

            {/* RIGHT SIDE: NO IMAGE */}
            <div className="immunization-record-area relative">
              <div className="immunization-ring immunization-ring-one" />
              <div className="immunization-ring immunization-ring-two" />

              <div className="relative mx-auto max-w-[560px]">
                <div className="immunization-card-stack immunization-card-back absolute inset-0 rounded-[2.5rem] bg-[#b6ccfe]" />

                <div className="immunization-record-card relative rounded-[2.5rem] border border-[#b6ccfe]/60 bg-white p-7 shadow-[0_35px_100px_rgba(1,54,158,0.12)] sm:p-8">
                  <div className="flex items-start justify-between gap-5">
                    <div>
                      <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#008000]">
                        Immunization Record
                      </p>

                      <h2 className="mt-3 text-3xl font-black leading-tight text-[#01369E]">
                        Clinic-based vaccine appointment
                      </h2>
                    </div>

                    <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-[#edf2fb]">
                      <img
                        src={immunizationIcon}
                        alt=""
                        className="h-10 w-10 object-contain"
                      />
                    </div>
                  </div>

                  <div className="mt-8 grid gap-4 sm:grid-cols-2">
                    <div className="rounded-2xl bg-[#edf2fb] p-5">
                      <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#008000]">
                        Mode
                      </p>
                      <p className="mt-2 text-base font-black text-[#01369E]">
                        Physical Only
                      </p>
                    </div>

                    <div className="rounded-2xl bg-[#edf2fb] p-5">
                      <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#008000]">
                        Price
                      </p>
                      <p className="mt-2 text-base font-black text-[#01369E]">
                        Varies by vaccine
                      </p>
                    </div>

                    <div className="rounded-2xl bg-[#edf2fb] p-5 sm:col-span-2">
                      <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#008000]">
                        Duration
                      </p>
                      <p className="mt-2 text-base font-black text-[#01369E]">
                        15 to 20 minutes
                      </p>
                    </div>
                  </div>

                  <div className="mt-8 rounded-[2rem] border border-[#b6ccfe]/70 bg-white p-5">
                    <p className="text-sm font-bold leading-7 text-[#5F6F82]">
                      Vaccines must be administered by a qualified nurse or
                      doctor at the clinic.
                    </p>
                  </div>
                </div>

                <div className="immunization-floating-note absolute -bottom-7 left-7 rounded-[1.5rem] bg-[#01369E] px-6 py-5 shadow-[0_22px_70px_rgba(1,54,158,0.20)]">
                  <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#b6ccfe]">
                    Bring If Available
                  </p>
                  <p className="mt-2 text-sm font-bold leading-6 text-white/90">
                    Child’s yellow immunization card
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FACT STRIP */}
      <section className="border-y border-[#b6ccfe]/70 bg-white px-5 py-8 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-3">
          <div className="immunization-fact rounded-[1.7rem] bg-[#edf2fb] p-5">
            <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#008000]">
              Service Mode
            </p>
            <p className="mt-2 text-base font-extrabold text-[#01369E]">
              Physical Only
            </p>
          </div>

          <div className="immunization-fact immunization-delay-1 rounded-[1.7rem] bg-[#edf2fb] p-5">
            <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#008000]">
              Vaccine Cost
            </p>
            <p className="mt-2 text-base font-extrabold text-[#01369E]">
              Varies by vaccine
            </p>
          </div>

          <div className="immunization-fact immunization-delay-2 rounded-[1.7rem] bg-[#edf2fb] p-5">
            <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#008000]">
              Duration
            </p>
            <p className="mt-2 text-base font-extrabold text-[#01369E]">
              15 to 20 minutes
            </p>
          </div>
        </div>
      </section>

      {/* VACCINE GROUPS */}
      <section
        id="vaccine-groups"
        className="relative bg-[#edf2fb] px-5 py-16 sm:px-8 sm:py-20 lg:px-10"
      >
        <div className="immunization-section-orb pointer-events-none absolute right-0 top-16 h-96 w-96 rounded-full bg-[#b6ccfe]/40 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#008000]">
              Vaccine Groups
            </p>

            <h2 className="mt-4 text-3xl font-black tracking-tight text-[#01369E] sm:text-4xl">
              Immunization support for different stages of care.
            </h2>

            <p className="mt-4 text-base leading-8 text-[#5F6F82]">
              The exact vaccine and cost depend on the patient’s age, vaccine
              need, schedule, and availability at the clinic.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {vaccineGroups.map((group, index) => (
              <div
                key={group.title}
                className={`immunization-group immunization-group-${index} rounded-[2.3rem] border border-[#b6ccfe]/70 bg-white p-7 shadow-[0_18px_60px_rgba(1,54,158,0.07)] transition-all duration-300 hover:-translate-y-1 hover:border-[#008000]/50 hover:shadow-[0_24px_80px_rgba(1,54,158,0.11)]`}
              >
                <span className="block text-6xl font-light leading-none text-[#b6ccfe]">
                  {group.number}
                </span>

                <h3 className="mt-4 text-xl font-black text-[#01369E]">
                  {group.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-[#5F6F82]">
                  {group.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CHILD VACCINES */}
      <section className="bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="immunization-intro-panel">
            <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#008000]">
              Routine Immunization
            </p>

            <h2 className="mt-4 text-3xl font-black tracking-tight text-[#01369E] sm:text-4xl">
              Common childhood vaccines available through the schedule.
            </h2>

            <p className="mt-4 text-base leading-8 text-[#5F6F82]">
              Children can receive routine vaccines following the Nigerian
              national immunization schedule. The clinic team can confirm what
              is needed based on age and previous records.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {childVaccines.map((item, index) => (
              <div
                key={item}
                className={`immunization-vaccine immunization-vaccine-${index} flex items-center justify-between rounded-[1.8rem] border border-[#b6ccfe]/70 bg-[#edf2fb] p-5`}
              >
                <p className="text-base font-black text-[#01369E]">{item}</p>
                <span className="h-3 w-3 rounded-full bg-[#008000]" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SUITABLE + WHAT TO BRING */}
      <section className="bg-[#edf2fb] px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_0.95fr]">
          <div className="immunization-panel rounded-[2.5rem] bg-white p-7 shadow-[0_20px_70px_rgba(1,54,158,0.08)] sm:p-9">
            <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#008000]">
              Suitable For
            </p>

            <h2 className="mt-4 text-3xl font-black tracking-tight text-[#01369E]">
              Who can book immunization.
            </h2>

            <div className="mt-8 grid gap-4">
              {suitableFor.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-[#008000]" />
                  <p className="text-sm font-semibold leading-7 text-[#01369E]">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="immunization-panel immunization-panel-delay rounded-[2.5rem] bg-[#01369E] p-7 text-white shadow-[0_24px_80px_rgba(1,54,158,0.18)] sm:p-9">
            <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#b6ccfe]">
              Before Your Visit
            </p>

            <h2 className="mt-4 text-3xl font-black tracking-tight text-white">
              What to bring or mention.
            </h2>

            <div className="mt-8 grid gap-4">
              {visitNotes.map((note) => (
                <div key={note} className="flex items-start gap-3">
                  <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-[#008000]" />
                  <p className="text-sm font-semibold leading-7 text-white/85">
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
          <div className="text-center">
            <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#008000]">
              Visit Flow
            </p>

            <h2 className="mt-4 text-3xl font-black tracking-tight text-[#01369E] sm:text-4xl">
              A simple clinic-based immunization process.
            </h2>
          </div>

          <div className="mt-14 grid gap-10 md:grid-cols-3">
            {visitFlow.map((step, index) => (
              <div
                key={step.title}
                className={`immunization-flow immunization-flow-${index} text-center`}
              >
                <span className="block text-7xl font-light leading-none text-[#b6ccfe] sm:text-8xl">
                  {step.number}
                </span>

                <h3 className="mt-3 text-2xl font-black text-[#01369E]">
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

      {/* CTA - NO COLOURED BOTTOM BLOCK */}
      <section className="bg-white px-5 py-16 sm:px-8 lg:px-10">
        <div className="immunization-final-cta mx-auto max-w-7xl rounded-[2.5rem] border border-[#b6ccfe]/70 bg-[#edf2fb] p-7 shadow-[0_24px_80px_rgba(1,54,158,0.09)] sm:p-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#008000]">
                Ready to book?
              </p>

              <h2 className="mt-4 max-w-3xl text-3xl font-black leading-tight tracking-tight text-[#01369E] sm:text-4xl">
                Book your immunization visit before coming to the clinic.
              </h2>

              <p className="mt-4 max-w-2xl text-sm font-semibold leading-7 text-[#5F6F82]">
                Immunization is provided physically at the clinic because
                vaccines must be administered by a qualified nurse or doctor.
              </p>
            </div>

            <Link
              to={bookingPath}
              className="inline-flex items-center justify-center rounded-xl bg-[#008000] px-8 py-4 text-sm font-extrabold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#006B00]"
            >
              Continue to Booking
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Immunization;