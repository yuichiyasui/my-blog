import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

export const Paragraph = ({ children, className = "" }: Props) => {
  return (
    <p className={`leading-relaxed tracking-wider ${className}`}>{children}</p>
  );
};
