import Product from '../Product'

import { Game } from '../../pages/Home'
import { parseToBrl } from '../../utils'

import * as S from './styles'
import Loader from '../Loader'

export type Props = {
  title: string
  background: 'gray' | 'black'
  games?: Game[]
  id?: string
  isLoading: boolean
}

const ProductsList = ({ background, title, games, id, isLoading }: Props) => {
  const getGameTags = (game: Game) => {
    const tags = []

    if (game.release_date) {
      tags.push(game.release_date)
    }

    if (game.prices.discount) {
      tags.push(`${game.prices.discount}%`)
    }

    if (game.prices.current) {
      tags.push(parseToBrl(game.prices.current))
    }

    return tags
  }

  if (isLoading) {
    return <Loader />
  }

  return (
    <S.Container background={background} id={id}>
      <div className="container">
        <S.TitleSection>{title}</S.TitleSection>
        <S.List>
          {games &&
            games.map((game) => (
              <li key={game.id}>
                <Product
                  id={game.id}
                  image={game.media.thumbnail}
                  title={game.name}
                  category={game.details.category}
                  system={game.details.system}
                  description={game.description}
                  infos={getGameTags(game)}
                />
              </li>
            ))}
        </S.List>
      </div>
    </S.Container>
  )
}

export default ProductsList
