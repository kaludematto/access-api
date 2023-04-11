import { Express, json } from 'express';
import helmet from 'helmet';
import cors from 'cors';
import { applicationConfig } from './application';
import { morganMiddleware } from '@/shared/logger/morganLogger';

export default (app: Express): void => {
    app.use(json());
    app.use(cors());
    app.use(helmet());
    app.use(morganMiddleware);
    app.all(`/${applicationConfig.appPrefix}`, (_, res) =>
        res.redirect(`/${applicationConfig.appPrefix}/docs`),
    );
};
