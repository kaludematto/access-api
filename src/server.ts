import 'reflect-metadata';
import 'express-async-errors';
import './shared/enviroment/dotenv';
import './utils/module-alias';
import './infra/repository/typeorm/typeormClient';
import './infra/container';
import { applicationConfig } from './config/application';
import { logger } from './shared/logger/logger';
import { dataSource } from './infra/repository/typeorm/typeormClient';
import http from 'http';

dataSource
    .initialize()
    .then(async () => {
        logger.info(`Database Access-API success connect!`);

        const app = (await import('./config/app')).default;
        const server: http.Server = http.createServer(app);

        server.listen(applicationConfig.port, () =>
            logger.info(
                `Server is running in the port ${applicationConfig.port}!`,
            ),
        );
    })
    .catch(error => {
        logger.error('Error starting application!', error);
    });
