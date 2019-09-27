import React from 'react';
import { createUseStyles } from 'react-jss';
import NavMenuButton from './NavMenuButton';

const useStyles = createUseStyles(theme => ({
  nav: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    maxWidth: theme.layout.navBarMaxWidth,
  },

  logo: {
    flexGrow: 1,
  },

  navLinks: {
    display: 'none',
    // justifyContent: 'center',
    '& li': {
      display: 'inline-block',
      margin: '0 1rem',
    },
  },

  [`@media (min-width: ${theme.breakpoints.s}px)`]: {
    navLinks: {
      display: 'initial',
    },
    menuButton: {
      display: 'none',
    },
  },
}));

function Logo() {
  const classes = useStyles();

  return (
    <div className={classes.logo}>
      <a
        className={classes.logo}
        href="/"
        aria-label="Druid Street Labs' homepage"
      >
        <h1>Druid Street Labs</h1>
      </a>
    </div>
  );
}
function NavLinks() {
  const classes = useStyles();

  return (
    <ul className={classes.navLinks}>
      <li>
        <a href="/experiments" aria-label="Druid Street Labs' experiments">
          Experiments
        </a>
      </li>
      <li>
        <a href="/about" aria-label="Druid Street Labs' about page">
          About
        </a>
      </li>
    </ul>
  );
}

export default function NavBar({ navDrawerOpen, handleMenuButtonClick }) {
  const classes = useStyles();

  return (
    <nav className={classes.nav}>
      <Logo />
      <NavMenuButton
        onClick={handleMenuButtonClick}
        navDrawerOpen={navDrawerOpen}
      />
      <NavLinks />
    </nav>
  );
}
