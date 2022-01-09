import { RecoilRoot } from 'recoil'
import '../styles/globals.css'

// SEO
import { DefaultSeo } from 'next-seo'
import SEO from '../next-seo.config'

function MyApp({ Component, pageProps }) {
    return (
        <RecoilRoot>
            <DefaultSeo {...SEO} />
            <Component {...pageProps} />
        </RecoilRoot>
    )
}

export default MyApp
