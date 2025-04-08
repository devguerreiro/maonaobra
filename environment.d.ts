declare global {
  namespace NodeJS {
    interface ProcessEnv {
      APPWRITE_API_KEY: string;
      APPWRITE_PROJECT_ID: string;
      APPWRITE_DATABASE_ID: string;
    }
  }
}

export {};
