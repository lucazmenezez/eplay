import styled from 'styled-components'
import { cores } from '../../styles'

export const Container = styled.div`
  padding: 24px;
  background-color: ${cores.cinza};
  border-radius: 8px;
  margin-bottom: 40px;

  h2,
  h3 {
    font-size: 18px;
    font-weight: bold;
    color: ${cores.branco};
    margin-bottom: 24px;
  }

  .margin-top {
    margin-top: 24px;
  }
`
