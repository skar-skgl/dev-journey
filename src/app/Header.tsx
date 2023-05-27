'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'



const Header = () => {
    const path = usePathname()
    return (
        <main className="flex flex-col fixed w-screen h-16 bg-neutral-900 border-b rtl:border-b-1 rtl:border-l border-neutral-800">
            <div className="flex flex-row relative py-4 font-mono text-2xl px-6">
                <Link href={'/'}>
                    <p className="group/item text-amber-100 transition-all duration-300 ease-in-elastic hover:px-2 hover:group-">
                    <span className="">byteclub</span>
                    <span className="text-xs text-neutral-900 transition-all duration-200 ease-in-out group-hover/item:text-neutral-500 ">.dev</span>
                    </p>
                </Link>
            </div>
        </main>
    )
}

export default Header