import React from "react";

interface DNAIconProps {
  className?: string;
}

export const DNAIcon: React.FC<DNAIconProps> = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 64 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Top cap */}
    <path
      d="M16 8 C16 4 22 2 32 2 C42 2 48 4 48 8"
      stroke="currentColor"
      strokeWidth="3.5"
      strokeLinecap="round"
      fill="none"
    />
    {/* First twist - left to right */}
    <path
      d="M16 8 C16 16 48 16 48 24"
      stroke="currentColor"
      strokeWidth="3.5"
      strokeLinecap="round"
      fill="none"
    />
    <path
      d="M48 8 C48 16 16 16 16 24"
      stroke="currentColor"
      strokeWidth="3.5"
      strokeLinecap="round"
      fill="none"
    />
    {/* Second twist */}
    <path
      d="M16 24 C16 32 48 32 48 40"
      stroke="currentColor"
      strokeWidth="3.5"
      strokeLinecap="round"
      fill="none"
    />
    <path
      d="M48 24 C48 32 16 32 16 40"
      stroke="currentColor"
      strokeWidth="3.5"
      strokeLinecap="round"
      fill="none"
    />
    {/* Third twist */}
    <path
      d="M16 40 C16 48 48 48 48 56"
      stroke="currentColor"
      strokeWidth="3.5"
      strokeLinecap="round"
      fill="none"
    />
    <path
      d="M48 40 C48 48 16 48 16 56"
      stroke="currentColor"
      strokeWidth="3.5"
      strokeLinecap="round"
      fill="none"
    />
    {/* Fourth twist */}
    <path
      d="M16 56 C16 64 48 64 48 72"
      stroke="currentColor"
      strokeWidth="3.5"
      strokeLinecap="round"
      fill="none"
    />
    <path
      d="M48 56 C48 64 16 64 16 72"
      stroke="currentColor"
      strokeWidth="3.5"
      strokeLinecap="round"
      fill="none"
    />
    {/* Bottom cap */}
    <path
      d="M16 72 C16 76 22 78 32 78 C42 78 48 76 48 72"
      stroke="currentColor"
      strokeWidth="3.5"
      strokeLinecap="round"
      fill="none"
    />
  </svg>
);
