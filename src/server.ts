import 'reflect-metadata';
import 'express-async-errors';
import './shared/enviroment/dotenv';
import './utils/module-alias';
import './infra/repository/typeorm/typeormClient';
import './infra/container/index';

import { createServer } from 'http';
import { applicationConfig } from './config/application';
import { logger } from './shared/logger/logger';
import { dataSource } from './infra/repository/typeorm/typeormClient';
import app from './config/app';

const server = createServer(app);

dataSource
    .initialize()
    .then(() => {
        server.listen(applicationConfig.port, () => {
            logger.info(`Server is running on port ${applicationConfig.port}!`);
        });
    })
    .catch(error => {
        logger.error('Error starting application!', error);
    });
