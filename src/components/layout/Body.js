import React from 'react';
import './body.css';

function Block({ children }) {
  return <div className="block">{children}</div>;
}

export default function Body() {
  const blockCount = 99;
  const blockEls = new Array(blockCount)
    .fill(true)
    .map((curVal, index) => <Block key={index}>{index + 1}</Block>);

  return (
    <div className="body">
      <div className="block-container">{blockEls}</div>
    </div>
  );
}
