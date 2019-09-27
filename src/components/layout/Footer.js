import React from 'react';
import { getCurYear } from '../../utils/datetime';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  footer: {
    display: 'flex',
    justifyContent: 'center',
    padding: '.75rem',
    background: '#424242',
    color: '#fff',
    fontSize: '.75rem',
    '& span': {
      display: 'inline-block',
    },
  },
});

export default function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.footer}>
      <div>
        <span role="img" aria-label="Test tube">
          🧪
        </span>{' '}
        Druid Street Labs © {getCurYear()}
      </div>
    </div>
  );
}
