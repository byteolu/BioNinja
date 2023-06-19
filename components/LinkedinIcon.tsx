import React from "react";

const LinkedinIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill="currentColor"
      viewBox="0 0 24 24"
      {...props}
    >
      <use xlinkHref= "/public/linkedin.svg" /> 
    </svg>
  );
};

export default LinkedinIcon;
