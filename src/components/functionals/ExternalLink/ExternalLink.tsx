import { AnchorHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";

type Props = {
  children: ReactNode;
} & DetailedHTMLProps<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
>;

export const ExternalLink = ({ children, ...props }: Props) => {
  return (
    <a {...props} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
};
