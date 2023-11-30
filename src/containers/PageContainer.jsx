import React from 'react'

function PageContainer({children}) {
  return (
    <div className='flex w-full'>
      {children}
    </div>
  )
}

export default PageContainer
