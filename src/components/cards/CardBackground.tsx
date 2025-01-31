import React from "react";

interface CardBackgroundProps {
  children: React.ReactNode;
}

export const CardBackground = ({ children }: CardBackgroundProps) => {
  return (
    <div className="absolute h-full w-full">
      {children}
    </div>
  );
}