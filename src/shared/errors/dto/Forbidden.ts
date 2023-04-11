import EHttpStatusCode from './EhttpErrorsCode';
import { ErrorModel } from './errorModel';

export class Forbidden extends ErrorModel {
    constructor(message: string, data?: any) {
        super(EHttpStatusCode.FORBIDDEN, message);
        this.data = data || null;
    }
}
