import React from "react";

interface BrainIconProps {
  className?: string;
}

export const BrainIcon: React.FC<BrainIconProps> = ({ className }) => (
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
    {/* Left hemisphere */}
    <path d="M9.5 2a2.5 2.5 0 0 1 2.45 2h.1A2.5 2.5 0 0 1 14.5 2a2.5 2.5 0 0 1 2.5 2.5v.5a2.5 2.5 0 0 1-1.5 2.29V8.5a2.5 2.5 0 0 1-1.5 2.29v1.42a2.5 2.5 0 0 1 1.5 2.29v1.21a2.5 2.5 0 0 1 1.5 2.29v.5a2.5 2.5 0 0 1-2.5 2.5 2.5 2.5 0 0 1-2.45-2h-.1a2.5 2.5 0 0 1-4.95.5 2.5 2.5 0 0 1-1.5-2.29V17a2.5 2.5 0 0 1 1.5-2.29v-1.42A2.5 2.5 0 0 1 5.5 11v-.5a2.5 2.5 0 0 1 1.5-2.29V6.79A2.5 2.5 0 0 1 5.5 4.5V4A2.5 2.5 0 0 1 8 1.5a2.5 2.5 0 0 1 1.5.5" />
    {/* Center divide */}
    <path d="M12 2v20" />
    {/* Connection lines */}
    <path d="M8 8h8" />
    <path d="M8 12h8" />
    <path d="M8 16h8" />
  </svg>
);
