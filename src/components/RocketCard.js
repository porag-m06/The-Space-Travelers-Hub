import React from 'react';
import PropTypes from 'prop-types';
import '../style/rocketCard.css';
import { useDispatch } from 'react-redux';
import { reserveRockets } from '../redux/features/rockets/rocketsSlice';

function RocketCard({ rocket }) {
  const dispatch = useDispatch();

  return (
    <div className="card">
      <img src={rocket.flickr_images[0]} alt="rocket" />
      <div className="info">
        <h2>{rocket.name}</h2>
        <p>{rocket.description}</p>
        <button type="button" onClick={() => { dispatch(reserveRockets()); }}>Reserve Rocket</button>
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
