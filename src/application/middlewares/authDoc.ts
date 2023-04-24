import { NextFunction, Response } from 'express';
import auth from 'basic-auth';

export const protectDoc = () => {
    return async function (req: any, res: Response, next: NextFunction) {
        const user = auth(req);
        if (
            user === undefined ||
            user['name'] !== process.env.USER_SWAGGER ||
            user['pass'] !== process.env.PASS_SWAGGER
        ) {
            res.statusCode = 401;
            res.setHeader('WWW-Authenticate', 'Basic realm="Node"');
            res.end('Unauthorized');
        } else {
            next();
        }
    };
};
