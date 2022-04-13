import Image from 'next/image'
import { useState } from 'react'
import fallback from '../public/placeholder.png'

type ImageProps = {
  src: string
  alt: string
  fallBackSrc?: string
}

const OptimizedImageWithFallback: React.FC<ImageProps> = ({
  src,
  alt,
  fallBackSrc = fallback.src,
}) => {
  const [imageError, setImageError] = useState(false)

  return (
    <div
      style={{
        position: 'relative',
      }}
    >
      <Image
        src={imageError ? fallBackSrc : src}
        alt={alt}
        width={500}
        height={750}
        objectFit="cover"
        onError={() => setImageError(true)}
      />
    </div>
  )
}

export { OptimizedImageWithFallback as default }
