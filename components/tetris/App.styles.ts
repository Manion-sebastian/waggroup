import styled from 'styled-components';

export const StyledTetrisWrapper = styled.div`
  outline: none;
`;

export const StyledTetris = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
  .display {
    display: flex;
    justify-content: space-between;
    gap: .3rem;
    width: max-content;
  }
`;