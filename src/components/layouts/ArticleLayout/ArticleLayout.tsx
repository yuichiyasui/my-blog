import { ReactNode } from "react";
import dayjs from "dayjs";

import { CategoryLabel } from "@/components/ui/CategoryLabel";
import { Title } from "@/components/ui/Title";
import { Img } from "@/components/ui/Img";
import { ArticleMeta } from "@/types/article";
import { TwitterShare } from "@/components/ui/TwitterShare";
import { LINEShare } from "@/components/ui/LINEShare";

type Props = {
  meta: ArticleMeta;
  children: ReactNode;
  className?: string;
};

export const ArticleLayout = ({ meta, children, className = "" }: Props) => {
  return (
    <main className={className}>
      <article className="py-7 px-[4vw] bg-white rounded-2xl shadow-md sm:py-10 sm:px-[80px]">
        <div className="pb-3 mb-7 border-b border-b-gray-300 sm:grid sm:grid-cols-[1fr_auto] sm:gap-x-10 sm:pb-4 sm:mb-10">
          <Title title={meta.title} className="mb-1 sm:self-end sm:mb-0" />
          <div className="flex flex-row-reverse justify-between items-center sm:grid sm:justify-items-end sm:content-end">
            <CategoryLabel categoryName={meta.category} className="sm:mb-3" />
            <time
              dateTime={meta.date}
              className="text-xs tracking-widest sm:text-base"
            >
              {dayjs(meta.date).format("YYYY.MM.DD")}
            </time>
          </div>
        </div>
        <Img
          src={`/articles/${meta.id}/main.jpg`}
          width={1200}
          height={630}
          alt=""
          className="mx-auto mb-5 max-w-[600px] sm:mb-10"
        />
        <div className="pb-7 mb-5 text-xs border-b border-b-gray-300 sm:pb-[40px] sm:text-sm">
          {children}
        </div>
        <aside>
          <ul className="flex gap-x-5 justify-end">
            <li>
              <TwitterShare title={meta.title} path={`/article/${meta.id}`} />
            </li>
            <li>
              <LINEShare title={meta.title} path={`/article/${meta.id}`} />
            </li>
          </ul>
        </aside>
      </article>
    </main>
  );
};
