import type { NextPage } from 'next'
import type { PopularMoviesResponse } from '../api'

import { useState } from 'react'
import { useQuery } from 'react-query'
import Head from 'next/head'
import styled from 'styled-components'
import Card from '../components/Card'
import Title from '../components/Title'
import { getPopularMovies } from '../api'
import useFavoriteMovies from '../hooks/useFavoriteMovies'
import useMovieStore from '../hooks/useMovieStore'
import { convertDate, imagePath } from '../utils'
import MoviesWrapper from '../components/MoviesWrapper'

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
        <Title>Popular Movies</Title>
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
