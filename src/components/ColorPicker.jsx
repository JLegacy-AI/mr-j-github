import React from 'react'

function ColorPicker(props) {

  const handleChange = (e) => {
      props.handleChange(e.target.value);
  }

  return (
    <>
        <input className='h-[100px] w-[100px]' type="color" name='' id='colorPicker' value={props.value} onChange={(e) => handleChange(e)}/>
    </>
  )
}

export default ColorPicker
