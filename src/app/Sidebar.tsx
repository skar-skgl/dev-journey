import Link from 'next/link'
import React from 'react'

const Sidebar = () => {
    return (
        <aside className="flex flex-col fixed mt-16 w-64 h-screen pt-9 px-5 overflow-y-auto border-r rtl:border-r-1 rtl:border-l bg-neutral-900  border-neutral-800">
            <div className="flex flex-col relative justify-between flex-1">
                <nav className="-mx-3 space-y-6 content-center font-anonymous">
                    <div className="space-y-3 ">
                        <label className="px-3 text-xs border-neutral-500 py-2 text-emerald-300 uppercase">peeps to follow</label>

                        <Link href={'/peeps-to-follow/unity-csharp'}>
                            <p className="flex border-y items-center px-3 py-2 border-neutral-800 transition-spacing duration-300 ease-in-elastic text-sky-200 hover:bg-[#1b1b1b] hover:text-amber-100 hover:px-5">
                                <span className="mx-2 text-sm font-medium">Unity / C#</span>
                            </p></Link>

                        <Link href={'/peeps-to-follow/others'}>
                            <p className="flex border-y items-center px-3 py-2 border-neutral-800 transition-spacing duration-300 ease-in-elastic transform text-sky-200 hover:bg-[#1b1b1b] hover:text-amber-100 hover:px-5">
                                <span className="mx-2 text-sm font-medium">Other cool cats</span>
                            </p></Link>
                    </div>

                    <div className="space-y-3 ">
                        <label className="px-3 text-xs border-neutral-500 py-2 text-emerald-300 uppercase">tools</label>
                        <Link href={'/tools/web'}>
                        <p className="flex border-y items-center px-3 py-2 border-neutral-800 transition-spacing duration-300 ease-in-elastic transform text-sky-200 hover:bg-[#1b1b1b] hover:text-amber-100 hover:px-5" href="#">
                            <span className="mx-2 text-sm font-medium">Web tools</span>
                        </p></Link>

                        <a className="flex border-y items-center px-3 py-2 border-neutral-800 transition-spacing duration-300 ease-in-elastic transform text-sky-200 hover:bg-[#1b1b1b] hover:text-amber-100 hover:px-5" href="#">
                            <span className="mx-2 text-sm font-medium">Awesome assets</span>
                        </a>

                        <a className="flex border-y items-center px-3 py-2 border-neutral-800 transition-spacing duration-300 ease-in-elastic transform text-sky-200 hover:bg-[#1b1b1b] hover:text-amber-100 hover:px-5" href="#">

                            <span className="mx-2 text-sm font-medium">Other cool stuff</span>
                        </a>
                    </div>

                    <div className="space-y-3 ">
                        <label className="px-3 text-xs border-neutral-500 py-2 text-emerald-300 uppercase">other stuff</label>

                        <a className="flex border-y items-center px-3 py-2 border-neutral-800 transition-spacing duration-300 ease-in-elastic transform text-sky-200 hover:bg-[#1b1b1b] hover:text-amber-100 hover:px-5" href="#">
                            <span className="mx-2 text-sm font-medium">Inspiration</span>
                        </a>

                        <a className="flex border-y items-center px-3 py-2 border-neutral-800 transition-spacing duration-300 ease-in-elastic transform text-sky-200 hover:bg-[#1b1b1b] hover:text-amber-100 hover:px-5" href="#">
                            <span className="mx-2 text-sm font-medium">Wut</span>
                        </a>
                    </div>
                </nav>
            </div>
        </aside>
    )
}

export default Sidebar