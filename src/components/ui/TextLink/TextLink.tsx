import { ExternalLink } from "@/components/functionals/ExternalLink";
import Link from "next/link";
import { AnchorHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";

type Props = {
  href: string | undefined;
  children: ReactNode;
  className?: string;
} & DetailedHTMLProps<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
>;

const baseClass =
  "leading-relaxed tracking-wider text-sky-600 hover:text-sky-900 transition-colors duration-200";

export const TextLink = ({
  href,
  children,
  className = "",
  ...props
}: Props) => {
  if (!href) {
    return <span className={className}>{children}</span>;
  }

  const isUrl = /(http|https):\//.test(href);
  if (isUrl) {
    return (
      <ExternalLink
        {...props}
        href={href}
        className={`${baseClass} ${className}`}
      >
        {children}
      </ExternalLink>
    );
  }

  return (
    <Link href={href}>
      <a {...props} className={`${baseClass} ${className}`}>
        {children}
      </a>
    </Link>
  );
};
