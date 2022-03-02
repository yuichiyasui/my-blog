import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const LargeHeading = ({ children }: Props) => {
  return (
    <h2 className="py-2 text-xl font-bold tracking-wide border-b border-b-gray-300">
      {children}
    </h2>
  );
};
