import './styles/globals.scss'
import type {Metadata} from 'next'
import {Archivo} from 'next/font/google'

const archivo = Archivo({subsets: ['latin']})

export const metadata: Metadata = {
  title: 'AI Startup Generator',
  description: 'AI Startup Generator',
}

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
    <body className={archivo.className}>{children}</body>
    </html>
  )
}
