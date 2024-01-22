"use client"

import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'

function NavLink() {
  return (
    <div id="nav-links" className='flex justify-center items-center gap-20'>
        <Link href={"/"} className="left-0 top-[15px] opacity-50 hover:opacity-100 hover:underline transition-all text-white text-sm font-medium uppercase">Home</Link>
        <Link href={"/about-me"} className="left-[85px] top-[15px] opacity-50 hover:opacity-100 hover:underline transition-all text-white text-sm font-medium uppercase">About me</Link>
        <Link href={"/my-works"} className="left-[202px] top-[15px] opacity-50 hover:opacity-100 hover:underline transition-all text-white text-sm font-medium uppercase">My works</Link>
        <Button className='w-[138px] h-[47px] pl-[35px] pr-9 py-[15px] left-[329px] top-0 bg-black bg-opacity-50 rounded-[30px] border-2 border-white border-opacity-30'>
          <Link href={"/contact"} className="opacity-80 text-white text-sm font-bold uppercase">Contact</Link>
        </Button>
      </div>
  )
}

export default NavLink