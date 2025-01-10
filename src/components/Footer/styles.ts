import styled from 'styled-components'
import { colors } from '../../styles'

import { HashLink } from 'react-router-hash-link'

export const Container = styled.footer`
  padding: 32px 0;
  background-color: ${colors.gray};
  font-size: 14px;
  margin-top: 40px;
`

export const SectionTitle = styled.h4`
  font-size: 16px;
  font-weight: bold;
  color: ${colors.white};
`

export const Links = styled.ul`
  display: flex;
  margin-top: 16px;
`

export const Link = styled(HashLink)`
  color: ${colors.lightGray};
  text-decoration: none;
  margin-right: 8px;
`

export const FooterSection = styled.footer`
  margin-bottom: 64px;
`
