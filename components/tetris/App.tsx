import React from 'react';
import { createStage } from './gameHelpers'


import Stage from './stage/Stage'
import Display from './display/Display'
import StartButton from './startbutton/StartButton'


// Styles
import { StyledTetrisWrapper, StyledTetris } from './App.styles';

const App: React.FC = () => {
    const [dropTime, setDropTime] = React.useState<null | number>(null);
    const [gameOver, setGameOver] = React.useState(true)



  return (
    <StyledTetrisWrapper role='button' tabIndex={0}>
      <StyledTetris>
        <div className='display'>
            {gameOver ? (
                <>
                    <Display gameOver={gameOver} text='Game Over!' />
                    <StartButton callback={() => null} />
                </>
            ) : (
                <>
                    <Display text={`Score: `} />
                    <Display text={`Rows: `} />
                    <Display text={`Level: `} />
                </>



            )}
        </div>
        <Stage stage={createStage()} />
        </StyledTetris>
    </StyledTetrisWrapper>
  );
};

export default App;