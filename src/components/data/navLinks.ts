// src/components/data/navLinks.ts
// This file holds all the navigation links used in the Header.
// Import this in Header.tsx instead of hardcoding the links there.

export interface NavLink {
  label: string;
  path: string;
}

const navLinks: NavLink[] = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Contact", path: "/contact" },
];

export default navLinks;