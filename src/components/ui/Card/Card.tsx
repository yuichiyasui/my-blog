import { ArticleMeta } from "@/types/article";
import Link from "next/link";
import { Img } from "@/components/ui/Img";
import { CategoryLabel } from "../CategoryLabel";

type Props = {
  meta: ArticleMeta;
};

export const Card = ({ meta }: Props) => {
  return (
    <div className="p-[20px] bg-white rounded-md shadow-md">
      <Img
        src={`/articles/${meta.id}/main.jpg`}
        width="400"
        height="210"
        alt=""
        className="mb-[15px]"
      />
      <time dateTime={meta.date} className="block mb-[5px] text-[14px]">
        {meta.date}
      </time>
      <Link href={`/article/${meta.id}`}>
        <a className="table mb-[10px] font-bold">{meta.title}</a>
      </Link>
      <CategoryLabel categoryName={meta.category} className="text-[12px]" />
    </div>
  );
};
