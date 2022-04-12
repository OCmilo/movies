import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useReducer,
} from 'react'
import moviesReducer, {
  initialState,
  addAction,
  removeAction,
  setAction,
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
MoviesContext.displayName = 'MoviesContext'

const MOVIES_STORAGE_KEY = 'movies'

type MoviesStoreProps = {
  children: React.ReactNode
}

const MovieStore: React.FC<MoviesStoreProps> = ({ children }) => {
  const [movies, dispatch] = useReducer(moviesReducer, initialState)

  const add = useCallback(
    (movie: Movie) => dispatch(addAction(movie)),
    [dispatch]
  )
  const remove = useCallback(
    (id: number) => dispatch(removeAction(id)),
    [dispatch]
  )

  useEffect(() => {
    const storedMovies = localStorage.getItem(MOVIES_STORAGE_KEY)
    if (storedMovies) {
      const parsedMovies: Movie[] = JSON.parse(storedMovies)
      dispatch(setAction(parsedMovies))
    }
  }, [])

  useEffect(() => {
    if (movies.length) {
      localStorage.setItem(MOVIES_STORAGE_KEY, JSON.stringify(movies))
    }
  }, [movies])

  return (
    <MoviesContext.Provider value={{ movies, add, remove }}>
      {children}
    </MoviesContext.Provider>
  )
}

export { MoviesContext, MovieStore }
