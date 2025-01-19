import { useState } from "react";
import Header from "./components/header";
import Card from "./components/card";
import Winner from "./components/winner";
import Loser from "./components/loser";
import Rules from "./components/rules";

function App() {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [hasWon, setHasWon] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [reset, setReset] = useState(0);
  const [data, setData] = useState([]);
  const [numberOfPokemon, setNumberOfPokemon] = useState(5);
  const [showRules, setShowRules] = useState(true);

  function updateScore() {
    setScore(score + 1);
    if (score + 1 === numberOfPokemon) {
      setHighScore(score + 1);
      localStorage.setItem("highScore", score + 1);
      setHasWon(true);
    }
  }

  function resetGame() {
    if (highScore < score) {
      setHighScore(score);
      localStorage.setItem("highScore", score);
    }
    setScore(0);
    setGameOver(false);
    if (hasWon) {
      setHasWon(false);
      setNumberOfPokemon(numberOfPokemon + 2);
    }
    setData([]);
    setReset(reset + 1);
  }

  function updateHighScore() {
    if (highScore < score) {
      setHighScore(score);
      localStorage.setItem("highScore", score);
    }
  }

  return (
    <div>
      <Header score={score} highScore={highScore}></Header>
      <Card
        updateScore={updateScore}
        updateHighScore={updateHighScore}
        gameOver={gameOver}
        changeGameOver={() => {
          setGameOver(true);
        }}
        reset={reset}
        pokemonData={data}
        setData={setData}
        numberOfPokemon={numberOfPokemon}
      ></Card>
      {showRules ? (
        <Rules
          resetGame={() => {
            setShowRules(false);
          }}
        />
      ) : null}
      {hasWon ? <Winner score={score} resetGame={resetGame} /> : null}
      {gameOver ? <Loser score={score} resetGame={resetGame} /> : null}
    </div>
  );
}
export default App;
