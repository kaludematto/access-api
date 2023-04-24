import express from 'express';
import setupMiddlewares from './middleware';
import setupHandlers from './handler';
import setupRouters from './routes';
import setupSwagger from './swagger';

const app = express();
setupSwagger(app);
setupMiddlewares(app);
setupRouters(app);
setupHandlers(app);
export default app;
