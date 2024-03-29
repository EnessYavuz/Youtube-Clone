import React from 'react'
import dataSide from '../assets/data/dataSide'

function Sidebar() {
  return (
    <div className=' w-[256px] space-y-3 border-r h-screen'>
      {
        dataSide.map((data,i)=>(
            <div key={i} className='w-[256px] flex items-center space-x-5 p-2 hover:bg-gray-200 cursor-pointer'>
                <span>{data.icon}</span>
                <span>{data.name}</span>
            </div>
        ))
      }
    </div>
  )
}

export default Sidebar
