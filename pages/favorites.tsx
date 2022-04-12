import type { NextPage } from 'next'
import Card from '../components/Card'
import { convertDate, imagePath } from '../utils'
import styled from 'styled-components'
import useMovieStore from '../hooks/useMovieStore'
import useFavoriteMovies from '../hooks/useFavoriteMovies'
import Title from '../components/Title'
import MoviesWrapper from '../components/MoviesWrapper'

const Favorites: NextPage = () => {
  const { movies } = useMovieStore()
  const { handle } = useFavoriteMovies()

  return (
    <>
      <Title>Favorites</Title>
      {movies.length ? (
        <MoviesWrapper>
          {movies.map(
            ({ id, title, poster_path, release_date, vote_average }) => (
              <Card
                key={id}
                title={title}
                image={imagePath(poster_path)}
                releaseDate={convertDate(release_date)}
                rating={vote_average}
                isFavorite={true}
                handleFavorite={() => handle(id, movies)}
              />
            )
          )}
        </MoviesWrapper>
      ) : (
        <p>No favorites yet</p>
      )}
    </>
  )
}

export { Favorites as default }
