import React from 'react'
import { PiTelevisionSimpleBold } from "react-icons/pi";
import img90 from '../../images/mri.png'
import img91 from '../../images/butterfly.jpg'
import { FaGreaterThan } from "react-icons/fa";


const  Studio= () => {
  return (
    <div className='absolute top-0 z-50 w-[30em] h-[30rem] flex bg-gray-100 mt-[80px] right-96 rounded text-[0.90em] cursor-default'>
        <div className='flex flex-col m-[10px] '>
            <div className='h-[7rem] flex justify-center items-center flex-col'>
                <div className='flex justify-center items-center flex-row mb-[10px] '>
                <PiTelevisionSimpleBold size={35}/>
                <h1 className='text-2xl text-pretty font-bold'>STUDIO</h1>
                </div>
                <div className='text-1xl font-bold'>
                    <p>Your daily inspiration for everything fashion</p>
                </div>
                
            </div>
            <div className='flex flex-col items-center justify-center h-[20rem] mt-[10px] gap-5'>
              
               <div className='bg-pink h-[90%]'>
                  <img className='w-full h-full object-cover ml-[20px]' src={img91} alt=''/>
                </div>
                <div className='flex flex-row gap-1 border  border-gray-300 border-dashed ml-3 cursor-pointer'>
                    <h1 className='font-bold text-1xl' > EXPLORE STUDIO  </h1>
                    <div ><FaGreaterThan  className='mt-[4px]'/></div>
                </div>
            </div>
           
           
        </div>
      
    </div>
  )
}

export default Studio ;