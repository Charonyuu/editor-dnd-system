import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import DragComponentProvider from '@/components/DragProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '拖拉自訂模板網',
  description: '這是一個拖拉自訂模板網',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <DragComponentProvider>
          {children}
        </DragComponentProvider>
      </body>
    </html>
  )
}
