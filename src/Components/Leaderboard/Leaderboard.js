import React from 'react'
import './LeaderBoard.css'
import {GameResultsContainer} from '../../Providers/GamesResultsContext'
export default function Leaderboard() {
  
const {leaderBoardData} = GameResultsContainer.useContainer();

  return (
    <div className="leaderboard-container">
        <table>
          <thead>
            <tr>
              <th>
                Posição
                <button className="icon"><img src={"https://systemuicons.com/images/icons/arrow_down.svg"}/></button>
              </th>
              <th>
                Time
                <button className="icon"><img src={"https://systemuicons.com/images/icons/sort.svg"}/></button>
              </th>
              <th>
                <abbr title="Pontos">PTS</abbr>
                <button className="icon"><img src={"https://systemuicons.com/images/icons/sort.svg"}/></button>
              </th>
              <th>
              <abbr title="Empates">E</abbr>
                <button className="icon"><img src={"https://systemuicons.com/images/icons/sort.svg"}/></button>
              </th>
              <th>
              <abbr title="Vitórias">V</abbr>
                <button className="icon"><img src={"https://systemuicons.com/images/icons/sort.svg"}/></button>
              </th>
              <th>
              <abbr title="Derrotas">D</abbr>
                <button className="icon"><img src={"https://systemuicons.com/images/icons/sort.svg"}/></button>
              </th>
              <th>
              <abbr title="Gols Feitos">GF</abbr>
                <button className="icon"><img src={"https://systemuicons.com/images/icons/sort.svg"}/></button>
              </th>
              <th>
              <abbr title="Gols Sofridos">GS</abbr>
                <button className="icon"><img src={"https://systemuicons.com/images/icons/sort.svg"}/></button>
              </th>
              <th>
              <abbr title="Saldo de Gols">SG</abbr>
                <button className="icon"><img src={"https://systemuicons.com/images/icons/sort.svg"}/></button>
              </th>
             
            </tr>
          </thead>
          <tbody>
            {leaderBoardData.map((time,i) =>(
              <tr key={time.nome}>
                <td>{i+1}</td>
                <td>{time.nome}</td>
                <td>{time.pontos}</td>
                <td>{time.empates}</td>
                <td>{time.vitorias}</td>
                <td>{time.derrotas}</td>
                <td>{time.golsFeitos}</td>
                <td>{time.golsSofridos}</td> 
                <td>{time.golsFeitos - time.golsSofridos}</td> 
              </tr>
            ))}
          </tbody>
        </table>
    </div >
  )
}
