// src/layouts/Header.tsx
//
// CHANGES FROM PREVIOUS VERSION:
// ✅ Hamburger now only shows on MOBILE (below md: 768px)
//    — tablets (768px+) show the full desktop nav
//    — changed all lg: breakpoints to md: for nav/buttons
//    — changed lg:hidden to md:hidden for hamburger
// ✅ WhatsApp button REMOVED from header
//    — "Book an Appointment" is now the single, clear CTA
//    — cleaner hierarchy, more professional, higher conversion
//    — WhatsApp is still accessible via floating bubble + hero + contact strip

import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

import navLinks from "../data/navLinks";
import { contactInfo } from "../data/contactInfo";
import logo from "../../assets/logo/Enekemlogo.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#D8E8EE] bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex min-h-[104px] max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">

        {/* ── LEFT: Logo ── */}
        <Link to="/" className="flex shrink-0 items-center" onClick={closeMenu}>
          <img
            src={logo}
            alt="Enekem Medicals"
            className="h-20 w-auto md:h-24 lg:h-[100px]"
          />
        </Link>

        {/* ── CENTER: Desktop + Tablet Navigation
            Shows on md (768px) and above
            Hidden only on mobile (below 768px)       ── */}
        <nav className="hidden flex-1 items-center justify-center gap-8 md:flex lg:gap-10">
          {navLinks.map((link) => (
            <NavLink
              key={link.label}
              to={link.path}
              className={({ isActive }) =>
                `text-[15px] font-semibold tracking-wide transition-colors duration-200 ${
                  isActive
                    ? "text-[#01369E]"
                    : "text-[#102A43] hover:text-[#01369E]"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* ── RIGHT: Single CTA Button
            Shows on md (768px) and above
            WhatsApp removed — Book Appointment is the one clear action ── */}
        <div className="hidden shrink-0 items-center md:flex">
          <Link
            to="/book"
            className="rounded-lg bg-[#01369E] px-6 py-3.5 text-sm font-bold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#002D82] hover:shadow-lg lg:px-8 lg:py-4"
          >
            Book an Appointment
          </Link>
        </div>

        {/* ── MOBILE ONLY: Hamburger Button
            md:hidden = only visible below 768px (phones only)
            Tablets and above always see the full desktop nav  ── */}
        <button
          type="button"
          onClick={() => setMenuOpen(true)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-[#D8E8EE] text-[#102A43] transition hover:bg-[#F3FAFC] md:hidden"
          aria-label="Open navigation menu"
        >
          <Menu size={24} />
        </button>
      </div>

      {/* ── MOBILE: Dark backdrop overlay ── */}
      {menuOpen && (
        <button
          type="button"
          onClick={closeMenu}
          className="fixed inset-0 z-[55] bg-[#102A43]/40 md:hidden"
          aria-label="Close navigation overlay"
        />
      )}

      {/* ── MOBILE: Side Drawer
          Slides in from the right.
          Only rendered/visible on mobile (md:hidden).      ── */}
      <aside
        className={`fixed right-0 top-0 z-[60] h-screen w-[82%] max-w-sm bg-white shadow-2xl transition-transform duration-300 ease-out md:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Drawer header: logo + close */}
        <div className="flex items-center justify-between border-b border-[#D8E8EE] px-5 py-5">
          <img
            src={logo}
            alt="Enekem Medicals"
            className="h-16 w-auto"
          />
          <button
            type="button"
            onClick={closeMenu}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[#D8E8EE] text-[#102A43] transition hover:bg-[#F3FAFC]"
            aria-label="Close navigation menu"
          >
            <X size={22} />
          </button>
        </div>

        {/* Drawer nav links */}
        <nav className="flex flex-col gap-2 px-5 py-6">
          {navLinks.map((link) => (
            <NavLink
              key={link.label}
              to={link.path}
              onClick={closeMenu}
              className={({ isActive }) =>
                `rounded-xl px-4 py-3 text-base font-semibold transition-colors duration-200 ${
                  isActive
                    ? "bg-[#F3FAFC] text-[#01369E]"
                    : "text-[#102A43] hover:bg-[#F3FAFC] hover:text-[#01369E]"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}

          {/* Single CTA in mobile drawer */}
          <div className="mt-6">
            <Link
              to="/book"
              onClick={closeMenu}
              className="block w-full rounded-lg bg-[#01369E] px-6 py-4 text-center text-sm font-bold text-white shadow-md transition hover:bg-[#002D82]"
            >
              Book an Appointment
            </Link>
          </div>
        </nav>
      </aside>
    </header>
  );
};

export default Header;