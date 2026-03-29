import Title from '@/components/Title'
import Link from 'next/link'
import React from 'react'

export default function page() {
  return (
    <div>
       <Title>Welcome to About</Title>
       <nav className='space-x-8'>
            <Link href="/about/contact">contact</Link>
            <Link href="/about/teams">teams</Link>
            
          </nav>
    </div>
   
  )
}
