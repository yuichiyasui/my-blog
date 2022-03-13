type Props = {
  title: string;
  className?: string;
};

export const Title = ({ title, className = "" }: Props) => {
  return (
    <h1 className={`text-lg sm:text-2xl font-bold tracking-wide ${className}`}>
      {title}
    </h1>
  );
};
