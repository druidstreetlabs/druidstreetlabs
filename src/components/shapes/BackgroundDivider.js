import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  divider: {
    position: 'absolute',
    top: '-10vw',
    left: '-12vw',
    width: '150vw',
    height: '75vh',
    background:
      'linear-gradient(45deg, rgba(124,89,192,1) 0%, rgba(92,108,192,1) 25%, rgba(77,152,181,1) 65%)',
    transform: 'rotate(10deg)',
  },
});

export default function BackgroundDivider() {
  const classes = useStyles();

  return <div className={classes.divider} />;
}
