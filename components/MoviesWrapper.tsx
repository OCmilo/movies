import styled from 'styled-components'

const MoviesWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  justify-items: center;
  grid-gap: 1rem;
  margin-top: 2rem;
`

export { MoviesWrapper as default }
