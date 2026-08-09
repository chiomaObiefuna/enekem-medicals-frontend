import { Link } from "react-router-dom";
import {
  Clock,
  Mail,
  MapPin,
  PhoneCall,
  ArrowUpRight,
} from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTiktok,
  FaWhatsapp,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import { contactInfo } from "../data/contactInfo";

const quickLinks = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Book Appointment", path: "/book" },
  { label: "Contact Us", path: "/contact" },
];

const legalLinks = [
  { label: "Privacy Policy", path: "/legal/privacy-policy" },
  { label: "Terms & Conditions", path: "/legal/terms-and-conditions" },
  { label: "Cookie Policy", path: "/legal/cookie-policy" },
  { label: "AI Assistant Disclaimer", path: "/legal/ai-assistant-disclaimer" },
];

const services = [
  "Medical Consultation",
  "Diagnostic Services",
  "Pharmacy Services",
  "Patient Care",
];

const socialLinks = [
  {
    label: "Instagram",
    href: contactInfo.instagram,
    icon: FaInstagram,
    hoverClass:
      "hover:border-transparent hover:bg-gradient-to-tr hover:from-[#F58529] hover:via-[#DD2A7B] hover:to-[#8134AF] hover:text-white",
  },
  {
    label: "Facebook",
    href: contactInfo.facebook,
    icon: FaFacebookF,
    hoverClass: "hover:border-[#1877F2] hover:bg-[#1877F2] hover:text-white",
  },
  {
    label: "LinkedIn",
    href: contactInfo.linkedin,
    icon: FaLinkedinIn,
    hoverClass: "hover:border-[#0A66C2] hover:bg-[#0A66C2] hover:text-white",
  },
  {
    label: "TikTok",
    href: contactInfo.tiktok,
    icon: FaTiktok,
    hoverClass: "hover:border-white hover:bg-white hover:text-black",
  },
  {
    label: "X",
    href: contactInfo.twitter,
    icon: FaXTwitter,
    hoverClass: "hover:border-white hover:bg-white hover:text-black",
  },
];

const Footer = () => {
   const currentYear = new Date().getFullYear();
  return (
    <footer className="relative overflow-hidden bg-[#002D82] text-white">
      {/* Soft footer background pattern */}
      <div className="pointer-events-none absolute -left-24 top-20 h-80 w-80 rounded-full bg-[#44CC3A]/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-10 h-96 w-96 rounded-full bg-[#F0F7FF]/10 blur-3xl" />

      {/* Main footer content */}
      <div className="relative z-10 px-5 py-16 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.25fr_0.8fr_0.9fr_1.2fr]">
          {/* Brand */}
          <div>
            <Link to="/" className="inline-flex items-center">
              <span className="text-2xl font-extrabold tracking-wide text-[#F0F7FF]">
                ENEKEM MEDICALS
              </span>
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-relaxed text-[#D8E8EE]">
              Trusted healthcare provider offering medical consultation,
              diagnostics, and pharmacy services. We are committed to delivering
              quality care with professionalism and compassion.
            </p>

            <div className="mt-7 flex items-center gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={social.label}
                    className={`flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-[#F0F7FF] transition-all duration-300 hover:-translate-y-1 ${social.hoverClass}`}
                  >
                    <Icon className="text-base" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-lg font-extrabold text-white">Quick Links</h3>

            <ul className="mt-5 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="group inline-flex items-center gap-2 text-sm font-medium text-[#D8E8EE] transition-colors duration-300 hover:text-[#44CC3A]"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-[#44CC3A] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-extrabold text-white">Our Services</h3>

            <ul className="mt-5 space-y-3">
              {services.map((service) => (
                <li
                  key={service}
                  className="flex items-center gap-2 text-sm text-[#D8E8EE]"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-[#44CC3A]" />
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact details */}
          <div>
            <h3 className="text-lg font-extrabold text-white">Contact Us</h3>

            <div className="mt-5 space-y-4">
              <div className="flex gap-3 text-sm text-[#D8E8EE]">
                  <PhoneCall
                    size={18}
                    className="mt-0.5 shrink-0 text-[#44CC3A]"
                  />

                  <div className="flex flex-col gap-1">
                    <a
                      href={`tel:${contactInfo.phone1.replace(/\s+/g, "")}`}
                      className="transition hover:text-[#44CC3A]"
                    >
                      {contactInfo.phone1}
                    </a>

                    <a
                      href={`tel:${contactInfo.phone2.replace(/\s+/g, "")}`}
                      className="transition hover:text-[#44CC3A]"
                    >
                      {contactInfo.phone2}
                    </a>
                  </div>
                </div>

              <a
                href={contactInfo.whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="flex gap-3 text-sm text-[#D8E8EE] transition hover:text-[#25D366]"
              >
                <FaWhatsapp className="mt-0.5 shrink-0 text-lg text-[#25D366]" />
                <span>Chat with us</span>
              </a>

              <a
                href={`mailto:${contactInfo.email}`}
                className="flex gap-3 text-sm text-[#D8E8EE] transition hover:text-[#44CC3A]"
              >
                <Mail size={18} className="mt-0.5 shrink-0 text-[#44CC3A]" />
                <span>{contactInfo.email}</span>
              </a>

              <div className="flex gap-3 text-sm leading-relaxed text-[#D8E8EE]">
                <MapPin
                  size={18}
                  className="mt-0.5 shrink-0 text-[#44CC3A]"
                />
                <span>{contactInfo.address}</span>
              </div>

              <div className="flex gap-3 text-sm leading-relaxed text-[#D8E8EE]">
                <Clock size={18} className="mt-0.5 shrink-0 text-[#44CC3A]" />
                <span>
                  {[contactInfo.hours]}
                  <br />
                  
                     {[contactInfo.hoursNote]}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom footer */}
<div className="mx-auto mt-12 flex max-w-7xl flex-col gap-5 border-t border-white/10 pt-7 text-sm text-[#D8E8EE] md:flex-row md:items-center md:justify-between">
  <p>© {currentYear} Enekem Medicals. All rights reserved.</p>

  <div className="flex flex-col gap-4 md:flex-row md:items-center md:gap-6">
    <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
      {legalLinks.map((link) => (
        <Link
          key={link.label}
          to={link.path}
          className="font-medium text-[#D8E8EE] transition hover:text-[#44CC3A]"
        >
          {link.label}
        </Link>
      ))}
    </div>

    <Link
      to="/contact"
      className="inline-flex items-center gap-2 font-semibold text-[#F0F7FF] transition hover:text-[#44CC3A]"
    >
      Visit or Contact Us
      <ArrowUpRight size={16} strokeWidth={2.5} />
    </Link>
  </div>
</div>
      </div>
    </footer>
  );
};

export default Footer;