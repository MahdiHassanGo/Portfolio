// src/ui/BackgroundGradient.jsx

import React from "react";

export function BackgroundGradient({ children, className }) {
  return (
    <div
      className={`bg-gradient-to-r from-purple-500 to-indigo-500 p-6 rounded-lg ${className}`}
    >
      {children}
    </div>
  );
}
