import 'isomorphic-fetch';
import express from 'express';
import bodyParser from 'body-parser';

import timeApiRoute from './time';
import logger from './logger';

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const port = process.env.PORT || 9000;

const router = new express.Router();
app.use('/time', timeApiRoute(router));

app.listen(port);
logger.info(`Listening on port ${port}`);
