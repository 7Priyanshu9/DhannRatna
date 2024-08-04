'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { sidebarLinks } from '@/constants'
import { cn } from '@/lib/utils'
import { usePathname } from 'next/navigation'
const Sidebar = ({user}:SiderbarProps) => {

  const pathName = usePathname();
  // this will give the path//
  return (
    <section className="sidebar">
        <nav className="flex flex-col gap-4">
            <Link href="/" className='mb-12 cursor-pointer items-center gap-2' >
            <Image 
            src="./icons/logo1.svg"
            width={34}
            height={34}
            alt='DhannRatna Logo'
            className='size-[24px] max-xl:size-14'
            />
            <h1 className='sidebar-logo'>DhannaRatna</h1>
            </Link>


            {sidebarLinks.map((item)=>{
// here we are checking either we are in current path or not 
              const isActive = pathName === item.route || pathName.startsWith(`${item.route}/`)
              return (
                <Link href={item.route} key={item.label} className={cn('sidebar-link',{'bg-bank-gradient': isActive})}>
                  <div className="relative size-6">
                    <Image 
                    src={item.imgURL}
                    alt={item.label}
                    fill
                    />
                  </div>

                </Link>
              )
            })}
        </nav>
    </section>
  )
}

export default Sidebar