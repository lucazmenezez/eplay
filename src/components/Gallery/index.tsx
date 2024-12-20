import bannerImg from '../../assets/images/banner-homem-aranha.png'
import Section from '../Section'
import { Action, Item, Items, Modal, ModalContent } from './styles'

import play from '../../assets/images/play.png'
import zoom from '../../assets/images/zoom.png'
import close from '../../assets/images/close.png'
import hogwarts from '../../assets/images/fundo_hogwarts.png'
import resident from '../../assets/images/resident_evil.png'

type GalleryItem = {
  type: 'image' | 'video'
  url: string
}

const mock: GalleryItem[] = [
  {
    type: 'image',
    url: resident
  },
  {
    type: 'image',
    url: hogwarts
  },
  {
    type: 'video',
    url: 'https://www.youtube.com/embed/QdBZY2fkU-0?si=o6OaSOhu3BYkMn3M'
  }
]

type Props = {
  defaultCover: string
  name: string
}

const Gallery = ({ defaultCover, name }: Props) => {
  const getMediaCover = (item: GalleryItem) => {
    if (item.type === 'image') return item.url
    return defaultCover
  }

  const getMediaIcon = (item: GalleryItem) => {
    if (item.type === 'image') return zoom
    return play
  }

  return (
    <>
      <Section title="Galeria" background="black">
        <Items>
          {mock.map((media, index) => (
            <Item key={media.url}>
              <img
                src={getMediaCover(media)}
                alt={`Mídia ${index + 1} de ${name}`}
              />
              <Action>
                <img src={getMediaIcon(media)} alt="Ícones de mídias" />
              </Action>
            </Item>
          ))}
        </Items>
      </Section>
      <Modal>
        <ModalContent className="container">
          <header>
            <h4>{name}</h4>
            <img src={close} alt="ícone de fechar" />
          </header>
          <img src={hogwarts} alt="" />
        </ModalContent>
        <div className="overlay"></div>
      </Modal>
    </>
  )
}

export default Gallery
