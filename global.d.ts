namespace NodeJS {
  export interface ProcessEnv {
    NODE_ENV: "development" | "production" | "test";
    MONGODB_URI: string;
    MONGODB_DB: string;
  }
}
