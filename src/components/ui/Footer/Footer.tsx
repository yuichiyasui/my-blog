type Props = {
  className?: string;
};

export const Footer = ({ className = "" }: Props) => {
  return (
    <footer
      className={`grid justify-items-center py-[20px] bg-white ${className}`}
    >
      <p className="text-[12px] tracking-[2px] text-stone-700">
        © suiyasuiya 2022
      </p>
    </footer>
  );
};
