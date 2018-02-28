import React from 'react';
import landingCopy from '../../data/copyContent/landingCopy';
import './Spirit.css';

const Spirit = () => {
  return (
    <div className="Spirit">
      <img
        className="homepage-wordmark"
        src="/assets/Spirit-Homepage-Wordmark-Purple.png"
        alt="Spirit-Wordmark-with-Tagline"
      />
      <h4 className="homepage-brief-descriptor">
        {landingCopy.descriptor}
      </h4>
    </div>
  );
};

export default Spirit;
