import { useContext } from 'react'
import { MoviesContext } from '../contexts/Movies'

const useMovieStore = () => useContext(MoviesContext)

export { useMovieStore as default }
