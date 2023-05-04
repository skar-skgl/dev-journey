import './globals.css'
import { Inter } from 'next/font/google'
import Header from './Header'
import Sidebar from './Sidebar'


const inter = Inter({ subsets: ['latin'] })


export const metadata = {
  title: 'Dev Journey',
  description: 'Tools and resources for developers',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div className="flex flex-row relative min-h-screen">
        <div><Sidebar/></div>
        <div><Header /></div>

        {children}
        </div>
      </body>
    </html>
  )
}
