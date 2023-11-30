import React from 'react'
//import images from '../assets/images/images'
import moment from 'moment'

function HomeCard({video}) {
  return (
    <div className='w-[370px] m-3 cursor-pointer'>
      <img className='rounded-xl' src={video?.snippet?.thumbnails?.high?.url} alt="img" />
      <div className='font-bold mt-1'>{(video?.snippet?.title).substring(0,70)}...</div>
      <div className='text-xs mt-1 tracking-wider text-gray-700'>{video?.snippet?.channelTitle}</div>
      <div className='text-xs mt-1 tracking-wider text-gray-700 space-x-4'>
        <span>100K Görüntülenme </span>
        <span>{moment(video?.snippet?.publishedAt).endOf('day').fromNow()}</span>
        </div>
      
    </div>
  )
}

export default HomeCard
