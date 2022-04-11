import Header from './Header'
import Footer from './Footer'
import styled from 'styled-components'

const Main = styled.main`
  flex: 1;
  padding: 1rem 3rem;
`

type LayoutProps = {
  children: React.ReactNode
}
const Layout: React.FC<LayoutProps> = ({ children }) => (
  <>
    <Header />
    <Main>{children}</Main>
    <Footer />
  </>
)

export { Layout as default }
