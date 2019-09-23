import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  curtain: {
    position: 'absolute',
    top: '50vh',
    left: 0,
    width: '150vw',
    height: '50vh',
    background: '#ffffff',
    transform: 'rotate(12deg)',
    transformOrigin: 'top left',
  },
});

export default function BackgroundCurtain() {
  const classes = useStyles();

  return <div className={classes.curtain} />;
}
