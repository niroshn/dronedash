import { connect } from 'react-redux';
import { DashboardDisplay } from './DashboardDisplay';

import {} from './../../actions';

import { activeDroneSelector } from './../../selectors';

const mapStateToProps = state => {
  const drones = activeDroneSelector(state);
  return drones
    ? {
        ...drones.toJS(),
        fetched: true
      }
    : {
        fetched: false
      };
};
const mapDispatchToProps = dispatch => ({});

export const DashboardContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(DashboardDisplay);
