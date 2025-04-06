import { BicepsFlexed, ShieldCheck, TrendingUp } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";

import { cn } from "@/lib/utils";

export default function Page() {
  return (
    <div>
      <main className="container -mt-20 h-screen flex flex-col justify-center items-center gap-8">
        <div className="text-center space-y-3">
          <h2 className="text-balance font-bold text-5xl">
            Somos uma plataforma que{" "}
            <strong className="text-primary ">conecta</strong> gestores à mão de
            obra
          </h2>
          <p className="text-muted-foreground text-2xl">
            Somente aqui você encontra mão de obra <strong>qualificada</strong>{" "}
            e de <strong>confiança</strong>
          </p>
        </div>
        <a
          href="https://wa.me/47991430377?text=Preciso de mão de obra"
          className={cn(buttonVariants(), "w-80 py-8 text-xl")}
          target="_blank"
        >
          Preciso de mão de obra
        </a>
      </main>
      <section className="bg-card py-10 space-y-12">
        <h3 className="text-2xl text-center">Aqui você vai encontrar</h3>
        <div className="container grid grid-cols-3 gap-8">
          <div className="h-40 bg-primary text-white rounded-lg shadow text-2xl flex flex-col justify-center items-center gap-4">
            <span>Mão de obra qualificada</span>
            <BicepsFlexed />
          </div>
          <div className="h-40 bg-primary text-white rounded-lg shadow text-2xl flex flex-col justify-center items-center gap-4">
            <span>Profissionais de confiança</span>
            <ShieldCheck />
          </div>
          <div className="h-40 bg-primary text-white rounded-lg shadow text-2xl flex flex-col justify-center items-center gap-4">
            <span>Grandes talentos</span>
            <TrendingUp />
          </div>
        </div>
      </section>
    </div>
  );
}
