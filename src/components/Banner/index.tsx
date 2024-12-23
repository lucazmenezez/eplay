import { useEffect, useState } from 'react'

import { Game } from '../../pages/Home'
import { Imagem, Precos, Titulo } from './styles'

import bannerImg from '../../assets/images/banner-homem-aranha.png'
import Tag from '../Tag'
import Button from '../Button'
import { formataPreco } from '../ProductsList'

const Banner = () => {
  const [banner, setBanner] = useState<Game>()

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/eplay/destaque')
      .then((res) => res.json())
      .then((res) => setBanner(res))
  }, [])

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
          to="/produto"
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
