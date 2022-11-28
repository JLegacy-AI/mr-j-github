import React from 'react'

function ShowStep() {
    const steps = [ "COLLECTION", "MATERIALS", "FORMAT", "PRODUCT", "STYLE", "ENGRAVING", "CREATE"]
  return (
    <>
        <div className='h-[70px] flex bg-white bg-opacity-60 px-3 border border-y-2 border-gray-200 sticky top-16'>
            {
                steps.map((s, i) => {
                    return <>
                                <h1 key={i} className='flex justify-start items-center font-normal text-gray-600'>{i+1}. {s}</h1>
                            </>
                })
            }
        </div>
    </>
  )
}

export default ShowStep
