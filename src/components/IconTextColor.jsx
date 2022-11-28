import React from 'react'
import FrameSides from './FrameSides'
import ColorBoxContainer from './ColorBoxContainer'

function IconTextColor(props) {
  return (
   <>
    <div className='h-fit flex justify-center items-center'>
            <div className='flex justify-center items-center flex-col'>
                <FrameSides frameSide={props.frameSide}/>
                    <div className='flex justify-around'>
                        {
                            props.board.map( (b, i) => {
                                return <>
                                            <div className='grid grid-cols-3 gap-3 max-w-[450px] border p-5'>
                                                {
                                                    <ColorBoxContainer index={i} board={b} switchCollection={props.board} setFrame={props.setBoard}/>
                                                }
                                            </div>
                                       </>
                            })
                        }
                    </div>
            </div>
        </div>
   </>
  )
}

export default IconTextColor
