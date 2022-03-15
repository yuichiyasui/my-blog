import { ArticleMeta } from "@/types/article";
import Link from "next/link";
import { Img } from "@/components/ui/Img";
import { CategoryLabel } from "../CategoryLabel";
import dayjs from "dayjs";

type Props = {
  meta: ArticleMeta;
};

export const Card = ({ meta }: Props) => {
  return (
    <div className="p-5 bg-white rounded-md shadow-md">
      <Link href={`/article/${meta.id}`}>
        <a className="block mb-4">
          <Img
            src={`/articles/${meta.id}/main.jpg`}
            width="400"
            height="210"
            alt={meta.title}
            layout="responsive"
            priority
          />
        </a>
      </Link>
      <time
        dateTime={meta.date}
        className="block mb-1.5 text-xs tracking-widest text-gray-600 sm:text-sm"
      >
        {dayjs(meta.date).format("YYYY.MM.DD")}
      </time>
      <Link href={`/article/${meta.id}`}>
        <a className="table mb-2.5 font-bold tracking-wider">{meta.title}</a>
      </Link>
      <CategoryLabel categoryName={meta.category} className="text-xs" />
    </div>
  );
};
