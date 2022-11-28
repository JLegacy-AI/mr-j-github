import React from 'react'
import { changeText, setIcon } from '../utils/utils'

function IconTextBox(props) {

  return (
    <>
        <div className='w-fit h-fit flex flex-col py-3 px-4 border space-y-2'>
            <input style={{backgroundColor:props.switch.fill}} className='h-[100px] w-[100px] bg-blue-700 ' type="file" name="" id="" accept='images/*' onChange={(e) => console.log("Jamal")}/>
            <input value={props.switch.text} className='w-[100px] h-[30px] border rounded-md border-gray-600' type="text" name="" id="" onChange={(e) => props.setBoard(changeText(props.switchCollection, props.boardNumber, props.switch.id, e.target.value)) }/>
        </div>
    </>
  )
}

export default IconTextBox
