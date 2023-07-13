import React from 'react';
import PropTypes from 'prop-types';
import '../style/rocketCard.css';
import { useDispatch } from 'react-redux';
import { reserveRockets, cancelRockets } from '../redux/features/rockets/rocketsSlice';

function RocketCard({ rocket }) {
  const dispatch = useDispatch();
  const ifReserved = rocket.reserved || false;
  console.log('Is Reserved: ', ifReserved);

  return (
    <div className="card">
      <img src={rocket.flickr_images[0]} alt="rocket" />
      <div className="info">
        <h2>{rocket.name}</h2>
        <p>
          {ifReserved && <span>Reserved</span>}
          {rocket.description}
        </p>
        {ifReserved ? <button type="button" className="cl" onClick={() => { dispatch(cancelRockets(rocket.id)); }}>Cancel Reservation</button>
          : <button type="button" onClick={() => { dispatch(reserveRockets(rocket.id)); }}>Reserve Rocket</button> }

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
    reserved: PropTypes.bool,
  }).isRequired,
};

export default RocketCard;
