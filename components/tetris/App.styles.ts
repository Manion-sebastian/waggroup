import styled from 'styled-components';

export const StyledTetrisWrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  outline: none;
  background-color: rgb(60, 60, 60);
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