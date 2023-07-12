import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRockets } from '../redux/features/rockets/rocketsSlice';
import RocketCard from './RocketCard';
import '../style/rockets.css';

function Rockets() {
  const { rockets, isLoading, error } = useSelector((storeState) => storeState.rockets);
  const keys = Object.keys(rockets);
  const dispatch = useDispatch();

  useEffect(() => { if (keys.length === 0) { dispatch(fetchRockets()); } },
    [rockets]);

  if (isLoading) { return (<div>Rockets are loading...</div>); }
  if (error) { return (<div>Something went wrong...!</div>); }

  return (
    <div className="rockets-list">
      <ul>
        {keys.map((key) => (
          <li key={key}><RocketCard rocket={rockets[key]} /></li>
        ))}
      </ul>
    </div>
  );
}

export default Rockets;
