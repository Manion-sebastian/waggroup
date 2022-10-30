import styled from 'styled-components';
import { STAGE_WIDTH, STAGE_HEIGHT } from '../../tetris/setup';

export const StyledStage = styled.div`
  display: grid;
  grid-template-columns: repeat(${STAGE_WIDTH}, 1fr);
  grid-template-rows: repeat(${STAGE_HEIGHT}, 1fr);
  grid-gap: 1px;
  width: 100%;
  background: #222;
  // border: 1px solid #777;
  user-select: none;
`;