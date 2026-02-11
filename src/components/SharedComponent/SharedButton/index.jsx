import { twMerge } from "tailwind-merge";

export const SharedButton = ({ text, className, ...props }) => {
  return (
    <button className={twMerge("", className)} {...props}>
      {text}
    </button>
  );
};
