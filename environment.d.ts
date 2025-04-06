declare global {
  namespace NodeJS {
    interface ProcessEnv {
      GOOGLE_SHEET_JOBS_URL: string;
      GOOGLE_SHEET_ENGINEERS_URL: string;
    }
  }
}

// If this file has no import/export statements (i.e. is a script)
// convert it into a module by adding an empty export statement.
export {};
