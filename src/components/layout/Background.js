import React from 'react';
import Hexagon from '../shapes/Hexagon';
import { createUseStyles } from 'react-jss';
import BackgroundCurtain from '../shapes/BackgroundCurtain';
import Circle from '../shapes/Circle';

const useStyles = createUseStyles({
  background: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    background:
      'linear-gradient(45deg, rgba(124,89,192,1) 0%, rgba(92,108,192,1) 25%, rgba(77,152,181,1) 65%)',
    zIndex: -1,
  },
  canvas: {
    position: 'relative',
    width: '100vw',
    height: '100vh',
  },
});

export default function Background() {
  const classes = useStyles();

  return (
    <div className={classes.background}>
      <div className={classes.canvas}>
        {/*<BackgroundDivider color="linear-gradient(45deg, rgba(124,89,192,1) 0%, rgba(92,108,192,1) 50%, rgba(77,152,181,1) 100%)" />*/}
        <BackgroundCurtain />

        <Circle
          radius={1000}
          styles={{
            position: 'absolute',
            top: -500,
            right: -500,
            borderTop: '5px solid #5c6cc0',
            borderRight: '5px solid transparent',
            borderBottom: '5px solid #5c6cc0',
            borderLeft: '5px solid transparent',
            opacity: 0.5,
          }}
        />

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
      </div>
    </div>
  );
}
