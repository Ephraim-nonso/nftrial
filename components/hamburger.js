import React from "react";

export const Hamburger = (props) => {
  return (
    <svg
      width="36"
      height="12"
      viewBox="0 0 36 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M3.5 2H35.5" stroke="white" stroke-width="3" />
      <path d="M11.5 10L35.5 10" stroke="white" stroke-width="3" />
    </svg>
  );
};
