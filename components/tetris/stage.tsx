import React from 'react'
import Cell from './cell';


const stage = ({ stage }: any) => (
    <div>
        {stage.map((row: any[]) => row.map((cell: any, x: any) => <Cell key={x} type={cell[0]} />))}
    </div>
)

export default stage