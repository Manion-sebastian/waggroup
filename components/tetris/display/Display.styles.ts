import styled from 'styled-components';

type Props = {
  gameOver?: boolean;
};

export const StyledDisplay = styled.div<Props>`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: space-between;
  margin: 0 0 10px 0;
  padding: 0px;
  border: 2px solid #777;
  width: max-content;
  min-height: 3.6em;
  border-radius: 10px;
  color: ${props => (props.gameOver ? 'red' : 'white')};
  background: #000;
  font-family: Arial, Helvetica, sans-serif;
  font-size: clamp(0.4rem, 2.4vw, 0.8rem);
  padding-block: .2rem;
  padding-inline: 2em;
`;