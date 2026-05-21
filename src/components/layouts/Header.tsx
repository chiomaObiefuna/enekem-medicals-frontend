// src/components/layouts/Header.tsx

import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

import navLinks from "../data/navLinks";
import logo from "../../assets/logo/Enekemlogo.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
   const [hasPassedHero, setHasPassedHero] = useState(false);

   const location = useLocation();
  const isHomePage = location.pathname === "/";

  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    const handleHeaderState = () => {
        if (!isHomePage) {
        setHasPassedHero(true);
        return;
      }
      const heroSection = document.getElementById("home-hero");
        // Fallback in case the hero ID is missing.
      if (!heroSection) {
        setHasPassedHero(window.scrollY > 500);
        return;
      }

      const headerHeight = 82;
      const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;

       // Header becomes solid only when it reaches/passes the end of the hero.
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
      <header
        className={`fixed left-0 top-0 z-50 w-full overflow-x-hidden transition-all duration-300 ${
          hasPassedHero
            ? "border-b border-white/10 bg-[#011F5E]/95 shadow-[0_12px_35px_rgba(1,31,94,0.25)] backdrop-blur-md"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <div className="mx-auto flex min-h-[58px] max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:min-h-[66px] lg:px-10">
          {/* Logo */}
          <Link
            to="/"
            className="flex shrink-0 items-center"
            onClick={closeMenu}
          >
            <img
              src={logo}
              alt="Enekem Medicals"
              className="h-12 w-auto object-contain drop-shadow-[0_4px_14px_rgba(0,0,0,0.35)] md:h-14 lg:h-16 sm:h-10"
            />
          </Link>

          {/* Desktop and tablet navigation */}
          <nav className="hidden min-w-0 flex-1 items-center justify-center gap-5 md:flex lg:gap-9">
            {navLinks.map((link) => (
              <NavLink
                key={link.label}
                to={link.path}
                className={({ isActive }) =>
                  `whitespace-nowrap text-sm font-bold tracking-wide drop-shadow-[0_3px_10px_rgba(0,0,0,0.35)] transition-colors duration-200 lg:text-[15px] ${
                    isActive
                      ? "text-[#44CC3A]"
                      : "text-white hover:text-[#44CC3A]"
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
              className={`whitespace-nowrap rounded-full px-5 py-3 text-sm font-extrabold transition-all duration-300 lg:px-7 lg:py-3.5 ${
                hasPassedHero
                  ? "bg-[#44CC3A] text-[#011F5E] shadow-[0_12px_28px_rgba(68,204,58,0.22)] hover:-translate-y-0.5 hover:bg-[#5BE052]"
                  : "border-2 border-white bg-white/10 text-white backdrop-blur-sm hover:-translate-y-0.5 hover:bg-white hover:text-[#01369E]"
              }`}
            >
              Book an Appointment
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            className={`inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition md:hidden ${
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
                    ? "bg-[#EAF2FF] text-[#01369E]"
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
              className="block w-full rounded-full bg-[#01369E] px-6 py-4 text-center text-sm font-bold text-white shadow-md transition hover:bg-[#011F5E]"
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