import React from 'react'

function KeypadDetail(props) {
  return (
    <>
      <div className='h-fit py-5 flex justify-center items-center space-x-16'>
          <div className='w-fit flex flex-col space-y-4 justify-center items-center'>
              <h1 className='text-center'>Communication Protocol</h1>
              <select className='rounded-none h-[50px] w-[400px] border' name="" id="">
                  <option value="Crestron">CRESTRON</option>
                  <option value="KNX">KNX</option>
                  <option value="RS485">RS485</option>
              </select>
          </div>
          <div className='w-fit flex flex-col space-y-4 justify-center items-center'>
              <h1 className='text-center'>Artwork Name</h1>
              <input className='w-[400px] h-[50px] border' placeholder='An ARIA Artwork' type="text" name="" id="" />
          </div>
      </div>
    </>
  )
}

export default KeypadDetail
