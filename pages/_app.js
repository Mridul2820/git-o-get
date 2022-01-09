import { RecoilRoot } from 'recoil'
import '../styles/globals.css'

// SEO
import { DefaultSeo } from 'next-seo'
import SEO from '../next-seo.config'

// apollo
import { ApolloProvider } from '@apollo/client'
import { client } from '../client'

function MyApp({ Component, pageProps }) {
    return (
        <ApolloProvider client={client}>
            <RecoilRoot>
                <DefaultSeo {...SEO} />
                <Component {...pageProps} />
            </RecoilRoot>
        </ApolloProvider>
    )
}

export default MyApp
