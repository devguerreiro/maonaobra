"use client";

import useUniqueJobs from "@/hooks/use-workers";

import Loading from "@/components/Loading";

import { WorkerDocument } from "@/app/api/workers/route";

import WorkerCard from "./WorkerCard";
import Filters from "./Filters";

export default function Workers() {
  const { isFetching, workers, displayedWorkers } = useUniqueJobs();

  function getUniqueJobs() {
    const jobs = workers.map((worker) => worker.job);
    const uniqueJobs = new Set(jobs);
    return Array.from(uniqueJobs);
  }

  function getUniqueCities() {
    const jobs = workers.map((worker) => worker.city);
    const uniqueJobs = new Set(jobs);
    return Array.from(uniqueJobs);
  }

  function sortWorkers(a: WorkerDocument, b: WorkerDocument) {
    const aRecommended = a.recommended_by;
    const bRecommended = b.recommended_by;
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
          <WorkerCard key={worker.contact} worker={worker} />
        ))}
      </div>
    </div>
  );
}
