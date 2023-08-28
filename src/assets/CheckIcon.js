import React from "react";

function CheckIcon({ color }) {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 104 104"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="52" cy="52" r="52" fill={color} />
      <path
        d="M23.127 54.393L40.6791 71.9452L80.72 31.9043"
        stroke="white"
        strokeWidth="10.6044"
      />
    </svg>
  );
}

export default CheckIcon;
