import React from 'react';
import classes from './experiment.module.css';
// import githubUrl from '../../assets/images/svg/github.svg';

function Thumbnail({ name, imgUrl }) {
  return (
    <div className={classes.thumbnail}>
      <img
        className={classes.thumbnailImg}
        src={imgUrl}
        alt={`${name}'s thumbnail`}
      />
    </div>
  );
}

function Details({ children }) {
  return <div className={classes.details}>{children}</div>;
}

function Name({ name, url }) {
  return (
    <h2 className={classes.name}>
      <a href={url} rel="noopener noreferrer" target="_blank">
        {name}
      </a>
    </h2>
  );
}

// function SocialMedia({ github }) {
//   return (
//     <div className={classes.socialMedia}>
//       <a href={github}>
//         <img src={githubUrl} alt="GitHub logo" />
//       </a>
//     </div>
//   );
// }

function Description({ description }) {
  return <p className={classes.description}>{description}</p>;
}

export default function Experiment({ data }) {
  const { name, url, description, thumbnail } = data;

  return (
    <div className={classes.experiment}>
      <div className={classes.experimentShadowNormal} />
      <div className={classes.experimentShadowHover} />
      <Thumbnail name={name} imgUrl={thumbnail} />
      <Details>
        <Name name={name} url={url} />
        <Description description={description} />
      </Details>
    </div>
  );
}
