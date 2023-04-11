import { NextFunction, Request, Response } from 'express';
import EHttpStatusCode from './dto/EhttpErrorsCode';
import { ErrorModel } from './dto/errorModel';

export async function errorHandler(
    error: Error,
    _: Request,
    response: Response,
    next: NextFunction,
) {
    const responseObject = {
        status: EHttpStatusCode.INTERNAL_SERVER_ERROR,
        message: `Internal Server error - ${error.message}`,
    };

    if (error instanceof ErrorModel) {
        responseObject.message = error.message;
        responseObject.status = error.status;
    }

    return response
        .status(responseObject.status)
        .json({ error: responseObject.message });
}
