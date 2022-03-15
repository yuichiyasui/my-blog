import { existsGaId, GA_ID } from "@/libs/gtag";
import Script from "next/script";

export const GoogleAnalytics = () => {
  return (
    <>
      {/** Global site tag (gtag.js) - Google Analytics --> */}
      {existsGaId && (
        <>
          <Script
            defer
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
            strategy="afterInteractive"
          />
          <Script id="ga" defer strategy="afterInteractive">
            {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());  
                gtag('config', '${GA_ID}', {
                  page_path: window.location.pathname,
                });
            `}
          </Script>
        </>
      )}
    </>
  );
};
