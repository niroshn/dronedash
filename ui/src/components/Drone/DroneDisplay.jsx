import React from 'react';
import { formatCurrency } from '../../utility';
export const DroneDisplay = ({ drones, fetched, items }) => (
  <section className="col-6">
    <section>
      <table className="table">
        <tbody>
          <tr>
            <th>ID</th>
            <th>Latitude</th>
            <th>Longitude</th>
            <th>Speed</th>
          </tr>
          {items
            ? items.map(item => (
                <tr>
                  <td>{item.id ? item.id : <div className="loader" />}</td>
                  <td>{item.lat ? item.lat : <div className="loader" />}</td>
                  <td>{item.lon ? item.lon : <div className="loader" />}</td>
                  <td>{item.speed ? item.speed : <div className="loader" />}</td>
                </tr>
              ))
            : ''}
        </tbody>
      </table>
    </section>
  </section>
);
