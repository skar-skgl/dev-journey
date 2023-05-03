import './globals.css'
import { Inter } from 'next/font/google'
import Header from './Header'


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
        <Header />
        {children}
        </body>
    </html>
  )
}
