import { render, screen } from '../../utils/render'
import ImageWithFallback from '../ImageWithFallback'

describe('ImageWithFallback', () => {
  const setup = (src: string) =>
    render(<ImageWithFallback src={src} alt="test" />)

  it('should display image correctly', () => {
    setup(
      'https://upload.wikimedia.org/wikipedia/commons/4/49/A_black_image.jpg'
    )
    const image = screen.getByAltText('test')
    expect(image).toBeInTheDocument()
  })

  it('should not break if the url is invalid', () => {
    setup('https://google.com/image.png')
    const image = screen.getByAltText('test')
    expect(image).toBeInTheDocument()
  })
})
