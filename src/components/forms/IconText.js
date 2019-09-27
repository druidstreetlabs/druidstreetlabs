import React from 'react';
import { createUseStyles } from 'react-jss';
import Button from './Button';
import clsx from 'clsx';

const useStyles = createUseStyles({
  iconButton: {
    padding: '.5rem 1rem',
  },
});

export default function IconButton({ children, className, ...rest }) {
  const classes = useStyles();

  return (
    <Button className={clsx(classes.iconButton, className)} {...rest}>
      {children}
    </Button>
  );
}
