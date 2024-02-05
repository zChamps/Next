import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const NavBar = () => {
  return (
    <nav className='flex px-20 gap-8 bg-[aqua] mt-2 items-center justify-between'>
        <div className=' flex items-center gap-5'>
        <Image src={"/images/logo.png"} alt='food image ' width={80} height={80} priority/>
        <h1 className='text-2xl' >Next Level Food</h1>
        </div>
        <div className=' flex items-center gap-5'>
        <Link href={"/"}>HOME</Link>
        <Link href={"/meals"}>MEALS</Link>
        <Link href={"/meals/share"}>SHARE MEALS</Link>
        <Link href={"/community"}>COMMUNITY</Link>
        </div>
    </nav>
  )
}

export default NavBar