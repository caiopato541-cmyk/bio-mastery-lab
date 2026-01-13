import React from "react";

interface SynapseIconProps {
  className?: string;
}

export const SynapseIcon: React.FC<SynapseIconProps> = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="32" cy="32" r="8" stroke="currentColor" strokeWidth="3" />
    <circle cx="12" cy="16" r="5" stroke="currentColor" strokeWidth="2" />
    <circle cx="52" cy="16" r="5" stroke="currentColor" strokeWidth="2" />
    <circle cx="12" cy="48" r="5" stroke="currentColor" strokeWidth="2" />
    <circle cx="52" cy="48" r="5" stroke="currentColor" strokeWidth="2" />
    <path d="M16 19L26 28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M48 19L38 28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M16 45L26 36" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M48 45L38 36" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <circle cx="32" cy="32" r="3" fill="currentColor" />
  </svg>
);
