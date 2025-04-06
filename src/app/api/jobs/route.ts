type Row = {
  Prestador: string;
  Especialidade: string;
  Desempenho: string;
};

type Data = {
  data: Array<Row>;
  currentPage: number;
  totalPage: number;
};

export async function GET() {
  const response = await fetch(process.env.GOOGLE_SHEET_URL, {
    method: "GET",
  });
  return (await response.json()) as Data;
}
