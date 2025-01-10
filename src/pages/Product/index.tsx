import { useParams } from 'react-router-dom'

import Hero from '../../components/Hero'
import Section from '../../components/Section'
import Gallery from '../../components/Gallery'

import { useGetGameQuery } from '../../services/api'

const Product = () => {
  const { id } = useParams()

  const { data: games } = useGetGameQuery(id!)

  if (!games) {
    return <h3>Carregando...</h3>
  }

  return (
    <>
      <Hero game={games} />
      <Section title="Sobre o Jogo" background="black">
        <p>{games.description}</p>
      </Section>
      <Section title="Mais Detalhes" background="gray">
        <p>
          <b>Plataforma:</b> {games.details.system} <br />
          <b>Desenvolvedor:</b> {games.details.developer} <br />
          <b>Editora:</b> {games.details.publisher} <br />
          <b>Idiomas:</b> O jogo oferece suporte a diversos idiomas, incluindo{' '}
          {games.details.languages.join(', ')}
        </p>
      </Section>
      <Gallery
        defaultCover={games.media.cover}
        name={games.name}
        items={games.media.gallery}
      />
    </>
  )
}

export default Product
