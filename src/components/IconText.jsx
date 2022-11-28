import React from 'react'
import FrameSides from './FrameSides'
import IconTextBoxContainer from './IconTextBoxContainer'

function IconText(props) {


  return (
    <>
        <div className='flex justify-center items-center'>
            <div className='flex justify-center items-center flex-col'>
                <FrameSides frameSide={props.frameSide}/>
                    <div className='flex justify-around'>
                        {
                            props.board.map( (b, i) => {
                                return <>
                                            <div className='grid grid-cols-3 gap-3 max-w-[450px] border p-5'>
                                                {
                                                    <IconTextBoxContainer index={i} board={b} switchCollection={props.board} setBoard={props.setBoard}/>
                                                }
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
