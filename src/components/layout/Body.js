import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  body: {
    padding: '2rem',
    minHeight: '100vh',
  },
});

export default function Body() {
  const classes = useStyles();

  return <div className={classes.body}>{/*<Portfolio />*/}</div>;
}
