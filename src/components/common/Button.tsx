// src/components/common/Button.tsx
// A reusable button component used across the whole site.
// Supports two variants: "primary" (navy) and "whatsapp" (green).
// The "slide" prop enables the sliding hover animation for hero buttons.
// Without "slide", it's a simple hover color change (used in Header).

import React from "react";

interface ButtonProps {
  label: string;           // Text shown on the button
  href?: string;           // If provided, renders as an <a> tag (link)
  onClick?: () => void;    // If provided, renders as a <button>
  variant?: "primary" | "whatsapp"; // Color style
  slide?: boolean;         // true = sliding animation (hero only)
  external?: boolean;      // true = opens in new tab (for WhatsApp link)
  fullWidth?: boolean;     // true = stretches to full width
}

const Button: React.FC<ButtonProps> = ({
  label,
  href,
  onClick,
  variant = "primary",
  slide = false,
  external = false,
  fullWidth = false,
}) => {

  // ── Style logic ──────────────────────────────────────────

  // Base styles shared by all buttons
  const base = `
    relative overflow-hidden inline-block font-semibold text-sm
    px-6 py-3 rounded-lg text-center cursor-pointer
    transition-colors duration-300
    ${fullWidth ? "w-full" : ""}
  `;

  // Simple header button styles (no slide animation)
  const simpleStyles = {
    primary: "bg-[#0B5D7A] text-white hover:bg-[#102A43]",
    whatsapp: "bg-[#2FA66A] text-white hover:bg-[#258855]",
  };

  // Sliding hero button styles — uses CSS classes defined in index.css
  const slideStyles = {
    primary: "slide-btn slide-btn-navy rounded-full",
    whatsapp: "slide-btn slide-btn-green rounded-full",
  };

  // Pick the right style based on whether slide is enabled
  const className = slide
    ? `${base} ${slideStyles[variant]}`
    : `${base} ${simpleStyles[variant]}`;

  // ── Render as link or button ─────────────────────────────

  if (href) {
    return (
      <a
        href={href}
        className={className}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
      >
        {label}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={className}>
      {label}
    </button>
  );
};

export default Button;