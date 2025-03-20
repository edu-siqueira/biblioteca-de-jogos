import Game from "./components/Game"
import NewGameForm from "./components/NewGameForm"
import useGameCollection from "./hooks/useGameCollection"

export default function App() {
  const {games, addGame, removeGame} = useGameCollection()

  return (
    <div>
      <h1>Biblioteca de Jogos</h1>
      <NewGameForm addGame={addGame}/>
      <div className="games">
        {games.length > 0 ? games.map((game) => (
          <Game 
            key={game.id}
            title={game.title}
            cover={game.cover}
            onRemove={() =>removeGame(game.id)}
          />
        )) : (
        <h2>Parece que não há nada aqui, tente adicionar alguns jogos.</h2>
      )}
      </div>
    </div>
  )
}