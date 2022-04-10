import Image from 'next/image'
import styled from 'styled-components'
import { useState } from 'react'
import { useQuery } from 'react-query'
import { getPopularMovies } from '../api'

import type { NextPage } from 'next'
import type { PopularMoviesResponse } from '../api'

const imagePath = (path: string) => `https://image.tmdb.org/t/p/w500${path}`

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
      {status === 'loading' && <p>Loading...</p>}
      {status === 'error' && <p>Error: {error.message}</p>}
      {status === 'success' && (
        <MoviesWrapper>
          {data.results.map(({ id, title, poster_path }) => (
            <div key={id}>
              <Image
                src={imagePath(poster_path)}
                alt={title}
                width={300}
                height={450}
                loading="lazy"
              />
              <div>
                <h3>{title}</h3>
              </div>
            </div>
          ))}
        </MoviesWrapper>
      )}
    </>
  )
}

export { Home as default }
