import React from 'react'
import hero from '../images/hero2.webp'
import {FiSearch} from 'react-icons/fi'
const Hero = () => {
  return (
    <div className='relative h-[13rem] mx-5 mt-6 rounded-[0.3rem] z-10'>
       <div className='absolute  flex w-full '>
            <img src={hero} className='object-cover w-full h-[13rem] '/>
        </div> 
        {/*Overlay */}
        <div className='absolute z-10  flex w-full bg-black/20  h-full'>
        </div> 

        <div className='relative z-20  space-y-2 flex flex-col items-center justify-center pb-0 h-full font-bold text-white '>
            <p className='text-[20px] font-black'>Find yout community  Discord</p>
            <p className='pb-2 text-[13px] text-white/60'>From gaming, to music, to study, there's a place for you </p>

              <div className='relative mb-4 flex items-center  '>
              <input type="search"
                 placeholder='Explore servers ' 
                className='rounded-[0.3rem] pl-3 placeholder:text-[14px] placeholder:text-gray-500 outline-0 w-[25rem] mb-4 py-2'/>
                <FiSearch className='absolute  text-black right-2'/>
              </div>
                
        </div>
    </div>
  )
} 

export default Hero