import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  transpilePackages: ['@yoga/ui', '@yoga/tokens', '@yoga/shared'],
  output: 'export',
  images: { unoptimized: true },
}

export default nextConfig
