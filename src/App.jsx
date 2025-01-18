import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import background from './assets/background.jpg'
import Header from './components/header'  // changed from Header to header
import Card from './components/card'
// import Winner from './components/winner'
// import Loser from './components/loser'

function App() {
  const [score,setScore] = useState(0);
  const [highScore,setHighScore] = useState(0);
  const [hasWon,setHasWon] = useState(false);
  const [gameOver,setGameOver] = useState(false);
  const [reset,setReset] = useState(0);
  const [data,setData] = useState([]);
  const [numberOfPokemon,setNumberOfPokemon] = useState(5);

  function updateScore(){
    setScore(score+1);
    if(score+1 === numberOfPokemon){
      setHighScore(score+1);
      localStorage.setItem('highScore',score+1);
      setHasWon(true);
    }
  }

  function resetGame(){
    if(highScore<score){
      setHighScore(score);
      localStorage.setItem('highScore',score);
    }
    setScore(0);
    if(hasWon){
      setHasWon(false);
      setNumberOfPokemon(numberOfPokemon+2);
      setGameOver(false);
      setData([]);
      setReset(reset+1);
    }
  }

  function updateHighScore(){
    if(highScore<score){
      setHighScore(score);
      localStorage.setItem('highScore',score);
    }
  }

  return (
    <div className='m-0 p-0 bg-cover bg-center'
      style={{ 
        backgroundImage: `url(${background})`,
        minHeight: '100vh',
        minWidth: '100vw',
        backgroundSize: 'cover'
      }}
    >
      <Header score={score} highScore={highScore}></Header>
      <Card 
      updateScore={updateScore} 
      updateHighScore={updateHighScore} 
      gameOver={gameOver} 
      changeGameOver={()=>{setGameOver(true)}}
      reset={reset} 
      pokemonData={data} 
      setData={setData} 
      numberOfPokemon={numberOfPokemon}>
      </Card>
      {hasWon ? <Winner score={score} resetGame={resetGame}/> : null}
      {gameOver ? <Loser score={score} resetGame={resetGame}/> : null}
    </div>
  )
} 
export default App
