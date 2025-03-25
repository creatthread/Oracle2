// components/ui/button.js

import React from "react";

export function Button({ children, onClick, className, ...props }) {
  return (
    <button
      className={`bg-blue-500 text-white rounded-lg px-4 py-2 hover:bg-blue-600 transition duration-200 ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
}
