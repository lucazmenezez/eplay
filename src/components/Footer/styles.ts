import styled from 'styled-components'
import { cores } from '../../styles'

export const Container = styled.footer`
  padding: 32px 0;
  background-color: ${cores.cinza};
  font-size: 14px;
`

export const SectionTitle = styled.h4`
  font-size: 16px;
  font-weight: bold;
  color: ${cores.branco};
`

export const Links = styled.ul`
  display: flex;
  margin-top: 16px;
`

export const Link = styled.a`
  color: ${cores.cinzaClaro};
  text-decoration: none;
  margin-right: 8px;
`

export const FooterSection = styled.footer`
  margin-bottom: 64px;
`