import { TextLink } from "@/components/ui/TextLink";

type Breadcrumb = {
  label: string;
  href?: string;
};

type Props = {
  breadcrumbs: Breadcrumb[];
};

export const Breadcrumbs = ({ breadcrumbs }: Props) => {
  return (
    <ol className="flex">
      {breadcrumbs.map((breadcrumb) => {
        return (
          <li
            key={breadcrumb.label}
            className="after:mx-1.5 text-xs after:text-gray-400 after:content-['/'] after:last:content-none sm:text-sm"
          >
            {breadcrumb.href ? (
              <TextLink href={breadcrumb.href}>{breadcrumb.label}</TextLink>
            ) : (
              <span>{breadcrumb.label}</span>
            )}
          </li>
        );
      })}
    </ol>
  );
};
