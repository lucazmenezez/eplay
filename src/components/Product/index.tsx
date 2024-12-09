import Tag from '../Tag'
import { Card, Description, Title } from './styles'

const Product = () => (
  <Card>
    <img src="//placehold.it/222x250" />
    <Title>nome do jogo</Title>
    <Tag>Categoria</Tag>
    <Tag>Windows</Tag>
    <Description>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae tempora
      dignissimos repudiandae officia reiciendis, illo molestiae recusandae
      deserunt atque dolor, ut, aliquam illum corporis dolorem beatae adipisci
      necessitatibus doloremque. Necessitatibus.
    </Description>
  </Card>
)

export default Product
