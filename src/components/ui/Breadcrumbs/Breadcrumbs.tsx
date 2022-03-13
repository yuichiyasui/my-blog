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
    <nav>
      <ol
        itemScope
        itemType="http://schema.org/BreadcrumbList"
        className="flex"
      >
        {breadcrumbs.map((breadcrumb, index) => {
          return (
            <li
              key={breadcrumb.label}
              itemProp="itemListElement"
              itemScope
              itemType="http://schema.org/Listitem"
              className="after:mx-1.5 text-xs after:text-gray-400 after:content-['/'] after:last:content-none sm:text-sm"
            >
              {breadcrumb.href ? (
                <TextLink itemProp="name" href={breadcrumb.href}>
                  {breadcrumb.label}
                </TextLink>
              ) : (
                <span itemProp="name" className="tracking-wider">
                  {breadcrumb.label}
                </span>
              )}
              <meta itemProp="position" content={`${index + 1}`} />
            </li>
          );
        })}
      </ol>
    </nav>
  );
};
