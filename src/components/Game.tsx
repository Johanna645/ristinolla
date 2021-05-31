import React from 'react';
import { Log } from './Log';
import { Board } from './Board';
import { useGameState } from './GameState';

function Game() {
  const { gameState, current, xIsNext, jumpTo, winner, handleClick } =
    useGameState();

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col">
            <div>
              {winner
                ? `${winner} has won the game! To play again clik on "Start Game"`
                : `Next player: ${xIsNext ? 'X' : 'O'}`}
            </div>

            <Board board={current} onClick={handleClick} />
          </div>

          <div className="col">
            <Log history={gameState.history} jumpTo={jumpTo} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Game;
