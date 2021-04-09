import {createContainer} from "unstated-next"
import {useState, useEffect} from 'react';


const GameResultsContext = ()=>{
  const [dados, setDados] = useState([]);
  const [numeroRodada, setNumeroRodada] = useState(1);
  const [leaderBoardData, setleaderBoardData] = useState([]);

  const IncrementaRodada = ()=>{
    setNumeroRodada(numeroRodada +1);
    if(numeroRodada >= 38){
      alert("O campeonato so tem 38 rodadas")
      setNumeroRodada(38)
    }
  }
  const DecrementaRodada = ()=>{
    setNumeroRodada(numeroRodada -1);
    if(numeroRodada <=1){
      setNumeroRodada(1)
    }
  }

  const getLeaderBoardData = async () =>{
    const response = await fetch(`https://desafio-3-back-cubos-academy.herokuapp.com/classificacao`);
    const data = await response.json();
    console.log(data);
    setleaderBoardData(data.dados);
  }

  const getData = async ()=>{
    const response = await fetch(`https://desafio-3-back-cubos-academy.herokuapp.com/jogos/${numeroRodada}`);
    const data = await response.json();
    console.log(data);
    setDados(data.dados);
  }
  useEffect(()=>{
    getLeaderBoardData();
  },[])
  useEffect(() => {
     getData()
  }, [numeroRodada])
 
 

  return {dados, setDados, IncrementaRodada,DecrementaRodada,numeroRodada,leaderBoardData};
}

export const GameResultsContainer = createContainer(GameResultsContext);
