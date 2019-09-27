import React from 'react';
import IconButton from '../forms/IconButton';
import { ReactComponent as CloseIcon } from '../../assets/images/svg/close.svg';
import { ReactComponent as MenuIcon } from '../../assets/images/svg/menu.svg';
import { createUseStyles, useTheme } from 'react-jss';

const useStyles = createUseStyles(theme => ({
  menuButton: {
    color: '#fff',
    '& svg': {
      fill: '#fff',
    },
    '&:hover svg': {
      fill: '#e0e0e0',
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

export default function MenuButton({ navDrawerOpen, ...rest }) {
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <IconButton
      className={classes.menuButton}
      aria-label="Toggle navigation menu"
      {...rest}
    >
      {navDrawerOpen ? (
        <CloseIcon viewBox="0 0 24 24" width="2rem" height="2rem" />
      ) : (
        <MenuIcon viewBox="0 0 24 24" width="2rem" height="2rem" />
      )}
    </IconButton>
  );
}
