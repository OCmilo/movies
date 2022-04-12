import { useCallback } from 'react'
import { Movie } from '../api/types'
import useMovieStore from './useMovieStore'

const useFavoriteMovies = () => {
  const { movies, add, remove } = useMovieStore()

  const handle = useCallback(
    (movieId: number, moviesList: Movie[]) => {
      const handler = (movieId: number, moviesList: Movie[]) => {
        const isMovieInFavorites = movies.some((movie) => movie.id === movieId)
        if (isMovieInFavorites) {
          remove(movieId)
          return
        }

        const movie = moviesList.find((movie) => movie.id === movieId)
        if (movie) {
          add(movie)
        }
      }

      handler(movieId, moviesList)
    },
    [movies, add, remove]
  )

  return { handle }
}

export { useFavoriteMovies as default }
