import React, { useState } from 'react'
import styles from '../../styles/sudoku/Cell.module.css'

type Props = {
    num: number | null
    cellNo: number
    selectedCell : any
}

const Cell = ({cellNo, num, selectedCell}: Props) => {

  const [currentCell, setCurrentCell] = useState(null)

  // const closedInput = <input readOnly type="number" value={num || 0} /> 
  // const openInput = <input type='number' />

  const closedButton = <button disabled >{num}</button>
  const openButton = <button >{cellNo}</button>

  const handleCell = (e:any) => {
    setCurrentCell(e.target.value)
    console.log(currentCell)
    // console.log(e.target.value)
  }

  const cellObj = {
    index: cellNo,
    value: null
  }

  cellObj.index

  return (
    <div
      onClick={selectedCell}
      className={styles.size}
    >
     {num? closedButton: openButton }
     
      
     </div>
  )
}

export default Cell