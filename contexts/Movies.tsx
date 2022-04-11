import React, { createContext, useContext, useReducer } from 'react'
import cartReducer, {
  initialState,
  addAction,
  removeAction,
} from '../reducers/movies'

import type { Movie } from '../api/types'

type MoviesContextType = {
  cart: Movie[]
  add: (movie: Movie) => void
  remove: (id: number) => void
}

const CartContext = createContext<MoviesContextType>({
  cart: initialState,
  add: () => {
    console.warn('add not set')
  },
  remove: () => {
    console.warn('remove not set')
  },
})

type MoviesStoreProps = {
  children: React.ReactNode
}

const MoviesStore: React.FC<MoviesStoreProps> = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, initialState)

  const add = (movie: Movie) => dispatch(addAction(movie))
  const remove = (id: number) => dispatch(removeAction(id))

  return (
    <CartContext.Provider value={{ cart, add, remove }}>
      {children}
    </CartContext.Provider>
  )
}

const useCart = () => useContext(CartContext)

export { useCart, MoviesStore }
