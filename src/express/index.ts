import http from 'http';
import express, { Application } from 'express';
import bodyParser from 'body-parser';
import { Http2Server } from 'http2';

import HealthRoutes from './routes/HealthRoutes';

export default (): { app: Application; server: Http2Server } => {
  const app = express();
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));

  app.get('/ping', (_, res): void => {
    res.send('pong');
  });

  app.use('/health', HealthRoutes);

  const server = http.createServer(app);
  return { app, server };
};
