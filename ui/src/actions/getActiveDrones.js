import { makeActionCreator } from '../utility';
export const GET_ACTIVE_DRONES = "GET_ACTIVE_DRONES";
export const getActiveDrones = makeActionCreator(GET_ACTIVE_DRONES,"drones");
