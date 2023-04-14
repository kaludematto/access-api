import EHttpStatusCode from '../../shared/errors/dto/EhttpErrorsCode';
import { ErrorModel } from '../../shared/errors/dto/errorModel';

export class PayloadError extends ErrorModel {
    constructor(message: string) {
        super(EHttpStatusCode.BAD_REQUEST, message);
        this.data = 'Payload Error';
    }
}
