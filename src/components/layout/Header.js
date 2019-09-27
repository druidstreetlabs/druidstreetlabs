import React, { useState } from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import NavBar from './NavBar';
import NavDrawer from './NavDrawer';
import { toggleScroll } from '../../utils/domScroll';

const useStyles = createUseStyles(theme => ({
  header: {
    display: 'flex',
    justifyContent: 'center',
    height: theme.layout.headerHeight,
    padding: '1rem 2rem',
    background: theme.colors.dark.dark,
    boxShadow: `0 0 10px ${theme.colors.dark.main}`,
    '& a': {
      color: '#fff',
      textDecoration: 'none',
    },
    '& a:hover': {
      color: theme.colors.dark.light,
    },
    '& h1': {
      display: 'inline-block',
    },
  },
  divider: {
    width: '100%',
    height: 3,
    background:
      'linear-gradient(90deg, rgba(255,0,0,1) 0%, rgba(255,255,0,1) 17%, rgba(0,255,0,1) 34%, rgba(0,255,255,1) 51%, rgba(0,0,255,1) 68%, rgba(255,0,255,1) 85%, rgba(255,0,0,1) 100%)',
    opacity: 0.5,
  },
}));

export default function Header() {
  const theme = useTheme();
  const classes = useStyles(theme);

  const [navDrawerOpen, setNavDrawerOpen] = useState(false);

  const handleMenuButtonClick = () => {
    toggleScroll(navDrawerOpen);
    setNavDrawerOpen(!navDrawerOpen);
  };

  return (
    <>
      <NavDrawer
        navDrawerOpen={navDrawerOpen}
        handleMenuButtonClick={handleMenuButtonClick}
      />
      <div className={classes.header}>
        <NavBar
          navDrawerOpen={navDrawerOpen}
          handleMenuButtonClick={handleMenuButtonClick}
        />
      </div>
      <div className={classes.divider} />
    </>
  );
}
