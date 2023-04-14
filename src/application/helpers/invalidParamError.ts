import { ErrorCode } from './errorCode';

type ErrorType = {
    error: string;
    code: ErrorCode | null;
};

export class InvalidParamError extends Error {
    error: ErrorType;

    constructor(description: string, code?: ErrorCode) {
        super(`Invalid param: ${(code || description).toString()}`);
        this.error = {
            error: description,
            code: code || null,
        };
    }
}
