import Link from 'next/link'
import React from 'react'

export default function layout( {children} ) {
  return (
    <div className='grid grid-cols-12 gap-5 min-h-screen'>
       <div className='col-span-3 border-r-2'>
         <h2>Navigation</h2>
         <div className='flex flex-col gap-5 mt-10 mr-4'>
            <Link className='py-2 px-4 w-full bg-green-500' href="/dashboard/add-story">Add Story</Link>
            <Link className='py-2 px-4 w-full bg-green-500' href="/dashboard/my-profile">My Profile</Link>
            <Link className='py-2 px-4 w-full bg-green-500' href="/dashboard/settings">Settings</Link>
         </div>
       </div>

       <div className='col-span-9'>
         {children}
       </div>
    </div>
  )
}
