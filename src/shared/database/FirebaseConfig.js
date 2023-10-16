import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

import { CONSTANTS } from "@/constants";
const { AUTH } = CONSTANTS;

export const FIREBASE_CONFIG = {
  apiKey: AUTH.APP_KEY,
  authDomain: AUTH.AUTH_DOMAIN,
  projectId: AUTH.PROJECT_ID,
  storageBucket: AUTH.STORAGE_BUCKET,
  messagingSenderId: AUTH.MESSAGING_SENDER_ID,
  appId: AUTH.APP_ID,
};

const app = initializeApp(FIREBASE_CONFIG);
export const db = getFirestore(app);
