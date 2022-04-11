import styled from 'styled-components'
import Head from 'next/head'
import { useState } from 'react'
import { useQuery } from 'react-query'
import Card from '../components/Card'
import { getPopularMovies } from '../api'

import type { NextPage } from 'next'
import type { PopularMoviesResponse } from '../api'

const imagePath = (path: string) => `https://image.tmdb.org/t/p/w500${path}`
const convertDate = (date: string) => new Date(date).toLocaleDateString()

const MoviesWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  justify-items: center;
  grid-gap: 1rem;
  margin-top: 2rem;
`

const Home: NextPage = () => {
  const [page, setPage] = useState(1)
  const { data, status, error } = useQuery<PopularMoviesResponse, Error>(
    ['popular-movies', page],
    () => getPopularMovies(page),
    { keepPreviousData: true }
  )

  return (
    <>
      <Head>
        <title>Popular Movies</title>
      </Head>
      {status === 'loading' && <p>Loading...</p>}
      {status === 'error' && <p>Error: {error.message}</p>}
      {status === 'success' && (
        <MoviesWrapper>
          {data.results.map(
            ({ id, title, poster_path, release_date, vote_average }) => (
              <Card
                key={id}
                title={title}
                image={imagePath(poster_path)}
                releaseDate={convertDate(release_date)}
                rating={vote_average}
              />
            )
          )}
        </MoviesWrapper>
      )}
    </>
  )
}

export { Home as default }