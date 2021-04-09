import React from 'react'
import GameResultRow from '../GameResultRow/GameResultRow'
import './RoundResults.css'
import {GameResultsContainer} from '../../Providers/GamesResultsContext';

export default function ResultadoRodadas() {
  const {
    dados,
    numeroRodada, 
    IncrementaRodada,
    DecrementaRodada
  } = GameResultsContainer.useContainer();
  
 
  return (
    <div className="jogos-container">
        <table className="rounds-results-table">
            <thead>
              <tr>
                <th>
                  <button onClick={()=>{DecrementaRodada()}}>
                    <img 
                      src={"https://systemuicons.com/images/icons/arrow_left.svg"}
                      alt="rodada anterior"
                    />
                  </button>
                </th>
                <th colSpan={3}><h2>{`${numeroRodada}ª Rodada`}</h2></th>
                <th>
                  <button onClick={()=>{IncrementaRodada()}}>
                    <img 
                      src={"https://systemuicons.com/images/icons/arrow_right.svg"}
                      alt="próxima rodada"
                    />
                  </button> 
                </th>
              </tr>
            </thead>
            <tbody>            
              {dados.map((gameResults)=><tr><GameResultRow key={dados.id} {...gameResults}/></tr>)}
            </tbody>
        </table>
    </div>
  )
}
