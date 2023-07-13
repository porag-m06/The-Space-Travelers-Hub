import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMissions } from '../redux/features/missions/missionsSlice';
import MissionTable from './MissionTable';

function Missions() {
  const { missions, isLoading, error } = useSelector((storeState) => storeState.missions);
  const dispatch = useDispatch();

  useEffect(() => {
    if (missions.length === 0) {
      dispatch(fetchMissions());
    }
  }, [missions]);

  if (isLoading) { return (<div>Rockets are loading...</div>); }
  if (error) { return (<div>Something went wrong...!</div>); }

  return (
    <div>
      <MissionTable missions={missions} />
    </div>
  );
}

export default Missions;
