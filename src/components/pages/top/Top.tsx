import { BaseLayout } from "@/components/layouts/BaseLayout";
import { Card } from "@/components/ui/Card";
import { ArticleMeta } from "@/types/article";

type Props = {
  articles: ArticleMeta[];
};

export const Top = ({ articles }: Props) => {
  return (
    <BaseLayout>
      <div className="mx-auto w-full max-w-[1280px]">
        <main className="py-[30px] mx-auto w-[92%] max-w-[1200px]">
          <section>
            <h2 className="mb-[20px] text-[18px] tracking-[2px] text-left">
              Articles
            </h2>
            <ol className="grid grid-cols-1 gap-y-[30px] sm:grid-cols-2 sm:gap-x-[30px] md:grid-cols-3">
              {articles.map((article, i) => {
                return (
                  <li key={i}>
                    <Card meta={article} />
                  </li>
                );
              })}
            </ol>
          </section>
        </main>
      </div>
    </BaseLayout>
  );
};
