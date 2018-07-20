import React from 'react';
import { DroneContainer } from '../Drone';
export const DashboardDisplay = ({}) => (
  <div>
    <section className="row">
      <section className="col-6">
        <section className="">
          <h1 title="Drone Dashboard">Drone Dashboard</h1>
        </section>
      </section>
    </section>
    <section className="row">
      <section className="col-24">
        <section className="cart-items">
          <DroneContainer />
        </section>
      </section>
    </section>
  </div>
);
