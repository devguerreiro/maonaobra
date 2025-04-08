import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

import { WorkerDocument } from "@/app/appwrite";

type Workers = Array<WorkerDocument>;

export default function useUniqueJobs() {
  const searchParams = useSearchParams();

  const [isFetching, setIsFetching] = useState<boolean | null>(null);

  const [workers, setWorkers] = useState<Workers>([]);
  const [displayedWorkers, setDisplayedWorkers] = useState<Workers>([]);

  function filter(base: Workers) {
    const filteredWorkers = base.filter((worker) => {
      return searchParams
        .entries()
        .every(([key, value]) => key === "token" || worker[key] === value);
    });

    setDisplayedWorkers(filteredWorkers);
  }

  useEffect(() => {
    setIsFetching(true);

    fetch("api/workers", {
      cache: "default",
      headers: {
        "Cache-Control": "max-age=3600",
      },
    }).then(async (response) => {
      if (response.ok) {
        const workers = (await response.json()) as Workers;

        setWorkers(workers);

        if (searchParams.size > 0) {
          filter(workers);
        } else {
          setDisplayedWorkers(workers);
        }

        setIsFetching(false);
      }
    });
  }, []);

  useEffect(() => {
    if (searchParams.size > 0) {
      filter(workers);
    } else {
      setDisplayedWorkers(workers);
    }
  }, [searchParams]);

  return {
    isFetching: isFetching === null || isFetching === true,
    workers,
    setWorkers,
    displayedWorkers,
    setDisplayedWorkers,
  };
}
