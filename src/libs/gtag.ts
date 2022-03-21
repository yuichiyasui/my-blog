export const GA_ID = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID || "";

export const EVENT_ACTION = {
  CLICK: "click",
} as const;

export const EVENT_CATEGORY = {
  SNS_SHARE_TWITTER: "sns_share_twitter",
  SNS_SHARE_LINE: "sns_share_line",
} as const;

// IDが取得できない場合を想定する
export const existsGaId = GA_ID !== "";

// PVを測定する
export const sendPageview = (path: string) => {
  window.gtag("config", GA_ID, {
    page_path: path,
  });
};

// GAイベントを発火させる
export const sendEvent = ({
  action,
  category,
  label,
  value = 0,
}: {
  action: string;
  category: string;
  label: string;
  value?: number;
}) => {
  if (!existsGaId) {
    return;
  }

  window.gtag("event", action, {
    event_category: category,
    event_label: JSON.stringify(label),
    value,
  });
};
