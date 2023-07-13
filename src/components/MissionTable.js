import React from 'react';
import PropTypes from 'prop-types';
import '../style/missionTable.css';

function MissionTable({ missions }) {
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

MissionTable.propTypes = {
  missions: PropTypes.objectOf(
    PropTypes.shape({
      mission_id: PropTypes.string.isRequired,
      mission_name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default MissionTable;
