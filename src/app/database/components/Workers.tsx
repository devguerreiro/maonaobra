"use client";

import useUniqueJobs from "@/hooks/use-workers";

import WorkerCard from "./WorkerCard";
import Filters from "./Filters";
import Loading from "@/components/Loading";

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
  return isFetching ? (
    <Loading />
  ) : (
    <div className="space-y-4 md:space-y-8">
      <Filters jobs={getUniqueJobs()} cities={getUniqueCities()} />
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {displayedWorkers.map((worker) => (
          <WorkerCard key={worker.Contato} worker={worker} />
        ))}
      </div>
    </div>
  );
}
