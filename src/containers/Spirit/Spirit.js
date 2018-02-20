import React, { Component } from 'react';
import './Spirit.css';

class Spirit extends Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <div className="Spirit">
        <img
          className="homepage-wordmark"
          src="/assets/Spirit-Homepage-Wordmark-Purple.png"
          alt="Spirit-Wordmark-with-Tagline"
        />
        <h4 className="homepage-brief-descriptor">
          A clinical reasoning model for ensuring best practice in pediatric
          occupational therapy.
        </h4>
      </div>
    );
  }
}

export default Spirit;
