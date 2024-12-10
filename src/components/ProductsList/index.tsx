import Product from '../Product'
import { Container, List, TitleSection } from './styles'

export type Props = {
  title: string
  background: 'gray' | 'black'
}

const ProductsList = ({ background, title }: Props) => (
  <Container background={background}>
    <div className="container">
      <TitleSection>{title}</TitleSection>
      <List>
        <Product
          image="//placehold.it/222x250"
          title="nome do jogo"
          category="Ação"
          system="Windows"
          description="Teste"
          infos={['-10%', 'R$ 150']}
        />
        <Product
          image="//placehold.it/222x250"
          title="nome do jogo"
          category="Ação"
          system="Windows"
          description="Teste"
          infos={['-10%', 'R$ 150']}
        />
        <Product
          image="//placehold.it/222x250"
          title="nome do jogo"
          category="Ação"
          system="Windows"
          description="Teste"
          infos={['-10%', 'R$ 150']}
        />
        <Product
          image="//placehold.it/222x250"
          title="nome do jogo"
          category="Ação"
          system="Windows"
          description="Teste"
          infos={['-10%', 'R$ 150']}
        />
      </List>
    </div>
  </Container>
)

export default ProductsList
