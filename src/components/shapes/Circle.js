import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  circle: props => ({
    width: props.radius,
    height: props.radius,
    borderRadius: '50%',
    ...props.styles,
  }),
});

export default function Circle({ radius, className, styles, ...rest }) {
  const classes = useStyles({ radius, styles });

  return <div className={`${classes.circle} ${className}`} {...rest} />;
}
