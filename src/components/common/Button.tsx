// src/components/common/Button.tsx

import type { ReactNode } from "react";
import { Link } from "react-router-dom";

interface ButtonProps {
  label: string;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "whatsapp";
  slide?: boolean;
  external?: boolean;
  fullWidth?: boolean;
  icon?: ReactNode;
}

const Button = ({
  label,
  href,
  onClick,
  variant = "primary",
  slide = false,
  external = false,
  fullWidth = false,
  icon,
}: ButtonProps) => {
  const base = `
    relative inline-flex items-center justify-center gap-2
    overflow-hidden font-semibold text-sm
    px-6 py-3 rounded-lg text-center cursor-pointer
    transition-all duration-300
    ${fullWidth ? "w-full" : ""}
  `;

  const simpleStyles = {
    primary: "bg-[#01369E] text-white hover:bg-[#102A43]",
    whatsapp: "bg-[#2F8F68] text-white hover:bg-[#257456]",
  };

  const slideStyles = {
    primary: "slide-btn slide-btn-navy",
    whatsapp: "slide-btn slide-btn-green",
  };

  const className = slide
    ? `${base} ${slideStyles[variant]}`
    : `${base} ${simpleStyles[variant]}`;

  const content = (
    <span className="relative z-10 flex items-center justify-center gap-2">
      {icon}
      {label}
    </span>
  );

  if (href) {
    if (external || href.startsWith("http")) {
      return (
        <a
          href={href}
          className={className}
          target="_blank"
          rel="noopener noreferrer"
        >
          {content}
        </a>
      );
    }

    return (
      <Link to={href} className={className}>
        {content}
      </Link>
    );
  }

  return (
    <button type="button" onClick={onClick} className={className}>
      {content}
    </button>
  );
};

export default Button;