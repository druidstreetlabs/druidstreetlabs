import React from 'react';
import Circle from './Circle';
import Center from '../../../.storybook/Center';

export default {
  title: 'Shapes|Circle',
};

export const variant = () => (
  <Center>
    <Circle
      radius={500}
      styles={{
        borderTop: '10px solid #5c6cc0',
        borderBottom: '5px solid #5c6cc0',
        borderRight: '10px solid transparent',
        borderLeft: '10px solid transparent',
        opacity: 0.5,
      }}
    />
  </Center>
);
