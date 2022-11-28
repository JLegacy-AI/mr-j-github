import React from 'react'

function FrameSides(props) {
  return (
    <>
        <div className='h-fit flex justify-center items-center'>
            {
                props.frameSide.map((side, ind) => {
                    return(
                        <>
                            <div className='flex justify-center items-center flex-col'>
                                <h1 className='h-fit text-center'>{side}</h1>
                            </div>
                        </>
                    )
                })
            }
        </div>
    </>
  )
}

export default FrameSides
