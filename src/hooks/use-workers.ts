import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export type DataWorker = {
  Nome: string;
  Especialidade: string;
  Contato: string;
  Cidade: string;
  "Recomendado por": string;
};

type Data = {
  data: Array<DataWorker>;
  currentPage: number;
  totalPage: number;
};

export default function useUniqueJobs() {
  const searchParams = useSearchParams();

  const [isFetching, setIsFetching] = useState<boolean | null>(null);

  const [workers, setWorkers] = useState<Array<DataWorker>>([]);
  const [displayedWorkers, setDisplayedWorkers] = useState<Array<DataWorker>>(
    []
  );

  function filter(base: Array<DataWorker>) {
    const filteredWorkers = base.filter((worker) => {
      return (
        searchParams
          .entries()
          // @ts-expect-error dynamic filter
          .every(([key, value]) => key === "token" || worker[key] === value)
      );
    });

    setDisplayedWorkers(filteredWorkers);
  }

  useEffect(() => {
    setIsFetching(true);

    fetch("api/workers").then(async (response) => {
      const data = (await response.json()) as Data;

      const workers = data.data;

      setWorkers(workers);

      if (searchParams.size > 0) {
        filter(workers);
      } else {
        setDisplayedWorkers(workers);
      }

      setIsFetching(false);
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
