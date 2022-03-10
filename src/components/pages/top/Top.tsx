import { Card } from "@/components/ui/Card";
import { Footer } from "@/components/ui/Footer";
import { Header } from "@/components/ui/Header";
import { ArticleMeta } from "@/types/article";

type Props = {
  articles: ArticleMeta[];
};

export const Top = ({ articles }: Props) => {
  return (
    <>
      <Header className="sticky top-0 left-0" />
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
      <Footer className="mt-auto" />
    </>
  );
};
