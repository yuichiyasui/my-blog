import Link from "next/link";
import { AnchorHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";

type Props = {
  href: string;
  children: ReactNode;
  className?: string;
} & DetailedHTMLProps<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
>;

export const TextLink = ({
  href,
  children,
  className = "",
  ...props
}: Props) => {
  return (
    <Link href={href}>
      <a
        {...props}
        className={`tracking-wide text-sky-600 hover:text-sky-900 transition-colors duration-200 ${className}`}
      >
        {children}
      </a>
    </Link>
  );
};
