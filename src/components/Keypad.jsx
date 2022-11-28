import React from 'react'
import Switch from './Switch'
import LCD from './LCD';

function Keypad(props) {

  console.log(props.backColor+"    ///");
  const getElement = (s, i) => {
    if(s.type === "BUTTON")
        return <Switch data={s} key={i}/>
    if(s.type === "LCD")
        return <LCD data={s} key={i}/> 
  }

  return (
    <>
        <div style={{backgroundColor: props.backColor}} className='w-[400px] h-[380px] flex justify-center items-center '>
           <div className='min-h-[200px] w-fit grid grid-cols-3 gap-x-12 gap-y-4 content-center'>
            {
                props.switches.map((s, i) => {
                    return  (getElement(s,i))
                })
            }
           </div>
        </div>
    </>
  )
}

export default Keypad
