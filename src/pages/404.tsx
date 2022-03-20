import { PageNotFound } from "@/components/pages/page-not-found";
import { NextSeo } from "next-seo";

export default function Custom404() {
  return (
    <>
      <NextSeo title="ページが見つかりませんでした" />
      <PageNotFound />
    </>
  );
}
