
import { useState, type ChangeEvent } from "react";
import {
  Activity,
  AlertTriangle,
  CalendarDays,
  CheckCircle2,
  Clock3,
  FileText,
  PhoneCall,
  Send,
  Sparkles,
  Stethoscope,
  TestTubeDiagonal,
  Pill,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

import { contactInfo } from "../data/contactInfo";

type BookingFormData = {
  fullName: string;
  phoneNumber: string;
  email: string;
  service: string;
  preferredDate: string;
  preferredTime: string;
  description: string;
};

type BookingFormErrors = Partial<Record<keyof BookingFormData, string>>;

const initialFormData: BookingFormData = {
  fullName: "",
  phoneNumber: "",
  email: "",
  service: "",
  preferredDate: "",
  preferredTime: "",
  description: "",
};

const bookingServices = [
  { title: "General Consultation",         icon: Stethoscope      },
  { title: "Specialist Consultation",      icon: Sparkles         },
  { title: "Laboratory Test",              icon: TestTubeDiagonal },
  { title: "Diagnostics (Ultrasound, ECG)", icon: Activity        },
  { title: "Pharmacy Assistance",          icon: Pill             },
];

const bookingSteps = [
  {
    title: "Review your information",
    description:
      "Our team reviews the details you submitted and confirms the service requested.",
  },
  {
    title: "Confirm availability",
    description:
      "You will be contacted to confirm available dates, timing, and any needed details.",
  },
  {
    title: "Guide your next steps",
    description:
      "Before your visit, our team will guide you on what to bring or prepare where necessary.",
  },
];

const Bookings = () => {
  const [formData, setFormData]     = useState<BookingFormData>(initialFormData);
  const [errors, setErrors]         = useState<BookingFormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted]   = useState(false);
  const [submitError, setSubmitError]   = useState("");

  // ── CHANGE 3: booked slots state ──────────────────────────────────────────
  // Stores "YYYY-MM-DD|HH:MM" strings of already-booked date+time combos.
  // When backend is live, replace this local check with a real API availability
  // check (e.g. GET /api/bookings/availability?date=...&time=...) instead.
  const [bookedSlots, setBookedSlots] = useState<string[]>([]);

  const today = new Date().toISOString().split("T")[0];

  // Helper — builds the slot key from date + time
  const slotKey = (date: string, time: string) => `${date}|${time}`;

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;

    setFormData((cur) => ({ ...cur, [name]: value }));
    setErrors((cur)    => ({ ...cur, [name]: "" }));
    setSubmitError("");
    if (isSubmitted) setIsSubmitted(false);
  };

  // ── CHANGE 2 + 3: validateForm — email required, double-booking check ─────
  const validateForm = () => {
    const newErrors: BookingFormErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Please enter your full name.";
    }

    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = "Please enter your phone number.";
    }

    // Email is now REQUIRED (removed optional)
    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formData.service) {
      newErrors.service = "Please select a service.";
    }

    if (!formData.preferredDate) {
      newErrors.preferredDate = "Please choose a preferred date.";
    }

    if (formData.preferredDate && formData.preferredDate < today) {
      newErrors.preferredDate = "Preferred date cannot be in the past.";
    }

    if (!formData.preferredTime) {
      newErrors.preferredTime = "Please choose a preferred time.";
    }

    // Double-booking check — block if this date+time is already taken
    if (formData.preferredDate && formData.preferredTime) {
      const key = slotKey(formData.preferredDate, formData.preferredTime);
      if (bookedSlots.includes(key)) {
        newErrors.preferredTime =
          "This time slot is already taken. Please choose a different time.";
      }
    }

    if (!formData.description.trim()) {
      newErrors.description = "Please briefly describe your request.";
    }

    return newErrors;
  };

  // ── CHANGE 1: handleSubmit with real fetch POST ───────────────────────────
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formErrors = validateForm();

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    setIsSubmitting(true);
    setSubmitError("");

    try {
      // ── FETCH POST to n8n webhook ──────────────────────────────────────
      
      const response = await fetch("https://primary-production-d8fe.up.railway.app/webhook/enekem-booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          full_name:         formData.fullName,
          phone:             formData.phoneNumber,
          email:             formData.email,
          service:           formData.service,
          date:              formData.preferredDate,
          time:              formData.preferredTime,
          brief_description: formData.description,
        }),
      });

      if (!response.ok) {
        throw new Error("Booking submission failed");
      }
      // ── END FETCH ──────────────────────────────────────────────────────

      // Mark this slot as booked so no other user can pick the same time
      // (frontend guard — backend will enforce this on the server side too)
      setBookedSlots((prev) => [
        ...prev,
        slotKey(formData.preferredDate, formData.preferredTime),
      ]);

      setIsSubmitted(true);
      setFormData(initialFormData);
      setErrors({});
    } catch {
      setSubmitError(
        "We could not submit your booking at the moment. Please try again or contact us on WhatsApp."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const whatsappMessage = encodeURIComponent(
    `Hello Enekem Medicals, I would like to book an appointment.\n\nFull name:\nService needed:\nPreferred date or time:`
  );
  const whatsappBookingLink = `${contactInfo.whatsappLink}?text=${whatsappMessage}`;

  // Shared input class helper
  const inputClass = (error?: string) =>
    `w-full rounded-2xl border bg-[#FCFDFD] px-4 py-4 text-sm text-[#102A43] outline-none transition
     focus:border-[#25D366] focus:ring-4 focus:ring-[#25D366]/10
     ${error ? "border-[#D96C6C]" : "border-[#D8E8EE]"}`;

  return (
    <main className="w-full bg-white">

      {/* ══════════════════════════════════════════
          PAGE INTRO
      ══════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
        <div className="booking-blob-one pointer-events-none absolute -left-24 top-16 h-80 w-80 rounded-full bg-[#F0F7FF] blur-3xl" />
        <div className="booking-blob-two pointer-events-none absolute -right-24 bottom-8 h-96 w-96 rounded-full bg-[#E7F1E8] blur-3xl" />

        <div className="relative z-10 mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          {/* Left — hero copy */}
          <div className="booking-hero-copy">
            <p className="mb-5 inline-flex rounded-full border border-[#D8E8EE] bg-[#FCFDFD] px-5 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-[#25D366]">
              Booking an Appointment
            </p>

            <h1 className="max-w-3xl text-3xl font-semibold leading-tight text-[#102A43] sm:text-4xl lg:text-[2.8rem]">
              Book healthcare support with Enekem Medicals
            </h1>

            <div className="mt-6 max-w-2xl space-y-5 text-base leading-relaxed text-[#526071]">
              <p>
                Book an appointment with Enekem Medicals for consultation,
                diagnostics, or pharmacy-related services. Our team will review
                your request and respond as quickly as possible.
              </p>
              <p>
                You can either book directly through the form below or contact
                us instantly via WhatsApp for faster assistance.
              </p>
            </div>
          </div>

          {/* Right — what you can book */}
          <div className="booking-services-panel rounded-[2rem] border border-[#D8E8EE] bg-[#FCFDFD] p-6 shadow-[0_24px_80px_rgba(16,42,67,0.08)] sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#25D366]">
              What you can book
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {bookingServices.map((service) => {
                const Icon = service.icon;
                return (
                  <div
                    key={service.title}
                    className="group flex items-center gap-3 rounded-2xl border border-[#D8E8EE] bg-white p-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#25D366]/40 hover:shadow-md"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#F0F7FF] text-[#102A43] transition-all duration-300 group-hover:bg-[#01369E] group-hover:text-white">
                      <Icon size={21} strokeWidth={2.5} />
                    </div>
                    <p className="text-sm font-semibold text-[#102A43]">
                      {service.title}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          FORM + ALTERNATIVE METHOD
      ══════════════════════════════════════════ */}
      <section className="px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.15fr_0.85fr]">

          {/* ── BOOKING FORM ── */}
          <div className="booking-form-card relative overflow-hidden rounded-[2rem] border border-[#D8E8EE] bg-gradient-to-br from-[#F0F7FF] via-white to-[#F8FBFF] p-6 shadow-[0_28px_90px_rgba(1,54,158,0.10)] sm:p-8 lg:p-10">
            {/* Left accent bar */}
            <div className="absolute left-0 top-0 h-full w-1.5 rounded-l-[2rem] bg-gradient-to-b from-[#01369E] via-[#25D366] to-[#44CC3A]" />

            <div className="mb-8">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#25D366]">
                Booking Form
              </p>
              <h2 className="text-2xl font-semibold text-[#102A43] sm:text-3xl">
                Tell us what you need
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[#64748B] sm:text-base">
                Complete the form and our team will contact you to confirm
                availability and guide you on the next steps.
              </p>
            </div>

            {/* Success banner */}
            {isSubmitted && (
              <div className="mb-7 rounded-2xl border border-[#b3f0cc] bg-[#f0fbf4] p-5" aria-live="polite">
                <div className="flex gap-3">
                  <CheckCircle2 className="mt-0.5 shrink-0 text-[#25D366]" size={22} strokeWidth={2.6} />
                  <div>
                    <h3 className="font-semibold text-[#102A43]">Booking request received</h3>
                    <p className="mt-1 text-sm leading-relaxed text-[#526071]">
                      Thank you. Your appointment request has been submitted.
                      Our team will review your information and contact you to confirm availability.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Error banner */}
            {submitError && (
              <div className="mb-7 rounded-2xl border border-[#F2B8B5] bg-[#FFF5F5] p-5" aria-live="polite">
                <div className="flex gap-3">
                  <AlertTriangle className="mt-0.5 shrink-0 text-[#B94747]" size={22} strokeWidth={2.6} />
                  <div>
                    <h3 className="font-semibold text-[#102A43]">Booking could not be submitted</h3>
                    <p className="mt-1 text-sm leading-relaxed text-[#526071]">{submitError}</p>
                  </div>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} noValidate className="space-y-6">

              {/* Row 1 — Full Name + Phone */}
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label htmlFor="fullName" className="mb-2 block text-sm font-semibold text-[#102A43]">
                    Full Name
                  </label>
                  <input
                    id="fullName" name="fullName" type="text"
                    value={formData.fullName} onChange={handleChange}
                    placeholder="Enter your full name"
                    className={inputClass(errors.fullName)}
                  />
                  {errors.fullName && <p className="mt-2 text-sm text-[#B94747]">{errors.fullName}</p>}
                </div>

                <div>
                  <label htmlFor="phoneNumber" className="mb-2 block text-sm font-semibold text-[#102A43]">
                    Phone Number
                  </label>
                  <input
                    id="phoneNumber" name="phoneNumber" type="tel"
                    value={formData.phoneNumber} onChange={handleChange}
                    placeholder="Enter your phone number"
                    className={inputClass(errors.phoneNumber)}
                  />
                  {errors.phoneNumber && <p className="mt-2 text-sm text-[#B94747]">{errors.phoneNumber}</p>}
                </div>
              </div>

              {/* Row 2 — Email (now required) + Service */}
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  {/* CHANGE 2: "(optional)" span removed — email is now required */}
                  <label htmlFor="email" className="mb-2 block text-sm font-semibold text-[#102A43]">
                    Email Address
                  </label>
                  <input
                    id="email" name="email" type="email"
                    value={formData.email} onChange={handleChange}
                    placeholder="Enter your email address"
                    className={inputClass(errors.email)}
                  />
                  {errors.email && <p className="mt-2 text-sm text-[#B94747]">{errors.email}</p>}
                </div>

                <div>
                  <label htmlFor="service" className="mb-2 block text-sm font-semibold text-[#102A43]">
                    Select Service
                  </label>
                  <select
                    id="service" name="service"
                    value={formData.service} onChange={handleChange}
                    className={inputClass(errors.service)}
                  >
                    <option value="">Choose a service</option>
                    <option value="General Consultation">General Consultation</option>
                    <option value="Specialist Consultation">Specialist Consultation</option>
                    <option value="Laboratory Test">Laboratory Test</option>
                    <option value="Diagnostics (Ultrasound, ECG)">Diagnostics (Ultrasound, ECG)</option>
                    <option value="Pharmacy Assistance">Pharmacy Assistance</option>
                  </select>
                  {errors.service && <p className="mt-2 text-sm text-[#B94747]">{errors.service}</p>}
                </div>
              </div>

              {/* Row 3 — Date + Time */}
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label htmlFor="preferredDate" className="mb-2 block text-sm font-semibold text-[#102A43]">
                    Preferred Date
                  </label>
                  <div className="relative">
                    <CalendarDays size={18} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#64748B]" />
                    <input
                      id="preferredDate" name="preferredDate" type="date"
                      min={today} value={formData.preferredDate} onChange={handleChange}
                      className={`w-full rounded-2xl border bg-[#FCFDFD] py-4 pl-12 pr-4 text-sm text-[#102A43] outline-none transition focus:border-[#25D366] focus:ring-4 focus:ring-[#25D366]/10 ${errors.preferredDate ? "border-[#D96C6C]" : "border-[#D8E8EE]"}`}
                    />
                  </div>
                  {errors.preferredDate && <p className="mt-2 text-sm text-[#B94747]">{errors.preferredDate}</p>}
                </div>

                <div>
                  <label htmlFor="preferredTime" className="mb-2 block text-sm font-semibold text-[#102A43]">
                    Preferred Time
                  </label>
                  <div className="relative">
                    <Clock3 size={18} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#64748B]" />
                    <input
                      id="preferredTime" name="preferredTime" type="time"
                      value={formData.preferredTime} onChange={handleChange}
                      className={`w-full rounded-2xl border bg-[#FCFDFD] py-4 pl-12 pr-4 text-sm text-[#102A43] outline-none transition focus:border-[#25D366] focus:ring-4 focus:ring-[#25D366]/10 ${errors.preferredTime ? "border-[#D96C6C]" : "border-[#D8E8EE]"}`}
                    />
                  </div>
                  {/* CHANGE 3: shows "slot taken" error from validateForm */}
                  {errors.preferredTime && <p className="mt-2 text-sm text-[#B94747]">{errors.preferredTime}</p>}
                </div>
              </div>

              {/* Description */}
              <div>
                <label htmlFor="description" className="mb-2 block text-sm font-semibold text-[#102A43]">
                  Brief Description of Your Request
                </label>
                <div className="relative">
                  <FileText size={18} className="pointer-events-none absolute left-4 top-5 text-[#64748B]" />
                  <textarea
                    id="description" name="description" rows={5}
                    value={formData.description} onChange={handleChange}
                    placeholder="Briefly tell us what you need help with"
                    className={`w-full resize-none rounded-2xl border bg-[#FCFDFD] py-4 pl-12 pr-4 text-sm text-[#102A43] outline-none transition focus:border-[#25D366] focus:ring-4 focus:ring-[#25D366]/10 ${errors.description ? "border-[#D96C6C]" : "border-[#D8E8EE]"}`}
                  />
                </div>
                {errors.description && <p className="mt-2 text-sm text-[#B94747]">{errors.description}</p>}
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#01369E] px-7 py-4 text-sm font-bold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-[#002D82] disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
              >
                <Send size={18} strokeWidth={2.5} />
                {isSubmitting ? "Submitting..." : "Submit Booking"}
              </button>
            </form>
          </div>

          {/* ── ALTERNATIVE BOOKING METHOD ── */}
          <aside className="booking-side-panel space-y-6">
            <div className="rounded-[2rem] border border-[#D8E8EE] bg-[#F0F7FF] p-6 shadow-[0_24px_80px_rgba(16,42,67,0.06)] sm:p-8">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#25D366]">
                Alternative Booking Method
              </p>
              <h2 className="text-2xl font-semibold text-[#102A43]">
                Need a faster response?
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-[#526071]">
                For faster response, you can also book directly via WhatsApp.
              </p>
              <div className="mt-6 flex flex-col gap-3">
                <a
                  href={whatsappBookingLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-4 text-sm font-bold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-[#1aad4f]"
                >
                  <FaWhatsapp className="text-lg" />
                  Chat on WhatsApp
                </a>
                <a
                  href={`tel:${contactInfo.phone1.replace(/\s+/g, "")}`}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-[#D8E8EE] bg-white px-6 py-4 text-sm font-bold text-[#102A43] transition-all duration-300 hover:-translate-y-1 hover:border-[#25D366] hover:text-[#25D366]"
                >
                  <PhoneCall size={18} strokeWidth={2.5} />
                  Call Now
                </a>
              </div>
            </div>

            <div className="rounded-[2rem] border border-[#D8E8EE] bg-white p-6 shadow-[0_24px_80px_rgba(16,42,67,0.06)] sm:p-8">
              <h3 className="text-xl font-semibold text-[#102A43]">
                When sending a WhatsApp message, include:
              </h3>
              <div className="mt-5 space-y-4">
                {["Your full name", "Service needed", "Preferred date or time"].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 size={20} className="shrink-0 text-[#25D366]" strokeWidth={2.5} />
                    <p className="text-sm text-[#526071]">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          WHAT HAPPENS AFTER BOOKING
      ══════════════════════════════════════════ */}
      <section className="px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="booking-process-heading mx-auto max-w-3xl text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#25D366]">
              What Happens After Booking?
            </p>
            <h2 className="text-3xl font-medium leading-tight text-[#102A43] sm:text-4xl">
              A clear process from request to visit
            </h2>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            {bookingSteps.map((step, index) => (
              <article
                key={step.title}
                className={`booking-step booking-step-delay-${index + 1} rounded-[1.7rem] border border-[#D8E8EE] bg-[#FCFDFD] p-6 shadow-[0_18px_55px_rgba(16,42,67,0.05)]`}
              >
                <p className="text-sm font-bold text-[#25D366]">0{index + 1}</p>
                <h3 className="mt-4 text-xl font-semibold text-[#102A43]">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#64748B]">{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          IMPORTANT NOTE — subtle red
      ══════════════════════════════════════════ */}
      <section className="px-5 pb-20 sm:px-8 lg:px-10">
        <div className="booking-warning mx-auto max-w-7xl">
          <div className="flex items-center gap-2 text-red-400">
            <AlertTriangle size={13} strokeWidth={2.5} className="shrink-0" />
            <p className="text-xs leading-relaxed text-red-400">
              <span className="font-semibold">Important Note: </span>
              For emergency cases, please call us directly or visit our facility
              immediately instead of using the booking form.
            </p>
          </div>
        </div>
      </section>

    </main>
  );
};

export default Bookings;