import Header from './Header'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'My Website',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <title>Brian's website</title>
      </head>
      <body className={inter.className}>
        <Header/>
        {children}
        </body>
    </html>
  )
}
