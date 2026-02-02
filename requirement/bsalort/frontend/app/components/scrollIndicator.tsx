"use client"

import {useEffect, useState} from 'react'

export default function ScrollIndicator() {
  const [visible, setVisible] = useState(true)

  useEffect(() =>{
    const onScroll = () => {
      if (window.scrollY > 10) {
        setVisible(false)
        window.removeEventListener('scroll', onScroll)
      }
    }

    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className={`fixed bottom-6 flex -tanslate-x-1/2 transition-all duration-500 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}>
        <svg className="scrollIndicator" fill="#75b8f0ff" height="50px" width="50px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 512.015 512.015" xmlSpace="preserve"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M498.843,1.635c-7.979-3.328-17.152-1.472-23.253,4.629L256.006,225.848L36.422,6.264 c-6.101-6.101-15.275-7.957-23.253-4.629C5.19,4.92,0.006,12.728,0.006,21.347v234.667c0,5.675,2.24,11.093,6.251,15.083 l234.667,234.667c4.16,4.16,9.621,6.251,15.083,6.251c5.461,0,10.923-2.091,15.083-6.251l234.667-234.667 c4.011-3.989,6.251-9.408,6.251-15.083V21.347C512.006,12.728,506.822,4.92,498.843,1.635z"></path> </g> </g> </g></svg>
    </div>

  )
}