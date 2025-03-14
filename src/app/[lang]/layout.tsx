'use client'
import './globals.css'
import { ThemeProvider } from 'next-themes';
import { Analytics } from "@vercel/analytics/react"

import NewNavBar from './components/newNavBar';

 
/*
export const metadata: Metadata = {
  title: 'Ingila-Portfolio',
  description: 'Generated by Next14.0.1',
}
*/
export default function RootLayout({children, params: {lang}}: {children: React.ReactNode,  params: {lang: string}}) {  

  return (
    // <html lang={lang} className = "dark">
    <html lang="en" className="dark" style={{ colorScheme: 'dark' }}>

    <body className='dark:bg-gradient-to-b from-black via-gray-950 to-gray-700'>

    <ThemeProvider attribute='class' defaultTheme='dark'>
    <main className=' min-h-screen min-w-screen ' >
    <NewNavBar />

    <div className='p-10 dark:text-gray-300'>
            {children}
            <Analytics />
            </div>
        </main>
      </ThemeProvider>   
      </body>
  </html>
  )
}
