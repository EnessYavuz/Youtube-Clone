import React from 'react'
import images from '../assets/images/images'

function HomeCard() {
  return (
    <div className='w-[370px] m-3 cursor-pointer'>
      <img className='rounded-xl' src={images.deneme} alt="img" />
      <div className='font-bold mt-1'>Title  Title  Title  Title  vTitle  Title Title  vTitle  Title  </div>
      <div className='text-xs mt-1 tracking-wider text-gray-700'>Enes Yavuz</div>
      <div className='text-xs mt-1 tracking-wider text-gray-700'>
        <span>100K Görüntülenme </span>
        <span> 1 yıl önce</span>
        </div>
      
    </div>
  )
}

export default HomeCard
