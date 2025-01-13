import Tag from '../Tag'
import Button from '../Button'

import { useGetFeaturedGameQuery } from '../../services/api'
import { parseToBrl } from '../../utils'

import * as S from './styles'
import Loader from '../Loader'

const Banner = () => {
  const { data: banner } = useGetFeaturedGameQuery()

  if (!banner) {
    return <Loader />
  }

  return (
    <S.Image style={{ backgroundImage: `url(${banner?.media.cover})` }}>
      <div className="container">
        <Tag size="big">Destaque do Dia</Tag>
        <div>
          <S.Title>{banner?.name}</S.Title>
          <S.Prices>
            <s>De {parseToBrl(banner?.prices.old)}</s> <br />
            por apenas {parseToBrl(banner?.prices.current)}
          </S.Prices>
        </div>
        <Button
          to={`/product/${banner.id}`}
          type="link"
          title="Clique aqui para aproveitar esta oferta"
        >
          Aproveitar
        </Button>
      </div>
    </S.Image>
  )
}

export default Banner
