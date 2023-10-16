export const CONSTANTS = {
  API: {
    BASE_URL: import.meta.env.VITE_BASE_URL,
    APP_ID: import.meta.env.VITE_APP_ID,
    APP_KEY: import.meta.env.VITE_APP_KEY,
  },
  AUTH: {
    APP_KEY: import.meta.env.VITE_FIREBASE_API_KEY,
    AUTH_DOMAIN: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    PROJECT_ID: import.meta.env.VITE_FIREBASE_PROJECT_ID,
    STORAGE_BUCKET: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
    MESSAGING_SENDER_ID: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    APP_ID: import.meta.env.VITE_FIREBASE_APP_ID,
  },
  FILTERS: {
    SEARCH: "q",
  },
};
