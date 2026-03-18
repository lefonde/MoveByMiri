import type { Metadata } from 'next'
import { Cormorant_Garamond, Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-serif',
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'MOOV by Miri — Boutique Pilates & Strength in Wesley Hills',
  description:
    'Small classes. Real attention. A space that feels like yours. Boutique pilates and strength studio in Wesley Hills, NY.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${cormorant.variable}`}>
      <body className="bg-[#FAF8F5] text-[#3A3632] font-sans antialiased">{children}</body>
    </html>
  )
}
