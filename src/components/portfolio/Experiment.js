import React from 'react';
import classes from './experiment.module.css';
import githubUrl from '../../assets/images/svg/github.svg';
import chromeUrl from '../../assets/images/svg/googlechrome.svg';

function Thumbnail({ name, url }) {
  return (
    <div className={classes.thumbnail}>
      <img
        className={classes.thumbnailImg}
        src={url}
        alt={`${name}'s thumbnail`}
      />
      <div className={classes.thumbnailShadowDark} />
      <div className={classes.thumbnailShadowLight} />
    </div>
  );
}

function Name({ name }) {
  return <h2 className={classes.name}>{name}</h2>;
}

function ID({ id }) {
  return <h3 className={classes.id}>{id}</h3>;
}

function SocialMedia({ type, url }) {
  return (
    <div
      className={`${classes.socialMedia} ${
        type === 'github' ? classes.repository : classes.url
      }`}
    >
      <a href={url}>
        <img
          src={type === 'github' ? githubUrl : chromeUrl}
          alt={type === 'github' ? 'GitHub logo' : 'Chrome logo'}
        />
      </a>
    </div>
  );
}

function Description({ description }) {
  return <p className={classes.description}>{description}</p>;
}

export default function Experiment({ data }) {
  const { id, name, url, repository, description, thumbnail } = data;

  return (
    <div className={classes.experiment}>
      <Thumbnail name={name} url={thumbnail} />
      <Name name={name} />
      <ID id={id} />
      <SocialMedia type="internet" url={url} />
      <SocialMedia type="github" url={repository} />
      <Description description={description} />
    </div>
  );
}
