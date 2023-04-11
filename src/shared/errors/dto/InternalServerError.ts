import EHttpStatusCode from './EhttpErrorsCode';
import { ErrorModel } from './errorModel';

export class InternalServerError extends ErrorModel {
    constructor(message: string, data?: any) {
        super(EHttpStatusCode.INTERNAL_SERVER_ERROR, message);
        this.data = data || null;
    }
}
