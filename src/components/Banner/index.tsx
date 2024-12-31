import { Imagem, Precos, Titulo } from './styles'

import Tag from '../Tag'
import Button from '../Button'
import { formataPreco } from '../ProductsList'

import { useGetFeaturedGameQuery } from '../../services/api'

const Banner = () => {
  const { data: banner, isLoading } = useGetFeaturedGameQuery()

  if (!banner) {
    return <h3>Carregando...</h3>
  }

  return (
    <Imagem style={{ backgroundImage: `url(${banner?.media.cover})` }}>
      <div className="container">
        <Tag size="big">Destaque do Dia</Tag>
        <div>
          <Titulo>{banner?.name}</Titulo>
          <Precos>
            <s>De {formataPreco(banner?.prices.old)}</s> <br />
            por apenas {formataPreco(banner?.prices.current)}
          </Precos>
        </div>
        <Button
          to={`/product/${banner.id}`}
          type="link"
          title="Clique aqui para aproveitar esta oferta"
        >
          Aproveitar
        </Button>
      </div>
    </Imagem>
  )
}

export default Banner
