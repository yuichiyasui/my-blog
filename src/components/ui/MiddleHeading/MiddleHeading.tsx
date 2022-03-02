import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const MiddleHeading = ({ children }: Props) => {
  return <h3 className="py-1.5 text-lg font-bold tracking-wide">{children}</h3>;
};
