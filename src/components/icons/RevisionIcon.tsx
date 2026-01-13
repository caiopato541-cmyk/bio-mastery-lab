import React from "react";

interface RevisionIconProps {
  className?: string;
}

export const RevisionIcon: React.FC<RevisionIconProps> = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M32 12C21 12 12 21 12 32C12 43 21 52 32 52"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
    />
    <path
      d="M32 52C43 52 52 43 52 32C52 21 43 12 32 12"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeDasharray="6 4"
    />
    <polygon points="28,8 36,12 28,16" fill="currentColor" />
    <polygon points="36,56 28,52 36,48" fill="currentColor" />
    <circle cx="32" cy="32" r="6" stroke="currentColor" strokeWidth="2" />
    <path d="M32 28V32L35 35" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);
