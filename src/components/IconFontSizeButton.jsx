import React from 'react'
import { setFontSize } from '../utils/utils'

function IconFontSizeButton(props) {
    
  const elementToChange = ["Icon Size", "Font Size"]
  
  return (
    <>
        {
            elementToChange.map((s,i) => {
                return (
                    <>
                        <div className=' flex justify-center items-center flex-col'>
                            <h1 className='h-fit text-center'>{s}</h1>
                            <div className='flex'>
                                <button className='w-[100px] h-[80px] text-xs flex flex-col justify-center items-center space-y-2 shadow hover:shadow-lg shadow-purple-700' onClick={() => props.setBoard(setFontSize(props.board, props.index, 'S', i))}>
                                    <span className='bg-green-600 w-[36px] h-[36px]'>.</span>
                                    <span className='h-fit'>small</span>
                                </button>
                                <button className='w-[100px] h-[80px] text-xs flex flex-col justify-center items-center space-y-2 shadow hover:shadow-lg shadow-purple-700' onClick={() => props.setBoard(setFontSize(props.board, props.index, 'M', i))}>
                                    <span className='bg-green-600 w-[36px] h-[36px]'>.</span>
                                    <span className='h-fit'>medium</span>
                                </button>
                            </div>
                        </div>
                    </>
                )
            })
        }
    </>
  )
}

export default IconFontSizeButton
