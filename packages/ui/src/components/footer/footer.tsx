export type FooterProps = {
  className?: string
}

export function Footer({ className = '' }: FooterProps) {
  return (
    <footer
      className={`bg-[#3A3632] px-4 py-12 text-[#FAF8F5] sm:px-6 sm:py-16 lg:px-8 ${className}`}
    >
      <div className="mx-auto grid max-w-7xl gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {/* Contact */}
        <div className="space-y-3">
          <h3 className="font-serif text-lg font-medium tracking-wider">MOOV by Miri</h3>
          <address className="space-y-1 font-sans text-sm not-italic text-[#E8E0D8]">
            <p>Wesley Hills, NY</p>
            <p>
              <a
                href="tel:9296273163"
                className="transition-colors duration-200 hover:text-white hover:underline"
              >
                929-627-3163
              </a>
            </p>
            <p>
              <a
                href="https://instagram.com/moovbymiri"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors duration-200 hover:text-white hover:underline"
              >
                @moovbymiri
              </a>
            </p>
          </address>
        </div>

        {/* Legal */}
        <div className="space-y-3">
          <h3 className="font-serif text-lg font-medium tracking-wider">Legal</h3>
          <ul className="space-y-1 font-sans text-sm text-[#E8E0D8]">
            <li>
              <a
                href="/privacy"
                className="transition-colors duration-200 hover:text-white hover:underline"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="/terms"
                className="transition-colors duration-200 hover:text-white hover:underline"
              >
                Terms of Service
              </a>
            </li>
          </ul>
        </div>

        {/* Copyright */}
        <div className="flex items-end sm:col-span-2 lg:col-span-1">
          <p className="font-sans text-sm text-[#B5A899]">
            &copy; 2026 MOOV by Miri. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
