import React from 'react';
import { BoardState } from './GameState';

type LogProps = {
  history: BoardState[];
  jumpTo: (step: number) => void;
};

export function Log(props: LogProps) {
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
