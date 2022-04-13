import styled from 'styled-components'

const Title = styled.h1`
  text-align: center;
  margin-left: 2rem;

  @media ${({ theme }) => theme.devices.tablet} {
    text-align: left;
  }
`

export { Title as default }
