import { createReducer } from './../utility';
import { GET_ACTIVE_DRONES } from '../actions';
export const drones = createReducer([], {
  [GET_ACTIVE_DRONES](state, { drones }) {
    return state.push(drones);
  }
});
