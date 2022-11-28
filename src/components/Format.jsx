import React,{useEffect, useState} from 'react'
import KeypadContainer from './KeypadContainer'
import { getSwitches } from "../utils/utils";

function Format(props) {

  const [frame, setFrame] = useState(1);

  useEffect(() => {
    let switchBoard = []
      for(let i=0; i < frame ; i++){
        switchBoard.push([...getSwitches()])
      }
      props.handleFrameSide( frame === 1 ? ["Side"] : ["Left Side", "Right Side"] )
      props.handleBoard(switchBoard);
    return () => {
    };
  }, [frame]);

  return (
    <>
      <div className='h-auto flex justify-center items-center flex-col'>
        <div className=' h-[400px] flex justify-center items-center'>
          <KeypadContainer switchCollection={props.switchCollection} color={props.color}/>
        </div>
        <div className='h-[100px] flex justify-center items-center space-x-4'>
            <button className='w-[150px] h-[80px] text-xs flex flex-col justify-center items-center space-y-2 shadow hover:shadow-lg shadow-purple-700'  onClick={() => setFrame(1)}>
                <span className='bg-green-600 w-[36px] h-[36px]'>.</span>
                <span className='h-fit'>Single Frame</span>
            </button>
            <button className='w-[150px] h-[80px] text-xs flex flex-col justify-center items-center space-y-2 shadow hover:shadow-lg shadow-purple-700' onClick={() => setFrame(2)}>
                <span className='bg-green-600 w-[72px] h-[36px]'>.</span>
                <span className='h-fit'>Double Frame</span>
            </button>
        </div>
      </div>
    </>
  )
}

export default Format
