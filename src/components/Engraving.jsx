import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import KeypadContainer from './KeypadContainer'
import IconTextSize from './IconTextSize';
import IconTextColor from './IconTextColor';
import IconText from './IconText';
import KeypadDetail from './KeypadDetail';

function Engraving(props) {

    const [designBox, setDesignBox] = useState(0);

    const getContainer = () => {
        if(designBox === 0){
            return <IconTextSize frameSide={props.frameSide} board={props.switchCollection} setBoard={props.setBoard}/>
        }
        if(designBox === 1)
            return <IconText frameSide={props.frameSide} board={props.switchCollection} setBoard={props.setBoard}/>
        if(designBox === 2) 
            return <IconTextColor frameSide={props.frameSide} board={props.switchCollection} setBoard={props.setBoard}/>
        if(designBox === 3)
            return <KeypadDetail />
        return <></>
    }

  return (
    <>
        <div className='h-fit flex justify-center items-center flex-col space-y-5 bg-white  '>
            <div className='h-[400px] flex justify-center items-center'>
                <KeypadContainer switchCollection={props.switchCollection} color={props.color}/>
            </div>
            <div className='h-fit flex justify-center items-center'>
                <button className='w-fit h-fit py-2 px-4 border hover:shadow-md' onClick={()=> setDesignBox(0)}>Icon And Text</button>
                <button className='w-fit h-fit py-2 px-4 border hover:shadow-md' onClick={()=> setDesignBox(1)}>Buttons</button>
                <button className='w-fit h-fit py-2 px-4 border hover:shadow-md' onClick={()=> setDesignBox(2)}>Backlight Color</button>
                <button className='w-fit h-fit py-2 px-4 border hover:shadow-md' onClick={()=> setDesignBox(3)}>Details</button>
            </div>
            { 
                getContainer()
            }
        </div>
    </>
  )
}

export default Engraving
