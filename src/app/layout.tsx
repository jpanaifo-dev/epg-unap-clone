import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Providers } from './providers'
import { CustomNavbar, Footer } from '@/components/general'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Escuela de Postgrado UNAP'
}

export default function RootLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <Providers>
          <CustomNavbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
