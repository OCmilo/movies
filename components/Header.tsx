import Link from 'next/link'
import { useRouter } from 'next/router'
import styled from 'styled-components'
import routes from '../config/routes'

const HeaderWrapper = styled.header`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 3rem;
  background-color: ${({ theme }) => theme.colors.primary};

  @media ${({ theme }) => theme.devices.tablet} {
    flex-direction: row;
    padding: 1rem 5rem;
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
  justify-content: center;
  gap: 1rem;
  list-style: none;
  margin: 0;
  padding: 0;
  
  @media ${({ theme }) => theme.devices.mobileM} {
    gap: 2rem;
`

type NavLinkProps = {
  children: React.ReactNode
  isActive: Boolean
}

const NavLink = styled.a<NavLinkProps>`
  font-size: 1.5rem;
  font-weight: 600;
  color: ${(props) => props.theme.colors.white};
  text-decoration: none;
  transition: color 0.2s;

  ${({ isActive, theme }) =>
    isActive &&
    `
    color: ${theme.colors.black};
    font-style: italic;
  `}
`

const Header: React.FC = () => {
  const { pathname } = useRouter()

  return (
    <HeaderWrapper>
      <HeaderTitle>📽 Movies App</HeaderTitle>
      <Nav>
        <NavList>
          {routes.map(({ name, path }) => (
            <li key={name}>
              <Link href={path} passHref>
                <NavLink isActive={pathname === path}>{name}</NavLink>
              </Link>
            </li>
          ))}
        </NavList>
      </Nav>
    </HeaderWrapper>
  )
}

export { Header as default }
