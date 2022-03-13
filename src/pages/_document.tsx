import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="ja">
      <Head>
        <meta
          name="description"
          content="趣味や日常のことをきまぐれに書きつづるブログです。"
        />
        <meta
          name="keywords"
          content="エンジニア,DIY,カレー,サウナ,キャンプ,ランニング,趣味,日常"
        />
        <meta property="og:title" content="Y's log" />
        <meta
          property="og:description"
          content="趣味や日常のことをきまぐれに書きつづるブログです。"
        />
        <meta
          property="og:image"
          content={`${process.env.NEXT_PUBLIC_HOST}/ogp.jpg`}
        />
        <meta name="twitter:card" content="summary_large_image" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicons/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicons/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicons/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
