import { MDXComponents } from "mdx/types";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";

import { ArticleLayout } from "@/components/layouts/ArticleLayout";
import { BaseLayout } from "@/components/layouts/BaseLayout";
import { LargeHeading } from "@/components/ui/LargeHeading";
import { MiddleHeading } from "@/components/ui/MiddleHeading";
import { SmallHeading } from "@/components/ui/SmallHeading";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Paragraph } from "@/components/ui/Paragraph";
import { ListItem } from "@/components/ui/ListItem";

type ArticleMeta = {
  id: string;
  title: string;
  date: string;
  category: string;
};

type Props = {
  source: MDXRemoteSerializeResult | string;
  meta: ArticleMeta;
};

const mdxComponents: MDXComponents = {
  h2: (props) => <LargeHeading className="mb-4">{props.children}</LargeHeading>,
  h3: (props) => <MiddleHeading>{props.children}</MiddleHeading>,
  h4: (props) => <SmallHeading>{props.children}</SmallHeading>,
  p: (props) => <Paragraph>{props.children}</Paragraph>,
  li: (props) => <ListItem>{props.children}</ListItem>,
};

export const Article = ({ meta, source }: Props) => {
  return (
    <BaseLayout>
      <div className="py-8 mx-auto w-[92%] max-w-[880px] sm:py-[60px]">
        <ArticleLayout meta={meta} className="mb-6 sm:mb-8">
          {/* Storybookのモック時用 */}
          {typeof source === "string" ? (
            source
          ) : (
            <MDXRemote {...source} components={mdxComponents} />
          )}
        </ArticleLayout>
        <Breadcrumbs
          breadcrumbs={[
            {
              label: "TOP",
              href: "/",
            },
            {
              label: meta.title,
            },
          ]}
        />
      </div>
    </BaseLayout>
  );
};
