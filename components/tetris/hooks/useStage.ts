import AnchorLink from 'antd/lib/anchor/AnchorLink';
import React from 'react'
import { createStage } from '../gameHelpers';

// Types
import type { player } from './usePlayer';
// import type { STAGE, STAGECELL } from '../stage/Stage'

export type STAGECELL = [string | number, string]
export type STAGE = STAGECELL[][]



export const useStage = (player: player, resetPlayer: () => void) => {
    const [stage, setStage] = React.useState(createStage());
    const [rowsCleared, setRowsCleared] = React.useState(0)

    React.useEffect(() => {
        if (!player.pos) return;

        setRowsCleared(0)

        const sweepRows = (newStage: STAGE): STAGE => {
            return newStage.reduce((stack, row) => {
                // if no 0, row is full and needs to be cleared
                if (row.findIndex(cell => cell[0] === 0) === -1) {
                    setRowsCleared(prev => prev + 1)
                    // create empty row at beginning of array to push tetris piece down instead of clearing row
                    stack.unshift(new Array(newStage[0].length).fill([0, 'clear']) as STAGECELL[])
                    return stack
                }

                stack.push(row)
                return stack
            }, [] as STAGE)
        }

        const updateStage = (prevStage: STAGE): STAGE => {
            // Flushing the Stage
            // If it says 'clear' but doesn't have a 0 it means that it's the players move and should be cleared
            const newStage = prevStage.map(row =>
                row.map(cell => (cell[1] === 'clear' ? [0, 'clear'] : cell)) as STAGECELL[]
            );
        

            player.tetromino.forEach((row, y) => {
                row.forEach((value, x) => {
                    if (value !== 0) {
                        newStage[y + player.pos.y][x + player.pos.x] = [value, `${player.collided ? "merged" : "clear"}`];
                    }
                })
            })
            
            if (player.collided) {
                resetPlayer()
                return sweepRows(newStage)
            }

            return newStage
        }

        setStage(prev => updateStage(prev))
    }, [player.collided, player.pos?.x, player.pos?.y, player.tetromino])

    return { stage, setStage, rowsCleared }
}