import { ThemeProvider, createGlobalStyle } from 'styled-components'
import 'modern-normalize/modern-normalize.css'
import theme from '../config/theme'

type ThemeProps = {
  children: React.ReactNode
}

const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
  }

  body {
    height: 100%;
    font-family: ${theme.font};
    background-color: ${theme.colors.white};
    color: ${theme.colors.black};
    box-sizing: border-box;
  }
  
  #__next {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: space-between;
    min-height: 100vh;
    overflow-y: overlay;
  }
  
  ::selection {
    background-color: ${theme.colors.tertiary};
  }
`

const Theme: React.FC<ThemeProps> = ({ children }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    {children}
  </ThemeProvider>
)

export { Theme as default }
