import express from 'express';
import setupMiddlewares from './middleware';
import setupHandlers from './handler';
import setupRouters from './routes';

const app = express();
setupMiddlewares(app);
setupRouters(app);
setupHandlers(app);
export default app;
