import Link from 'next/link'
import styled from 'styled-components'

const HeaderWrapper = styled.header`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 5rem;
  background-color: ${({ theme }) => theme.colors.primary};

  @media ${({ theme }) => theme.devices.tablet} {
    flex-direction: row;
  }
`

const HeaderTitle = styled.h1`
  font-size: 2rem;
  font-weight: 600;
  color: ${(props) => props.theme.colors.white};
  margin: 0;
`

const Nav = styled.nav`
  display: flex;
  align-items: center;
`

const NavList = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;
`

const NavLink = styled.a`
  margin-left: 2rem;
  font-size: 1.5rem;
  font-weight: 600;
  color: ${(props) => props.theme.colors.white};
  text-decoration: none;
  transition: color 0.2s;
`

const Header: React.FC = () => (
  <HeaderWrapper>
    <HeaderTitle>📽 Movies App</HeaderTitle>
    <Nav>
      <NavList>
        <li>
          <Link href="/" passHref>
            <NavLink>Home</NavLink>
          </Link>
        </li>
        <li>
          <Link href="/favorites" passHref>
            <NavLink>My movies</NavLink>
          </Link>
        </li>
      </NavList>
    </Nav>
  </HeaderWrapper>
)

export { Header as default }
