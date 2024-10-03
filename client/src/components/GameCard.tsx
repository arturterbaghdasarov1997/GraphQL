import React from 'react'
import { useNavigate } from 'react-router-dom'

interface GameCardProps {
    id: string
    title: string
    platform: string[]
}

const GameCard:React.FC<GameCardProps> = ({id, title, platform,}) => {
  const navigate = useNavigate()

  return (
    <div
      style={{width: '200px', border: '1px, solid, steelblue', borderRadius: '15px', boxShadow: '5px 5px 2px 1px steelblue', cursor: 'pointer'}}
      onClick={() => navigate(`/${id}`)}  
    >
        <h1 style={{color: 'blue'}}>{title}</h1>
        <ul>
            {platform.map((p) => (
                <li key={p} style={{color: 'steelblue'}}>{p}</li>
            ))}
        </ul>
    </div>
  )
}

export default GameCard
