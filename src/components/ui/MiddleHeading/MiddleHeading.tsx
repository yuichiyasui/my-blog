import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

export const MiddleHeading = ({ children, className = "" }: Props) => {
  return (
    <h3
      className={`py-1.5 text-sm sm:text-lg font-bold tracking-wide ${className}`}
    >
      {children}
    </h3>
  );
};
