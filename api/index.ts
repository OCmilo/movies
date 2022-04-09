const API_BASE = 'https://api.themoviedb.org/3/'
const API_KEY = process.env.MOVIES_API_KEY
if (!API_KEY) {
  throw new Error('MOVIES_API_KEY is not defined')
}

const buildRequest = (url: string): URL => {
  const uri = new URL(url, API_BASE)
  uri.searchParams.append('api_key', API_KEY)

  return uri
}

const getPopularMovies = () => {
  const query = buildRequest('movie/popular').toString()
  return fetch(query)
    .then((res) => res.json())
    .then((json) => json.results)
}

export { getPopularMovies }
