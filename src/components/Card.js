import React from 'react'

const Card = ({size,description,title,profile,bg}) => {
  return (
    <div className='w-1/2'>
        <div className='h-52 flex'>
            <img className='rounded-t-[1.5rem] object-cover'   src={bg}/>
            </div>
            <div className='bg-[#232b2f] relative '>
                <div className= 'absolute w-16 h-16 p-1 bg-[#232b2f]  flex -top-8 left-4 rounded-t-[0.4rem]'>
                    <img src={profile} className=' object-cover rounded-t-[0.4rem]'/>
                </div>
            </div>
        

    </div>
  )
}

export default Card