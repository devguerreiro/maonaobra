"use client";

import Form from "./components/Form";

export default async function Page() {
  async function getJobs() {
    const response = await fetch(process.env.GOOGLE_SHEET_URL, {
      method: "GET",
    });
    return (await response.json()) as Data;
  }

  const response = await getJobs();

  const data = response.data;

  const availableJobs = new Set(data.map((job) => job.Especialidade));

  function onSubmit(job: string) {}

  return (
    <div className="container w-screen h-screen flex flex-col justify-center items-center gap-4">
      <p className="text-center text-balance">
        Selecione a especialidade que deseja buscar prestadores
      </p>
      <Form
        jobs={Array.from(availableJobs)}
        onSubmit={(values) => {
          onSubmit(values.job);
        }}
      />
    </div>
  );
}
