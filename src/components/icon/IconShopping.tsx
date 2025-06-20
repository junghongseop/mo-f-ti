import { SVGProps } from "react";

const IconShopping = ({ ...props }: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M30.2143 32.9997H4.5L6.11429 10.1426H28.6143L30.2143 32.9997Z"
        fill="#71D1AE"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.3572 5.85714C16.3482 5.85714 15.3435 6.27235 14.541 7.07543C13.749 7.86812 13.2144 8.98256 13.0715 10.2248V14.4286H10.2144V10.074L10.2219 10.0011C10.4154 8.12182 11.2194 6.3575 12.5199 5.05592C13.8247 3.75009 15.5439 3 17.3572 3C19.1706 3 20.8897 3.75009 22.1945 5.05592C23.495 6.3575 24.299 8.12182 24.4926 10.0011L24.5001 10.074V14.4286H21.6429V10.2248C21.5 8.98256 20.9655 7.86812 20.1734 7.07543C19.3709 6.27235 18.3662 5.85714 17.3572 5.85714Z"
        fill="#B8F6E0"
      />
    </svg>
  );
};

export default IconShopping;
