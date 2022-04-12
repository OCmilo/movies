import Image from 'next/image'
import { MouseEventHandler } from 'react'
import styled from 'styled-components'

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

const InfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Title = styled.h3`
  font-weight: 600;
  margin: 0.8rem 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 18rem;
`

type CardProps = {
  image: string
  title: string
  releaseDate: string
  rating: number
  isFavorite: boolean
  handleFavorite: MouseEventHandler<HTMLButtonElement>
}

const Card: React.FC<CardProps> = ({
  image,
  title,
  releaseDate,
  rating,
  isFavorite,
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
      <Title>{title}</Title>
      <span>Release: {releaseDate}</span>
      <InfoWrapper>
        <span>Rating: {rating}</span>
        <button type="button" onClick={handleFavorite}>
          {isFavorite ? 'Unstar' : 'Star'}
        </button>
      </InfoWrapper>
    </div>
  </CardWrapper>
)

export { Card as default }
