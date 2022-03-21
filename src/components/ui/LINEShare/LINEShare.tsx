import { ExternalLink } from "@/components/functionals/ExternalLink";
import { LINEIcon } from "@/components/icons/LINE";
import { EVENT_ACTION, EVENT_CATEGORY, sendEvent } from "@/libs/gtag";
import { getLINEShareURL } from "@/utils/url";

type Props = {
  path: string;
  title?: string;
  className?: string;
};

export const LINEShare = ({ path, title, className = "" }: Props) => {
  const shareUrl = getLINEShareURL(path);
  return (
    <ExternalLink
      href={shareUrl}
      title="LINEでシェア"
      onClick={() =>
        sendEvent({
          action: EVENT_ACTION.CLICK,
          category: EVENT_CATEGORY.SNS_SHARE_LINE,
          label: path.slice(1),
        })
      }
      className={`hover:opacity-70 focus-visible:ring-blue-600 table ${className}`}
    >
      <LINEIcon size={28} />
    </ExternalLink>
  );
};
