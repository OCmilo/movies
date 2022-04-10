import { PopularMoviesResponse } from './types'

const API_BASE = 'https://api.themoviedb.org/3/'
const API_KEY = process.env.NEXT_PUBLIC_MOVIES_API_KEY
if (!API_KEY) {
  throw new Error('MOVIES_API_KEY is not defined')
}

const buildRequest = (url: string): URL => {
  const uri = new URL(url, API_BASE)
  uri.searchParams.append('api_key', API_KEY)
  return uri
}

const getPopularMovies = async (
  page: number = 1
): Promise<PopularMoviesResponse> => {
  const query = buildRequest('movie/popular')
  query.searchParams.append('page', String(page))

  const answer = await fetch(query.toString())
  const data: PopularMoviesResponse = await answer.json()

  return data
}

const getConfiguration = async () => {
  const query = buildRequest('configuration').toString()
  const answer = await fetch(query)
  const data = await answer.json()
  return data
}

export { getPopularMovies, getConfiguration }
export type { PopularMoviesResponse }
