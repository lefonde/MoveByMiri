'use client'

import { useEffect, useState } from 'react'
import { Button } from '../button/button'

export type NavbarProps = {
  onBookClick?: () => void
}

export function Navbar({ onBookClick }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-200 ${
        scrolled
          ? 'border-b border-[#E8E0D8]/60 bg-[rgba(250,248,245,0.95)] shadow-sm backdrop-blur-md'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <span className="font-serif text-lg font-medium tracking-wider text-[#3A3632]">
          MOOV by Miri
        </span>
        <a href="sms:9296273163?body=Hi%20Miri%2C%20I%27d%20like%20to%20book%20a%20class">
          <Button variant="primary" size="sm" onClick={onBookClick}>
            Book
          </Button>
        </a>
      </div>
    </nav>
  )
}
