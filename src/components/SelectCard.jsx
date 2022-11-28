import React from 'react'

function SelectCard(props) {
 
    return (
    <>
        <div className='w-1/5 h-fit flex flex-col space-y-5'>
            <img className='shadow-2xl shadow-black' src={process.env.PUBLIC_URL+ props.data.url} alt='Swicthes Type'/>
            <button className={'w-full h-14 text-lg border border-black border-1 '+(props.type===props.data.text ?'bg-black text-white ':'text-black hover:bg-black hover:text-white')} onClick={() => props.handleClick(props.data.text)}>
                {props.data.text}
            </button>
        </div>
    </>
  )
}

export default SelectCard
