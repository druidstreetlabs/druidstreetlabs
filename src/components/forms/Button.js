import React from 'react';
import { createUseStyles } from 'react-jss';
import clsx from 'clsx';

const useStyles = createUseStyles({
  button: {
    borderRadius: '5px',
    cursor: 'pointer',
  },
});

export default function Button({ children, className, onClick, ...rest }) {
  const classes = useStyles();

  const handleClick = () => {
    onClick();
  };

  const handleKeyPress = e => {
    if (e.key === 'Enter') onClick();
  };

  return (
    <div
      role="button"
      tabIndex={0}
      className={clsx(classes.button, className)}
      onClick={handleClick}
      onKeyPress={handleKeyPress}
      {...rest}
    >
      {children}
    </div>
  );
}
