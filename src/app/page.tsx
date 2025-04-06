import Form from "./components/Form";

type Job = {
  Prestador: string;
  Especialidade: string;
  Desempenho: string;
};

type Data = {
  data: Array<Job>;
  currentPage: number;
  totalPage: number;
};

export default async function Page() {
  async function getJobs() {
    const response = await fetch(process.env.GOOGLE_SHEET_URL, {
      method: "GET",
    });
    return (await response.json()) as Data;
  }

  const jobs = new Set((await getJobs()).data.map((job) => job.Especialidade));

  return (
    <div className="container w-screen h-screen flex flex-col justify-center items-center gap-4">
      <p className="text-center text-balance">
        Selecione a especialidade que deseja buscar prestadores
      </p>
      <Form jobs={Array.from(jobs)} />
    </div>
  );
}
