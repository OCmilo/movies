import type { AppProps } from 'next/app'
import Query from '../contexts/Query'
import Theme from '../contexts/Theme'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Query>
      <Theme>
        <Component {...pageProps} />
      </Theme>
    </Query>
  )
}

export default MyApp
