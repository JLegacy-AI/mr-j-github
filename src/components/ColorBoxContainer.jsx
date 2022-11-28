import React from 'react'
import ColorPicker from "./ColorPicker"
import { changeColor } from '../utils/utils';

function ColorBoxContainer(props) {

  const handleColorSwitch = (board, boardNumber, id ,value) => {
    props.setFrame(changeColor(board, boardNumber, id, value));
  }



  return (
    <>
        {
        props.board.map((i, j) => {
          
            const handleChange = (color)=>{
                handleColorSwitch(props.switchCollection, props.index, i.id,color);
            }

          return <ColorPicker value={i.fill} key={j} handleChange={handleChange}/>
        })
      }
    </>
  )
}

export default ColorBoxContainer
