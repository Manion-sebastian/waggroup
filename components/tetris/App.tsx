import React from 'react';
import { createStage, isColliding } from './gameHelpers'
import { useSwipeable } from 'react-swipeable';

// Custom hooks
import { useInterval } from './hooks/useInterval'
import { usePlayer } from './hooks/usePlayer'
import { useStage } from './hooks/useStage'
import { useGameStatus } from './hooks/useGameStatus';


import Stage from './stage/Stage'
import Display from './display/Display'
import StartButton from './startbutton/StartButton'


// Styles
import { StyledTetrisWrapper, StyledTetris } from './App.styles';

const App: React.FC = () => {
  const [dropTime, setDropTime] = React.useState<null | number>(null);
  const [gameOver, setGameOver] = React.useState(true)

  const gameArea = React.useRef<HTMLDivElement>(null)

  const { player, updatePlayerPos, resetPlayer, playerRotateRight, playerRotateLeft } = usePlayer()
  const { stage, setStage, rowsCleared } = useStage(player, resetPlayer)
  const { score, setScore, rows, setRows, level, setLevel } = useGameStatus(rowsCleared)

  const movePlayer = (dir: number) => {
    if (!isColliding(player, stage, { x: dir, y: 0 })) {
      updatePlayerPos({ x: dir, y: 0, collided: false})
    }
  }

  const keyUp = ({ keyCode }: { keyCode: number}): void => {
    if (!gameOver) {
      // Change the droptime speed when user releases down arrow
      if (keyCode === 40) {
        setDropTime(1000 / level + 200);
      }
    }
  }

  const handleStartGame = (): void => {
    // Need to focus the window with the key events on start
    if (gameArea.current) gameArea.current.focus()
    // Reset everything
    setStage(createStage())
    setDropTime(1000)
    resetPlayer()
    setScore(0)
    setLevel(1)
    setRows(0)
    setGameOver(false)
  }

  const move = ({ keyCode, repeat }: { keyCode: number; repeat: boolean}): void => {
      if (!gameOver) {
        if (keyCode === 37) {
          movePlayer(-1);
        } else if (keyCode === 39) {
          movePlayer(1);
        } else if (keyCode === 40) {
          if(repeat) {
            return
          }
          setDropTime(30)
        } else if (keyCode === 88) {
          playerRotateRight(stage)
        } else if (keyCode === 90) {
          playerRotateLeft(stage)
        }
      }
  }

  const moveClick = (e: any) => {
    let rect = gameArea.current?.getBoundingClientRect()
    let x = e.clientX - rect?.left!
    if (!gameOver) {
      if (x < gameArea.current?.offsetWidth! / 2) {
        movePlayer(-1);
      } else {
        movePlayer(1);
      }
    }
  }

  const handlerSwipe = useSwipeable({
    preventScrollOnSwipe: true,
    onSwipedRight: ({ event }) => {
      event.stopPropagation()
      if (!gameOver) {
        playerRotateRight(stage)
      }
      
    },
    onSwipedLeft: ({ event }) => {
      event.stopPropagation()
      if (!gameOver) {
        playerRotateLeft(stage)
      }
    },
    onSwiping: ({ dir, event }) => {
      event.stopPropagation()
      if (!gameOver) {
        if(dir === 'Down') {
            setDropTime(30)
          }
      }
    },
    onTouchEndOrOnMouseUp: () => {
      setDropTime(1000 / level + 200);
    }
  })

  const drop = (): void => {
    // Increase level when player has cleared 10 rows
    if (rows > level * 5) {
      setLevel(prev => prev + 1)
      // increase speed
      setDropTime(1000 / level + 200)
    }


    if (!isColliding(player, stage, { x: 0, y: 1 })) {
      updatePlayerPos({x: 0, y: 1, collided: false})
    } else {
      // The game over sequence
      if (player.pos.y < 1) {
        console.log("Game Over")
        setGameOver(true)
        setDropTime(null)
      }
      updatePlayerPos({ x: 0, y: 0, collided: true})
    }
    
  }

  useInterval(() => {
    drop()
  }, dropTime)

  return (
      <StyledTetrisWrapper role='button' tabIndex={0} onKeyDown={move} onKeyUp={keyUp}  onMouseDown={moveClick}  ref={gameArea}>
        
        <StyledTetris {...handlerSwipe}>
          <div className='display'>
              {gameOver ? (
                  <>
                      {/* <Display gameOver={gameOver} text='Game Over!' /> */}
                      <Display text={`Score: ${score}`} />
                      <Display text={`Rows: ${rows}`} />
                      <Display text={`Level: ${level}`} />
                      <StartButton callback={handleStartGame} />
                  </>
              ) : (
                  <>
                      <Display text={`Score: ${score}`} />
                      <Display text={`Rows: ${rows}`} />
                      <Display text={`Level: ${level}`} />
                  </>
              )}
          </div>
            <Stage stage={stage} />
          
          
          
        </StyledTetris>
      </StyledTetrisWrapper>
    

  );
};

export default App;