import { Client, Databases } from "node-appwrite";

const client = new Client();

client
  .setKey(process.env.APPWRITE_API_KEY)
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject(process.env.APPWRITE_PROJECT_ID);

export const databases = new Databases(client);
