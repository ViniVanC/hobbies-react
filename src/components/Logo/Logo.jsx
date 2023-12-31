import React from "react";

export const Logo = ({ size = 80, color = "#be95c4" }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 746 746"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="228" cy="350" r="90" fill={color} />
      <circle cx="518" cy="350" r="90" fill={color} />
      <circle cx="376" cy="215" r="90" fill={color} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M255.857 374.142C263.667 366.332 276.331 366.332 284.141 374.142L374.104 464.105L464.066 374.142C471.877 366.332 484.54 366.332 492.35 374.142L499.421 381.213C507.232 389.024 507.232 401.687 499.421 409.497L409.401 499.518C409.794 501.619 410 503.785 410 506V586C410 605.33 394.33 621 375 621C355.67 621 340 605.33 340 586V506C340 504.322 340.118 502.672 340.346 501.058L248.786 409.497C240.975 401.687 240.975 389.024 248.786 381.213L255.857 374.142Z"
        fill={color}
      />
      <rect x="349" y="328" width="50" height="90" rx="25" fill={color} />
      <circle cx="373" cy="373" r="343" stroke={color} strokeWidth="60" />
    </svg>
  );
};
