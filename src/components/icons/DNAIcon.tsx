import React from "react";

interface DNAIconProps {
  className?: string;
}

export const DNAIcon: React.FC<DNAIconProps> = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    strokeWidth="1.5"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {/* Left strand */}
    <path d="M6 3c0 3 12 3 12 6s-12 3-12 6 12 3 12 6" />
    {/* Right strand */}
    <path d="M18 3c0 3-12 3-12 6s12 3 12 6-12 3-12 6" />
    {/* Horizontal bars */}
    <path d="M6 6h12" />
    <path d="M6 12h12" />
    <path d="M6 18h12" />
  </svg>
);
