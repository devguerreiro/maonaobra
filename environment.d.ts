declare global {
  namespace NodeJS {
    interface ProcessEnv {
      APPWRITE_API_KEY: string;
      APPWRITE_PROJECT_ID: string;
      APPWRITE_DATABASE_ID: string;
      APPWRITE_DATABASE_ENGINEER_COLLECTION_ID: string;
      APPWRITE_DATABASE_WORKER_COLLECTION_ID: string;
    }
  }
}

export {};
