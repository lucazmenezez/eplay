import styled from 'styled-components'
import { colors } from '../../styles'
import { TagContainer } from '../Tag/styles'
import { ButtonContainer } from '../Button/styles'

import close from '../../assets/images/close.png'

export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1;

  &.is-open {
    display: flex;
  }
`

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.7;
`

export const Sidebar = styled.aside`
  z-index: 1;
  background-color: ${colors.gray};
  padding: 40px 16px 0;
  max-width: 360px;
  width: 100%;

  ${ButtonContainer} {
    max-width: 100%;
    width: 100%;
  }

  .empty-text {
    font-size: 14px;
    line-height: 22px;
    color: ${colors.white};
    text-align: center;
  }
`

export const Quantity = styled.p`
  font-size: 16px;
  font-weight: bold;
  color: ${colors.white};
  margin-top: 32px;
  margin-bottom: 16px;
`

export const Prices = styled.p`
  font-size: 14px;
  font-weight: bold;
  color: ${colors.white};
  margin-bottom: 24px;

  span {
    font-size: 12px;
    display: block;
    color: ${colors.lightGray};
  }
`

export const CartItem = styled.li`
  display: flex;
  padding: 8px 0;
  border-bottom: 1px solid ${colors.lightGray};
  position: relative;

  img {
    width: 80px;
    height: 80px;
    object-fit: cover;
    margin-right: 24px;
  }

  h3 {
    font-size: 16px;
    font-weight: bold;
    color: ${colors.white};
  }

  span {
    display: block;
    font-size: 14px;
    font-weight: bold;
    color: ${colors.white};
  }

  ${TagContainer} {
    margin: 8px 8px 16px 0;
  }

  button {
    background-image: url(${close});
    width: 16px;
    height: 16px;
    border: none;
    background-color: transparent;
    position: absolute;
    top: 8px;
    right: 0;
    cursor: pointer;
  }
`
