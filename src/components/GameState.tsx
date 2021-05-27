import { useState } from 'react';

export type Value = 'X' | 'O' | null;

export type BoardState = Value[];

// since a tic-tac-toe board is fix 9 squares, the array length will be set here as 9 and fill-method sets them all with value 'null'.
const createBoardState = () => Array<Value>(9).fill(null);

function calculateWinner(boardState: BoardState) {
  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < winningCombinations.length; i++) {
    const [a, b, c] = winningCombinations[i];
    // to see if 'a' has a value and if this value is the same as 'b' and 'c'
    if (
      boardState[a] &&
      boardState[a] === boardState[b] &&
      boardState[a] === boardState[c]
    ) {
      // if the winning combination is a match, it will be returned, otherwise return null
      return boardState[a];
    }
  }

  return null;
}

export type GameState = {
  history: BoardState[];
  step: number;
};

export function useGameState() {
  const [gameState, setGameState] = useState<GameState>({
    history: [createBoardState()],
    step: 0,
  });

  // to see the state of the game from the history using a step number
  const current = gameState.history[gameState.step];

  // to see who's turn it is; even number means it's X's turn
  const xIsNext = gameState.step % 2 === 0;

  // calculate winner
  const winner = calculateWinner(current);

  // to modify the board

  function handleClick(square: number) {
    // slice-method copies the original array without mutating, starting from the given value to the end, (end not included)
    const history = gameState.history.slice(0, gameState.step + 1);
    const boardState = history[history.length - 1];

    // if there is already a winner or the square has a value, do nothing and return
    if (calculateWinner(boardState) || boardState[square]) {
      return;
    }

    // else, copy the board state, occupy square with the current players symbol and add it to history
    const newBoardState = boardState.slice();
    newBoardState[square] = gameState.step % 2 === 0 ? 'X' : 'O';
    history.push(newBoardState);

    setGameState({
      history: history,
      step: history.length - 1,
    });
  }

  // to be able to jump  into any point within the game history

  function jumpTo(step: number) {
    setGameState({
      history: gameState.history,
      step,
    });
  }

  return {
    gameState,
    current,
    xIsNext,
    winner,
    handleClick,
    jumpTo,
  };
}
