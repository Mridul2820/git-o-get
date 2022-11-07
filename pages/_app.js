import React, { useReducer } from 'react';
import { ThemeProvider } from 'next-themes';
import { RecoilRoot } from 'recoil';
import '../styles/globals.css';
import ThemeButton from '../components/themeButton/ThemeButton';

// SEO
import { DefaultSeo } from 'next-seo';
import SEO from '../next-seo.config';

// apollo
import { ApolloProvider } from '@apollo/client';
import { client } from '../client';

import Footer from '../components/footer/Footer';
export const AppContext = React.createContext();

const reducer = (state, action) => {
  if (action.type === 'LOADING_TOGGLE') {
    return { ...state, isLoading: action.payload };
  }
  return state;
};
const initialStates = { isLoading: false };

function MyApp({ Component, pageProps }) {
  const [state, dispatch] = useReducer(reducer, initialStates);

  const toggleLoading = async (flag) => {
    dispatch({
      type: 'LOADING_TOGGLE',
      payload: flag,
    });
  };

  return (
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
  );
}

export default MyApp;
