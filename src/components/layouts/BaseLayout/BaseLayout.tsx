import { Footer } from "@/components/ui/Footer";
import { Header } from "@/components/ui/Header";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const BaseLayout = ({ children }: Props) => {
  return (
    <>
      <Header className="sticky top-0 left-0" />
      {children}
      <Footer className="mt-auto" />
    </>
  );
};
