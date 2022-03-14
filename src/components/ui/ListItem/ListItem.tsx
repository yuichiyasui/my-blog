import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

export const ListItem = ({ children, className = "" }: Props) => {
  return (
    <li
      className={`list-disc list-inside leading-relaxed tracking-wider ${className}`}
    >
      {children}
    </li>
  );
};
