import http from 'http';
import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import api from './api';

let app = express();
app.server = http.createServer(app);

app.use(morgan('dev'));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('QRF');
});

app.use('/', api);

app.server.listen(process.env.PORT || config.port, () => {
  console.log(`Started on port ${app.server.address().port}`);
});

export default app;
