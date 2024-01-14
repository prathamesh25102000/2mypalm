import { initializeApp } from "firebase/app";
import { getAnalytics, logEvent } from "firebase/analytics";
import { getPerformance, trace } from "firebase/performance";

const firebaseConfig = {
  apiKey: "AIzaSyD5WOmk6Gfu3kV-KVAAMyBaanzGVhYq8K4",
  authDomain: "mypalm-c759b.firebaseapp.com",
  projectId: "mypalm-c759b",
  storageBucket: "mypalm-c759b.appspot.com",
  messagingSenderId: "529234353995",
  appId: "1:529234353995:web:513ae7d8615a69c98c52ce",
  measurementId: "G-H4Q8HTE70V",
};

const app = initializeApp(firebaseConfig);

export const logAnalyticsEvent = (eventName: string, payload: any=null) => {
  if (app && typeof window !== "undefined") {
    let analytics: any = null;
    analytics = app?.name ? getAnalytics(app) : null;
    if (analytics) {
      logEvent(analytics, eventName, payload || null);
    }
  }
};

let activeTraces: any = {};
let performance: any = null;

const getFirebasePerformanceObj = (): boolean => {
  if (!performance && typeof window !== "undefined") {
    performance = getPerformance(app);
  }
  return !!performance;
};

export const startTrace = (traceName: string) => {
  try {
    if (getFirebasePerformanceObj() && !activeTraces[traceName]) {
      const generatedTrace = trace(performance, traceName);
      if (generatedTrace) generatedTrace.start();
      activeTraces[traceName] = generatedTrace;
    }
  } catch (error) {
    console.log("Error", error);
  }
};

export const stopTrace = (traceName: string) => {
  try {
    if (getFirebasePerformanceObj() && activeTraces[traceName]) {
      activeTraces[traceName].stop();
      activeTraces[traceName] = null;
    }
  } catch (error) {
    console.log("Error", error);
  }
};

export const traceNames = {
  APP_LOAD: "appLoad",
};
