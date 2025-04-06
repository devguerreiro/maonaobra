export async function GET() {
  const response = await fetch(process.env.GOOGLE_SHEET_ENGINEERS_URL, {
    method: "GET",
  });
  return Response.json(await response.json());
}
