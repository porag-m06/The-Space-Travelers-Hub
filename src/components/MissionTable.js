import React from 'react';
import PropTypes from 'prop-types';

function MissionTable({ missions, keys }) {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Mission</th>
            <th>Description</th>
            <th>Status</th>
            <th>.</th>
          </tr>
        </thead>
        <tbody>
          {keys.map((key) => (
            <tr key={key}>
              <td>{missions[key].mission_name}</td>
              <td>{missions[key].description}</td>
              <td>status</td>
              <td>Join</td>
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
