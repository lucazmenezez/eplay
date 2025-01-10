import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'
import { TagContainer } from '../Tag/styles'

export const Banner = styled.div`
  display: block;
  height: 480px;
  width: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100%;
  position: relative;
  padding-top: 16px;

  @media (max-width: ${breakpoints.desktop}) {
    background-size: cover;
  }

  &::after {
    content: '';
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: ${colors.black};
    position: absolute;
    opacity: 0.56;
  }

  .container {
    z-index: 1;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
  }

  ${TagContainer} {
    margin-right: 8px;
    letter-spacing: 1px;
  }
`

export const Infos = styled.div`
  background-color: ${colors.black};
  padding: 16px;
  max-width: 290px;
  font-weight: bold;

  h2 {
    font-size: 32px;
  }

  p {
    font-size: 18px;
    margin: 16px 0;

    span {
      text-decoration: line-through;
      display: block;
    }
  }
`
