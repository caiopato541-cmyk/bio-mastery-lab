import React from "react";

interface DNAIconProps {
  className?: string;
}

export const DNAIcon: React.FC<DNAIconProps> = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M20 8C20 8 28 16 32 24C36 32 44 40 44 56"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
    />
    <path
      d="M44 8C44 8 36 16 32 24C28 32 20 40 20 56"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
    />
    <line x1="22" y1="16" x2="42" y2="16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <line x1="20" y1="24" x2="44" y2="24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <line x1="20" y1="32" x2="44" y2="32" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <line x1="20" y1="40" x2="44" y2="40" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <line x1="22" y1="48" x2="42" y2="48" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);
