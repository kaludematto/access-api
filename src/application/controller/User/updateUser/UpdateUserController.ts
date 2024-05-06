import { ok, serverError } from '@/application/helpers/httpHelper';
import { Controller, HttpRequest, HttpResponse } from '@/application/protocols';
import { IUpdateUserUseCase } from '@/application/useCase/userUseCase/updateUser/IUpdateUserUseCase';
import { BadRequest } from '@/shared/errors/dto/BadRequest';
import { inject, injectable } from 'tsyringe';
import { TUserToUpdate } from './TUpdateUserController';

@injectable()
export class UpdateUserController implements Controller {
    constructor(
        @inject('IUpdateUserUseCase')
        private updateUserUseCase: IUpdateUserUseCase,
    ) {}
    async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
        try {
            const user: TUserToUpdate = httpRequest.body;
            if (!user) {
                throw new BadRequest('Solicitação Inválida');
            }
            const result = await this.updateUserUseCase.execute(
                httpRequest.body,
            );
            return ok(result);
        } catch (error) {
            return serverError(error as any);
        }
    }
}
