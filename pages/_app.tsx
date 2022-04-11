import Head from 'next/head'
import Query from '../contexts/Query'
import Theme from '../contexts/Theme'
import { MovieStore } from '../contexts/Movies'
import Layout from '../components/Layout'

import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Query>
      <Theme>
        <MovieStore>
          <Head>
            <meta
              name="viewport"
              content="initial-scale=1.0, width=device-width"
            />
          </Head>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </MovieStore>
      </Theme>
    </Query>
  )
}

export default MyApp
