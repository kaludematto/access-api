import { createUserRoute } from '../application/routes';
import { Express, Router } from 'express';

export default (app: Express): void => {
    const router = Router();
    app.use('/localhost', router);
    router.use(createUserRoute);
};
