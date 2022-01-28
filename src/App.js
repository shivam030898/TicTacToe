import React,{useState,useEffect} from 'react';
import SquareComponent from './SquareComponent';

const clearState = ["", "", "", "", "", "", "", "", "", ""];


const App = () => {
  
  const [gameState,updateGameState]=useState(clearState);

  const [isXchance,updateIsXChance]=useState(false);

  const onUserClicked=(index)=>{
    let strings=Array.from(gameState);
    strings[index]=isXchance?"X":"0";
    updateGameState(strings);
    updateIsXChance(!isXchance);
  }
  const clearGame = () => {
    updateGameState(clearState)
}
  useEffect(()=>{
    let winner=checkWinner();
    if(winner){
      alert(`Hooray 💯!!!! ${winner} have won the game`)
    }
  },[gameState])

  const checkWinner=()=>{
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    console.log('Class: App, Function: checkWinner ==', gameState[0], gameState[1], gameState[2]);
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (gameState[a] && gameState[a] === gameState[b] && gameState[a] === gameState[c]) {
            return gameState[a];
        }
    }
    return null;
  }


  return (
  <div className='app-header'>
  <p className='heading-text'>TIC-TAC-TOE</p>
  <div className='row jc-center'>
    <SquareComponent className="b-bottom-right" state={gameState[0]} onClick={() => onUserClicked(0)}/>
    <SquareComponent className="b-bottom-right" state={gameState[1]} onClick={() => onUserClicked(1)}/>
    <SquareComponent className="b-bottom" state={gameState[2]} onClick={() => onUserClicked(2)}/>
  </div>
  <div className='row jc-center'>
    <SquareComponent className="b-bottom-right" state={gameState[3]} onClick={() => onUserClicked(3)}/>
    <SquareComponent className="b-bottom-right"state={gameState[4]} onClick={() => onUserClicked(4)}/>
    <SquareComponent className="b-bottom"state={gameState[5]} onClick={() => onUserClicked(5)}/>
  </div>
  <div className='row jc-center'>
    <SquareComponent className="b-right"state={gameState[6]} onClick={() => onUserClicked(6)}/>
    <SquareComponent className="b-right"state={gameState[7]} onClick={() => onUserClicked(7)}/>
    <SquareComponent state={gameState[8]} onClick={() => onUserClicked(8)} />
  </div>
  <button className='clear-button' onClick={()=>updateGameState(clearState)}>Reset</button>
  <p className='fc-aqua fw-600'>Dont Be A Noob</p>
  </div>
  
  
  
  
  );
  
};

export default App;

