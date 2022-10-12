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

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <RecoilRoot>
        <DefaultSeo {...SEO} />
        <ThemeProvider attribute="class">
          <Component {...pageProps} />
          <ThemeButton />
          <Footer />
        </ThemeProvider>
      </RecoilRoot>
    </ApolloProvider>
  );
}

export default MyApp;
