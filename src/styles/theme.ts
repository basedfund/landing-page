import { createTheme } from '@mui/material/styles';

let sirTheme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 768,
      md: 1025,
      lg: 1280,
      xl: 1536
    }
  },
  palette: {
    primary: {
      main: '#4DB2A8',
      light: '#4DB2A8', // unused
      dark: '#4DB2A8', // unused
      contrastText: '#ffffff'
    },
    secondary: {
      main: '#C8C7D8',
      light: '#002349', // unused
      dark: '#C8C7D8' // unused
    },
    text: {
      primary: '#ffffff',
      secondary: '#f2f2f2',
      disabled: '#ffffff', // unused
    },
    divider: 'rgba(0, 0, 0, 0.12)',
    action: {
      active: 'rgba(0, 0, 0, 0.54)', // unused
      hover: 'rgba(0, 0, 0, 0.04)', // unused
      selected: 'rgba(0, 0, 0, 0.08)', // unused
      disabled: 'rgba(0, 0, 0, 0.38)', // unused
      disabledBackground: 'rgba(0, 0, 0, 0.05)', // unused
      focus: 'rgba(0, 0, 0, 0.12)' // unused
    },
    error: {
      main: '#C8102E', // unused
      dark: '#8F0007', // unused
      contrastText: '#FFFFFF' // unused
    },
    warning: {
      main: '#FF9013', // unused
      dark: '#C66100', // unused
      contrastText: '#FFFFFF' // unused
    },
    info: {
      main: '#42B3E0', // unused
      dark: '#095688', // unused
      light: '#E1F5FA', // unused
      contrastText: '#FFFFFF' // unused
    },
    success: {
      main: '#2E7D32', // unused
      dark: '#1B5E20', // unused
      contrastText: '#FFFFFF', // unused
      light: '#4CAF50' // unused
    },
    background: {
      paper: '#FFFFFF', // unused
      default: '#FFFFFF' // unused
    },
    grey: {
      100: '#F5F5F5', // unused
      300: '#E0E0E0', // unused
      400: '#D6D6D6', // unused
      500: '#9E9E9E', // unused
      600: '#757575', // unused
      700: '#666666' // unused
    }
  },
  typography: {
    h1: {
      fontSize: '44px', // unused
      lineHeight: '46px', // unused
      fontFamily: 'FreightBig,Serif,Arial,Sans-Serif', // unused
      letterSpacing: '0', // unused
      '@media (min-width: 768px)': { // unused
        fontSize: '50px', // unused
        lineHeight: '54px' // unused
      }, // unused
      '@media (min-width: 1280px)': { // unused
        fontSize: '72px', // unused
        lineHeight: '72px' // unused
      } // unused
    },
    h2: {
      fontFamily: 'FreightBig,Serif,Arial,Sans-Serif', // unused
      fontSize: '38px', // unused
      fontWeight: 400, // unused
      lineHeight: '44px', // unused
      letterSpacing: '.8px', // unused
      '@media (min-width: 1280px)': { // unused
        fontSize: '46px', // unused
        lineHeight: '52px', // unused
        letterSpacing: '1px' // unused
      } // unused
    },
    h3: {
      fontFamily: 'FreightBig, Serif, Arial, Sans-Serif', // unused
      fontSize: '30px', // unused
      fontWeight: '400', // unused
      lineHeight: '34px', // unused
      letterSpacing: '1px', // unused
      '@media (min-width: 768px)': { // unused
        fontSize: '32px', // unused
        lineHeight: '40px', // unused
        letterSpacing: '1px' // unused
      } // unused
    },
    h4: {
      fontFamily: 'Mercury,Arial,Sans-Serif', // unused
      fontSize: '24px', // unused
      fontWeight: 400, // unused
      lineHeight: '32px', // unused
      letterSpacing: 0, // unused
      '@media (min-width: 768px)': { // unused
        fontSize: '28px', // unused
        lineHeight: '34px' // unused
      } // unused
    },
    h5: {
      fontFamily: 'Mercury,Arial,Sans-Serif', // unused
      fontSize: '20px', // unused
      fontWeight: 400, // unused
      lineHeight: '24px', // unused
      letterSpacing: 0, // unused
      '@media (min-width: 768px)': { // unused
        fontSize: '22px', // unused
        lineHeight: '28px' // unused
      } // unused
    },
    h6: {
      fontFamily: 'Mercury,Arial,Sans-Serif', // unused
      fontSize: '18px', // unused
      fontWeight: 400, // unused
      lineHeight: '24px', // unused
      letterSpacing: 0 // unused
    },
    body1: {
      fontFamily: 'Space Mono', // unused
      fontSize: '16px', // unused
      fontWeight: 400, // unused
      lineHeight: '24px', // unused
      letterSpacing: 0 // unused
    }
  },
  components: {
  }
});

export default sirTheme;
