import React from 'react'
import KeypadContainer from './KeypadContainer'
import StyleButtonContainer from './StyleButtonContainer'
import FrameSides from './FrameSides'

function StyleBoard(props) {
  return (
    <>
        <div className='h-fit flex justify-center items-center flex-col space-y-5 bg-white  '>
            <div className='h-[400px] flex justify-center items-center'>
                <KeypadContainer switchCollection={props.switchCollection} color={props.color}/>
            </div>
            <div className='h-fit flex justify-center items-center'>
                <div className='flex justify-center items-center flex-col'>
                    <FrameSides frameSide={props.frameSide}/>
                    <div className='flex justify-around'>
                        {
                            props.frameSide.map( (side, i) => {
                                return <>
                                            <div className='w-fit py-3 flex justify-center items-center space-x-5'>
                                                <StyleButtonContainer boardNumber={i} switchCollection={props.switchCollection} setBoard={props.setBoard}/>
                                            </div>
                                        </>
                            } )
                        }
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default StyleBoard
