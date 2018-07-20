import { connect } from 'react-redux';
import { DroneDisplay } from './DroneDisplay';

import { GET_ACTIVE_DRONES, setActiveDrones, getActiveDrones } from './../../actions';

import { activeDroneSelector } from './../../selectors';

const mapStateToProps = state => {
  const drones = activeDroneSelector(state);
  const drone = drones.find(drones => drones);
  let items = [];
  if (drone) {
    items = drone.drones.data;
  }

  return drones
    ? {
        fetched: true,
        items
      }
    : {
        fetched: false,
        items
      };
};
const mapDispatchToProps = dispatch => ({
  getActiveDrones() {
    dispatch(getActiveDrones());
  }
});

export const DroneContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(DroneDisplay);
