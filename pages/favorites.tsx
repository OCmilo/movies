import type { NextPage } from 'next'
import Card from '../components/Card'
import { useMovieStore } from '../contexts/Movies'
import { convertDate, imagePath } from '../utils'

const Favorites: NextPage = () => {
  const { movies } = useMovieStore()
  return (
    <>
      <h1>Favorites</h1>
      {movies.length ? (
        movies.map(({ id, title, poster_path, release_date, vote_average }) => (
          <Card
            key={id}
            title={title}
            image={imagePath(poster_path)}
            releaseDate={convertDate(release_date)}
            rating={vote_average}
            handleFavorite={() => {}}
          />
        ))
      ) : (
        <p>No favorites yet</p>
      )}
    </>
  )
}

export { Favorites as default }
