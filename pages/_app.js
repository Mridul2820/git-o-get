import { RecoilRoot } from 'recoil'
import {ThemeProvider} from 'next-themes'

import '../styles/globals.css'

// SEO
import { DefaultSeo } from 'next-seo'
import SEO from '../next-seo.config'

// apollo
import { ApolloProvider } from '@apollo/client'
import { client } from '../client'

import Footer from '../components/footer/Footer'

function MyApp({ Component, pageProps }) {
    return (
        <ApolloProvider client={client}>
            <RecoilRoot>
                <DefaultSeo {...SEO} />
                <ThemeProvider attribute="class"> 
                    <Component {...pageProps} />
                </ThemeProvider>
                <Footer />
            </RecoilRoot>
        </ApolloProvider>
    )
}

export default MyApp
