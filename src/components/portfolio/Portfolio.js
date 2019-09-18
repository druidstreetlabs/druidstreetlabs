import React from 'react';
import Experiment from './Experiment';
import experiments from '../../data/experiments.json';
import classes from './portfolio.module.css';

export default function Portfolio() {
  const experimentEls = Object.values(experiments).map(experimentData => (
    <Experiment key={experimentData.id} data={experimentData} />
  ));

  return <div className={classes.portfolio}>{experimentEls}</div>;
}
