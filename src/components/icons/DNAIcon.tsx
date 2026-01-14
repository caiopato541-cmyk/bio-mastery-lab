import React from "react";

interface DNAIconProps {
  className?: string;
}

export const DNAIcon: React.FC<DNAIconProps> = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 40 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Top cap */}
    <path
      d="M8 12 C8 6 16 3 20 3 C24 3 32 6 32 12"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      fill="none"
    />
    
    {/* Left helix strand */}
    <path
      d="M8 12 C8 22 32 22 32 32 C32 42 8 42 8 52 C8 62 32 62 32 72 C32 82 8 82 8 88"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      fill="none"
    />
    
    {/* Right helix strand */}
    <path
      d="M32 12 C32 22 8 22 8 32 C8 42 32 42 32 52 C32 62 8 62 8 72 C8 82 32 82 32 88"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      fill="none"
    />
    
    {/* Bottom cap */}
    <path
      d="M8 88 C8 94 16 97 20 97 C24 97 32 94 32 88"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      fill="none"
    />
    
    {/* Horizontal bars (base pairs) */}
    <line x1="12" y1="22" x2="28" y2="22" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    <line x1="10" y1="32" x2="30" y2="32" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    <line x1="10" y1="42" x2="30" y2="42" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    <line x1="10" y1="52" x2="30" y2="52" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    <line x1="10" y1="62" x2="30" y2="62" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    <line x1="10" y1="72" x2="30" y2="72" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    <line x1="12" y1="82" x2="28" y2="82" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
  </svg>
);
