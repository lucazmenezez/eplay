import Game from '../../models/Game'
import Product from '../Product'
import { Container, List, TitleSection } from './styles'

export type Props = {
  title: string
  background: 'gray' | 'black'
  games: Game[]
}

const ProductsList = ({ background, title, games }: Props) => (
  <Container background={background}>
    <div className="container">
      <TitleSection>{title}</TitleSection>
      <List>
        {games.map((game) => (
          <Product
            key={game.id}
            image={game.image}
            title={game.title}
            category={game.category}
            system={game.system}
            description={game.description}
            infos={game.infos}
          />
        ))}
      </List>
    </div>
  </Container>
)

export default ProductsList
