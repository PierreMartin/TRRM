import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import methodOverride from 'method-override';
import gzip from 'compression';
import helmet from 'helmet';
import { ENV } from '../../config/env';

export default (app) => {
  app.set('port', (process.env.PORT || 3000));

  if (ENV === 'production') {
    app.use(gzip());
    app.use(helmet());
  }

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
  app.use(methodOverride());

  app.use(express.static(path.join(process.cwd(), 'public')));
  app.set('trust proxy', 'loopback');

  console.log('--------------------------');
  console.log('===>  Starting Server . . .');
  console.log(`===>  Environment: ${ENV}`);
  console.log(`===>  Listening on port: ${app.get('port')}`);
  console.log('--------------------------');
};
