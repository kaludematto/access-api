import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import { applicationConfig } from './config/application';
import { logger } from './shared/logger/logger';
import './shared/enviroment/dotenv';
import 'express-async-errors';

const app = express();

app.use(cors());
app.use(helmet());

app.listen(applicationConfig.port, () => {
    logger.info({
        label: 'server',
        message: `Server running on port ${applicationConfig.port}`,
    });
});
