import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { cores } from '../../styles'
import { TagContainer } from '../Tag/styles'

export const Card = styled(Link)`
  background-color: ${cores.cinza};
  padding: 8px;
  border-radius: 8px;
  position: relative;
  text-decoration: none;
  color: ${cores.branco};
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
  color: ${cores.branco};
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
