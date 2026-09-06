import { createTheme } from '@mui/material/styles'

export const theme = createTheme({
  colorSchemes: {
    light: {
      palette: {
        primary: {
          main: '#2c5282',
          light: '#4299e1',
          dark: '#1a365d',
          contrastText: '#ffffff'
        },
        secondary: {
          main: '#48bb78',
          contrastText: '#ffffff'
        },
        background: {
          default: '#4a5568',
          paper: '#ffffff'
        },
        text: {
          primary: '#2d3748',
          secondary: '#4a5568',
          disabled: '#718096'
        },
        divider: '#e2e8f0'
      }
    },
    dark: {
      palette: {
        primary: {
          main: '#63b3ed',
          light: '#90cdf4',
          dark: '#4299e1',
          contrastText: '#1a202c'
        },
        secondary: {
          main: '#68d391',
          contrastText: '#1a202c'
        },
        background: {
          default: '#1a202c',
          paper: '#2d3748'
        },
        text: {
          primary: '#e2e8f0',
          secondary: '#cbd5e0',
          disabled: '#a0aec0'
        },
        divider: '#4a5568'
      }
    }
  }
})