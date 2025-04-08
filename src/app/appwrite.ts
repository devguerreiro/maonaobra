import { Client, Databases, Models } from "node-appwrite";

const client = new Client();

client
  .setKey(process.env.APPWRITE_API_KEY)
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject(process.env.APPWRITE_PROJECT_ID);

const databases = new Databases(client);

export type EngineerDocument = Models.Document & {
  token: string;
  name: string;
  contact: string;
};

export async function getEngineers() {
  const data = await databases.listDocuments<EngineerDocument>(
    process.env.APPWRITE_DATABASE_ID,
    process.env.APPWRITE_DATABASE_ENGINEER_COLLECTION_ID
  );
  return data.documents;
}

export type WorkerDocument = Models.Document & {
  name: string;
  job: string;
  contact: string;
  city: string;
  recommended_by: string;
};

export async function getWorkers() {
  const data = await databases.listDocuments<WorkerDocument>(
    process.env.APPWRITE_DATABASE_ID,
    process.env.APPWRITE_DATABASE_WORKER_COLLECTION_ID
  );
  return data.documents;
}
