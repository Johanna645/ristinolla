import React from 'react';
import styled from 'styled-components';

type Value = 'X' | 'O' | null;
type SquareProps = {
  value: Value;
  onClick: () => void;
};

const StyledSquare = styled.button`
  width: 5rem;
  height: 5rem;
  background-color: #faf5a5;
  border: 0.2rem solid #666363;
  // padding: 0.1rem;
  font-size: 3rem;
  font-weight: bold;
`;

export function Square(props: SquareProps) {
  return <StyledSquare onClick={props.onClick}>{props.value}</StyledSquare>;
}
