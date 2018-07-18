import { Router } from 'express';
let drone = new Router({ mergeParams: true });
let demo = {
  data: [
    {
      id: 1,
      lat: 12.34,
      lon: 12.34,
      speed: 12.89
    },
    {
      id: 2,
      lat: 12.34,
      lon: 12.34,
      speed: 12.89
    },
    {
      id: 3,
      lat: 12.34,
      lon: 12.34,
      speed: 12.89
    },
    {
      id: 4,
      lat: 12.34,
      lon: 12.34,
      speed: 12.89
    },
    {
      id: 5,
      lat: 12.34,
      lon: 12.34,
      speed: 12.89
    },
    {
      id: 6,
      lat: 12.34,
      lon: 12.34,
      speed: 12.89
    },
    {
      id: 7,
      lat: 12.34,
      lon: 12.34,
      speed: 12.89
    },
    {
      id: 7,
      lat: 12.34,
      lon: 12.34,
      speed: 12.89
    }
  ]
};
drone.get('/all', async (req, res) => {
  let drones = demo;
  res.json({ drones });
});

drone.get('/:id', async (req, res) => {
  let data = demo.data[1];
  console.log(data);
  data.speed = data.speed + Math.random();
  data.lat = data.lat + Math.random();
  data.lon = data.lon + Math.random();

  res.json({ data });
});

export default drone;
