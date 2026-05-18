// src/components/layouts/Header.tsx

import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

import navLinks from "../data/navLinks";
import logo from "../../assets/logo/Enekemlogo.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header className="sticky top-0 z-50 w-full overflow-x-hidden border-b border-[#D8E8EE] bg-white/95 backdrop-blur-md">
        <div className="mx-auto flex min-h-[72px] max-w-5xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-10">
          {/* Logo */}
          <Link
            to="/"
            className="flex shrink-0 items-center"
            onClick={closeMenu}
          >
            <img
              src={logo}
              alt="Enekem Medicals"
              className="h-12 w-auto object-contain md:h-14 lg:h-16"
            />
          </Link>

          {/* Desktop and tablet navigation */}
          <nav className="hidden min-w-0 flex-1 items-center justify-center gap-5 md:flex lg:gap-10">
            {navLinks.map((link) => (
              <NavLink
                key={link.label}
                to={link.path}
                className={({ isActive }) =>
                  `whitespace-nowrap text-sm font-semibold tracking-wide transition-colors duration-200 lg:text-[15px] ${
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

          {/* Desktop and tablet CTA */}
          <div className="hidden shrink-0 items-center md:flex">
            <Link
              to="/book"
              className="whitespace-nowrap rounded-lg bg-[#01369E] px-4 py-3 text-sm font-bold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#002D82] hover:shadow-lg lg:px-8 lg:py-4"
            >
              Book an Appointment
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-[#D8E8EE] bg-white text-[#102A43] transition hover:bg-[#F3FAFC] md:hidden"
            aria-label="Open navigation menu"
            aria-expanded={menuOpen}
          >
            <Menu size={24} strokeWidth={2.5} />
          </button>
        </div>
      </header>

      {/* Mobile backdrop */}
      {menuOpen && (
        <button
          type="button"
          onClick={closeMenu}
          className="fixed inset-0 z-[80] bg-[#102A43]/45 backdrop-blur-sm md:hidden"
          aria-label="Close navigation overlay"
        />
      )}

      {/* Mobile side drawer */}
      <aside
        className={`fixed right-0 top-0 z-[90] h-screen w-[82vw] max-w-sm overflow-y-auto border-l border-[#D8E8EE] bg-white shadow-[-20px_0_60px_rgba(16,42,67,0.18)] transition-transform duration-300 ease-out md:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between border-b border-[#D8E8EE] px-5 py-5">
          <Link to="/" onClick={closeMenu} className="flex items-center">
            <img
              src={logo}
              alt="Enekem Medicals"
              className="h-11 w-auto object-contain"
            />
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
    </>
  );
};

export default Header;