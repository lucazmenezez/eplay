import Button from '../Button'
import {
  CartContainer,
  CartItem,
  Overlay,
  Prices,
  Quantity,
  Sidebar
} from './styles'

import image from '../../assets/images/diablo.png'
import Tag from '../Tag'

const Cart = () => (
  <CartContainer>
    <Overlay />
    <Sidebar>
      <ul>
        <CartItem>
          <img src={image} />
          <div>
            <h3>nome do jogo</h3>
            <Tag>RPG</Tag>
            <Tag>PS5</Tag>
            <span>R$ 150,00</span>
          </div>
          <button type="button" />
        </CartItem>
        <CartItem>
          <img src={image} />
          <div>
            <h3>nome do jogo</h3>
            <Tag>RPG</Tag>
            <Tag>PS5</Tag>
            <span>R$ 150,00</span>
          </div>
          <button type="button" />
        </CartItem>
      </ul>
      <Quantity>2 jogo(s) no carrinho</Quantity>
      <Prices>
        Total de R$ 381,80
        <span>em até 6x sem juros</span>
      </Prices>
      <Button type="button" title="Clique aqui para continuar a compra">
        Continuar com a compra
      </Button>
    </Sidebar>
  </CartContainer>
)

export default Cart
