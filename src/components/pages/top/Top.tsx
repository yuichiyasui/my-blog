import { Footer } from "@/components/ui/Footer";
import { Header } from "@/components/ui/Header";

export const Top = () => {
  return (
    <>
      <Header className="sticky top-0 left-0" />
      <div className="mx-auto w-full max-w-[1280px]">
        <main className="py-[30px] mx-auto w-[92%] max-w-[1200px]">
          <section>
            <h2 className="text-[18px] tracking-[2px] text-left">Articles</h2>
          </section>
        </main>
      </div>
      <Footer className="mt-auto" />
    </>
  );
};
