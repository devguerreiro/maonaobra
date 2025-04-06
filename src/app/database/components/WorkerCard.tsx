import { DynamicIcon } from "lucide-react/dynamic";

import { DataWorker } from "@/hooks/use-workers";

import { cn } from "@/lib/utils";

import { buttonVariants } from "@/components/ui/button";
import { ShieldCheck } from "lucide-react";

type Props = {
  worker: DataWorker;
};

export default function WorkerCard({ worker }: Readonly<Props>) {
  function getWorkIcon() {
    const job = worker.Especialidade.toLowerCase();
    if (job.includes("pedreiro")) {
      return "hammer";
    } else if (job.includes("construtora")) {
      return "hard-hat";
    } else if (job.includes("servente")) {
      return "drill";
    } else if (job.includes("mestre")) {
      return "wrench";
    }
    return "paintbrush";
  }

  return (
    <div className="bg-secondary rounded shadow p-4 flex flex-col justify-between gap-6">
      <div className="relative space-y-2">
        <p className="text-xl font-medium">{worker.Nome}</p>
        <div className="text-sm text-muted-foreground">
          <p>{worker.Especialidade}</p>
          <p>{worker.Cidade}</p>
        </div>
        {worker["Recomendado por"] && (
          <div className="w-full flex justify-between items-center gap-2">
            <span>Recomendado por - {worker["Recomendado por"]}</span>
            <ShieldCheck className="text-green-500" />
          </div>
        )}
        <DynamicIcon
          name={getWorkIcon()}
          className="text-blue-600 absolute top-0 right-0"
          size={32}
        />
      </div>
      <div className="mt-auto">
        <a
          href="https://wa.me/47991430377?text=Olá! Gostaria de contratá-lo"
          className={cn(buttonVariants(), "w-full py-6 text-lg")}
          target="_blank"
        >
          Quero contratá-lo
        </a>
      </div>
    </div>
  );
}
