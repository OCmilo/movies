import styled from 'styled-components'
import Head from 'next/head'
import { useState } from 'react'
import { useQuery } from 'react-query'
import Card from '../components/Card'
import { getPopularMovies } from '../api'
import { convertDate, imagePath } from '../utils'
import useFavoriteMovies from '../hooks/useFavoriteMovies'
import useMovieStore from '../hooks/useMovieStore'

import type { NextPage } from 'next'
import type { PopularMoviesResponse } from '../api'

const MoviesWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  justify-items: center;
  grid-gap: 1rem;
  margin-top: 2rem;
`

const Title = styled.h1`
  margin-left: 1.5rem;
  text-align: center;

  @media ${({ theme }) => theme.devices.tablet} {
    text-align: left;
  }
`

const Home: NextPage = () => {
  // TODO pagination
  const [page, setPage] = useState(1)
  const { movies } = useMovieStore()
  const { handle } = useFavoriteMovies()
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
        <>
          <Title>Popular</Title>
          <MoviesWrapper>
            {data.results.map(
              ({ id, title, poster_path, release_date, vote_average }) => (
                <Card
                  key={id}
                  title={title}
                  image={imagePath(poster_path)}
                  releaseDate={convertDate(release_date)}
                  rating={vote_average}
                  isFavorite={movies.some((movie) => movie.id === id)}
                  handleFavorite={() => handle(id, data.results)}
                />
              )
            )}
          </MoviesWrapper>
        </>
      )}
    </>
  )
}

export { Home as default }
