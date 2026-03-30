import Link from 'next/link'
import React from 'react'

export default function Header() {
  return (
    <div>
        <header className=" border-b-2 border-gray-500 px-4 py-3 flex justify-between items-center flex-wrap">
          <Link href="/" className='text-lg font-semibold'> Dev Story </Link> 

          <nav className='space-x-8'>
            <Link href="/about">about</Link>
            <Link href="/stories">stories</Link>
            <Link href="/tutorials">tutorials</Link>
            <Link href="/login">login</Link>
            <Link href="/register">register</Link>
          </nav>
        </header>

    </div>
  )
}
