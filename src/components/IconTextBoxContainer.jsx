import React from 'react'
import IconTextBox from './IconTextBox'

function IconTextBoxContainer(props) {
  return (
    <>
      {
        props.board.map((i, j) => {
          return <IconTextBox key={j} boardNumber={props.index} switch={i} switchCollection={props.switchCollection} setBoard={props.setBoard}/>
        })
      }
    </>
  )
}

export default IconTextBoxContainer
