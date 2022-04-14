import { render, screen } from '../../utils/render'
import Card from '../Card'
import moviesFromApi from '../../mocks/movies.json'
import { imagePath } from '../../utils'

describe('Card', () => {
  const movie = moviesFromApi.results[0]
  const { id, title, release_date, poster_path, vote_average } = movie

  it('should star and unstar a movie', () => {
    const { rerender } = render(
      <Card
        title={title}
        image={imagePath(poster_path)}
        releaseDate={release_date}
        rating={vote_average}
        isFavorite={false}
        handleFavorite={() => jest.fn()}
      />
    )

    expect(screen.getByText(title)).toBeInTheDocument()
    expect(screen.getByText(release_date, { exact: false })).toBeInTheDocument()
    expect(
      screen.getByText(`${vote_average}`, { exact: false })
    ).toBeInTheDocument()
    expect(screen.getByRole('button')).toHaveTextContent('Star')

    rerender(
      <Card
        title={title}
        image={imagePath(poster_path)}
        releaseDate={release_date}
        rating={vote_average}
        isFavorite={true}
        handleFavorite={() => jest.fn()}
      />
    )

    expect(screen.getByRole('button')).toHaveTextContent('Unstar')
  })
})
