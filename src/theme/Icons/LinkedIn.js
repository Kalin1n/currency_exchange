import * as React from "react";

function SvgLinkedIn(props) {
  return (
    <svg
      width={22}
      height={22}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M19.938 0H2.063A2.069 2.069 0 000 2.063v17.875C0 21.072.928 22 2.063 22h17.875A2.069 2.069 0 0022 19.937V2.063A2.069 2.069 0 0019.937 0zM8.25 17.875H5.5V8.25h2.75v9.625zm-1.375-11a1.375 1.375 0 110-2.75 1.375 1.375 0 010 2.75zm11 11h-2.75v-5.5a1.375 1.375 0 00-2.75 0v5.5h-2.75V8.25h2.75v1.706c.566-.778 1.435-1.706 2.406-1.706 1.71 0 3.094 1.539 3.094 3.438v6.187z"
        fill="#0E76A8"
      />
    </svg>
  );
}

export default SvgLinkedIn;
