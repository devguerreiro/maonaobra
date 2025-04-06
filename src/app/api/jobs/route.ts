export async function GET() {
  return await fetch(process.env.GOOGLE_SHEET_URL, {
    method: "GET",
  });
}
