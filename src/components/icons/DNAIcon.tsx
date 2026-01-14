import React from "react";

interface DNAIconProps {
  className?: string;
}

export const DNAIcon: React.FC<DNAIconProps> = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Left helix strand */}
    <path
      d="M4 4 C4 10 20 10 20 16 C20 22 4 22 4 28 C4 34 20 34 20 40 C20 44 12 46 12 46"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      fill="none"
    />
    {/* Right helix strand */}
    <path
      d="M20 4 C20 10 4 10 4 16 C4 22 20 22 20 28 C20 34 4 34 4 40 C4 44 12 46 12 46"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      fill="none"
    />
    {/* Top cap */}
    <path
      d="M4 4 C4 2 8 1 12 1 C16 1 20 2 20 4"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      fill="none"
    />
  </svg>
);
