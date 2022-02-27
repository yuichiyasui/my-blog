import { Logo } from "@/components/ui/Logo";

type Props = {
  className?: string;
};

export const Header = ({ className = "" }: Props) => {
  return (
    <header className={`bg-white shadow-sm w-full ${className}`}>
      <div className="py-[10px] mx-auto w-[92%] max-w-[1200px]">
        <Logo />
      </div>
    </header>
  );
};
