const GLOBALS = {
  BASE_SPACING: 16,
};

const theme = {
  colors: {
    dark: {
      light: '#e0e0e0',
      main: '#757575',
      dark: '#212121',
    },
  },
  layout: {
    headerHeight: 72,
    navBarMaxWidth: 1280,
    navDrawerWidth: 250,
  },
  breakpoints: {
    s: 600,
  },
  zIndex: {
    header: 1000,
    headerNavDrawer: 1500,
  },
  spacing: (multiple = 1) => GLOBALS.BASE_SPACING * multiple,
};

export default theme;
