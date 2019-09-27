import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import clsx from 'clsx';
import NavMenuButton from './NavMenuButton';

const useStyles = createUseStyles(theme => ({
  navDrawer: {
    position: 'absolute',
    left: '100%',
    width: theme.layout.navDrawerWidth,
    height: '100vh',

    background: theme.colors.dark.dark,
    zIndex: theme.zIndex.headerNavDrawer,
    transition: 'transform .2s ease-out',
  },
  navDrawerOpen: {
    transform: `translate(-${theme.layout.navDrawerWidth}px, 0)`,
  },

  navMenuButtonContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: theme.layout.headerHeight,
    padding: '1rem 2rem',
  },

  menu: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    padding: '1rem 2rem',
    '& a': {
      color: '#fff',
      textDecoration: 'none',
    },
    '& a:hover': {
      color: theme.colors.dark.light,
    },
  },

  menuItem: {
    margin: '1rem 0',
  },

  [`@media (min-width: ${theme.breakpoints.s}px)`]: {
    navDrawer: {
      display: 'none',
    },
  },
}));

export default function NavDrawer({ navDrawerOpen, handleMenuButtonClick }) {
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <nav
      className={clsx(
        classes.navDrawer,
        navDrawerOpen && classes.navDrawerOpen
      )}
    >
      <div className={classes.navMenuButtonContainer}>
        <NavMenuButton
          onClick={handleMenuButtonClick}
          navDrawerOpen={navDrawerOpen}
        />
      </div>
      <ul className={classes.menu}>
        <li className={classes.menuItem}>
          <a href="/experiments" aria-label="Druid Street Labs' experiments">
            Experiments
          </a>
        </li>
        <li className={classes.menuItem}>
          <a href="/about" aria-label="Druid Street Labs' about page">
            About
          </a>
        </li>
      </ul>
    </nav>
  );
}
