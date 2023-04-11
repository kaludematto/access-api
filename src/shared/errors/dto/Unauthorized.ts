import EHttpStatusCode from './EhttpErrorsCode';
import { ErrorModel } from './errorModel';

export class Unauthorized extends ErrorModel {
    constructor(message: string, data?: any) {
        super(EHttpStatusCode.UNAUTHORIZED, message);
        this.data = data || null;
    }
}
