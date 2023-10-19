import './globals.css'
import { Inter } from 'next/font/google'
import Header from './Header'
import Sidebar from './Sidebar'
require('dotenv').config()


const inter = Inter({ subsets: ['latin'] })


export const metadata = {
  title: 'Byteclub',
  description: 'Tools and resources for developers',
}

const RootLayout = ({children}: {children: React.ReactNode}) =>
{
  return (
    <html lang="en">
      <body className='scrollbar'>

        <div className="min-h-screen bg-neutral-900">
        <div><Header /></div>
        <div><Sidebar/></div>
        <div className="ml-64">
        {children}
        </div>
        </div>

      </body>
    </html>
  )
}
export default RootLayout
