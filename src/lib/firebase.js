import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";
import {
  getDatabase,
  onValue,
  orderByChild,
  query,
  ref,
} from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCJ70kalyLpcLqrUEONR1leIGzMVHmmlfc",
  authDomain: "quatcl-2552a.firebaseapp.com",
  databaseURL: "https://quatcl-2552a-default-rtdb.firebaseio.com",
  projectId: "quatcl-2552a",
  storageBucket: "quatcl-2552a.firebasestorage.app",
  messagingSenderId: "528327145000",
  appId: "1:528327145000:web:041d0bac5245a101e3e71d",
  measurementId: "G-LH7GNE3VLQ",
};

const app = initializeApp(firebaseConfig);
export const realtimeDb = getDatabase(app);
export let analytics = null;

if (typeof window !== "undefined") {
  isSupported()
    .then((supported) => {
      if (supported) {
        analytics = getAnalytics(app);
      }
    })
    .catch(() => {
      analytics = null;
    });
}

export const subscribeToComments = (callback) => {
  const commentsQuery = query(
    ref(realtimeDb, "gallery-comments"),
    orderByChild("timestamp"),
  );

  return onValue(commentsQuery, (snapshot) => {
    const comments = Object.entries(snapshot.val() ?? {})
      .map(([id, value]) => ({
        id,
        ...value,
      }))
      .sort(
        (first, second) => (second.timestamp ?? 0) - (first.timestamp ?? 0),
      );
    callback(comments);
  });
};
