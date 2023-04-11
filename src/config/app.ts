import express from 'express';
import setupMiddlewares from './middleware';
import setupHandlers from './handler';

const app = express();
setupMiddlewares(app);
setupHandlers(app);
export default app;
