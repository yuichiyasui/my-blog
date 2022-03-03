import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

export const SmallHeading = ({ children, className = "" }: Props) => {
  return (
    <h3 className={`py-1.5 text-base font-bold tracking-wide ${className}`}>
      {children}
    </h3>
  );
};
