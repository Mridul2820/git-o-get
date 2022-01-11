import { RecoilRoot } from 'recoil'
import '../styles/globals.css'

// SEO
import { DefaultSeo } from 'next-seo'
import SEO from '../next-seo.config'

// apollo
import { ApolloProvider } from '@apollo/client'
import { client } from '../client'

import Navbar from '../components/nav/Navbar'

function MyApp({ Component, pageProps }) {
    return (
        <ApolloProvider client={client}>
            <RecoilRoot>
                <DefaultSeo {...SEO} />
                <Navbar />
                <Component {...pageProps} />
            </RecoilRoot>
        </ApolloProvider>
    )
}

export default MyApp
