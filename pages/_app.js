import React, { useReducer } from "react";
import dynamic from "next/dynamic";
import Script from "next/script";
import { ThemeProvider } from "next-themes";
import { RecoilRoot } from "recoil";
import { ApolloProvider } from "@apollo/client";

import "../styles/tailwind.scss";

// SEO
import { DefaultSeo } from "next-seo";
import SEO from "../next-seo.config";

import { client } from "../client";
import { GA_TRACKING_ID } from "../lib/gtag";

const Footer = dynamic(() => import("../components/layout/Footer"));
const ThemeButton = dynamic(() =>
  import("../components/themeButton/ThemeButton")
);

export const AppContext = React.createContext();

const reducer = (state, action) => {
  if (action.type === "LOADING_TOGGLE") {
    return { ...state, isLoading: action.payload };
  }
  return state;
};
const initialStates = { isLoading: false };

function MyApp({ Component, pageProps }) {
  const [state, dispatch] = useReducer(reducer, initialStates);

  const toggleLoading = async (flag) => {
    dispatch({
      type: "LOADING_TOGGLE",
      payload: flag,
    });
  };

  return (
    <>
      {/* Global Site Tag (gtag.js) - Google Analytics */}
      <Script
        strategy="afterInteractive"
        defer
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
            page_path: window.location.pathname,
            });
          `,
        }}
      />
      <ApolloProvider client={client}>
        <RecoilRoot>
          <DefaultSeo {...SEO} />
          <ThemeProvider attribute="class">
            <AppContext.Provider value={{ ...state, toggleLoading }}>
              <Component {...pageProps} />
              <ThemeButton />
              <Footer />
            </AppContext.Provider>
          </ThemeProvider>
        </RecoilRoot>
      </ApolloProvider>
    </>
  );
}

export default MyApp;
