import React from 'react'
import Keypad from './Keypad'

function KeypadContainer(props) {

  return (
    <>
        <div className={'flex justify-center items-center'}>
            <div className='h-fit w-fit flex shadow-md shadow-black'>
                {
                  props.switchCollection.map((s, i) => {
                    return  <Keypad key={i} switches={s} backColor={props.color}/>
                  })
                }
            </div>
        </div>
    </>
  )
}

export default KeypadContainer
