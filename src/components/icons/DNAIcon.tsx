import React from "react";

interface DNAIconProps {
  className?: string;
}

export const DNAIcon: React.FC<DNAIconProps> = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 100 200"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Top cap - curved ends */}
    <path
      d="M20 20 C20 10 35 5 50 5 C65 5 80 10 80 20"
      stroke="currentColor"
      strokeWidth="8"
      strokeLinecap="round"
      fill="none"
    />
    
    {/* First X crossing */}
    <path
      d="M20 20 C20 35 80 35 80 50"
      stroke="currentColor"
      strokeWidth="8"
      strokeLinecap="round"
      fill="none"
    />
    <path
      d="M80 20 C80 35 20 35 20 50"
      stroke="currentColor"
      strokeWidth="8"
      strokeLinecap="round"
      fill="none"
    />
    
    {/* Second X crossing */}
    <path
      d="M20 50 C20 65 80 65 80 80"
      stroke="currentColor"
      strokeWidth="8"
      strokeLinecap="round"
      fill="none"
    />
    <path
      d="M80 50 C80 65 20 65 20 80"
      stroke="currentColor"
      strokeWidth="8"
      strokeLinecap="round"
      fill="none"
    />
    
    {/* Third X crossing */}
    <path
      d="M20 80 C20 95 80 95 80 110"
      stroke="currentColor"
      strokeWidth="8"
      strokeLinecap="round"
      fill="none"
    />
    <path
      d="M80 80 C80 95 20 95 20 110"
      stroke="currentColor"
      strokeWidth="8"
      strokeLinecap="round"
      fill="none"
    />
    
    {/* Fourth X crossing */}
    <path
      d="M20 110 C20 125 80 125 80 140"
      stroke="currentColor"
      strokeWidth="8"
      strokeLinecap="round"
      fill="none"
    />
    <path
      d="M80 110 C80 125 20 125 20 140"
      stroke="currentColor"
      strokeWidth="8"
      strokeLinecap="round"
      fill="none"
    />
    
    {/* Fifth X crossing */}
    <path
      d="M20 140 C20 155 80 155 80 170"
      stroke="currentColor"
      strokeWidth="8"
      strokeLinecap="round"
      fill="none"
    />
    <path
      d="M80 140 C80 155 20 155 20 170"
      stroke="currentColor"
      strokeWidth="8"
      strokeLinecap="round"
      fill="none"
    />
    
    {/* Bottom cap - curved ends */}
    <path
      d="M20 170 C20 180 35 185 50 185 C65 185 80 180 80 170"
      stroke="currentColor"
      strokeWidth="8"
      strokeLinecap="round"
      fill="none"
    />
  </svg>
);
