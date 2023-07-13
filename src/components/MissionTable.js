import React from 'react';
import PropTypes from 'prop-types';
import '../style/missionTable.css';

function MissionTable({ missions, keys }) {
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
          {keys.map((key) => (
            <tr key={key}>
              <th scope="row">{missions[key].mission_name}</th>
              <td className="wider">{missions[key].description}</td>
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
      mission_name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    }),
  ).isRequired,
  keys: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default MissionTable;
