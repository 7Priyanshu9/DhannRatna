import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const Sidebar = ({user}:SiderbarProps) => {
  return (
    <section className="sidebar">
        <nav className="flex flex-col gap-4">
            <Link className='mb-12 cursor-pointer items-center gap-2' href="/">
            <Image 
            src="/icons/logo.svg"
            width={34}
            height={34}
            />
            </Link>
        </nav>
    </section>
  )
}

export default Sidebar