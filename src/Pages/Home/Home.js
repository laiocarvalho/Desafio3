import React from 'react'
import Leaderboard from '../../Components/Leaderboard/Leaderboard'
import RoundResults from '../../Components/RoundsResults/RoundResults'
import './Home.css'
export default function Home() {
  return (
    <div className="home-main-container">
     <div className="home-jogos-container">
        <RoundResults/>
     </div>
     <>
     <Leaderboard/>
     </>
    </div>
  )
}
