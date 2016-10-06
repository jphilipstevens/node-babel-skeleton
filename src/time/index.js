import requestHandler from './request-handler';

export default (router) => {
  router.get('/', requestHandler);
  return router;
};
