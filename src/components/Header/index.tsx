import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'

import { open } from '../../store/reducers/cart'
import { RootReducer } from '../../store'

import logo from '../../assets/images/logo.svg'
import carrinho from '../../assets/images/carrinho.svg'

import {
  CartButton,
  Hamburguer,
  HeaderBar,
  HeaderRow,
  LinkItem,
  Links,
  NavMobile
} from './styles'

const Header = () => {
  const { items } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const openCart = () => {
    dispatch(open())
  }

  return (
    <HeaderBar>
      <HeaderRow>
        <div>
          <Hamburguer onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <span />
            <span />
            <span />
          </Hamburguer>
          <Link to="/">
            <img src={logo} alt="EPLAY" />
          </Link>
          <nav>
            <Links>
              <LinkItem>
                <Link
                  title="Clique aqui para acessar a página de Categorias"
                  to="/categories"
                >
                  Categorias
                </Link>
              </LinkItem>
              <LinkItem>
                <HashLink
                  to="/#coming-soon"
                  title="Clique aqui para acessar a página de Em Breve"
                >
                  Em Breve
                </HashLink>
              </LinkItem>
              <LinkItem>
                <HashLink
                  to="/#on-sale"
                  title="Clique aqui para acessar a página de Promoções"
                >
                  Promoções
                </HashLink>
              </LinkItem>
            </Links>
          </nav>
        </div>
        <CartButton onClick={openCart}>
          {items.length}
          <span> - produtos</span>
          <img src={carrinho} alt="Carrinho de compras" />
        </CartButton>
      </HeaderRow>
      <NavMobile className={isMenuOpen ? 'is-open' : ''}>
        <Links>
          <LinkItem>
            <Link
              title="Clique aqui para acessar a página de Categorias"
              to="/categories"
              onClick={() => setIsMenuOpen(false)}
            >
              Categorias
            </Link>
          </LinkItem>
          <LinkItem>
            <HashLink
              to="/#coming-soon"
              title="Clique aqui para acessar a página de Em Breve"
              onClick={() => setIsMenuOpen(false)}
            >
              Em Breve
            </HashLink>
          </LinkItem>
          <LinkItem>
            <HashLink
              to="/#on-sale"
              title="Clique aqui para acessar a página de Promoções"
              onClick={() => setIsMenuOpen(false)}
            >
              Promoções
            </HashLink>
          </LinkItem>
        </Links>
      </NavMobile>
    </HeaderBar>
  )
}

export default Header
