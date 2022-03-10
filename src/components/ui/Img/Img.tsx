import Image, { ImageProps } from "next/image";

type Props = {
  className?: string;
} & ImageProps;

export const Img = ({ className = "", ...imgProps }: Props) => {
  return (
    <span className={`text-[0px] block ${className}`}>
      <Image alt={imgProps.alt} {...imgProps} />
    </span>
  );
};
