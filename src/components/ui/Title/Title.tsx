import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const Title = ({ children }: Props) => {
  return <h1 className="py-2 text-2xl font-bold tracking-wide">{children}</h1>;
};
