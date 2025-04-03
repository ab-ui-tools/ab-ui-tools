declare namespace NodeJS {
  export interface ProcessEnv {
    NODE_ENV: string;
    KEYCLOAK_URL: string;
    PORT: string;
  }
}
