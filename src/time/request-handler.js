import logger from '../logger';

const TimeApiUrl = 'http://www.timeapi.org/utc/now';

const resolveResponse = (timeApiResponse, serverResponse) => {
  logger.info(timeApiResponse.status);
  timeApiResponse.ok
    ? timeApiResponse.text().then(time => serverResponse.status(200).send({ time }))
    : serverResponse.status(timeApiResponse.status).error({ error: 'cannot get Time' })
};

export default (req, res) => (
  fetch(TimeApiUrl)
    .then(response => resolveResponse(response, res),
          err => logger.info(err))

);
