import React from 'react';
import { Link } from 'react-router-dom';
import './Sam.css';

const Sam = () => {
  return (
    <div className="Sam">
      <div className="sam-image-holder">
        <img
          className="sam-big-image"
          src="/assets/sam-w-labels.svg"
          alt="sam-diagram"
        />

        <Link to="modulation">
          <p className="sam-session-dots session-dots-1">1</p>
        </Link>

        <Link to="social">
          <p className="sam-session-dots session-dots-2">2</p>
        </Link>

        <Link to="postural">
          <p className="sam-session-dots session-dots-3">3</p>
        </Link>

        <Link to="sensory">
          <p className="sam-session-dots session-dots-4">4</p>
        </Link>

        <Link to="executive">
          <p className="sam-session-dots session-dots-5">5</p>
        </Link>

        <p className="sam-session-dots session-dots-6">6</p>
      </div>
    </div>
  );
};

export default Sam;
