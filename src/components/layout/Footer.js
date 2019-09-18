import React from 'react';
import { getCurYear } from '../../utils/datetime';
import './footer.css';

export default function Footer() {
  const curYear = getCurYear();

  return (
    <div className="footer">
      <h4>Be Good</h4>
      <span>Druid Street Labs {curYear}</span>
    </div>
  );
}
