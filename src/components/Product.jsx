import React, {useState} from 'react'
import KeypadContainer from './KeypadContainer'
import {createDesign} from '../utils/utils'
import { useEffect } from 'react'

function Product(props) {

    const [frame, setFrame] = useState({
                                            boardNummber: -1,
                                            design: ""
                                        });

    useEffect(() => {
        props.setBoard(createDesign(props.switchCollection, frame))
        return () => {
            
        };
    }, [frame]);

    let frameDesign = ["L9","L12","TT"]

  return (
    <>
        <div className='flex justify-center items-center flex-col space-y-5 sticky top-0  bg-white  '>
        <div className='h-[400px] flex justify-center items-center'>
          <KeypadContainer switchCollection={props.switchCollection} color={props.color}/>
        </div>
        <div className='h-[100px] flex justify-center items-center space-x-4 flex-row'>
            {
                props.frameSide.map( (j,k) => {
                    return <>
                                <div className='flex justify-center item-center flex-col'>
                                    <h1 className='text-center'>{j}</h1>
                                    <div className='flex flex-row justify-center items-center'>
                                        {  
                                            frameDesign.map((s,i) => {
                                            return <>
                                                        <button key={i} className='w-[150px] h-[80px] text-xs flex flex-col justify-center items-center space-y-2 shadow hover:shadow-lg shadow-purple-700' onClick={() => setFrame({boardNumber: k, design: s})}>
                                                            <span className='bg-green-600 w-[36px] h-[36px]'>.</span>
                                                            <span className='h-fit'>{s}</span>
                                                        </button>
                                                    </>  
                                            })
                                        }
                                    </div>
                                </div>
                            </>
                } )
            } 
        </div>
      </div>
    </>
  )
}

export default Product
