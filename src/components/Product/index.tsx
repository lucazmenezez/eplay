import Tag from '../Tag'

import { Card, Description, Infos, Title } from './styles'

type Props = {
  image: string
  title: string
  category: string
  system: string
  description: string
  infos: string[]
  id: number
}

const Product = ({
  image,
  title,
  category,
  system,
  description,
  infos,
  id
}: Props) => {
  const getDescription = (descricao: string) => {
    if (descricao.length > 95) {
      return descricao.slice(0, 92) + '...'
    }

    return descricao
  }

  return (
    <Card
      title={`Clique aqui para ver mais detalhes do jogo: ${title}`}
      to={`/product/${id}`}
    >
      <img src={image} alt={title} />
      <Infos>
        {infos.map((info) => (
          <Tag key={info}>{info}</Tag>
        ))}
      </Infos>
      <Title>{title}</Title>
      <Tag>{category}</Tag>
      <Tag>{system}</Tag>
      <Description>{getDescription(description)}</Description>
    </Card>
  )
}

export default Product
