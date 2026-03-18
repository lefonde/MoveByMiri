export const colors = {
  neutral: {
    50: '#FAF8F5',
    100: '#F5F0EB',
    200: '#E8E0D8',
    300: '#D4C9BD',
    400: '#B5A899',
    500: '#968A7B',
    600: '#756A5E',
    700: '#574E44',
    800: '#3A3632',
    900: '#2A2623',
    950: '#1A1816',
  },
  primary: {
    50: '#F4F6F0',
    100: '#E6EBD9',
    200: '#CDDAB5',
    300: '#AFC48B',
    400: '#8AAA63',
    500: '#6B8F44',
    600: '#556B2F',
    700: '#455825',
    800: '#374520',
    900: '#2D3A1B',
    950: '#172010',
  },
  accent: {
    50: '#FBF3EF',
    100: '#F5E1D8',
    200: '#ECC7B5',
    300: '#DFA88C',
    400: '#D08B66',
    500: '#C27E60',
    600: '#A86744',
    700: '#8B5238',
    800: '#6E4130',
    900: '#5A3628',
  },
  error: {
    50: '#FEF2F2',
    500: '#DC4A4A',
    700: '#B42525',
  },
  success: {
    50: '#F0FAF0',
    500: '#5A9A5A',
    700: '#3D7A3D',
  },
} as const

export const spacing = {
  0: '0',
  1: '0.25rem',
  2: '0.5rem',
  3: '0.75rem',
  4: '1rem',
  5: '1.25rem',
  6: '1.5rem',
  8: '2rem',
  10: '2.5rem',
  12: '3rem',
  16: '4rem',
  20: '5rem',
  24: '6rem',
  28: '7rem',
  32: '8rem',
  36: '9rem',
  40: '10rem',
} as const

export const fontSize = {
  xs: ['0.75rem', { lineHeight: '1rem' }],
  sm: ['0.875rem', { lineHeight: '1.25rem' }],
  base: ['1rem', { lineHeight: '1.5rem' }],
  lg: ['1.125rem', { lineHeight: '1.75rem' }],
  xl: ['1.25rem', { lineHeight: '1.75rem' }],
  '2xl': ['1.5rem', { lineHeight: '2rem' }],
  '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
  '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
  '5xl': ['3rem', { lineHeight: '3.25rem' }],
  '6xl': ['4rem', { lineHeight: '4.25rem' }],
  '7xl': ['5rem', { lineHeight: '5.25rem' }],
  // Fluid display scale — for hero wordmark and editorial headings
  display: ['clamp(3rem, 8vw, 6.5rem)', { lineHeight: '1.05' }],
  // Fluid numeric scale — for pricing declarations in Station 6
  numeric: ['clamp(3.5rem, 7vw, 5rem)', { lineHeight: '1.0' }],
} as const

export const fontFamily = {
  serif: ['Cormorant Garamond', 'Garamond', 'Georgia', 'serif'],
  sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
  mono: ['JetBrains Mono', 'Menlo', 'monospace'],
} as const

export const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
} as const

export const radii = {
  none: '0',
  sm: '0.125rem',
  md: '0.375rem',
  lg: '0.5rem',
  xl: '0.75rem',
  '2xl': '1rem',
  '3xl': '2rem',
  full: '9999px',
} as const

export const shadows = {
  sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
  md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
  lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
} as const

export const transitions = {
  fast: '150ms ease',
  normal: '200ms ease',
  slow: '300ms ease',
} as const
