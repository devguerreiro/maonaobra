"use client";

import useUniqueJobs, { DataWorker } from "@/hooks/use-workers";

import Loading from "@/components/Loading";

import WorkerCard from "./WorkerCard";
import Filters from "./Filters";

export default function Workers() {
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

  function sortWorkers(a: DataWorker, b: DataWorker) {
    const aRecommended = a["Recomendado por"];
    const bRecommended = b["Recomendado por"];
    if (aRecommended === bRecommended) return 0;
    else if (aRecommended > bRecommended) return -1;
    return 1;
  }

  return isFetching ? (
    <Loading />
  ) : (
    <div className="space-y-8">
      <Filters jobs={getUniqueJobs()} cities={getUniqueCities()} />
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {displayedWorkers.sort(sortWorkers).map((worker) => (
          <WorkerCard key={worker.Contato} worker={worker} />
        ))}
      </div>
    </div>
  );
}
