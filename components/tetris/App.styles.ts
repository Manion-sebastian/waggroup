import styled from 'styled-components';

export const StyledTetrisWrapper = styled.div`
  width: 100%;
  height: 95vh;
  overflow: hidden;
  outline: none;
`;

export const StyledTetris = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  margin: 0 auto;
  
  .display {
    display: flex;
    justify-content: space-between;
    width: 380px;
    padding: 0 0 -10px 0;
  }
`;