import { ok } from '@/application/helpers/httpHelper';
import { Controller, HttpRequest, HttpResponse } from '@/application/protocols';
import { IGetUserUseCase } from '@/application/useCase/userUseCase/getUser/IGetUserUseCase';
import { inject, injectable } from 'tsyringe';

@injectable()
export class GetUserController implements Controller {
    constructor(
        @inject('IGetUserUseCase')
        private getUserUseCase: IGetUserUseCase,
    ) {}
    async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
        const id = httpRequest.query;
        const email = httpRequest.query;
        const result = await this.getUserUseCase.execute(id, email);
        return ok(result);
    }
}
