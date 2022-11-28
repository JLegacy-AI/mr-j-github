import React from 'react'
import { textOnly, iconOnly, iconAndText } from '../utils/utils'


function StyleButtonContainer(props) {
  return (
    <>
        <div className='flex justify-center items-center space-x-2 w-fit'>
            <button  className='w-[80px] h-[80px] text-xs flex flex-col justify-center items-center space-y-2 shadow hover:shadow-lg shadow-purple-700' onClick={() => props.setBoard(iconOnly(props.switchCollection, props.boardNumber))}>
                <span className='bg-green-600 w-[36px] h-[36px]'>.</span>
                <span className='h-fit'>Icon</span>
            </button>
            <button  className='w-[80px] h-[80px] text-xs flex flex-col justify-center items-center space-y-2 shadow hover:shadow-lg shadow-purple-700' onClick={() =>  props.setBoard(textOnly(props.switchCollection, props.boardNumber))}>
                <span className='bg-green-600 w-[36px] h-[36px]'>.</span>
                <span className='h-fit'>Text</span>
            </button>
            <button  className='w-[80px] h-[80px] text-xs flex flex-col justify-center items-center space-y-2 shadow hover:shadow-lg shadow-purple-700' onClick={() => props.setBoard(iconAndText(props.switchCollection, props.boardNumber))}>
                <span className='bg-green-600 w-[36px] h-[36px]'>.</span>
                <span className='h-fit'>Icon & Text</span>
            </button>
        </div>
    </>
  )
}

export default StyleButtonContainer
