type Movie = {
  id: number
  title: string
  overview: string
  poster_path: string
  release_date: string
  vote_average: number
  vote_count: number
  adult: boolean
  genre_ids: number[]
}

type PopularMoviesResponse = {
  page: number
  results: Movie[]
  total_pages: number
  total_results: number
}

export type { Movie, PopularMoviesResponse }
