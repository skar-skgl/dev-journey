import React from 'react'

const Sidebar = () => {
    return (

        <aside className="flex flex-col w-64 h-full px-5 py-8 overflow-y-auto bg-white border-r rtl:border-r-0 rtl:border-l dark:bg-neutral-900 dark:border-none">
            <a href="#">
            </a>

            <div className="flex flex-col relative justify-between flex-1">
                <nav className="-mx-3 space-y-6 content-center font-anonymous">
                    <div className="space-y-3  ">
                        <label className="px-3 text-xs  text-gray-500 uppercase dark:text-gray-400">peeps to follow</label>

                        <a className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" href="#">
                            <span className="mx-2 text-sm font-medium">Unity / C#</span>
                        </a>

                        <a className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" href="#">
                            <span className="mx-2 text-sm font-medium">Other cool cats</span>
                        </a>
                    </div>

                    <div className="space-y-3 ">
                        <label className="px-3 text-xs text-gray-500 uppercase dark:text-gray-400">tools</label>

                        <a className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" href="#">
                            <span className="mx-2 text-sm font-medium">Web tools</span>
                        </a>

                        <a className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" href="#">
                            <span className="mx-2 text-sm font-medium">Awesome assets</span>
                        </a>

                        <a className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" href="#">

                            <span className="mx-2 text-sm font-medium">Other cool stuff</span>
                        </a>
                    </div>

                    <div className="space-y-3 ">
                        <label className="px-3 text-xs text-gray-500 uppercase dark:text-gray-400">other stuff</label>

                        <a className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" href="#">
                            <span className="mx-2 text-sm font-medium">Inspiration</span>
                        </a>

                        <a className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" href="#">
                            <span className="mx-2 text-sm font-medium">Wut</span>
                        </a>
                    </div>
                </nav>
            </div>
        </aside>

    )
}

export default Sidebar