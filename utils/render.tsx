import React, { FC, ReactElement } from 'react'
import { render, RenderOptions } from '@testing-library/react'
import Theme from '../contexts/Theme'
import { MovieStore } from '../contexts/Movies'

type AllTheProvidersProps = {
  children: ReactElement
}

const AllTheProviders: FC<AllTheProvidersProps> = ({ children }) => {
  return (
    <Theme>
      <MovieStore>{children}</MovieStore>
    </Theme>
  )
}

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) => render(ui, { wrapper: AllTheProviders, ...options })

export * from '@testing-library/react'
export { customRender as render }
