import { Logo } from '@/components/ui/Logo';

type Props = {
  className?: string;
};

export const Header = ({ className = '' }: Props) => {
  return (
    <header className={`bg-white shadow-sm ${className}`}>
      <div className="py-[10px] px-[4vw] mx-auto max-w-[1280px] sm:px-[30px]">
        <Logo />
      </div>
    </header>
  );
};
