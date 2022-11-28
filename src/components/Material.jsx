import React from 'react'
import KeypadContainer from './KeypadContainer';
import ColorPicker from './ColorPicker';
import ShowStep from './ShowStep';


function Material(props) {

  return (
    <>
      <ShowStep/>
      <div className='flex flex-row'>
          <KeypadContainer switchCollection={props.switchCollection} color={props.color}/>
          <div className='flex justify-center items-center flex-col space-y-12'>
              <h1 className='h-fit w-fit text-2xl font-light'>Select Background Color</h1>
              <ColorPicker handleChange={props.handleChange} value={props.color}/>
          </div>
      </div>
    </>
  )
}

export default Material
