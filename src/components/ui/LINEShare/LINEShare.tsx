import { ExternalLink } from "@/components/functionals/ExternalLink";
import { LINEIcon } from "@/components/icons/LINE";
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
      className={`hover:opacity-70 focus-visible:ring-blue-600 table ${className}`}
    >
      <LINEIcon />
    </ExternalLink>
  );
};
