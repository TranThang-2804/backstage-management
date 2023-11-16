import { errorHandler } from '@backstage/backend-common';
import express from 'express';
import Router from 'express-promise-router';
import { Logger } from 'winston';
import { handler } from './domainfunction/main'

export interface RouterOptions {
  logger: Logger;
}

export async function createRouter(
  options: RouterOptions,
): Promise<express.Router> {
  const { logger } = options;

  const router = Router();
  router.use(express.json());

  router.get('/health', (_, response) => {
    logger.info('PONG!');
    response.json({ status: 'okie' });
  });

  router.post('/createinfra', (request, response) => {
    handler(request.body);
    response.json({ status: 'okie' });
  })

  router.use(errorHandler());
  return router;
}
