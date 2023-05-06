import React from 'react'

const Sidebar = () => {
    return (

        <aside className="flex flex-col w-64 h-full px-5 overflow-y-auto bg-white border-r rtl:border-r-1 rtl:border-l dark:bg-neutral-900  dark:border-neutral-800">
            <div className="flex flex-col relative justify-between font-mono text-2xl py-7">
                <span className="text-amber-100">DevJourney<span className="text-neutral-200">();</span></span>
                
            </div>
            <div className="flex flex-col relative justify-between flex-1">
                <nav className="-mx-3 space-y-6 content-center font-anonymous">
                    <div className="space-y-3 ">
                        <label className="px-3 text-xs border-neutral-500 py-2 text-emerald-400 uppercase">peeps to follow</label>

                        <a className="flex border-y items-center px-3 py-2 border-neutral-800 transition-all duration-300 ease-in-elastic transform text-sky-200 hover:bg-gradient-to-r from-[#3CA55C] to-[#B5AC49] hover:text-zinc-900 hover:px-5" href="#">
                            <span className="mx-2 text-sm font-medium">Unity / C#</span>
                        </a>

                        <a className="flex border-y items-center px-3 py-2 border-neutral-800 transition-all duration-300 ease-in-elastic transform text-sky-200 hover:bg-gradient-to-r from-[#3CA55C] to-[#B5AC49] hover:text-zinc-900 hover:px-5" href="#">
                            <span className="mx-2 text-sm font-medium">Other cool cats</span>
                        </a>
                    </div>

                    <div className="space-y-3 ">
                        <label className="px-3 text-xs border-neutral-500 py-2 text-emerald-400 uppercase">tools</label>

                        <a className="flex border-y items-center px-3 py-2 border-neutral-800 transition-all duration-300 ease-in-elastic transform text-sky-200 hover:bg-gradient-to-r from-[#3CA55C] to-[#B5AC49] hover:text-zinc-900 hover:px-5" href="#">
                            <span className="mx-2 text-sm font-medium">Web tools</span>
                        </a>

                        <a className="flex border-y items-center px-3 py-2 border-neutral-800 transition-all duration-300 ease-in-elastic transform text-sky-200 hover:bg-gradient-to-r from-[#3CA55C] to-[#B5AC49] hover:text-zinc-900 hover:px-5" href="#">
                            <span className="mx-2 text-sm font-medium">Awesome assets</span>
                        </a>

                        <a className="flex border-y items-center px-3 py-2 border-neutral-800 transition-all duration-300 ease-in-elastic transform text-sky-200 hover:bg-gradient-to-r from-[#3CA55C] to-[#B5AC49] hover:text-zinc-900 hover:px-5" href="#">

                            <span className="mx-2 text-sm font-medium">Other cool stuff</span>
                        </a>
                    </div>

                    <div className="space-y-3 ">
                        <label className="px-3 text-xs border-neutral-500 py-2 text-emerald-400 uppercase">other stuff</label>

                        <a className="flex border-y items-center px-3 py-2 border-neutral-800 transition-all duration-300 ease-in-elastic transform text-sky-200 hover:bg-gradient-to-r from-[#3CA55C] to-[#B5AC49] hover:text-zinc-900 hover:px-5" href="#">
                            <span className="mx-2 text-sm font-medium">Inspiration</span>
                        </a>

                        <a className="flex border-y items-center px-3 py-2 border-neutral-800 transition-all duration-300 ease-in-elastic transform text-sky-200 hover:bg-gradient-to-r from-[#3CA55C] to-[#B5AC49] hover:text-zinc-900 hover:px-5" href="#">
                            <span className="mx-2 text-sm font-medium">Wut</span>
                        </a>
                    </div>
                </nav>
            </div>
        </aside>

    )
}

export default Sidebar