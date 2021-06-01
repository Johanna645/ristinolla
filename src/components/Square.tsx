import React from 'react';
import styled from 'styled-components';

type Value = 'X' | 'O' | null;
type SquareProps = {
  value: Value;
  onClick: () => void;
};

const StyledSquare = styled.button`
  width: 15vh;
  height: 15vh;
  background-color: #faf5a5;
  border: 0.2vh solid #666363;
  padding: 0;
  font-size: 13vh;
  font-weight: bold;
`;

export function Square(props: SquareProps) {
  return <StyledSquare onClick={props.onClick}>{props.value}</StyledSquare>;
}
