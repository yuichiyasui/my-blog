import Link from "next/link";
import { ReactNode } from "react";

type Props = {
  href: string;
  children: ReactNode;
  className?: string;
};

export const TextLink = ({ href, children, className = "" }: Props) => {
  return (
    <Link href={href}>
      <a
        className={`tracking-wide text-sky-600 hover:text-sky-900 transition-colors duration-200 ${className}`}
      >
        {children}
      </a>
    </Link>
  );
};
