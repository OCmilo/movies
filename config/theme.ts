const colors = {
  'Rosso Corsa': 'cc1100',
  'Black Chocolate': '0c120c',
  'Celadon Blue': '0081a7',
  'Mint Cream': 'eff9f0',
  'Middle Blue Green': '99e1d9',
}

const theme = {
  colors: {
    primary: colors['Rosso Corsa'],
    secondary: colors['Celadon Blue'],
    tertiary: colors['Middle Blue Green'],
    black: colors['Black Chocolate'],
    white: colors['Mint Cream'],
  },
  fontSizes: {
    xs: '0.75rem',
    sm: '0.875rem',
    md: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem',
    '5xl': '3rem',
    '6xl': '4rem',
  },
  font: 'Helvetica, Arial, sans-serif',
}

export { theme as default }
