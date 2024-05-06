import {
    createUserRoute,
    getUserRoute,
    updateUserRoute,
} from '../application/routes';
import { Express, Router } from 'express';

export default function setupRoutes(app: Express): void {
    const router = Router();
    router.use('/access-api/', router);
    router.use(createUserRoute);
    router.use(getUserRoute);
    router.use(updateUserRoute);
    app.use(router);
}
