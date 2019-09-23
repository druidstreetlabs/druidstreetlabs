import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  header: {
    padding: '2rem',

    color: '#ffffff',
    '& h1': {
      display: 'inline-block',
    },
    '& a': {
      color: '#ffffff',
      transition: 'color 0.33s',
    },
  },
  nav: {
    width: '100%',
    '& ul': {
      display: 'flex',
      flexDirection: 'row-reverse',
      alignItems: 'center',
    },
    '& li:first-child': {
      flexGrow: 1,
      textAlign: 'right',
    },
    '& li:not(:first-child)': {
      margin: '0 1rem',
    },
  },
  divider: {
    margin: '20px auto 0 auto',
    width: '80%',
    height: 2,
    background: '#eeeeee',
    opacity: 0.5,
  },
});

export default function Header() {
  const classes = useStyles();

  return (
    <div className={classes.header}>
      <nav className={classes.nav}>
        <ul>
          <li>
            <a href="/" aria-label="Druid Street Labs' homepage">
              <h1>Druid Street Labs</h1>
            </a>
          </li>
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
      </nav>
      <div className={classes.divider} />
    </div>
  );
}
