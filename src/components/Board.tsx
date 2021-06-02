import React from 'react';

import { Square } from './Square';

type Value = 'X' | 'O' | null;
type BoardState = Value[];
type BoardProps = {
  board: BoardState;
  onClick: (square: number) => void;
};
type SquareProps = {
  value: Value;
  onClick: () => void;
};

export function Board({ board, onClick }: BoardProps) {
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
