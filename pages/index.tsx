import type { NextPage } from 'next'
import type { PopularMoviesResponse } from '../api'

import { useState } from 'react'
import { useQuery } from 'react-query'
import Head from 'next/head'
import Card from '../components/Card'
import Title from '../components/Title'
import { getPopularMovies } from '../api'
import useFavoriteMovies from '../hooks/useFavoriteMovies'
import useMovieStore from '../hooks/useMovieStore'
import { convertDate, imagePath } from '../utils'
import MoviesWrapper from '../components/MoviesWrapper'
import ReactPaginate from 'react-paginate'
import styled from 'styled-components'

const MyPaginate = styled(ReactPaginate).attrs({
  activeClassName: 'active',
})`
  margin: 2rem 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  list-style-type: none;
  padding: 0 5rem;

  li a {
    padding: 0.1rem 1rem;
    border: gray 1px solid;
    cursor: pointer;
  }

  li.previous a,
  li.next a,
  li.break a {
    border-color: transparent;
  }

  li.active a {
    background-color: ${({ theme }) => theme.colors.secondary};
    border-color: transparent;
    color: white;
    min-width: 32px;
  }

  li.disabled a {
    color: grey;
  }

  li.disable,
  li.disabled a {
    cursor: default;
  }
`

const Home: NextPage = () => {
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
          <MyPaginate
            pageCount={500} // Max page valued specified by API documentation
            pageRangeDisplayed={3}
            marginPagesDisplayed={1}
            onPageChange={({ selected }) => setPage(selected + 1)}
            previousLabel="<"
            nextLabel=">"
          />
        </>
      )}
    </>
  )
}

export { Home as default }
