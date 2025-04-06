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
    <div className="bg-secondary rounded shadow p-4 space-y-1 relative">
      <p className="text-base font-medium">{worker.Nome}</p>
      <div className="text-sm text-muted-foreground">
        <p>{worker.Especialidade}</p>
        <p>{worker.Cidade}</p>
      </div>
      {worker["Recomendado por"] && (
        <div className="flex items-center gap-2">
          <span>{worker["Recomendado por"]}</span>
          <ShieldCheck className="text-green-500" />
        </div>
      )}
      <DynamicIcon
        name={getWorkIcon()}
        className="text-blue-600 absolute top-4 right-4"
        size={32}
      />
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
