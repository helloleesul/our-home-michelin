import React from "react";

function FillHeart({ color }) {
  return (
    <svg
      width="31"
      height="27"
      viewBox="0 0 31 27"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M26.3707 3.57768C23.4819 1.17252 19.1857 1.60514 16.5341 4.27811L15.4956 5.3236L14.4572 4.27811C11.8109 1.60514 7.50935 1.17252 4.62057 3.57768C1.31008 6.3382 1.13612 11.2927 4.0987 14.285L14.299 24.5751C14.958 25.2395 16.0281 25.2395 16.687 24.5751L26.8873 14.285C29.8552 11.2927 29.6812 6.3382 26.3707 3.57768Z"
        fill={color}
        stroke={color}
        stroke-width="3.14"
      />
    </svg>
  );
}

function StrokeHeart({ color }) {
  return (
    <svg
      width="31"
      height="27"
      viewBox="0 0 31 27"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M26.3707 3.54057C23.4819 1.13541 19.1857 1.56803 16.5341 4.241L15.4956 5.28649L14.4572 4.241C11.8109 1.56803 7.50935 1.13541 4.62057 3.54057C1.31008 6.30109 1.13612 11.2556 4.0987 14.2479L14.299 24.538C14.958 25.2024 16.0281 25.2024 16.687 24.538L26.8873 14.2479C29.8552 11.2556 29.6812 6.30109 26.3707 3.54057Z"
        stroke={color}
        stroke-width="3.14"
      />
    </svg>
  );
}

export { FillHeart, StrokeHeart };
