import Head from 'next/head'
import Query from '../contexts/Query'
import Theme from '../contexts/Theme'
import { MovieStore } from '../contexts/Movies'
import Layout from '../components/Layout'

import type { AppProps } from 'next/app'
import ErrorBoundary from '../components/ErrorBoundary'

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
            <ErrorBoundary>
              <Component {...pageProps} />
            </ErrorBoundary>
          </Layout>
        </MovieStore>
      </Theme>
    </Query>
  )
}

export default MyApp
