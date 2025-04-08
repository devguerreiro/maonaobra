import { BicepsFlexed, ShieldCheck, TrendingUp } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";

import { cn } from "@/lib/utils";

export default function Page() {
  return (
    <div>
      <main className="container -mt-20 h-screen flex flex-col justify-center items-center gap-8">
        <div className="text-center space-y-3">
          <h2 className="text-balance font-bold text-2xl lg:text-5xl">
            Somos uma plataforma que{" "}
            <strong className="text-primary ">conecta</strong> gestores à mão de
            obra
          </h2>
          <p className="text-muted-foreground text-lg lg:text-2xl">
            Somente aqui você encontra mão de obra <strong>qualificada</strong>{" "}
            e de <strong>confiança</strong>
          </p>
        </div>
        <a
          href="https://wa.me/47991430377?text=Olá! Preciso de mão de obra"
          className={cn(
            buttonVariants(),
            "w-full py-6 text-lg lg:w-80 lg:py-8 lg:text-xl"
          )}
          target="_blank"
        >
          Encontrar mão de obra
        </a>
      </main>
      <section className="bg-card py-20 space-y-12">
        <h3 className="text-center text-xl lg:text-2xl">O que oferecemos</h3>
        <div className="container grid gap-8 grid-cols-1 lg:grid-cols-3">
          <div className="offer">
            <span>Mão de obra qualificada</span>
            <BicepsFlexed />
          </div>
          <div className="offer">
            <span>Profissionais de confiança</span>
            <ShieldCheck />
          </div>
          <div className="offer">
            <span>Grandes talentos</span>
            <TrendingUp />
          </div>
        </div>
      </section>
    </div>
  );
}
