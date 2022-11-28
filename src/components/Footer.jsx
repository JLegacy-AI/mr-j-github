import React,{useState} from 'react'
import { Link } from 'react-router-dom'

function Footer() {

  const [path, setpath] = useState(1);

  let steps = ['/','/material','/format','/product','/style','/engraving','/preview']
  
  const handlePath = (num) => {
    console.log(path);
    if(path-num >= 0 && path+num <= steps.length)
      setpath((path+num)%steps.length);
  }

  return (
    <>
        <div className='h-16 bg-black flex'>
            <div className='p-2 w-1/4 text-white font-thin text-xs'>
                    <p className=' flex items-center'>&#169; Copyright Reserved Private Company Ltd. </p>
            </div>
            <div className='w-3/4 flex justify-center items-center flex-auto'>
                <Link className=' w-52 h-9 flex justify-center items-center border border-gray-100 text-white hover:text-black hover:bg-white transition-all duration-75' to={steps[path]} onClick={() => handlePath(-1)}>Back</Link>
            </div>
            <div className='w-3/4 flex justify-center items-center flex-auto'>
                <Link className=' w-52 h-9 flex justify-center items-center border border-gray-100 text-white hover:text-black hover:bg-white transition-all duration-75' to={steps[path]} onClick={() => handlePath(1)}>Next</Link>
            </div>            
        </div>
    </>
  )
}

export default Footer
