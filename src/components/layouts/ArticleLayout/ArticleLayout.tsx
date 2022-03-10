import { ReactNode } from "react";
import dayjs from "dayjs";

import { CategoryLabel } from "@/components/ui/CategoryLabel";
import { Title } from "@/components/ui/Title";
import { Img } from "@/components/ui/Img";
import { ArticleMeta } from "@/types/article";

type Props = {
  meta: ArticleMeta;
  children: ReactNode;
};

export const ArticleLayout = ({ meta, children }: Props) => {
  return (
    <article className="py-10 px-[80px] max-w-[960px] bg-white rounded-2xl shadow-md">
      <div className="grid grid-cols-[1fr_auto] gap-x-10 pb-4 mb-10 border-b border-b-gray-300">
        <Title title={meta.title} className="self-end" />
        <div className="grid justify-items-end content-end">
          <CategoryLabel categoryName={meta.category} className="mb-3" />
          <time dateTime={meta.date} className="tracking-wide">
            {dayjs(meta.date).format("YYYY.MM.DD")}
          </time>
        </div>
      </div>
      <Img
        src={`/articles/${meta.id}/main.jpg`}
        width={1200}
        height={630}
        alt=""
        className="mx-auto mb-10 max-w-[600px]"
      />
      <div className="pb-[60px] border-b border-b-gray-300">{children}</div>
    </article>
  );
};
