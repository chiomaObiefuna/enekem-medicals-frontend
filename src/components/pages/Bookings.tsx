import {
  useEffect,
  useState,
  type ChangeEvent,
  type FormEvent,
} from "react";
import {useSearchParams } from "react-router-dom";
import {
  AlertTriangle,
  CalendarDays,
  CheckCircle2,
  Clock3,
  FileText,
  PhoneCall,
  Send,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

import { contactInfo } from "../data/contactInfo";

// ─────────────────────────────────────────
// SERVICE CONFIG
// ─────────────────────────────────────────

type ServiceMode = "online" | "physical" | "both";

interface SubServiceOption {
  label: string;
  value: string;
}

interface ServiceConfig {
  name: string;
  slug: string;
  aliases?: string[];
  mode: ServiceMode;
  onlinePrice?: string;
  physicalPrice?: string;
  onlineDuration?: string;
  physicalDuration?: string;
  subServices?: SubServiceOption[];
  subServicesLabel?: string;
}

const serviceConfigs: ServiceConfig[] = [
  {
    name: "GP Consultation",
    slug: "gp-consultation",
    aliases: ["general-consultation", "general-practitioner"],
    mode: "both",
    onlinePrice: "₦20,000",
    physicalPrice: "₦15,000",
    onlineDuration: "30 minutes",
    physicalDuration: "10–15 minutes",
  },
  {
    name: "Specialist Consultation",
    slug: "specialist-consultation",
    mode: "physical",
    physicalPrice: "₦60,000",
    physicalDuration: "10–15 minutes",
    subServicesLabel: "Select Specialist",
    subServices: [
      {
        label: "Paediatrician — Children’s Health",
        value: "paediatrician",
      },
      {
        label: "Cardiologist — Heart Conditions",
        value: "cardiologist",
      },
      {
        label: "Endocrinologist — Diabetes & Hormones",
        value: "endocrinologist",
      },
      {
        label: "General Surgeon — Surgical Conditions",
        value: "general-surgeon",
      },
      {
        label: "Orthopaedic Surgeon — Bones & Joints",
        value: "orthopaedic-surgeon",
      },
      {
        label: "Urologist — Urinary Tract",
        value: "urologist",
      },
      {
        label: "Gynaecologist — Women’s Health",
        value: "gynaecologist",
      },
    ],
  },
  {
    name: "Nursing Care",
    slug: "nursing-care",
    mode: "physical",
    physicalPrice: "₦15,000",
    physicalDuration: "Depends on care required",
  },
  {
    name: "Laboratory Diagnosis",
    slug: "laboratory-diagnosis",
    aliases: ["laboratory", "laboratory-test", "laboratory-tests"],
    mode: "physical",
    physicalPrice: "Varies by test",
    physicalDuration: "15–30 minutes",
  },
  {
    name: "Ultrasound Scan Services",
    slug: "ultrasound",
    aliases: ["ultrasound-scan", "ultrasound-scan-services"],
    mode: "physical",
    physicalPrice: "Varies by scan type",
    physicalDuration: "20–45 minutes",
    subServicesLabel: "Select Scan Type",
    subServices: [
      {
        label: "Abdominal Ultrasound",
        value: "abdominal-ultrasound",
      },
      {
        label: "Pelvic Ultrasound",
        value: "pelvic-ultrasound",
      },
      {
        label: "Obstetric Ultrasound",
        value: "obstetric-ultrasound",
      },
      {
        label: "Breast Ultrasound",
        value: "breast-ultrasound",
      },
      {
        label: "Scrotal Ultrasound",
        value: "scrotal-ultrasound",
      },
    ],
  },
  {
    name: "ECG",
    slug: "ecg",
    mode: "physical",
    physicalPrice: "₦15,000",
    physicalDuration: "15–30 minutes",
  },
  {
    name: "Dental Services",
    slug: "dental",
    aliases: ["dental-services"],
    mode: "physical",
    physicalPrice: "₦15,000 + procedure fees",
    physicalDuration: "15–45 minutes",
    subServicesLabel: "Select Dental Procedure",
    subServices: [
      {
        label: "Dental Consultation & Examination",
        value: "dental-consultation-examination",
      },
      {
        label: "Tooth Extraction",
        value: "tooth-extraction",
      },
      {
        label: "Dental Filling",
        value: "dental-filling",
      },
      {
        label: "Scaling & Polishing",
        value: "scaling-polishing",
      },
      {
        label: "Treatment of Dental Pain & Infections",
        value: "dental-pain-infections",
      },
    ],
  },
  {
    name: "Telemedicine",
    slug: "telemedicine",
    mode: "online",
    onlinePrice: "₦20,000",
    onlineDuration: "30 minutes",
  },
  {
    name: "Family Planning",
    slug: "family-planning",
    mode: "physical",
    physicalPrice: "₦15,000 + contraceptive costs",
    physicalDuration: "15–30 minutes",
    subServicesLabel: "Select Contraceptive Method",
    subServices: [
      {
        label: "Implanon — Arm Implant",
        value: "implanon",
      },
      {
        label: "Jadelle — Arm Implant",
        value: "jadelle",
      },
      {
        label: "IUD — Hormonal",
        value: "iud-hormonal",
      },
      {
        label: "IUD — Copper, Non-Hormonal",
        value: "iud-copper",
      },
      {
        label: "Counselling Only",
        value: "counselling-only",
      },
    ],
  },
  {
    name: "Immunization",
    slug: "immunization",
    mode: "physical",
    physicalPrice: "Varies by vaccine",
    physicalDuration: "15–20 minutes",
  },
  {
    name: "Pharmacy Assistance",
    slug: "pharmacy-assistance",
    aliases: ["pharmacy", "pharmacy-orders"],
    mode: "physical",
    physicalPrice: "Depends on medication or product",
    physicalDuration: "Response time varies",
  },
];

// ─────────────────────────────────────────
// BOOKING STEPS
// ─────────────────────────────────────────

const bookingSteps = [
  {
    title: "Review your information",
    description:
      "Our team reviews your submitted details and confirms the service requested.",
  },
  {
    title: "Confirm availability",
    description:
      "You will be contacted to confirm availability, timing, and any important details.",
  },
  {
    title: "Guide your next steps",
    description:
      "Before your visit or session, our team will guide you on what to bring or prepare where necessary.",
  },
];

// ─────────────────────────────────────────
// FORM TYPES
// ─────────────────────────────────────────

type BookingFormData = {
  fullName: string;
  phoneNumber: string;
  email: string;
  service: string;
  subService: string;
  mode: string;
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
  subService: "",
  mode: "",
  preferredDate: "",
  preferredTime: "",
  description: "",
};

// ─────────────────────────────────────────
// HELPERS
// ─────────────────────────────────────────

const createSlug = (value: string) =>
  value
    .toLowerCase()
    .trim()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

const getServiceConfig = (value: string): ServiceConfig | undefined => {
  const normalizedValue = createSlug(value);

  return serviceConfigs.find((service) => {
    const possibleMatches = [
      service.name,
      service.slug,
      ...(service.aliases || []),
    ].map(createSlug);

    return possibleMatches.includes(normalizedValue);
  });
};

const getSubServiceLabel = (
  config: ServiceConfig | undefined,
  value: string
) => {
  if (!config?.subServices || !value) return "";

  const normalizedValue = createSlug(value);

  const found = config.subServices.find(
    (item) =>
      createSlug(item.value) === normalizedValue ||
      createSlug(item.label) === normalizedValue
  );

  return found?.label || "";
};

const getSubServiceValue = (
  config: ServiceConfig | undefined,
  value: string
) => {
  if (!config?.subServices || !value) return "";

  const normalizedValue = createSlug(value);

  const found = config.subServices.find(
    (item) =>
      createSlug(item.value) === normalizedValue ||
      createSlug(item.label) === normalizedValue
  );

  return found?.value || "";
};

const getAutoMode = (config: ServiceConfig | undefined) => {
  if (!config) return "";
  if (config.mode === "online") return "online";
  if (config.mode === "physical") return "physical";
  return "";
};

// ─────────────────────────────────────────
// MAIN COMPONENT
// ─────────────────────────────────────────

const Bookings = () => {
  const [searchParams] = useSearchParams();

  const [formData, setFormData] = useState<BookingFormData>(initialFormData);
  const [errors, setErrors] = useState<BookingFormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [bookedSlots, setBookedSlots] = useState<string[]>([]);

  const today = new Date().toISOString().split("T")[0];
  const slotKey = (date: string, time: string) => `${date}|${time}`;

  // Prefill form from service page URL parameters
  useEffect(() => {
    const serviceParam = searchParams.get("service");
    if (!serviceParam) return;

    const matchedConfig = getServiceConfig(serviceParam);
    if (!matchedConfig) return;

    const requestedMode =
      searchParams.get("mode") || searchParams.get("visit") || "";

    const validMode =
      matchedConfig.mode === "both" &&
      (requestedMode === "online" || requestedMode === "physical")
        ? requestedMode
        : getAutoMode(matchedConfig);

    const requestedSubService =
      searchParams.get("subservice") || searchParams.get("specialist") || "";

    const matchedSubService = getSubServiceValue(
      matchedConfig,
      requestedSubService
    );

    setFormData((prev) => ({
      ...prev,
      service: matchedConfig.name,
      mode: validMode,
      subService: matchedSubService,
    }));
  }, [searchParams]);

  const selectedConfig = getServiceConfig(formData.service);
  const hasSubServices = !!selectedConfig?.subServices?.length;
  const hasModeChoice = selectedConfig?.mode === "both";

  const selectedSubServiceLabel = getSubServiceLabel(
    selectedConfig,
    formData.subService
  );

  const displayPrice =
    formData.mode === "online"
      ? selectedConfig?.onlinePrice
      : formData.mode === "physical"
      ? selectedConfig?.physicalPrice
      : selectedConfig?.physicalPrice || selectedConfig?.onlinePrice;

  const displayDuration =
    formData.mode === "online"
      ? selectedConfig?.onlineDuration
      : formData.mode === "physical"
      ? selectedConfig?.physicalDuration
      : selectedConfig?.physicalDuration || selectedConfig?.onlineDuration;

  const selectedModeLabel =
    formData.mode === "online"
      ? "Online request"
      : formData.mode === "physical"
      ? "Clinic visit"
      : "";

  const handleServiceChange = (value: string) => {
    const config = getServiceConfig(value);

    setFormData((prev) => ({
      ...prev,
      service: value,
      subService: "",
      mode: getAutoMode(config),
    }));

    setErrors((prev) => ({
      ...prev,
      service: "",
      subService: "",
      mode: "",
    }));

    setSubmitError("");
    if (isSubmitted) setIsSubmitted(false);
  };

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;

    if (name === "service") {
      handleServiceChange(value);
      return;
    }

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));

    setErrors((current) => ({
      ...current,
      [name]: "",
    }));

    setSubmitError("");
    if (isSubmitted) setIsSubmitted(false);
  };

  const handleModeSelect = (mode: "online" | "physical") => {
    setFormData((current) => ({
      ...current,
      mode,
    }));

    setErrors((current) => ({
      ...current,
      mode: "",
    }));

    setSubmitError("");
    if (isSubmitted) setIsSubmitted(false);
  };

  const validateForm = () => {
    const newErrors: BookingFormErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Please enter your full name.";
    }

    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = "Please enter your phone number.";
    }

    if (
      formData.email.trim() &&
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
    ) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formData.service) {
      newErrors.service = "Please select a service.";
    }

    if (hasSubServices && !formData.subService) {
      newErrors.subService = `Please select a ${
        selectedConfig?.subServicesLabel?.toLowerCase() || "service option"
      }.`;
    }

    if (hasModeChoice && !formData.mode) {
      newErrors.mode = "Please choose how you would like to continue.";
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

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formErrors = validateForm();

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    setIsSubmitting(true);
    setSubmitError("");

    try {
      const response = await fetch(
        "https://primary-production-d8fe.up.railway.app/webhook/enekem-booking",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            full_name: formData.fullName,
            phone: formData.phoneNumber,
            email: formData.email || "N/A",
            service: formData.service,
            sub_service: selectedSubServiceLabel || "N/A",
            mode: selectedModeLabel || "N/A",
            date: formData.preferredDate,
            time: formData.preferredTime,
            brief_description: formData.description,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Booking submission failed");
      }

      setBookedSlots((prev) => [
        ...prev,
        slotKey(formData.preferredDate, formData.preferredTime),
      ]);

      setIsSubmitted(true);
      setFormData(initialFormData);
      setErrors({});
    } catch {
      setSubmitError(
        "We could not submit your booking at the moment. Please try again or use the alternative booking method."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const whatsappMessage = encodeURIComponent(
    `Hello Enekem Medicals, I would like to book an appointment.\n\nFull name:\nService needed:\nPreferred date or time:`
  );

  const whatsappSeparator = contactInfo.whatsappLink.includes("?") ? "&" : "?";
  const whatsappBookingLink = `${contactInfo.whatsappLink}${whatsappSeparator}text=${whatsappMessage}`;

  const cleanPhoneNumber = contactInfo.phone1.replace(/\s+/g, "");

  const inputClass = (error?: string) =>
    `w-full rounded-2xl border bg-[#FCFDFD] px-4 py-4 text-sm text-[#102A43] outline-none transition
     focus:border-[#44CC3A] focus:ring-4 focus:ring-[#44CC3A]/10
     ${error ? "border-[#D96C6C]" : "border-[#D8E8EE]"}`;

  return (
    <main className="w-full bg-white">
      {/* HERO */}
     <section className="relative overflow-hidden bg-white px-5 pb-8 pt-20 sm:px-8 sm:pb-10 sm:pt-24 lg:px-10 lg:pb-12 lg:pt-28">
        <div className="booking-blob-one pointer-events-none absolute -left-24 top-16 h-80 w-80 rounded-full bg-[#F0F7FF] blur-3xl" />
        <div className="booking-blob-two pointer-events-none absolute -right-24 bottom-8 h-96 w-96 rounded-full bg-[#E7F1E8] blur-3xl" />

        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="booking-hero-copy max-w-4xl">
            <p className="mb-5 inline-flex rounded-full border border-[#D8E8EE] bg-[#FCFDFD] px-5 py-2  text-sm font-semibold uppercase tracking-[0.2em] text-[#44CC3A]">
              Booking an Appointment
            </p>

            <h1 className="max-w-3xl text-3xl font-semibold leading-tight text-[#102A43] sm:text-4xl lg:text-[2.8rem]">
              Book healthcare support with Enekem Medicals
            </h1>

            <p className="mt-4 max-w-3xl text-base leading-relaxed text-[#526071]">
              Book an appointment for consultation, diagnostics, pharmacy-related
              assistance, or other healthcare services. Our team will review your
              request, confirm availability, and guide you on the next steps.
            </p>
          </div>
        </div>
      </section>

      {/* FORM AREA */}
     <section className="px-5 pb-16 pt-6 sm:px-8 sm:pb-20 sm:pt-8 lg:px-10 lg:pt-10">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          {/* BOOKING FORM */}
          <div className="booking-form-card relative overflow-hidden rounded-[2rem] border border-[#D8E8EE] bg-gradient-to-br from-[#F0F7FF] via-white to-[#F8FBFF] p-6 shadow-[0_28px_90px_rgba(1,54,158,0.10)] sm:p-8 lg:p-10">
            <div className="absolute left-0 top-0 h-full w-1.5 rounded-l-[2rem] bg-gradient-to-b from-[#01369E] via-[#44CC3A] to-[#44CC3A]" />

            <div className="mb-8">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#44CC3A]">
                Booking Form
              </p>

              <h2 className="text-2xl font-semibold text-[#102A43] sm:text-3xl">
                Tell us what you need
              </h2>

              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[#64748B] sm:text-base">
                Fill in your details below. Our team will contact you to confirm
                availability before your appointment is final.
              </p>
            </div>

            {isSubmitted && (
              <div
                className="mb-7 rounded-2xl border border-[#b3f0cc] bg-[#f0fbf4] p-5"
                aria-live="polite"
              >
                <div className="flex gap-3">
                  <CheckCircle2
                    className="mt-0.5 shrink-0 text-[#44CC3A]"
                    size={22}
                    strokeWidth={2.6}
                  />

                  <div>
                    <h3 className="font-semibold text-[#102A43]">
                      Booking request received
                    </h3>

                    <p className="mt-1 text-sm leading-relaxed text-[#526071]">
                      Thank you. Your appointment request has been submitted.
                      Our team will review your information and contact you to
                      confirm availability.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {submitError && (
              <div
                className="mb-7 rounded-2xl border border-[#F2B8B5] bg-[#FFF5F5] p-5"
                aria-live="polite"
              >
                <div className="flex gap-3">
                  <AlertTriangle
                    className="mt-0.5 shrink-0 text-[#B94747]"
                    size={22}
                    strokeWidth={2.6}
                  />

                  <div>
                    <h3 className="font-semibold text-[#102A43]">
                      Booking could not be submitted
                    </h3>

                    <p className="mt-1 text-sm leading-relaxed text-[#526071]">
                      {submitError}
                    </p>
                  </div>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} noValidate className="space-y-6">
              {/* Name + Phone */}
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label
                    htmlFor="fullName"
                    className="mb-2 block text-sm font-semibold text-[#102A43]"
                  >
                    Full Name
                  </label>

                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className={inputClass(errors.fullName)}
                  />

                  {errors.fullName && (
                    <p className="mt-2 text-sm text-[#B94747]">
                      {errors.fullName}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="phoneNumber"
                    className="mb-2 block text-sm font-semibold text-[#102A43]"
                  >
                    Phone Number
                  </label>

                  <input
                    id="phoneNumber"
                    name="phoneNumber"
                    type="tel"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    placeholder="Enter your phone number"
                    className={inputClass(errors.phoneNumber)}
                  />

                  {errors.phoneNumber && (
                    <p className="mt-2 text-sm text-[#B94747]">
                      {errors.phoneNumber}
                    </p>
                  )}
                </div>
              </div>

              {/* Email + Service */}
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-semibold text-[#102A43]"
                  >
                    Email Address{" "}
                    <span className="font-normal text-[#64748B]">
                      (optional)
                    </span>
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email address"
                    className={inputClass(errors.email)}
                  />

                  {errors.email && (
                    <p className="mt-2 text-sm text-[#B94747]">
                      {errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="service"
                    className="mb-2 block text-sm font-semibold text-[#102A43]"
                  >
                    Select Service
                  </label>

                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className={inputClass(errors.service)}
                  >
                    <option value="">Choose a service</option>

                    {serviceConfigs.map((service) => (
                      <option key={service.slug} value={service.name}>
                        {service.name}
                      </option>
                    ))}
                  </select>

                  {errors.service && (
                    <p className="mt-2 text-sm text-[#B94747]">
                      {errors.service}
                    </p>
                  )}
                </div>
              </div>

              {/* Sub-service */}
              {hasSubServices && (
                <div>
                  <label
                    htmlFor="subService"
                    className="mb-2 block text-sm font-semibold text-[#102A43]"
                  >
                    {selectedConfig?.subServicesLabel || "Select Option"}
                  </label>

                  <select
                    id="subService"
                    name="subService"
                    value={formData.subService}
                    onChange={handleChange}
                    className={inputClass(errors.subService)}
                  >
                    <option value="">
                      Choose{" "}
                      {selectedConfig?.subServicesLabel?.toLowerCase() ||
                        "an option"}
                    </option>

                    {selectedConfig?.subServices?.map((subService) => (
                      <option key={subService.value} value={subService.value}>
                        {subService.label}
                      </option>
                    ))}
                  </select>

                  {errors.subService && (
                    <p className="mt-2 text-sm text-[#B94747]">
                      {errors.subService}
                    </p>
                  )}
                </div>
              )}

              {/* Mode choice only when needed */}
              {hasModeChoice && (
                <div>
                  <label className="mb-3 block text-sm font-semibold text-[#102A43]">
                    How would you like to continue?
                  </label>

                  <div className="grid gap-3 sm:grid-cols-2">
                    <button
                      type="button"
                      onClick={() => handleModeSelect("online")}
                      className={`rounded-2xl border-2 p-4 text-left transition-all duration-200 ${
                        formData.mode === "online"
                          ? "border-[#44CC3A] bg-[#44CC3A]/10"
                          : "border-[#D8E8EE] bg-white hover:border-[#44CC3A]/50"
                      }`}
                    >
                      <p className="text-sm font-bold text-[#102A43]">
                        Online request
                      </p>

                      <p className="mt-1 text-xs leading-relaxed text-[#526071]">
                        Start the appointment process online.
                      </p>
                    </button>

                    <button
                      type="button"
                      onClick={() => handleModeSelect("physical")}
                      className={`rounded-2xl border-2 p-4 text-left transition-all duration-200 ${
                        formData.mode === "physical"
                          ? "border-[#01369E] bg-[#01369E]/10"
                          : "border-[#D8E8EE] bg-white hover:border-[#01369E]/50"
                      }`}
                    >
                      <p className="text-sm font-bold text-[#102A43]">
                        Clinic visit
                      </p>

                      <p className="mt-1 text-xs leading-relaxed text-[#526071]">
                        Book ahead before visiting the clinic.
                      </p>
                    </button>
                  </div>

                  {errors.mode && (
                    <p className="mt-2 text-sm text-[#B94747]">
                      {errors.mode}
                    </p>
                  )}
                </div>
              )}

             
              {/* Date + Time */}
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label
                    htmlFor="preferredDate"
                    className="mb-2 block text-sm font-semibold text-[#102A43]"
                  >
                    Preferred Date
                  </label>

                  <div className="relative">
                    <CalendarDays
                      size={18}
                      className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#64748B]"
                    />

                    <input
                      id="preferredDate"
                      name="preferredDate"
                      type="date"
                      min={today}
                      value={formData.preferredDate}
                      onChange={handleChange}
                      className={`w-full rounded-2xl border bg-[#FCFDFD] py-4 pl-12 pr-4 text-sm text-[#102A43] outline-none transition focus:border-[#44CC3A] focus:ring-4 focus:ring-[#44CC3A]/10 ${
                        errors.preferredDate
                          ? "border-[#D96C6C]"
                          : "border-[#D8E8EE]"
                      }`}
                    />
                  </div>

                  {errors.preferredDate && (
                    <p className="mt-2 text-sm text-[#B94747]">
                      {errors.preferredDate}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="preferredTime"
                    className="mb-2 block text-sm font-semibold text-[#102A43]"
                  >
                    Preferred Time
                  </label>

                  <div className="relative">
                    <Clock3
                      size={18}
                      className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#64748B]"
                    />

                    <input
                      id="preferredTime"
                      name="preferredTime"
                      type="time"
                      value={formData.preferredTime}
                      onChange={handleChange}
                      className={`w-full rounded-2xl border bg-[#FCFDFD] py-4 pl-12 pr-4 text-sm text-[#102A43] outline-none transition focus:border-[#44CC3A] focus:ring-4 focus:ring-[#44CC3A]/10 ${
                        errors.preferredTime
                          ? "border-[#D96C6C]"
                          : "border-[#D8E8EE]"
                      }`}
                    />
                  </div>

                  {errors.preferredTime && (
                    <p className="mt-2 text-sm text-[#B94747]">
                      {errors.preferredTime}
                    </p>
                  )}
                </div>
              </div>

              {/* Description */}
              <div>
                <label
                  htmlFor="description"
                  className="mb-2 block text-sm font-semibold text-[#102A43]"
                >
                  Brief Description of Your Request
                </label>

                <div className="relative">
                  <FileText
                    size={18}
                    className="pointer-events-none absolute left-4 top-5 text-[#64748B]"
                  />

                  <textarea
                    id="description"
                    name="description"
                    rows={5}
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="Briefly tell us what you need help with"
                    className={`w-full resize-none rounded-2xl border bg-[#FCFDFD] py-4 pl-12 pr-4 text-sm text-[#102A43] outline-none transition focus:border-[#44CC3A] focus:ring-4 focus:ring-[#44CC3A]/10 ${
                      errors.description
                        ? "border-[#D96C6C]"
                        : "border-[#D8E8EE]"
                    }`}
                  />
                </div>

                {errors.description && (
                  <p className="mt-2 text-sm text-[#B94747]">
                    {errors.description}
                  </p>
                )}
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

          {/* SIDE PANEL */}
          <aside className="booking-side-panel space-y-6">
            <div className="rounded-[2rem] border border-[#D8E8EE] bg-[#F0F7FF] p-6 shadow-[0_24px_80px_rgba(16,42,67,0.06)] sm:p-8">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#44CC3A]">
                Booking Summary
              </p>

              {selectedConfig ? (
                <div className="space-y-5">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#64748B]">
                      Service
                    </p>
                    <p className="mt-1 text-lg font-semibold text-[#102A43]">
                      {selectedConfig.name}
                    </p>
                  </div>

                  {selectedSubServiceLabel && (
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#64748B]">
                        Option
                      </p>
                      <p className="mt-1 text-sm font-semibold text-[#102A43]">
                        {selectedSubServiceLabel}
                      </p>
                    </div>
                  )}

                  {selectedModeLabel && (
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#64748B]">
                        Booking Type
                      </p>
                      <p className="mt-1 text-sm font-semibold text-[#102A43]">
                        {selectedModeLabel}
                      </p>
                    </div>
                  )}

                  {(displayPrice || displayDuration) && (
                    <div className="rounded-2xl bg-white p-5">
                      {displayPrice && (
                        <p className="text-sm font-semibold text-[#102A43]">
                          {displayPrice}
                        </p>
                      )}

                      {displayDuration && (
                        <p className="mt-1 text-xs leading-relaxed text-[#64748B]">
                          Estimated duration: {displayDuration}
                        </p>
                      )}
                    </div>
                  )}
                </div>
              ) : (
                <p className="text-sm leading-relaxed text-[#526071]">
                  Select a service in the form to see the relevant booking
                  details.
                </p>
              )}
            </div>

            <div className="rounded-[2rem] border border-[#D8E8EE] bg-white p-6 shadow-[0_24px_80px_rgba(16,42,67,0.06)] sm:p-8">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#44CC3A]">
                Alternative Booking Method
              </p>

              <h2 className="text-2xl font-semibold text-[#102A43]">
                Need a faster response?
              </h2>

              <p className="mt-4 text-sm leading-relaxed text-[#526071]">
                You can also send a WhatsApp message with your full name,
                service needed, and preferred date or time.
              </p>

              <a
                href={whatsappBookingLink}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#44CC3A] px-6 py-4 text-sm font-bold text-[#102A43] shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-[#53DD49]"
              >
                <FaWhatsapp className="text-lg" />
                Chat on WhatsApp
              </a>
            </div>
          </aside>
        </div>
      </section>

      {/* WHAT HAPPENS AFTER BOOKING */}
      <section className="bg-[#F8FBFF] px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="booking-process-heading mx-auto max-w-3xl text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#44CC3A]">
              What Happens After Booking?
            </p>

            <h2 className="text-3xl font-medium leading-tight text-[#102A43] sm:text-4xl">
              A clear process from request to confirmation
            </h2>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            {bookingSteps.map((step, index) => (
              <article
                key={step.title}
                className={`booking-step booking-step-delay-${
                  index + 1
                } rounded-[1.7rem] border border-[#D8E8EE] bg-white p-6 shadow-[0_18px_55px_rgba(16,42,67,0.05)]`}
              >
                <p className="text-sm font-bold text-[#44CC3A]">
                  0{index + 1}
                </p>

                <h3 className="mt-4 text-xl font-semibold text-[#102A43]">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-[#64748B]">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* IMPORTANT NOTE */}
      <section className="px-5 py-14 sm:px-8 lg:px-10">
        <div className="booking-warning mx-auto max-w-7xl rounded-2xl border border-[#F2B8B5] bg-[#FFF5F5] p-5">
          <div className="flex gap-3 text-[#B94747]">
            <AlertTriangle
              size={18}
              strokeWidth={2.5}
              className="mt-0.5 shrink-0"
            />

            <div>
              <p className="text-sm font-semibold">Important Note</p>

              <p className="mt-1 text-sm leading-relaxed">
                For emergency cases, please call Enekem Medicals directly on{" "}
                <a
                  href={`tel:${cleanPhoneNumber}`}
                  className="font-bold underline decoration-[#B94747]/40 underline-offset-4"
                >
                  {contactInfo.phone1}
                </a>{" "}
                or visit the facility immediately instead of using the booking
                form.
              </p>

              <p className="mt-2 flex items-center gap-2 text-xs">
                <PhoneCall size={14} strokeWidth={2.5} />
                Online booking requests are reviewed after submission and are
                not for emergencies.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Bookings;