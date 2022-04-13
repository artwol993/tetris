import React from 'react';
import { StyledCell } from './styles/StyledCell';
import { TETROMINOS } from '../terominos';

const Cell = ({ type }) => (
  <StyledCell type={'L'} color={TETROMINOS['L'].color} />
)


export default Cell;