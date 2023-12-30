import "@/styles/globals.css";
import type { AppProps } from "next/app";
import {
  logAnalyticsEvent,
  traceNames,
  startTrace,
  stopTrace,
} from "@/analytics";
import { getPageTitle } from "@/commons/constants";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  startTrace(traceNames.APP_LOAD);

  logAnalyticsEvent("screen_view", {
    firebase_screen: getPageTitle(router.asPath),
  });

  stopTrace(traceNames.APP_LOAD);

  return <Component {...pageProps} />;
}
