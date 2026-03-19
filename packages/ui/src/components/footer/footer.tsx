export type FooterProps = {
  className?: string
}

export function Footer({ className = '' }: FooterProps) {
  return (
    <footer className={`bg-[#1C1512] px-6 py-8 text-center ${className}`}>
      {/* flex-wrap ensures no single-line overflow at 375px */}
      <p
        className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 font-sans text-[#FAF8F5]/60"
        style={{ fontSize: '0.7rem', letterSpacing: '0.1em' }}
      >
        <span>MOOV by Miri</span>
        <span aria-hidden="true">·</span>
        <span>Wesley Hills, NY</span>
        <span aria-hidden="true">·</span>
        <a
          href="tel:9296273163"
          className="transition-colors duration-150 hover:text-[#FAF8F5]/90 focus:outline-none focus-visible:rounded focus-visible:ring-2 focus-visible:ring-[#FAF8F5]/60"
        >
          929-627-3163
        </a>
        <span aria-hidden="true">·</span>
        <a
          href="https://instagram.com/moovbymiri"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="MOOV by Miri on Instagram (opens in new tab)"
          className="transition-colors duration-150 hover:text-[#FAF8F5]/90 focus:outline-none focus-visible:rounded focus-visible:ring-2 focus-visible:ring-[#FAF8F5]/60"
        >
          @moovbymiri
        </a>
        <span aria-hidden="true">·</span>
        <span>24-hr cancellation policy</span>
        <span aria-hidden="true">·</span>
        <a
          href="/privacy"
          className="transition-colors duration-150 hover:text-[#FAF8F5]/90 focus:outline-none focus-visible:rounded focus-visible:ring-2 focus-visible:ring-[#FAF8F5]/60"
        >
          Privacy
        </a>
        <span aria-hidden="true">·</span>
        <span>© 2025 MOOV by Miri</span>
      </p>
    </footer>
  )
}
