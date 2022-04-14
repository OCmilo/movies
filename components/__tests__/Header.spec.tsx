import { render, screen } from '../../utils/render'
import { ReactNode } from 'react'
import user from '@testing-library/user-event'
import Header from '../Header'
import routes from '../../config/routes'

// eslint-disable-next-line react/display-name
jest.mock('next/link', () => ({ children }: { children: ReactNode }) => (
  <div>{children}</div>
))

jest.mock('next/router', () => ({
  useRouter() {
    return {
      route: '',
      pathname: '',
      query: '',
      asPath: '',
    }
  },
  push: () => routerPush,
}))

const routerPush = jest.fn()

describe('Header', () => {
  it('should display the header correctly', () => {
    render(<Header />)
    const header = screen.getByText(/movies app/i)

    expect(header).toBeInTheDocument()

    routes.forEach(async (route) => {
      expect(screen.getByText(route.name)).toBeInTheDocument()
      await user.click(screen.getByText(route.name))

      expect(routerPush()).toHaveBeenCalledWith(route.path)
    })
  })
})
