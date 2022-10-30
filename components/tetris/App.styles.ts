import styled from 'styled-components';

export const StyledTetrisWrapper = styled.div`
  width: 100%;
  height: calc(100vh - 46px);
  max-height
  overflow: hidden;
  outline: none;
`;

export const StyledTetris = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 30rem;
  margin: 0 auto;
  
  .display {
    display: flex;
    justify-content: space-between;
    width: max-content;
  }
`;