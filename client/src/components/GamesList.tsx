import React from 'react'
import { IGame } from '../interfaces/game.interface'
import GameCard from './GameCard'

interface GamesListProps {
    games: IGame[] | undefined
}

const GamesList:React.FC<GamesListProps> = ({games}) => {
  return (
    <div style={{display: 'flex', justifyContent: 'space-evenly', gap: '25px', flexWrap: 'wrap', padding: '15px'}}>
        {games?.map((game) => (
            <GameCard 
              key={game.id} 
              id={game.id} 
              title={game.title}
              platform={game.platform}
            />
        ))}
    </div>
  )
}

export default GamesList
