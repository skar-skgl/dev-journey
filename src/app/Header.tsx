'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const getCurrentPageName = (path: string) => {
    const parts = path.split('/').filter(Boolean);
    return parts[parts.length - 1] || 'Home';
}

const Header = () => {
    const path: string = usePathname()
    const currentPageName = getCurrentPageName(path);

    return (
        <main className="flex flex-col fixed w-screen h-16 bg-neutral-900">
            <div className="flex flex-row relative py-4 font-mono text-2xl px-6">
                <div className="flex flex-row relative py-4 font-mono text-2xl px-6">
                    <Link href={'/'}>
                        <p className="group/item text-amber-100 transition-all duration-300 ease-in-elastic hover:px-2 hover:group-">
                            <span className="">byteclub</span>
                            <span className="text-xs text-neutral-900 transition-all duration-200 ease-in-out group-hover/item:text-neutral-500">.dev/</span>
                        </p>
                    </Link>
                </div>
                <div className="flex flex-row relative py-4 font-mono text-2xl px-6">
                    <Link href={path}>
                    <p className="group/item text-amber-100 transition-all duration-300 ease-in-elastic hover:px-2 hover:group-">..{path}</p>
                    </Link>
                </div>
            </div>
        </main>
    )
}

export default Header
