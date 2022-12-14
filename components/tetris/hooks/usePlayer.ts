import React from 'react'
import { STAGE_WIDTH } from '../setup';
import { isColliding, randomTetromino } from '../gameHelpers';
import { STAGE } from './useStage';

export type player = {
    pos: {
        x: number;
        y: number;
    }
    tetromino: (string | number)[][]
    collided: boolean;
}

export const usePlayer = () => {
    const [player, setPlayer] = React.useState({} as player)

    const rotateRight = (matrix: player['tetromino']) => {
        // Switch between row and column
        const theMatrix = matrix.map((_, i) => matrix.map(column => column[i]))
        // Reversing the rwo to get rotation
        return theMatrix.map(row => row.reverse())
    }

    const playerRotateRight = (stage: STAGE): void => {
        const clonedPlayer = JSON.parse(JSON.stringify(player));
        clonedPlayer.tetromino = rotateRight(clonedPlayer.tetromino);
        

        // prevents players from rotating into things
        const posX = clonedPlayer.pos.x;
        let offset = 1;
        while (isColliding(clonedPlayer, stage, { x: 0, y: 0})) {
            clonedPlayer.pos.x += offset
            offset = -(offset + (offset > 0 ? 1 : -1))

            if (offset > clonedPlayer.tetromino[0].length) {
                clonedPlayer.pos.x = posX
                return
            }
        }


        setPlayer(clonedPlayer)
    }

    const playerRotateLeft = (stage: STAGE): void => {
        const clonedPlayer = JSON.parse(JSON.stringify(player));
        clonedPlayer.tetromino = rotateRight(clonedPlayer.tetromino);
        clonedPlayer.tetromino = rotateRight(clonedPlayer.tetromino);
        clonedPlayer.tetromino = rotateRight(clonedPlayer.tetromino);

        // prevents players from rotating into things
        const posX = clonedPlayer.pos.x;
        let offset = 1;
        while (isColliding(clonedPlayer, stage, { x: 0, y: 0})) {
            clonedPlayer.pos.x += offset
            offset = -(offset + (offset > 0 ? 1 : -1))

            if (offset > clonedPlayer.tetromino[0].length) {
                clonedPlayer.pos.x = posX
                return
            }
        }


        setPlayer(clonedPlayer)
    }

    const updatePlayerPos = ({ x, y, collided }: { x: number; y: number; collided: boolean }): void => {
        setPlayer(prev => ({
            ...prev, 
            pos: { x: (prev.pos.x += x), y: (prev.pos.y += y) },
            collided
        }))
    }

    const resetPlayer = React.useCallback(
        (): void =>
            setPlayer({
                pos: {x: STAGE_WIDTH / 2 - 2, y: 0 },
                tetromino: randomTetromino().shape,
                collided: false
            }),
        []
    )

    return { player, updatePlayerPos, resetPlayer, playerRotateRight, playerRotateLeft };
}