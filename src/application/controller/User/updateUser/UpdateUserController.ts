import { Controller, HttpRequest, HttpResponse } from '@/application/protocols';
import { injectable } from 'tsyringe';

@injectable()
export class UpdateUserController implements Controller {
    handle(httpRequest: HttpRequest): Promise<HttpResponse> {
        throw new Error('Method not implemented.');
    }
}
