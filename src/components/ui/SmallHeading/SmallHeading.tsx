import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const SmallHeading = ({ children }: Props) => {
  return (
    <h3 className="py-1.5 text-base font-bold tracking-wide">{children}</h3>
  );
};
