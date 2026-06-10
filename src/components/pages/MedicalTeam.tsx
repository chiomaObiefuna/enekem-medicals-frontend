import { Link } from "react-router-dom";
import teamHeroImage from "../../assets/images/team1.jpg";
import {
  careStandards,
  teamDepartments,
  teamRoles,
} from "../data/teamMembers";

const MedicalTeam = () => {
  return (
    <main className="w-full overflow-hidden bg-[#F3FAFC] text-[#102A43]">
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#F3FAFC] px-5 pb-12 pt-10 sm:px-8 sm:pb-14 sm:pt-12 lg:px-10 lg:py-20">
        <div className="team-soft-grid pointer-events-none absolute inset-0 opacity-40" />
        <div className="team-orb team-orb-one pointer-events-none absolute -left-28 top-20 h-80 w-80 rounded-full bg-[#44CC3A]/15 blur-3xl" />
        <div className="team-orb team-orb-two pointer-events-none absolute -right-36 bottom-0 h-[460px] w-[460px] rounded-full bg-[#01369E]/12 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          {/* Breadcrumb */}
          <div className="mb-10 flex flex-wrap items-center gap-2 text-sm font-semibold text-[#5F6F82]">
            <Link to="/" className="transition hover:text-[#01369E]">
              Home
            </Link>
            <span>/</span>
            <Link to="/about" className="transition hover:text-[#01369E]">
              About
            </Link>
            <span>/</span>
            <span className="text-[#01369E]">Our Medical Team</span>
          </div>

          <div className="grid items-center gap-14 lg:grid-cols-[0.88fr_1.12fr]">
            {/* LEFT CONTENT */}
            <div className="team-hero-copy">
              <div className="mb-6 inline-flex rounded-full border border-[#D8E8EE] bg-white px-5 py-3 shadow-sm">
                <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#44CC3A]">
                  Our Medical Team
                </p>
              </div>

              <h1 className="max-w-4xl text-4xl font-black leading-tight tracking-tight text-[#01369E] sm:text-5xl lg:text-6xl">
                Meet the people behind your care.
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-[#5F6F82] sm:text-lg">
                At Enekem Medicals, our doctors, nurses, specialists,
                laboratory professionals, pharmacy team, and patient support
                staff work together to provide reliable, accessible, and
                patient-centred healthcare.
              </p>

             
            </div>

            {/* RIGHT IMAGE */}
            <div className="team-hero-image relative">
              <div className="relative overflow-hidden rounded-[2.5rem] bg-white p-3 shadow-[0_35px_100px_rgba(1,54,158,0.16)]">
                <img
                  src={teamHeroImage}
                  alt="Enekem Medicals medical team"
                  className="h-[360px] w-full rounded-[2rem] object-cover object-center sm:h-[430px] lg:h-[520px]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TEAM DEPARTMENTS */}
      <section className="bg-white px-5 pb-12 pt-10 sm:px-8 sm:pb-14 sm:pt-12 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#44CC3A]">
              How Our Team Is Organised
            </p>

            <h2 className="mt-4 text-3xl font-black tracking-tight text-[#01369E] sm:text-4xl">
              Care delivered by different professionals working together.
            </h2>

            <p className="mt-4 text-base leading-8 text-[#5F6F82]">
              Every department plays a role in creating a smoother patient
              experience, from first contact to diagnosis, treatment, and
              follow-up support.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
            {teamDepartments.map((department, index) => (
              <div
                key={department.title}
                className={`team-department team-department-${index} group rounded-[2rem] border border-[#D8E8EE] bg-[#F3FAFC] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#44CC3A]/60 hover:bg-white hover:shadow-[0_24px_80px_rgba(1,54,158,0.10)]`}
              >
                <div className="mb-6 h-1.5 w-16 rounded-full bg-[#44CC3A]" />

                <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-[#01369E]/70">
                  {department.highlight}
                </p>

                <h3 className="mt-3 text-xl font-black text-[#01369E]">
                  {department.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-[#5F6F82]">
                  {department.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM ROLES */}
      <section className="bg-[#F3FAFC] px-5 pb-12 pt-10 sm:px-8 sm:pb-14 sm:pt-12 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#44CC3A]">
              Team Profiles
            </p>

            <h2 className="mt-4 text-3xl font-black tracking-tight text-[#01369E] sm:text-4xl">
              The professionals supporting patient care.
            </h2>

            <p className="mx-auto mt-4 max-w-3xl text-base leading-8 text-[#5F6F82]">
              Individual staff profiles can be added here once names, portraits,
              and role details are available. For now, this section presents the
              key professional groups patients interact with.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {teamRoles.map((member, index) => {
              return (
                <article
                 key={member.title}
    className={`team-role-card team-role-card-${index} rounded-[2.2rem] bg-white p-4 shadow-[0_18px_60px_rgba(1,54,158,0.07)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_80px_rgba(1,54,158,0.11)]`}
  >
    <div className="flex h-20 w-20 items-center p-3">
      <img
        src={member.icon}
        alt={member.iconAlt}
        className="h-full w-full object-contain"
      />
    </div>

                  <p className="mt-6 text-xs font-extrabold uppercase tracking-[0.16em] text-[#44CC3A]">
                    {member.department}
                  </p>

                  <h3 className="mt-3 text-2xl font-black text-[#01369E]">
                    {member.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-[#5F6F82]">
                    {member.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* CARE STANDARDS */}
      <section className="bg-white px-5 pb-12 pt-10 sm:px-8 sm:pb-14 sm:pt-12 lg:px-10 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="team-standard-intro">
            <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#44CC3A]">
              Our Care Standard
            </p>

            <h2 className="mt-4 text-3xl font-black tracking-tight text-[#01369E] sm:text-4xl">
              A team built around coordinated patient care.
            </h2>

            <p className="mt-4 text-base leading-8 text-[#5F6F82]">
              The strength of a clinic is not only in its services, but in how
              its team communicates, supports patients, and works together
              across different areas of care.
            </p>
          </div>

          <div className="space-y-5">
            {careStandards.map((standard, index) => (
              <div
                key={standard.title}
                className={`team-standard team-standard-${index} rounded-[2rem] bg-[#F3FAFC] p-6`}
              >
                <span className="block text-5xl font-light leading-none text-[#44CC3A]">
                  0{index + 1}
                </span>

                <h3 className="mt-3 text-xl font-black text-[#01369E]">
                  {standard.title}
                </h3>

                <p className="mt-2 text-sm leading-7 text-[#5F6F82]">
                  {standard.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default MedicalTeam;