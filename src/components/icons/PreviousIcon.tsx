import { SVGAttributes } from "react";

type Props = SVGAttributes<SVGSVGElement> & { className?: string };

const PreviousIcon = (props: Props) => {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M10.06 12L11 11.06L7.94667 8L11 4.94L10.06 4L6.06 8L10.06 12Z"
        fill="currentColor"
      />
    </svg>
  );
};
export default PreviousIcon;
