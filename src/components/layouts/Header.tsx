
import { useEffect, useRef, useState } from "react";
import { Link, NavLink as RouterNavLink, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

import navLinks, { type NavLink as NavLinkType } from "../data/navLinks";
import { contactInfo } from "../data/contactInfo";
import logo from "../../assets/logo/Enekemlogo.png";

// ─────────────────────────────────────────
// MODE BADGE
// ─────────────────────────────────────────
const ModeBadge = ({ mode }: { mode?: string }) => {
  if (!mode) return null;
  const styles: Record<string, string> = {
    online:   "bg-[#44CC3A]/15 text-[#2a8a22]",
    physical: "bg-[#01369E]/10 text-[#01369E]",
    both:     "bg-purple-50 text-purple-700",
  };
  const labels: Record<string, string> = {
    online:   "Online",
    physical: "Physical",
    both:     "Online & Physical",
  };
  return (
    <span className={`ml-2 shrink-0 rounded-full px-2 py-0.5 text-[9px] font-bold uppercase tracking-wide ${styles[mode]}`}>
      {labels[mode]}
    </span>
  );
};

// ─────────────────────────────────────────
// DESKTOP DROPDOWN PANEL
// - No divider between groups
// - Hover: bottom border underline + #44CC3A text
// ─────────────────────────────────────────
const DropdownPanel = ({ link }: { link: NavLinkType }) => {
  if (!link.dropdownGroups) return null;

  return (
    <div className="absolute left-1/2 top-full z-[999] mt-1 w-max min-w-[440px] max-w-[660px] -translate-x-1/2">
      {/* Arrow pointer */}
      <div className="mx-auto mb-1 h-2 w-4 overflow-hidden">
        <div className="mx-auto h-3 w-3 rotate-45 border-l border-t border-[#D8E8EE] bg-white" />
      </div>

      <div className="overflow-hidden rounded-2xl border border-[#D8E8EE] bg-white shadow-[0_16px_56px_rgba(1,31,94,0.16)]">

        {/* Groups — NO divider line between them */}
        <div className={`grid ${link.dropdownGroups.length > 1 ? "grid-cols-2" : "grid-cols-1"}`}>
          {link.dropdownGroups.map((group) => (
            <div key={group.groupLabel} className="p-5">

              {/* Group label */}
              <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.18em] text-[#01369E]/50">
                {group.groupLabel}
              </p>

              {/* Items — bottom border underline on hover */}
              <div className="flex flex-col gap-3">
                {group.items.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className="group flex items-start justify-between gap-3"
                  >
                    <div className="min-w-0 flex-1">
                      {/* Label with bottom border underline on hover */}
                      <span className="inline-block border-b border-transparent text-sm font-semibold text-[#102A43] transition-all duration-200 group-hover:border-[#44CC3A] group-hover:text-[#44CC3A]">
                        {item.label}
                      </span>
                      <p className="mt-0.5 text-xs leading-snug text-[#102A43]/50">
                        {item.description}
                      </p>
                    </div>
                    <ModeBadge mode={item.badge} />
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Footer CTA
        {link.dropdownFooter && (
          <div className="border-t border-[#D8E8EE] bg-[#EAF2FF] px-6 py-3">
            <Link
              to={link.dropdownFooter.path}
              className="inline-flex items-center gap-2 text-sm font-bold text-[#01369E] transition-colors hover:text-[#44CC3A]"
            >
              {link.dropdownFooter.label}
              <ArrowRight size={14} strokeWidth={2.5} />
            </Link>
          </div>
        )} */}
      </div>
    </div>
  );
};

// ─────────────────────────────────────────
// MOBILE ACCORDION
// Hover color → #44CC3A (matches desktop)
// ─────────────────────────────────────────
const MobileAccordion = ({
  link,
  onClose,
}: {
  link: NavLinkType;
  onClose: () => void;
}) => {
  const [open, setOpen] = useState(false);

  if (!link.hasDropdown) {
    return (
      <RouterNavLink
        to={link.path}
        onClick={onClose}
        className={({ isActive }) =>
          `block rounded-xl px-4 py-3 text-base font-semibold transition-colors duration-200 ${
            isActive
              ? "text-[#44CC3A]"
              : "text-[#102A43] hover:text-[#44CC3A]"
          }`
        }
      >
        {link.label}
      </RouterNavLink>
    );
  }

  return (
    <div>
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between rounded-xl px-4 py-3 text-base font-semibold text-[#102A43] transition-colors hover:text-[#44CC3A]"
      >
        {link.label}
        <ChevronDown
          size={16}
          className={`text-[#102A43]/40 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && link.dropdownGroups && (
        <div className="ml-4 mt-1 flex flex-col gap-1 border-l-2 border-[#EAF2FF] pl-3">
          {link.dropdownGroups.map((group) => (
            <div key={group.groupLabel}>
              <p className="mb-2 mt-3 text-[10px] font-bold uppercase tracking-[0.15em] text-[#01369E]/50">
                {group.groupLabel}
              </p>
              {group.items.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={onClose}
                  className="group flex items-center justify-between rounded-lg px-3 py-2.5 text-sm font-medium text-[#102A43] transition-colors hover:text-[#44CC3A]"
                >
                  <span className="border-b border-transparent group-hover:border-[#44CC3A]">
                    {item.label}
                  </span>
                  <ModeBadge mode={item.badge} />
                </Link>
              ))}
            </div>
          ))}

          {/* {link.dropdownFooter && (
            <Link
              to={link.dropdownFooter.path}
              onClick={onClose}
              className="mt-2 inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-bold text-[#01369E] hover:text-[#44CC3A]"
            >
              {link.dropdownFooter.label}
              <ArrowRight size={13} strokeWidth={2.5} />
            </Link>
          )} */}
        </div>
      )}
    </div>
  );
};

// ─────────────────────────────────────────
// MAIN HEADER
// ─────────────────────────────────────────
const Header = () => {
  const [menuOpen, setMenuOpen]             = useState(false);
  const [hasPassedHero, setHasPassedHero]   = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const location   = useLocation();
  const isHomePage = location.pathname === "/";
  const closeMenu  = () => setMenuOpen(false);

  // ── Transparent on hero, deep navy after scroll ────────────────────────
  useEffect(() => {
    const handleHeaderState = () => {
      if (!isHomePage) {
        setHasPassedHero(true);
        return;
      }
      const heroSection = document.getElementById("home-hero");
      if (!heroSection) {
        setHasPassedHero(window.scrollY > 500);
        return;
      }
      const headerHeight = 82;
      const heroBottom   = heroSection.offsetTop + heroSection.offsetHeight;
      setHasPassedHero(window.scrollY + headerHeight >= heroBottom);
    };

    handleHeaderState();
    window.addEventListener("scroll", handleHeaderState);
    window.addEventListener("resize", handleHeaderState);
    return () => {
      window.removeEventListener("scroll", handleHeaderState);
      window.removeEventListener("resize", handleHeaderState);
    };
  }, [isHomePage, location.pathname]);

  // ── Lock body scroll when drawer open ─────────────────────────────────
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  // ── Dropdown hover with 120ms delay ───────────────────────────────────
  const handleMouseEnter = (label: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveDropdown(label);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setActiveDropdown(null), 120);
  };

  return (
    <>
      <header
        className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${
          hasPassedHero
            ? "border-b border-white/10 bg-[#011F5E]/95 shadow-[0_12px_35px_rgba(1,31,94,0.25)] backdrop-blur-md"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <div className="mx-auto flex min-h-[58px] max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:min-h-[66px] lg:px-10">

          {/* ── Logo ── */}
          <Link to="/" className="flex shrink-0 items-center" onClick={closeMenu}>
            <img
              src={logo}
              alt="Enekem Medicals"
              className="h-12 w-auto object-contain drop-shadow-[0_4px_14px_rgba(0,0,0,0.35)] sm:h-10 md:h-14 lg:h-16"
            />
          </Link>

          {/* ── Desktop + Tablet Nav ── */}
          <nav className="hidden min-w-0 flex-1 items-center justify-center gap-1 md:flex lg:gap-2">
            {navLinks.map((link) => (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => link.hasDropdown ? handleMouseEnter(link.label) : undefined}
                onMouseLeave={link.hasDropdown ? handleMouseLeave : undefined}
              >
                {link.hasDropdown ? (
                  <button
                    className={`flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-bold tracking-wide drop-shadow-[0_3px_10px_rgba(0,0,0,0.25)] transition-colors duration-200 lg:text-[15px] ${
                      activeDropdown === link.label
                        ? "text-[#44CC3A]"
                        : "text-white hover:text-[#44CC3A]"
                    }`}
                  >
                    {link.label}
                    <ChevronDown
                      size={13}
                      className={`transition-transform duration-200 ${
                        activeDropdown === link.label ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                ) : (
                  <RouterNavLink
                    to={link.path}
                    className={({ isActive }) =>
                      `block whitespace-nowrap rounded-lg px-3 py-2 text-sm font-bold tracking-wide drop-shadow-[0_3px_10px_rgba(0,0,0,0.25)] transition-colors duration-200 lg:text-[15px] ${
                        isActive
                          ? "text-[#44CC3A]"
                          : "text-white hover:text-[#44CC3A]"
                      }`
                    }
                  >
                    {link.label}
                  </RouterNavLink>
                )}

                {/* Dropdown panel */}
                {link.hasDropdown && activeDropdown === link.label && (
                  <DropdownPanel link={link} />
                )}
              </div>
            ))}
          </nav>

          {/* ── Desktop CTAs: Gmail icon + Book Appointment ── */}
          <div className="hidden shrink-0 items-center gap-3 md:flex">
            {/* Gmail icon */}
            <a
              href={`mailto:${contactInfo.email}`}
              aria-label="Email Enekem Medicals"
              title={contactInfo.email}
              className="flex items-center justify-center text-white/70 transition-all duration-200 hover:text-white hover:scale-110"
            >
              <SiGmail size={20} />
            </a>

            {/* Book Appointment */}
            <Link
              to="/book"
              className={`whitespace-nowrap rounded-full px-5 py-3 text-sm font-extrabold transition-all duration-300 lg:px-7 lg:py-3.5 ${
                hasPassedHero
                  ? "bg-[#44CC3A] text-[#011F5E] shadow-[0_12px_28px_rgba(68,204,58,0.22)] hover:-translate-y-0.5 hover:bg-[#5BE052]"
                  : "border-2 border-white bg-white/10 text-white backdrop-blur-sm hover:-translate-y-0.5 hover:bg-white hover:text-[#01369E]"
              }`}
            >
              Book an Appointment
            </Link>
          </div>

          {/* ── Mobile: Gmail icon + Hamburger ── */}
          <div className="flex items-center gap-2 md:hidden">
            {/* Gmail icon — visible on mobile beside hamburger */}
            <a
              href={`mailto:${contactInfo.email}`}
              aria-label="Email Enekem Medicals"
              title={contactInfo.email}
              className="flex h-10 w-10 items-center justify-center rounded-xl text-white transition-colors hover:text-[#44CC3A]"
            >
              <SiGmail size={20} />
            </a>

            {/* Hamburger */}
            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              className={`inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition ${
                hasPassedHero
                  ? "border border-white/15 bg-white/10 text-white hover:bg-white/15"
                  : "border border-white/60 bg-black/10 text-white backdrop-blur-sm hover:bg-white/15"
              }`}
              aria-label="Open navigation menu"
              aria-expanded={menuOpen}
            >
              <Menu size={24} strokeWidth={2.5} />
            </button>
          </div>
        </div>
      </header>

      {/* ── Mobile Backdrop ── */}
      {menuOpen && (
        <button
          type="button"
          onClick={closeMenu}
          className="fixed inset-0 z-[80] bg-[#102A43]/45 backdrop-blur-sm md:hidden"
          aria-label="Close navigation overlay"
        />
      )}

      {/* ── Mobile Side Drawer ── */}
      <aside
        className={`fixed right-0 top-0 z-[90] flex h-screen w-[82vw] max-w-sm flex-col overflow-y-auto border-l border-[#D8E8EE] bg-white shadow-[-20px_0_60px_rgba(16,42,67,0.18)] transition-transform duration-300 ease-out md:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between border-b border-[#D8E8EE] px-5 py-5">
          <Link to="/" onClick={closeMenu} className="flex items-center">
            <img src={logo} alt="Enekem Medicals" className="h-11 w-auto object-contain" />
          </Link>
          <button
            type="button"
            onClick={closeMenu}
            className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[#D8E8EE] bg-white text-[#102A43] transition hover:bg-[#F3FAFC]"
            aria-label="Close navigation menu"
          >
            <X size={22} strokeWidth={2.5} />
          </button>
        </div>

        {/* Drawer nav */}
        <nav className="flex flex-1 flex-col gap-2 overflow-y-auto px-5 py-6">
          {navLinks.map((link) => (
            <MobileAccordion
              key={link.label}
              link={link}
              onClose={closeMenu}
            />
          ))}
        </nav>

        {/* Drawer CTAs */}
        <div className="flex flex-col gap-3 border-t border-[#D8E8EE] px-5 py-5">
          <Link
            to="/book"
            onClick={closeMenu}
            className="block w-full rounded-full bg-[#01369E] px-6 py-4 text-center text-sm font-bold text-white shadow-md transition hover:bg-[#011F5E]"
          >
            Book an Appointment
          </Link>
          <a
            href={contactInfo.whatsappLink}
            target="_blank"
            rel="noreferrer"
            onClick={closeMenu}
            className="flex w-full items-center justify-center gap-2 rounded-full border border-[#D8E8EE] bg-white px-6 py-4 text-sm font-bold text-[#102A43] transition hover:border-[#44CC3A] hover:text-[#44CC3A]"
          >
            <FaWhatsapp size={16} className="text-[#44CC3A]" />
            Chat on WhatsApp
          </a>
        </div>
      </aside>
    </>
  );
};

export default Header;