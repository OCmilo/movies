import styled from 'styled-components'

const Title = styled.h1`
  margin-left: 1.5rem;
  text-align: center;

  @media ${({ theme }) => theme.devices.tablet} {
    text-align: left;
  }
`

export { Title as default }
