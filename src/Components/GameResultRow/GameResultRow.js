import React from 'react'
import './GameResultRow.css'


export default function GameResultRow({time_casa,time_visitante,gols_casa,gols_visitante}) {
  return (
    <>
      <td className="game-results-row-team-names time-casa">{time_casa}</td>
      <td className="gols">{gols_casa}</td>
      <td className="versus">x</td>
      <td className="gols">{gols_visitante}</td>
      <td className="game-results-row-team-names time-visitante">{time_visitante}</td>
   </>
  )
}
