import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  hexagonContainer: props => ({
    position: 'absolute',
    top: props.top || 'inherit',
    left: props.left || 'inherit',
  }),
  hexagon: props => ({
    position: 'relative',
    width: props.width,
    height: props.width / 1.73,
    background: props.mainColor || props.color,
    '&:before, &:after': {
      content: '""',
      position: 'absolute',
      width: 0,
      borderLeft: `${props.width / 2}px solid transparent`,
      borderRight: `${props.width / 2}px solid transparent`,
    },
    '&:before': {
      bottom: '100%',
      borderBottom: `${props.width / (1.73 * 2)}px solid ${props.topColor ||
        props.color}`,
    },
    '&:after': {
      top: '100%',
      width: 0,
      borderTop: `${props.width / (1.73 * 2)}px solid ${props.bottomColor ||
        props.color}`,
    },
  }),
});

export default function Hexagon(props) {
  const classes = useStyles(props);

  return (
    <div className={classes.hexagonContainer}>
      <div className={classes.hexagon} />
    </div>
  );
}
