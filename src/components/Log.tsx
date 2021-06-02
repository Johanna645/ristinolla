import React from 'react';
import styled from 'styled-components';
import { BoardState } from './GameState';

type LogProps = {
  history: BoardState[];
  jumpTo: (step: number) => void;
};

const Button = styled.button`
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: 20px;
  background-color: rgb(203, 190, 221);
  height: 4vh;
  width: 15vh;
  margin-bottom: 1vh;
  border-radius: 8px;
`;

export function Log(props: LogProps) {
  return (
    <div>
      <ol>
        {props.history.map((step, move) => {
          const desc = move ? 'Go to move #' + move : 'Start Game';
          return (
            <li key={move}>
              <Button onClick={() => props.jumpTo(move)}>{desc}</Button>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
