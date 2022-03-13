import { Footer } from "@/components/ui/Footer";
import { Header } from "@/components/ui/Header";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const BaseLayout = ({ children }: Props) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header className="sticky top-0 left-0 z-30" />
      {children}
      <Footer className="mt-auto" />
    </div>
  );
};
