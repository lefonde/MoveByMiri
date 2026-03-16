import baseConfig from './base.js'

export default [
  ...baseConfig,
  {
    rules: {
      // Next.js specific overrides
      'react/no-unescaped-entities': 'off',
    },
  },
]
