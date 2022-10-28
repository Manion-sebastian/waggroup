import React, { useState } from 'react'
import styles from '../../styles/sudoku/Cell.module.css'

type Props = {
    num: number | null | string
    cellNo: number
    grabInfo: any
}

const Cell = ({cellNo, num, grabInfo}: Props) => {


  // const closedInput = <input readOnly type="number" value={e.target.value} /> 
  // const openInput = <input type='number' />

  const closedButton = <button disabled >{num}</button>
  const openButton = <button >{cellNo}</button>
  const cellObj : any = {
    index: cellNo,
    value: num || ''
  }

  // cellObj.index

  return (
    <div
      onClick={() => grabInfo(cellObj)}
      className={styles.size}
    >
     {cellObj.value}
     
      
     </div>
  )
}

export default Cell