import { useEffect, useRef } from 'react'
import { Inter } from 'next/font/google'

import Nav from '../comps/nav'
import About from '../comps/About'
import Tech from '../comps/Tech'
import Contact from '../comps/Contact'
import Commits from '../comps/Commits'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const bgVideo = useRef(null)

  useEffect(() => {
    const video = bgVideo.current
    video.playbackRate = 0.5
    video.play()
  }, [])
  return (
    <>
    <main className="relative min-h-screen">
    <div className="text-white fixed w-full z-[100] p-4 bg-gradient-to-b from-black to-[rgba(0,0,0,0)]">
      <Nav />
    </div>

<div className='p-5 lg:p-24'>
<div className='flex flex-col lg:flex-row gap-3'>
      <About />
      <Tech />
    </div>

    <div className='flex flex-row gap-3 mt-3'>
      <Commits />
      <Contact />
    </div>
</div>
      

      <video
        ref={bgVideo}
        preload="auto"
        loop
        muted
        playsInline
        className="absolute top-0 left-0 z-0 w-full h-full object-cover"
      >
        <source src="/video/programmer-low.mp4" type="video/mp4" />
      </video>
      
    </main>
    </>
  )
}
