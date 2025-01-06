import styled from 'styled-components'
import { cores } from '../../styles'

type InputGroupProps = {
  maxWidth?: string
}

type RowProps = {
  marginTop?: string
}

type TabButtonProps = {
  isActive: boolean
}

export const Row = styled.div<RowProps>`
  display: flex;
  align-items: flex-end;
  column-gap: 24px;
  margin-top: ${(props) => props.marginTop || '0'};
`

export const InputGroup = styled.div<InputGroupProps>`
  flex: auto;
  max-width: ${(props) => props.maxWidth || 'auto'};

  label {
    font-size: 14px;
    margin-bottom: 8px;
    display: block;
  }

  input,
  select {
    background-color: ${cores.branco};
    border: 1px solid ${cores.branco};
    height: 32px;
    padding: 0 8px;
    width: 100%;
  }

  p {
    font-size: 14px;
    line-height: 22px;
  }
`

export const TabButton = styled.button<TabButtonProps>`
  color: ${cores.branco};
  background-color: ${(props) => (props.isActive ? cores.verde : cores.preto)};
  border: none;
  font-size: 14px;
  font-weight: bold;
  border-radius: 8px;
  height: 32px;
  padding: 0 8px;
  margin-right: 16px;
  cursor: pointer;

  img {
    margin-right: 8px;
  }
`
