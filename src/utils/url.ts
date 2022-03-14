import { TITLE } from "@/constants";

export const getOriginURL = () => {
  return process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`;
};

export const getTwitterShareURL = (path: string, title?: string) => {
  const origin = getOriginURL();
  const text = encodeURIComponent(title ? `${title} | ${TITLE}` : TITLE);
  const url = encodeURIComponent(`${origin}${path}`);
  return `https://twitter.com/share?url=${url}&text=${text}`;
};

export const getLINEShareURL = (path: string) => {
  const origin = getOriginURL();
  const url = encodeURIComponent(`${origin}${path}`);
  return `https://line.me/R/msg/text/?${url}`;
};
