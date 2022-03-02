type Props = {
  categoryName: string;
};

export const CategoryLabel = ({ categoryName }: Props) => {
  return (
    <div className="table py-1 px-2 text-min font-bold tracking-wide text-white bg-teal-500">
      {categoryName}
    </div>
  );
};
