"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import NavLink from './NavLink';

export default function Header() {
  const pathname = usePathname() ;
  if (pathname.includes('dashboard') )  { 
    return <></>
  }
  return (
    <div>
        <header className=" border-b-2 border-gray-500 px-4 py-3 flex justify-between items-center flex-wrap">
          <Link href="/" className='text-lg font-semibold'> Dev Story </Link> 

          <nav className='space-x-8'>
            <NavLink href="/about">about</NavLink>
            <NavLink href="/stories">stories</NavLink>
            <NavLink href="/tutorials">tutorials</NavLink>
            <NavLink href="/login">login</NavLink>
            <NavLink href="/register">register</NavLink>
          </nav>
        </header>

    </div>
  )
}
