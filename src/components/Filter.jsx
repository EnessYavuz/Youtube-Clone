import React from 'react'
import dataFilter from '../assets/data/dataFilter'

const Filter = ({setLetter})=> {
  
  return (
    <div className='flex items-center overflow-x-hidden ' >
      {
        dataFilter.map((data,i)=>(
            <div  key={i} className='bg-gray-100 cursor-pointer text-sm hover:bg-gray-300 px-3 py-1 mx-2 rounded-xl '>{data.name}</div>
        ))
      }
    </div>
  )
}

export default Filter
