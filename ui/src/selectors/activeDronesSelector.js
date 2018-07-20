import { createSelector } from 'reselect'
export const activeDroneSelector = createSelector(
   state=>state.get(`drones`),
   activeDrones=>activeDrones
)