"use client";

import { LoaderCircle } from "lucide-react";

import useUniqueJobs from "@/hooks/use-workers";

import WorkerCard from "./components/WorkerCard";
import Filters from "./components/Filters";

export default function Page() {
  const { isFetching, workers, displayedWorkers } = useUniqueJobs();

  function getUniqueJobs() {
    const jobs = workers.map((worker) => worker.Especialidade);
    const uniqueJobs = new Set(jobs);
    return Array.from(uniqueJobs);
  }

  function getUniqueCities() {
    const jobs = workers.map((worker) => worker.Cidade);
    const uniqueJobs = new Set(jobs);
    return Array.from(uniqueJobs);
  }

  return (
    <div className="container py-8 space-y-4 md:space-y-8">
      <h2 className="text-xl font-medium">Banco de Talentos</h2>
      {isFetching ? (
        <LoaderCircle className="mx-auto animate-spin" />
      ) : (
        <div className="space-y-4 md:space-y-8">
          <Filters jobs={getUniqueJobs()} cities={getUniqueCities()} />
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {displayedWorkers.map((worker) => (
              <WorkerCard key={worker.Contato} worker={worker} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
