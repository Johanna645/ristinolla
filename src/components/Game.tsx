import React from 'react';
import { useGameState } from './GameState';

type Value = 'X' | 'O' | null;
type BoardState = Value[];
type SquareProps = {
  value: Value;
  onClick: () => void;
};
type BoardProps = {
  board: BoardState;
  onClick: (square: number) => void;
};
type LogProps = {
  history: BoardState[];
  jumpTo: (step: number) => void;
};

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

function Board({ board, onClick }: BoardProps) {
  // create properties for a square in the given index
  const createProps = (square: number): SquareProps => {
    return {
      value: board[square],
      onClick: () => onClick(square),
    };
  };
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col">
            <Square {...createProps(0)} />
            <Square {...createProps(1)} />
            <Square {...createProps(2)} />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <Square {...createProps(3)} />
            <Square {...createProps(4)} />
            <Square {...createProps(5)} />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <Square {...createProps(6)} />
            <Square {...createProps(7)} />
            <Square {...createProps(8)} />
          </div>
        </div>
      </div>
    </div>
  );
}

function Square(props: SquareProps) {
  return (
    <button
      type="button"
      className="btn btn-outline-dark btn-lg"
      onClick={props.onClick}
    >
      {props.value}
    </button>
  );
}

function Log(props: LogProps) {
  return (
    <div>
      <ol>
        {props.history.map((step, move) => {
          const desc = move ? 'Go to move #' + move : 'Start Game';
          return (
            <li key={move}>
              <button
                type="button"
                className="btn btn-outline-dark btn-lg"
                onClick={() => props.jumpTo(move)}
              >
                {desc}
              </button>
            </li>
          );
        })}
      </ol>
    </div>
  );
}

export default Game;
