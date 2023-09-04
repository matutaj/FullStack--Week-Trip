import './globals.css'
import { NextAuthProvider } from '@/providers/auth'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import Header from '../../src/components/Header'
import Footer from '@/components/Footer'

const poppins = Poppins({
  subsets: ['latin'], weight: [
    '400',
    '500',
    '600',
    '700',
    '800',
    '900'
  ]
})

export const metadata: Metadata = {
  title: 'FSw trips',
  description: 'Sistema de Reserve de Viagens',
}

export default function RootLayout({

  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <NextAuthProvider>
          <Header />
          {children}
          <Footer />
        </NextAuthProvider>
      </body>
    </html>
  )
}
