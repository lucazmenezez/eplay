import styled from 'styled-components'
import { cores } from '../../styles'
import { TagContainer } from '../Tag/styles'

export const Card = styled.div`
  background-color: ${cores.cinza};
  padding: 8px;
  border-radius: 8px;

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
