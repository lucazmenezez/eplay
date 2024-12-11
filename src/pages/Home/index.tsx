import Banner from '../../components/Banner'
import ProductsList from '../../components/ProductsList'
import Game from '../../models/Game'

import residentEvil from '../../assets/images/resident_evil.png'
import fifa from '../../assets/images/fifa.png'
import diablo from '../../assets/images/diablo.png'
import starWars from '../../assets/images/star_wars.png'
import zelda from '../../assets/images/zelda.png'
import streetFighter from '../../assets/images/street_fighter.png'

const promocoes: Game[] = [
  {
    id: 1,
    image: residentEvil,
    title: 'Resident Evil 4',
    system: 'Windows',
    category: 'Ação',
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror...',
    infos: ['10%', 'R$ 250,00']
  },
  {
    id: 2,
    image: fifa,
    title: 'FIFA 23',
    system: 'PS5',
    category: 'Esportes',
    description:
      'EA SPORTS™ FIFA 23 traz o Jogo de Todo Mundo aos gramados com a tecnologia HyperMotion2...',
    infos: ['50%', 'R$ 99,99']
  },
  {
    id: 3,
    image: residentEvil,
    title: 'Resident Evil 4',
    system: 'Windows',
    category: 'Ação',
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror...',
    infos: ['10%', 'R$ 250,00']
  },
  {
    id: 4,
    image: fifa,
    title: 'FIFA 23',
    system: 'PS5',
    category: 'Esportes',
    description:
      'EA SPORTS™ FIFA 23 traz o Jogo de Todo Mundo aos gramados com a tecnologia HyperMotion2...',
    infos: ['50%', 'R$ 99,99']
  }
]

const emBreve: Game[] = [
  {
    id: 5,
    image: diablo,
    title: 'Diablo 4',
    system: 'Windows',
    category: 'RPG',
    description:
      'Diablo IV é um RPG de ação em desenvolvimento pela Blizzard Entertainment.',
    infos: ['05/04']
  },
  {
    id: 6,
    image: starWars,
    title: 'Star Wars Jedi Survivor',
    system: 'Xbox Series S',
    category: 'Aventura',
    description:
      'Star Wars Jedi: Survivor é um próximo jogo de ação e aventura desenvolvido pela Respawn...',
    infos: ['05/04']
  },
  {
    id: 7,
    image: streetFighter,
    title: 'Street Fighter 6',
    system: 'PS5',
    category: 'luta',
    description:
      'Street Fighter 6 é um próximo jogo de luta desenvolvido e publicado pela Capcom.',
    infos: ['08/09']
  },
  {
    id: 8,
    image: zelda,
    title: 'The Legend of Zelda',
    system: 'Windows',
    category: 'RPG',
    description:
      'Uma aventura épica pela terra e pelos céus de Hyrule aguarda em The Legend of Zelda™...',
    infos: ['06/08']
  }
]

const Home = () => (
  <>
    <Banner />
    <ProductsList games={promocoes} title="Promoções" background="gray" />
    <ProductsList games={emBreve} title="Em Breve" background="black" />
  </>
)

export default Home
