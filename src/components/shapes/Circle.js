import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  '@keyframes spin': {
    '0%': { transform: 'rotate(0deg)' },
    '100%': { transform: 'rotate(359deg)' },
  },
  circle: props => ({
    position: 'absolute',
    width: props.radius,
    height: props.radius,
    borderRadius: '50%',
    animation: '$spin 5s linear 0s infinite running',
    ...props.styles,
  }),
});

export default function Circle(props) {
  const classes = useStyles(props);

  return <div className={classes.circle} />;
}
