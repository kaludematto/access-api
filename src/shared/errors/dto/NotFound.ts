import EHttpStatusCode from './EhttpErrorsCode';
import { ErrorModel } from './errorModel';

export class NotFound extends ErrorModel {
    constructor(message: string, data?: any) {
        super(EHttpStatusCode.NOT_FOUND, message);
        this.data = data || null;
    }
}
