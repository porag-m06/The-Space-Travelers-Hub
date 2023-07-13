import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMissions } from '../redux/features/missions/missionsSlice';
import '../style/missions.css';

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
      <table>
        <thead>
          <tr>
            <th scope="col">Mission</th>
            <th scope="col" className="wider">Description</th>
            <th scope="col">Status</th>
            <th scope="col" className="emt">.</th>
          </tr>
        </thead>
        <tbody>
          {missions.map((mission) => (
            <tr key={mission.mission_id}>
              <th scope="row">{mission.mission_name}</th>
              <td className="wider">{mission.description}</td>
              <td><span className="nam">NOT A MEMBER</span></td>
              <td>
                <button type="button" className="red">Leave Mission</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Missions;
