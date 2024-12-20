import bannerImg from '../../assets/images/fundo_hogwarts.png'
import Button from '../Button'
import Tag from '../Tag'
import { Banner, Infos } from './styles'

const Hero = () => (
  <Banner style={{ backgroundImage: `url(${bannerImg})` }}>
    <div className="container">
      <div>
        <Tag>RPG</Tag>
        <Tag>PS5</Tag>
      </div>
      <Infos>
        <h2>Hogwarts Legacy</h2>
        <p>
          <span>De R$ 290,90</span>
          Por R$ 190,90
        </p>
        <Button
          title="Clique aqui para adicionar este produto ao carrinho"
          type="button"
          variant="primary"
        >
          Adicionar ao Carrinho
        </Button>
      </Infos>
    </div>
  </Banner>
)

export default Hero
