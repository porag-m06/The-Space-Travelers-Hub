import React from 'react';
import PropTypes from 'prop-types';
import '../style/rocketCard.css';

function RocketCard({ rocket }) {
  return (
    <div className="card">
      <img src={rocket.flickr_images[0]} alt="rocket" />
      <div className="info">
        <h2>{rocket.name}</h2>
        <p>{rocket.description}</p>
        <button type="button">Reserve Rocket</button>
      </div>
    </div>
  );
}

RocketCard.propTypes = {
  rocket: PropTypes.shape({
    flickr_images: PropTypes.arrayOf(PropTypes.string).isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
};

export default RocketCard;
