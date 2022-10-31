import styled from 'styled-components';

export const StyledStartButton = styled.button`
  box-sizing: border-box;
  margin: 0 0 10px 0;
  padding: 0px;
  min-height: 0px;
  width: max-content;
  border-radius: 50vw;
  border: none;
  color: white;
  background: #111;
  // font-family: Arial, Helvetica, sans-serif;
  font-size: clamp(.5rem, 3vw, 1.0rem);
  text-transform: uppercase;
  outline: none;
  cursor: pointer;
  user-select: none;
  padding-inline: 2em;
  transition: all 80ms ease-out;
  
  :hover {
    background: #5fdf8f;
    color: #101010;
    box-shadow: 0 0 .25rem rgb(60 60 60 / .3);
  }
`;