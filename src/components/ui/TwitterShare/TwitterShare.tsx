import { ExternalLink } from "@/components/functionals/ExternalLink";
import { TwitterIcon } from "@/components/icons/Twitter";

import { getTwitterShareURL } from "@/utils/url";

type Props = {
  path: string;
  title?: string;
  className?: string;
};

export const TwitterShare = ({ path, title, className = "" }: Props) => {
  const shareUrl = getTwitterShareURL(path, title);
  return (
    <ExternalLink
      href={shareUrl}
      title="Twitterでシェア"
      className={`hover:opacity-70 focus-visible:ring-blue-600 table ${className}`}
    >
      <TwitterIcon size={28} />
    </ExternalLink>
  );
};
