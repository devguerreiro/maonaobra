import { ShieldCheck } from "lucide-react";

import { cn } from "@/lib/utils";

import { buttonVariants } from "@/components/ui/button";

import { WorkerDocument } from "@/app/api/workers/route";

type Props = {
  worker: WorkerDocument;
};

export default function WorkerCard({ worker }: Readonly<Props>) {
  const workerNumber = worker.contact.toString().replace(/\D/g, "");

  return (
    <div className="bg-card rounded shadow p-4 flex flex-col justify-between gap-6 transition-transform duration-200 hover:scale-110">
      <div className="relative space-y-2">
        <p className="text-xl font-medium">{worker.name}</p>
        <div className="text-sm text-muted-foreground">
          <p className="font-medium text-base">{worker.job}</p>
          <p>{worker.city}</p>
        </div>
        {worker["Recomendado por"] && (
          <div
            title="selo de qualificação"
            role="tooltip"
            aria-label="selo"
            aria-roledescription="selo de qualificação"
          >
            <ShieldCheck className="absolute top-0 right-0 text-blue-500" />
          </div>
        )}
      </div>
      <div className="mt-auto">
        <a
          href={`https://wa.me/${workerNumber}?text=Olá! Gostaria de contratá-lo`}
          className={cn(buttonVariants(), "w-full py-6 text-lg")}
          target="_blank"
        >
          Quero contratá-lo
        </a>
      </div>
    </div>
  );
}
