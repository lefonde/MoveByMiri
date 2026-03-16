import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  transpilePackages: ['@yoga/ui', '@yoga/tokens', '@yoga/shared'],
}

export default nextConfig
