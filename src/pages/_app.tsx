import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { DefaultSeo } from "next-seo";
import { useRouter } from "next/router";
import { DESCRIPTION, TITLE } from "@/constants";
import { getOriginURL } from "@/utils/url";
import { GoogleAnalytics } from "@/components/functionals/GoogleAnalytics";
import usePageView from "@/hooks/use-page-view/use-page-view";

function MyApp({ Component, pageProps }: AppProps) {
  const { asPath } = useRouter();
  const ORIGIN_URL = getOriginURL();
  const { origin, pathname } = new URL(`${ORIGIN_URL}${asPath}`);
  const urlWithoutQuery = `${origin}${pathname}`;

  usePageView();

  return (
    <>
      <DefaultSeo
        defaultTitle={TITLE}
        titleTemplate={`%s | ${TITLE}`}
        description={DESCRIPTION}
        canonical={urlWithoutQuery}
        twitter={{
          cardType: "summary_large_image",
        }}
        openGraph={{
          type: "website",
          locale: "ja_JP",
          site_name: TITLE,
          title: TITLE,
          description: DESCRIPTION,
          images: [
            {
              url: `${ORIGIN_URL}/ogp.jpg`,
              width: 1200,
              height: 630,
              alt: "Y's log",
            },
          ],
        }}
        additionalLinkTags={[
          {
            rel: "apple-touch-icon",
            sizes: "180x180",
            href: "/favicons/apple-touch-icon.png",
          },
          {
            rel: "icon",
            type: "image/png",
            sizes: "32x32",
            href: "/favicons/favicon-32x32.png",
          },
          {
            rel: "icon",
            type: "image/png",
            sizes: "16x16",
            href: "/favicons/favicon-16x16.png",
          },
          {
            rel: "manifest",
            href: "/favicons/site.webmanifest",
          },
        ]}
        additionalMetaTags={[
          {
            name: "msapplication-TileColor",
            content: "#ffffff",
          },
          {
            name: "theme-color",
            content: "#ffffff",
          },
        ]}
      />
      <GoogleAnalytics />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
