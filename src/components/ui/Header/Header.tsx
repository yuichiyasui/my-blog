import { Logo } from "@/components/ui/Logo";
import Link from "next/link";
import { useRouter } from "next/router";

type Props = {
  className?: string;
};

export const Header = ({ className = "" }: Props) => {
  const { pathname } = useRouter();
  const isTop = pathname === "/";

  return (
    <header className={`bg-white shadow-sm w-full ${className}`}>
      <div className="py-[10px] mx-auto w-[92%] max-w-[1200px]">
        {isTop ? (
          <Logo />
        ) : (
          <Link href="/">
            <a>
              <Logo />
            </a>
          </Link>
        )}
      </div>
    </header>
  );
};
