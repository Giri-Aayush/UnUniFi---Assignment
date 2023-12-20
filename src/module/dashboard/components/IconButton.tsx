import React from "react";

const IconButton = ({ children }: { children: React.ReactNode }) => {
  return (
    <button
      className={`px-2 py-2 rounded-3xl hover:bg-gray-glass`}
      type="button"
    >
      {children}
    </button>
  );
};

export default IconButton;
