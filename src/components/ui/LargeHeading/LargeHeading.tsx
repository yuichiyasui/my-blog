import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

export const LargeHeading = ({ children, className = "" }: Props) => {
  return (
    <h2
      className={`py-2 text-xl font-bold tracking-wide border-b border-b-gray-300 ${className}`}
    >
      {children}
    </h2>
  );
};
