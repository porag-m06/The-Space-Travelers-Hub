import React from 'react';
import { useSelector } from 'react-redux';

function Profile() {
  const { rockets } = useSelector((storeState) => storeState.rockets);
  const { missions } = useSelector((storeState) => storeState.missions);

  const listRockets = rockets.filter((rocket) => rocket.reserved);
  const listMissions = missions.filter((mission) => mission.reserved);

  console.log('List- R:', listRockets, '\nM:', listMissions);

  return (
    <div>
      <div className="mission-list">
        <h2>My Missions</h2>
        <ul>
          {
            listRockets.map((rocket) => <li key={rocket.id}>{rocket.name}</li>)
          }
        </ul>
      </div>
      <div className="rocket-list">
        <h2>My Rockets</h2>
        <ul>
          {
            listMissions.map((mission) => <li key={mission.mission_id}>{mission.mission_name}</li>)
          }
        </ul>
      </div>
    </div>
  );
}

export default Profile;
