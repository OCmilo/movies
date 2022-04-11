import React, { createContext, useContext, useReducer } from 'react'
import moviesReducer, {
  initialState,
  addAction,
  removeAction,
} from '../reducers/movies'

import type { Movie } from '../api/types'

type MoviesContextType = {
  movies: Movie[]
  add: (movie: Movie) => void
  remove: (id: number) => void
}

const MoviesContext = createContext<MoviesContextType>({
  movies: initialState,
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

const MovieStore: React.FC<MoviesStoreProps> = ({ children }) => {
  const [movies, dispatch] = useReducer(moviesReducer, initialState)

  const add = (movie: Movie) => dispatch(addAction(movie))
  const remove = (id: number) => dispatch(removeAction(id))

  return (
    <MoviesContext.Provider value={{ movies, add, remove }}>
      {children}
    </MoviesContext.Provider>
  )
}

const useMovieStore = () => useContext(MoviesContext)

export { useMovieStore, MovieStore }
