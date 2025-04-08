import { Models } from "node-appwrite";

import { databases } from "@/app/appwrite";

export type WorkerDocument = Models.Document & {
  name: string;
  job: string;
  contact: string;
  city: string;
  recommended_by: string;
};

export async function GET() {
  const response = await databases.listDocuments<WorkerDocument>(
    process.env.APPWRITE_DATABASE_ID,
    "67f59a03000ee5785f1e"
  );
  return Response.json(response.documents);
}
