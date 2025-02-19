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
        d="M6.94 4L6 4.94L9.05333 8L6 11.06L6.94 12L10.94 8L6.94 4Z"
        fill="currentColor"
      />
    </svg>
  );
};
export default PreviousIcon;
