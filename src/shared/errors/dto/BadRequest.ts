import EHttpStatusCode from './EhttpErrorsCode';
import { ErrorModel } from './errorModel';

export class BadRequest extends ErrorModel {
    constructor(message: string, data?: any) {
        super(EHttpStatusCode.BAD_REQUEST, message);
        this.data = data || null;
    }
}
