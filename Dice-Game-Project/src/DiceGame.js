import React, { useState } from "react";
import "./Style.css";
import dice1 from "./assets/dice-1.png";
import dice2 from "./assets/dice-2.png";
import dice3 from "./assets/dice-3.png";
import dice4 from "./assets/dice-4.png";
import dice5 from "./assets/dice-5.png";
import dice6 from "./assets/dice-6.png";

const diceImages = [dice1, dice2, dice3, dice4, dice5, dice6];

export default function DiceGame() {
  const [scores, setScores] = useState([0, 0]);
  const [current, setCurrent] = useState(0);
  const [activePlayer, setActivePlayer] = useState(0);
  const [dice, setDice] = useState(null);
  const [playing, setPlaying] = useState(true);

  const switchPlayer = () => {
    setCurrent(0);
    setActivePlayer(prev => (prev === 0 ? 1 : 0));
  };

  const rollDice = () => {
    if (!playing) return;

    const roll = Math.floor(Math.random() * 6) + 1;
    setDice(roll);

    if (roll !== 1) {
      setCurrent(current + roll);
    } else {
      switchPlayer();
    }
  };

  const holdScore = () => {
    if (!playing) return;

    const updatedScores = [...scores];
    updatedScores[activePlayer] += current;

    if (updatedScores[activePlayer] >= 20) {
      setScores(updatedScores);
      setPlaying(false);
    } else {
      setScores(updatedScores);
      switchPlayer();
    }
  };

  const newGame = () => {
    setScores([0, 0]);
    setCurrent(0);
    setActivePlayer(0);
    setDice(null);
    setPlaying(true);
  };

  return (
    <main>
      <section className={`player player--0 ${activePlayer === 0 ? "player--active" : ""} ${!playing && scores[0] >= 20 ? "player--winner" : ""}`}>
        <h2 className="name">Player 1</h2>
        <p className="score">{scores[0]}</p>
        <div className="current">
          <p className="current-label">Current</p>
          <p className="current-score">{activePlayer === 0 ? current : 0}</p>
        </div>
      </section>

      <section className={`player player--1 ${activePlayer === 1 ? "player--active" : ""} ${!playing && scores[1] >= 20 ? "player--winner" : ""}`}>
        <h2 className="name">Player 2</h2>
        <p className="score">{scores[1]}</p>
        <div className="current">
          <p className="current-label">Current</p>
          <p className="current-score">{activePlayer === 1 ? current : 0}</p>
        </div>
      </section>

      {dice && <img src={diceImages[dice - 1]} alt="Dice" className="dice" />}

      <button className="btn btn--new" onClick={newGame}>🔄 New game</button>
      <button className="btn btn--roll" onClick={rollDice}>🎲 Roll dice</button>
      <button className="btn btn--hold" onClick={holdScore}>📥 Hold</button>
    </main>
  );
}
