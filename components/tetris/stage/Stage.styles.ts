import styled from 'styled-components';
import { STAGE_WIDTH, STAGE_HEIGHT } from '../../tetris/setup';

export const StyledStage = styled.div`
  display: grid;
  grid-template-columns: repeat(${STAGE_WIDTH}, 1fr);
  grid-template-rows: repeat(${STAGE_HEIGHT}, 1fr);
  grid-gap: 1px;
  width: 100vw;
  max-width: 30rem;
  background: #222;
  user-select: none;
`;