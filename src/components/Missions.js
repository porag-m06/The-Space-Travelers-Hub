import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMissions } from '../redux/features/missions/missionsSlice';

function Missions() {
  const { missions, isLoading, error } = useSelector((storeState) => storeState.missions);
  const dispatch = useDispatch();

  useEffect(() => {
    if (Object.keys(missions).length === 0) {
      dispatch(fetchMissions());
    }
  }, [missions]);

  if (isLoading) {
    return (<div>Missions are loading...</div>);
  }

  if (error) {
    return (<div>Something went wrong...!</div>);
  }

  return (
    <div>Missions dispatched</div>
  );
}

export default Missions;
