import morgan, { StreamOptions } from 'morgan';
import { Request, Response } from 'express';
import { applicationConfig } from '@/config';
import { logger } from './logger';

const morganFormat = applicationConfig.env == 'development' ? 'tiny' : 'common';
const stream: StreamOptions = {
    write: (message: string) => {
        logger.info(message.replace('\n', ''));
    },
};

const skip = function (req: Request, res: Response) {
    return (
        req.originalUrl.startsWith('/api/health') &&
        [200, 304].includes(res.statusCode)
    );
};

export const morganMiddleware = morgan(morganFormat, {
    skip: skip,
    stream: stream,
});
