import { Game } from '../../pages/Home'
import Product from '../Product'
import { Container, List, TitleSection } from './styles'

export type Props = {
  title: string
  background: 'gray' | 'black'
  games: Game[]
}

export const formataPreco = (preco = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}

const ProductsList = ({ background, title, games }: Props) => {
  const getGameTags = (game: Game) => {
    const tags = []

    if (game.release_date) {
      tags.push(game.release_date)
    }

    if (game.prices.discount) {
      tags.push(`${game.prices.discount}%`)
    }

    if (game.prices.current) {
      tags.push(formataPreco(game.prices.current))
    }

    return tags
  }

  return (
    <Container background={background}>
      <div className="container">
        <TitleSection>{title}</TitleSection>
        <List>
          {games.map((game) => (
            <Product
              key={game.id}
              image={game.media.thumbnail}
              title={game.name}
              category={game.details.category}
              system={game.details.system}
              description={game.description}
              infos={getGameTags(game)}
            />
          ))}
        </List>
      </div>
    </Container>
  )
}

export default ProductsList
