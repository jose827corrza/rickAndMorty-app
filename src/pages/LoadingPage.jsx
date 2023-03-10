import React from 'react'

import rickFace from '/loadingPage.png'

export const LoadingPage = () => {
  return (
    <div className='bg-fixed w-full h-screen flex justify-evenly bg-green-300' style={{backgroundImage: 'url(/background.jpeg)'}}>
        <img className='scale-50 animate-rotating-logo w-48 h-48 md:py-48 md:w-auto md:h-auto' src={rickFace} alt="rickLoading" />
    </div>
  )
}
