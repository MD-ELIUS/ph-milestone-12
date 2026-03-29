"use client"

import { useRouter } from 'next/navigation'
import React from 'react'

export default function Banner() {
    
    const router = useRouter()
    const handleStory = () => {
         const password = prompt("Please enter the password to share your story:");
         if (password == "1234") {
            router.push("/dashboard")
         }
    }
  return (
    <div className='text-center space-y-5 bg-linear-30 to-sky-100 from sky-30 p-2 '>
        <h2 className='text-4xl font-bold '>This is Banner</h2>
        <button onClick={handleStory} className='px-4 py-2 bg-red-400 text-white rounded cursor-pointer hover:bg-black'>Share-story</button>
    </div>
  )
}
