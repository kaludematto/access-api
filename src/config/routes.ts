import { createUserRoute, getUserRoute } from '../application/routes';
import { Express, Router } from 'express';

export default function setupRoutes(app: Express): void {
    const router = Router();
    router.use('/access-api/', router);
    router.use(createUserRoute);
    router.use(getUserRoute);
    app.use(router);
}
