import { RecoilRoot } from 'recoil';
import '../styles/globals.css';

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
        <Component {...pageProps} />
        <Footer />
      </RecoilRoot>
    </ApolloProvider>
  );
}

export default MyApp;
