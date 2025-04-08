import { getWorkers } from "@/app/appwrite";

export async function GET() {
  return Response.json(await getWorkers());
}
