type Props = {
  categoryName: string;
  className?: string;
};

export const CategoryLabel = ({ categoryName, className = "" }: Props) => {
  return (
    <div
      className={`w-max h-max py-1 px-2 text-min font-bold tracking-wide text-white bg-teal-500 ${className}`}
    >
      {categoryName}
    </div>
  );
};
