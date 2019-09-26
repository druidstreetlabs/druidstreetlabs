import React from 'react';
import Hexagon from '../shapes/Hexagon';
import { createUseStyles } from 'react-jss';
import BackgroundCurtain from '../shapes/BackgroundCurtain';
import Circle from '../shapes/Circle';

const useStyles = createUseStyles({
  background: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100vw',
    maxWidth: '100%',
    height: '100vh',
    background:
      'linear-gradient(45deg, rgba(124,89,192,1) 0%, rgba(92,108,192,1) 25%, rgba(77,152,181,1) 65%)',
    zIndex: -1,
    overflow: 'hidden',
  },

  // Shapes
  circle1: {
    position: 'absolute',
    top: -500,
    right: -500,
    border: '5px solid transparent',
    borderColor: '#5c6cc0 transparent',
    opacity: 0.5,
    animation: '$spin 15s linear 0s infinite running',
  },
  circle2: {
    position: 'absolute',
    top: -400,
    right: -400,
    border: '15px solid transparent',
    borderColor: '#5c6cc0 transparent',
    opacity: 0.33,
    animation: '$spin 10s linear 0s infinite reverse running',
  },
  circle3: {
    position: 'absolute',
    top: -200,
    right: -200,
    border: '25px solid transparent',
    borderColor: 'transparent #5c6cc0',
    opacity: 0.25,
    animation: '$spin 2.5s linear 0s infinite running',
  },

  // Animations
  '@keyframes spin': {
    '0%': { transform: 'rotate(0deg)' },
    '100%': { transform: 'rotate(359deg)' },
  },
});

export default function Background() {
  const classes = useStyles();

  return (
    <div className={classes.background}>
      {/*<BackgroundDivider color="linear-gradient(45deg, rgba(124,89,192,1) 0%, rgba(92,108,192,1) 50%, rgba(77,152,181,1) 100%)" />*/}

      <Circle radius={1000} className={classes.circle1} />
      <Circle radius={800} className={classes.circle2} />
      <Circle radius={400} className={classes.circle3} />

      <Hexagon
        top={100}
        left={210}
        width={50}
        mainColor="#21359D"
        topColor="#21359D"
        bottomColor="#21359D"
      />

      <Hexagon
        top={100}
        left={100}
        width={50}
        mainColor="#481D9C"
        topColor="#481D9C"
        bottomColor="#481D9C"
      />
      <Hexagon
        top={195}
        left={155}
        width={50}
        mainColor="#146E90"
        topColor="#146E90"
        bottomColor="#146E90"
      />

      <Hexagon
        top={100}
        left={-10}
        width={50}
        mainColor="#307E9C"
        topColor="#307E9C"
        bottomColor="#307E9C"
      />
      <Hexagon
        top={195}
        left={45}
        width={50}
        mainColor="613CAA"
        topColor="613CAA"
        bottomColor="613CAA"
      />
      <Hexagon
        top={290}
        left={100}
        width={50}
        mainColor="9D7FD7"
        topColor="9D7FD7"
        bottomColor="9D7FD7"
      />

      <BackgroundCurtain />
    </div>
  );
}
