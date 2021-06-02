import React from 'react';
import styled from 'styled-components';
import { Log } from './Log';
import { Board } from './Board';
import { useGameState } from './GameState';

const StyledHeader = styled.header`
  background-color: rgb(71, 68, 75);
  min-height: 20vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 50px;
  font-weight: bold;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  color: white;
`;

const Row = styled.div`
  margin-left: 20vh;
  margin-top: 20vh;
  display: flex;
  flex-direction: row;
  gap: 20px;
`;

const Column = styled.div`
  margin-left: 20vh;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Text = styled.div`
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: 34px;
`;

function Game() {
  const { gameState, current, xIsNext, jumpTo, winner, handleClick } =
    useGameState();

  return (
    <div>
      <StyledHeader>Play Tic-Tac-Toe</StyledHeader>

      <Row>
        <Column>
          <Text>
            {winner
              ? `${winner} has won the game!`
              : `Next player: ${xIsNext ? 'X' : 'O'}`}
          </Text>
          <Board board={current} onClick={handleClick} />
        </Column>
        <Column>
          <Log history={gameState.history} jumpTo={jumpTo} />
        </Column>
      </Row>
    </div>
  );
}

export default Game;
