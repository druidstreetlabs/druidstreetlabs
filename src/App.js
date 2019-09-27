import React from 'react';
import Header from './components/layout/Header';
import Body from './components/layout/Body';
import Footer from './components/layout/Footer';
import { createUseStyles, ThemeProvider } from 'react-jss';
import theme from './theme/theme';

const useStyles = createUseStyles({
  app: {
    position: 'relative',
    minHeight: '100vh',
    overflowX: 'hidden',
  },
});

export default function App() {
  const classes = useStyles(theme);

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.app}>
        <Header />
        <Body />
        <Footer />
      </div>
    </ThemeProvider>
  );
}
