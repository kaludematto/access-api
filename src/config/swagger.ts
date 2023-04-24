import { Express } from 'express';
import { serve, setup } from 'swagger-ui-express';
import swaggerconfig, { options } from '@/main/docs';
import { protectDoc } from '@/application/middlewares/authDoc';

export default (app: Express): void => {
    app.use(
        '/access-api/docs',
        protectDoc(),
        serve,
        setup(swaggerconfig, options),
    );
};
