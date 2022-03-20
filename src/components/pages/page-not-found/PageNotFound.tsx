import { BaseLayout } from "@/components/layouts/BaseLayout";
import { Paragraph } from "@/components/ui/Paragraph";
import { TextLink } from "@/components/ui/TextLink";
import { Title } from "@/components/ui/Title";

export const PageNotFound = () => {
  return (
    <BaseLayout>
      <div className="mx-auto w-full max-w-[1280px]">
        <main className="py-[60px] mx-auto w-[92%] max-w-[1200px] sm:py-[120px]">
          <p className="mx-auto mb-[30px] text-5xl font-bold tracking-widest text-center">
            404
          </p>
          <Title
            title="お探しのページが見つかりませんでした"
            className="mb-[30px] text-center"
          />
          <Paragraph className="mb-[30px] text-sm text-center sm:text-base">
            お探しのページは削除されているかURLが変更されている可能性があります。
          </Paragraph>
          <TextLink href="/" className="table mx-auto text-sm sm:text-base">
            TOPに戻る
          </TextLink>
        </main>
      </div>
    </BaseLayout>
  );
};
