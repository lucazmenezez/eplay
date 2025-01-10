import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { colors } from '../../styles'
import { TagContainer } from '../Tag/styles'

export const Card = styled(Link)`
  background-color: ${colors.gray};
  padding: 8px;
  border-radius: 8px;
  position: relative;
  text-decoration: none;
  color: ${colors.white};
  display: block;
  height: 100%;

  img {
    display: block;
    width: 100%;
    height: 250px;
    object-fit: cover;
  }

  ${TagContainer} {
    margin-right: 8px;
  }
`

export const Title = styled.div`
  font-size: 16px;
  font-weight: bold;
  color: ${colors.white};
  margin-top: 16px;
  margin-bottom: 8px;
  display: block;
`

export const Description = styled.div`
  font-size: 14px;
  display: block;
  line-height: 22px;
  margin-top: 16px;
`

export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`
