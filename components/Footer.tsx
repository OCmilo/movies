import styled from 'styled-components'

const FooterWrapper = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 5rem;
  background-color: ${({ theme }) => theme.colors.secondary};
  width: 100%;
  color: ${({ theme }) => theme.colors.white};
`

const Footer: React.FC = () => (
  <FooterWrapper>
    <p>
      You can find the source for this project{' '}
      <a href="https://github.com/OCmilo/movies" rel="noopener noreferrer">
        here.
      </a>
    </p>
  </FooterWrapper>
)

export { Footer as default }
