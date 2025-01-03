import ProductsList from '../../components/ProductsList'

import {
  useGetActionGamesQuery,
  useGetFightGamesQuery,
  useGetRpgGamesQuery,
  useGetSimulationGamesQuery,
  useGetSportsGamesQuery
} from '../../services/api'

const Categories = () => {
  const { data: actionGames } = useGetActionGamesQuery()
  const { data: sportsGames } = useGetSportsGamesQuery()
  const { data: simulationGames } = useGetSimulationGamesQuery()
  const { data: rpgGames } = useGetRpgGamesQuery()
  const { data: fightGames } = useGetFightGamesQuery()

  if (actionGames && sportsGames && simulationGames && rpgGames && fightGames) {
    return (
      <>
        <ProductsList
          games={actionGames}
          title="Ação"
          background="black"
          id="action"
        />
        <ProductsList
          games={sportsGames}
          title="Esportes"
          background="gray"
          id="sports"
        />
        <ProductsList
          games={simulationGames}
          title="Simulação"
          background="black"
          id="simulation"
        />
        <ProductsList games={rpgGames} title="RPG" background="gray" id="rpg" />
        <ProductsList
          games={fightGames}
          title="Luta"
          background="black"
          id="fight"
        />
      </>
    )
  }

  return <h4>Carregando...</h4>
}

export default Categories
