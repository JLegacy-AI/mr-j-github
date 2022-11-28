import React from 'react'
import SelectCard from './SelectCard'

function SwitchCardContainer(props) {

    let switchType = [
        {
            url: "/resources/images/ARIA.png",
            text: "ARIA"
        },
        {
            url: "/resources/images/AXES.png",
            text: "AXES"
        }
    ]

  return (
    <>
        <div className='w-full h-4/5 flex justify-center items-center space-x-48'>
            {
                switchType.map((data, i) => {
                    return <SelectCard key={i} data={data} handleClick={props.handleClick} type={props.type}/>
                })
            }
        </div>
    </>
  )
}

export default SwitchCardContainer
