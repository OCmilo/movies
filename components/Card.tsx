import Image from 'next/image'
import { MouseEventHandler } from 'react'
import styled from 'styled-components'

type CardProps = {
  image: string
  title: string
  releaseDate: string
  rating: number
  handleFavorite: MouseEventHandler<HTMLButtonElement>
}

const CardWrapper = styled.div`
  padding: 0.5rem;
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid #dddada;
  border-radius: 0.5rem;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);
  margin: 1rem;
  transition: transform 0.2s;
`

const ImageWrapper = styled.div`
  position: relative;
  width: 18rem;
  height: 27rem;
`

const DescriptionWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  overflow: hidden;
`

const Card: React.FC<CardProps> = ({
  image,
  title,
  releaseDate,
  rating,
  handleFavorite,
}) => (
  <CardWrapper>
    <ImageWrapper>
      <Image
        src={image}
        alt={title}
        width={500}
        height={750}
        layout="fill"
        loading="lazy"
        objectFit="cover"
      />
    </ImageWrapper>
    <div>
      <h3>{title}</h3>
      <DescriptionWrapper>
        <p>Rating: {rating}</p>
        <p>{releaseDate}</p>
      </DescriptionWrapper>
      <button type="button" onClick={handleFavorite}>
        Favorite
      </button>
    </div>
  </CardWrapper>
)

export { Card as default }
