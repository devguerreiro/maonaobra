import { DataWorker } from "@/hooks/use-workers";

import { cn } from "@/lib/utils";

import { buttonVariants } from "@/components/ui/button";

type Props = {
  worker: DataWorker;
};

export default function WorkerCard({ worker }: Readonly<Props>) {
  return (
    <div className="bg-secondary rounded-lg shadow p-4 space-y-1">
      <p className="text-base font-medium">{worker.Nome}</p>
      <p>{worker.Especialidade}</p>
      <p>{worker.Cidade}</p>
      <p>{worker["Recomendado por"]}</p>
      <a
        href="https://wa.me/47991430377?text=Olá! Gostaria de contratá-lo"
        className={cn(buttonVariants(), "mt-4 w-full py-6 text-lg")}
        target="_blank"
      >
        Quero contratá-lo
      </a>
    </div>
  );
}
