import { MDXComponents } from "mdx/types";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";

import { ArticleLayout } from "@/components/layouts/ArticleLayout";
import { BaseLayout } from "@/components/layouts/BaseLayout";
import { LargeHeading } from "@/components/ui/LargeHeading";
import { MiddleHeading } from "@/components/ui/MiddleHeading";
import { SmallHeading } from "@/components/ui/SmallHeading";

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
};

export const Article = ({ meta, source }: Props) => {
  return (
    <BaseLayout>
      <div className="py-[60px] mx-auto w-full max-w-[1000px]">
        <ArticleLayout meta={meta}>
          {/* Storybookのモック時用 */}
          {typeof source === "string" ? (
            source
          ) : (
            <MDXRemote {...source} components={mdxComponents} />
          )}
        </ArticleLayout>
      </div>
    </BaseLayout>
  );
};
