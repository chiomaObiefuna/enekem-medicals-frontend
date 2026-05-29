import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";

import { contactInfo } from "../data/contactInfo";

export type ServiceMode = "online" | "physical" | "both";

export interface SubService {
  name: string;
  description?: string;
  slug?: string;
}

interface ServiceBookingCardProps {
  slug: string;
  name: string;
  mode: ServiceMode;
  onlinePrice?: string;
  physicalPrice?: string;
  duration: string;
  subServices?: SubService[];
}

const createSlug = (value: string) =>
  value
    .toLowerCase()
    .trim()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

const getInitialMode = (mode: ServiceMode): "online" | "physical" => {
  if (mode === "online") return "online";
  return "physical";
};

const ServiceBookingCard = ({
  slug,
  name,
  mode,
  onlinePrice,
  physicalPrice,
  duration,
  subServices = [],
}: ServiceBookingCardProps) => {
  const [selectedMode, setSelectedMode] = useState<"online" | "physical">(
    getInitialMode(mode)
  );

  const [selectedSubService, setSelectedSubService] = useState("");

  const hasSubServices = subServices.length > 0;

  const selectedSubServiceName = useMemo(() => {
    const found = subServices.find((item) => {
      const itemSlug = item.slug || createSlug(item.name);
      return itemSlug === selectedSubService;
    });

    return found?.name || "";
  }, [selectedSubService, subServices]);

  const canContinue = !hasSubServices || selectedSubService.length > 0;

  const bookingPath = useMemo(() => {
    const params = new URLSearchParams();

    params.set("service", slug);
    params.set("mode", selectedMode);

    if (selectedSubService) {
      params.set("subservice", selectedSubService);
    }

    return `/book?${params.toString()}`;
  }, [slug, selectedMode, selectedSubService]);

  const whatsappMessage = encodeURIComponent(
    `Hello Enekem Medicals, I would like to book an appointment.\n\nService: ${name}\nMode: ${selectedMode}${
      selectedSubServiceName ? `\nOption: ${selectedSubServiceName}` : ""
    }\nFull name:\nPreferred date or time:`
  );

  const whatsappSeparator = contactInfo.whatsappLink.includes("?") ? "&" : "?";
  const whatsappLink = `${contactInfo.whatsappLink}${whatsappSeparator}text=${whatsappMessage}`;

  const phoneNumber = contactInfo.phone1 || "+234 806 427 8568";
  const cleanPhoneNumber = phoneNumber.replace(/\s+/g, "");

  const modeOptions = [
    {
      value: "online" as const,
      label: "Online",
      enabled: mode === "online" || mode === "both",
      price: onlinePrice,
      helper: "Phone or video call",
    },
    {
      value: "physical" as const,
      label: "Physical",
      enabled: mode === "physical" || mode === "both",
      price: physicalPrice,
      helper: "Visit the clinic",
    },
  ];

  return (
    <div className="flex flex-col gap-5">
      <div className="overflow-hidden rounded-3xl border border-[#D8E8EE] bg-white shadow-[0_20px_60px_rgba(16,42,67,0.10)]">
        {/* Card Header */}
        <div className="bg-[#102A43] px-7 py-6">
          <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#F2C94C]">
            Book This Service
          </p>

          <h3 className="mt-2 text-xl font-extrabold text-white">{name}</h3>

          <p className="mt-2 text-sm leading-relaxed text-white/70">
            Choose your preferred option, then continue to the appointment form.
          </p>
        </div>

        {/* Service Summary */}
        <div className="border-b border-[#D8E8EE] px-7 py-5">
          <p className="mb-4 text-xs font-extrabold uppercase tracking-widest text-[#5F6F82]">
            Service Summary
          </p>

          <div className="space-y-3">
            {onlinePrice && (
              <div className="flex items-center justify-between gap-4">
                <span className="flex items-center gap-3 text-sm font-semibold text-[#5F6F82]">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#44CC3A]" />
                  Online
                </span>

                <span className="text-sm font-extrabold text-[#102A43]">
                  {onlinePrice}
                </span>
              </div>
            )}

            {physicalPrice && (
              <div className="flex items-center justify-between gap-4">
                <span className="flex items-center gap-3 text-sm font-semibold text-[#5F6F82]">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#3A9AD9]" />
                  Physical
                </span>

                <span className="text-sm font-extrabold text-[#102A43]">
                  {physicalPrice}
                </span>
              </div>
            )}

            <div className="flex items-center justify-between gap-4">
              <span className="flex items-center gap-3 text-sm font-semibold text-[#5F6F82]">
                <span className="h-2.5 w-2.5 rounded-full bg-[#F2C94C]" />
                Duration
              </span>

              <span className="text-right text-sm font-extrabold text-[#102A43]">
                {duration}
              </span>
            </div>
          </div>
        </div>

        {/* Mode Selection */}
        <div className="border-b border-[#D8E8EE] px-7 py-5">
          <p className="mb-3 text-xs font-extrabold uppercase tracking-widest text-[#5F6F82]">
            Choose Mode
          </p>

          <div className="grid grid-cols-2 gap-3">
            {modeOptions.map((option) => {
              const isSelected = selectedMode === option.value;

              return (
                <button
                  key={option.value}
                  type="button"
                  disabled={!option.enabled}
                  onClick={() => option.enabled && setSelectedMode(option.value)}
                  className={`rounded-2xl border px-4 py-4 text-left transition-all duration-200 ${
                    isSelected && option.enabled
                      ? "border-[#3A9AD9] bg-[#3A9AD9] text-white shadow-[0_12px_30px_rgba(58,154,217,0.22)]"
                      : option.enabled
                      ? "border-[#D8E8EE] bg-white text-[#102A43] hover:border-[#6BCBEB] hover:bg-[#F8FCFF]"
                      : "cursor-not-allowed border-[#D8E8EE] bg-[#F8FCFF] text-[#9AA8B8]"
                  }`}
                >
                  <span className="block text-sm font-extrabold">
                    {option.label}
                  </span>

                  <span
                    className={`mt-1 block text-xs leading-relaxed ${
                      isSelected && option.enabled
                        ? "text-white/80"
                        : "text-[#5F6F82]"
                    }`}
                  >
                    {option.enabled ? option.helper : "Not available"}
                  </span>

                  <span
                    className={`mt-3 inline-flex rounded-full px-3 py-1 text-xs font-extrabold ${
                      isSelected && option.enabled
                        ? "bg-white/18 text-white"
                        : option.enabled
                        ? "bg-[#F8FCFF] text-[#102A43]"
                        : "bg-white text-[#9AA8B8]"
                    }`}
                  >
                    {option.enabled ? option.price || "Available" : "Disabled"}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Subservice Selection */}
        {hasSubServices && (
          <div className="border-b border-[#D8E8EE] px-7 py-5">
            <label
              htmlFor={`${slug}-subservice`}
              className="mb-3 block text-xs font-extrabold uppercase tracking-widest text-[#5F6F82]"
            >
              Choose Option
            </label>

            <select
              id={`${slug}-subservice`}
              value={selectedSubService}
              onChange={(event) => setSelectedSubService(event.target.value)}
              className="w-full rounded-2xl border border-[#D8E8EE] bg-white px-4 py-4 text-sm font-bold text-[#102A43] outline-none transition focus:border-[#3A9AD9] focus:ring-4 focus:ring-[#6BCBEB]/25"
            >
              <option value="">Select an option</option>

              {subServices.map((item) => {
                const itemSlug = item.slug || createSlug(item.name);

                return (
                  <option key={itemSlug} value={itemSlug}>
                    {item.name}
                  </option>
                );
              })}
            </select>

            <p className="mt-2 text-xs leading-relaxed text-[#5F6F82]">
              Select the specific option you want before continuing to booking.
            </p>
          </div>
        )}

        {/* Actions */}
        <div className="flex flex-col gap-3 px-7 py-6">
          {canContinue ? (
            <Link
              to={bookingPath}
              className="flex w-full items-center justify-center rounded-full bg-[#102A43] px-6 py-4 text-sm font-extrabold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#3A9AD9] hover:shadow-lg"
            >
              Continue to Booking
            </Link>
          ) : (
            <button
              type="button"
              disabled
              className="flex w-full cursor-not-allowed items-center justify-center rounded-full bg-[#D8E8EE] px-6 py-4 text-sm font-extrabold text-[#5F6F82]"
            >
              Select an Option First
            </button>
          )}

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-center justify-center gap-2 rounded-full border-2 border-[#44CC3A] bg-white px-6 py-4 text-sm font-extrabold text-[#102A43] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#44CC3A] hover:text-[#102A43]"
          >
            <FaWhatsapp size={17} />
            Chat on WhatsApp
          </a>

          <a
            href={`tel:${cleanPhoneNumber}`}
            className="flex w-full items-center justify-center rounded-full border border-[#D8E8EE] bg-white px-6 py-4 text-sm font-extrabold text-[#102A43] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#3A9AD9] hover:text-[#3A9AD9]"
          >
            Call {phoneNumber}
          </a>
        </div>

        {/* Note */}
        <div className="border-t border-[#D8E8EE] bg-[#F8FCFF] px-7 py-4">
          <p className="text-xs leading-relaxed text-[#5F6F82]">
            Walk-ins are welcome, but patients with confirmed bookings are
            attended to first.
          </p>
        </div>
      </div>

      {/* Find Right Care helper */}
      <div className="rounded-3xl border border-[#D8E8EE] bg-white p-6 shadow-sm">
        <div className="mb-4 h-1.5 w-16 rounded-full bg-[#6BCBEB]" />

        <h4 className="text-base font-extrabold text-[#102A43]">
          Not sure this is the right service?
        </h4>

        <p className="mt-2 text-sm leading-relaxed text-[#5F6F82]">
          Start with a GP consultation or chat with our team for guidance before
          choosing a service.
        </p>

        <div className="mt-5 flex flex-col gap-3">
          <Link
            to="/services/gp-consultation"
            className="rounded-full bg-[#F8FCFF] px-5 py-3 text-center text-sm font-extrabold text-[#102A43] transition hover:bg-[#3A9AD9] hover:text-white"
          >
            Start with GP Consultation
          </Link>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-[#44CC3A] px-5 py-3 text-center text-sm font-extrabold text-[#102A43] transition hover:bg-[#44CC3A]"
          >
            Ask on WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
};

export default ServiceBookingCard;