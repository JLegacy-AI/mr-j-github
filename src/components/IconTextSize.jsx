import React from 'react'
import FrameSides from './FrameSides'
import IconFontSizeButton from './IconFontSizeButton'

function IconText(props) {

  return (
    <>
        <div className='h-fit flex justify-center items-center'>
            <div className='flex justify-center items-center flex-col'>
                <FrameSides frameSide={props.frameSide}/>
                    <div className='flex justify-around'>
                        {
                            props.frameSide.map( (side, i) => {
                                return <>
                                            <div className='w-fit py-3 flex justify-center items-center space-x-5'>
                                                <IconFontSizeButton side={side} index={i} board={props.board} setBoard={props.setBoard}/>
                                            </div>
                                        </>
                            } )
                        }
                    </div>
            </div>
        </div>
        
    </>
  )
}

export default IconText
