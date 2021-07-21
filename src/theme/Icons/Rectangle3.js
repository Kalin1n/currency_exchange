import * as React from "react";

function SvgRectangle3(props) {
  return (
    <svg
      width={21}
      height={21}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path stroke="#0C2146" strokeWidth={2.7} d="M1.35 1.35h18.3v18.3H1.35z" />
    </svg>
  );
}

export default SvgRectangle3;
