import React from 'react'
import KeypadContainer from './KeypadContainer';
import jsxToString from 'jsx-to-string';

function ArtworkPreview(props) {

    console.log(jsxToString(<KeypadContainer switchCollection={props.switchCollection} color={props.color}/>));


  return (
    <>
        <div className='p-32 flex flex-col' id='preview' >
            <h1 className='h-fit mb-10 '>ARTWORK PREVIEW</h1>
            <table className='border'>
                <tr className='flex justify-start items-center h-fit py-3 px-3 border'>
                    PRODUCT
                </tr>
                <tr className='h-fit flex justify-center items-center border py-5'>
                    <div className='h-[400px] flex justify-center items-center'>
                        <KeypadContainer switchCollection={props.switchCollection} color={props.color}/>
                    </div>
                </tr>
                <tr className='flex justify-start items-center h-fit py-3 px-3 border'>
                    Product Information
                </tr>
                <tr className='h-fit border grid grid-cols-4'>
                    <td className='col-span-1 py-3 px-3 border text-lg'>Art Name</td>
                    <td className='col-span-3 py-3 px-3 border'>pkjhlkkasd</td>
                </tr>
                <tr className='h-fit border grid grid-cols-4'>
                    <td className='col-span-1 py-3 px-3 border text-lg'>Protocol</td>
                    <td className='col-span-3 py-3 px-3 border'>pkjhlkkasd</td>
                </tr>
                <tr className='h-fit border grid grid-cols-4'>
                    <td className='col-span-1 py-3 px-3 border text-lg'>Product Code</td>
                    <td className='col-span-3 py-3 px-3 border'>pkjhlkkasd</td>
                </tr>
                <tr className='h-fit border grid grid-cols-4'>
                    <td className='col-span-1 py-3 px-3 border text-lg'>Font End Color</td>
                    <td className='col-span-3 py-3 px-3 border'>pkjhlkkasd</td>
                </tr>
                <tr className='flex justify-start items-center h-fit border'>
                    <td className='col-span-3 py-3 px-3 border'>Left Side</td>
                </tr>
            </table>
            <div className='flex justify-center items-center '>
                <button className='h-[50px] w-[200px] border m-4 rounded-md border-blue-600 hover:text-white hover:bg-blue-600'>Download</button>
            </div>
        </div>
    </>
  )
}

export default ArtworkPreview;