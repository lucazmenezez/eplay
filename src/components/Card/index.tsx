import { Container } from './styles'

export type Props = {
  children: JSX.Element
  title: string
}

const Card = ({ children, title }: Props) => (
  <Container>
    <h2>{title}</h2>
    {children}
  </Container>
)

export default Card
