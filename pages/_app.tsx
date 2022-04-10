import type { AppProps } from 'next/app'
import Head from 'next/head'
import Query from '../contexts/Query'
import Theme from '../contexts/Theme'
import Layout from '../components/Layout'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Query>
        <Theme>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </Theme>
      </Query>
    </>
  )
}

export default MyApp
