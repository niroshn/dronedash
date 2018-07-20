import { makeActionCreator } from '../utility';
export const SET_ACTIVE_DRONES = "SET_ACTIVE_DRONES";
export const setActiveDrones = makeActionCreator(SET_ACTIVE_DRONES,"drones");