import styled from 'styled-components'
import { cores } from '../../styles'

export const Items = styled.ul`
  display: flex;
`

export const Item = styled.li`
  margin-right: 16px;

  img {
    height: 150px;
    width: 150px;
    border-radius: 8px;
    border: 2px solid ${cores.branco};
    object-fit: cover;
  }
`
