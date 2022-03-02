import { CategoryLabel } from "@/components/ui/CategoryLabel";
import { Title } from "@/components/ui/Title";
import dayjs from "dayjs";
import Image from "next/image";

type ArticleMeta = {
  title: string;
  date: string;
  category: string;
};

type Props = {
  meta: ArticleMeta;
};

export const ArticleLayout = ({ meta }: Props) => {
  return (
    <article className="py-10 px-[100px] max-w-[1000px] bg-white rounded-2xl shadow-md">
      <div className="grid grid-cols-[1fr_auto] gap-x-10 py-4 mb-10 border-b border-b-gray-300">
        <Title title={meta.title} className="self-end" />
        <div className="grid justify-items-end content-end">
          <CategoryLabel categoryName={meta.category} className="mb-3" />
          <time dateTime={meta.date} className="tracking-wide">
            {dayjs(meta.date).format("YYYY.MM.DD")}
          </time>
        </div>
      </div>
      <div className="mx-auto mb-10 w-[600px]">
        <Image src="/mock-img/ogp.png" width={1200} height={630} alt="" />
      </div>
      <div className="pb-[60px] border-b border-b-gray-300">コンテンツ部分</div>
    </article>
  );
};
