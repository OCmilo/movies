import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient()

type QueryProps = React.PropsWithChildren<unknown>
const Query: React.FC<QueryProps> = ({ children }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
)

export { Query as default }
