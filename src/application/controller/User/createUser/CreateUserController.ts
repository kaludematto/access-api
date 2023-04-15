import { ok, serverError } from '@/application/helpers/httpHelper';
import { Controller, HttpRequest, HttpResponse } from '@/application/protocols';
import { ICreateUserUseCase } from '@/application/useCase/userUseCase/createUser/ICreateUserUseCase';
import { IUserToCreate } from '@/infra/repository/dto/IUser';
import { BadRequest } from '@/shared/errors/dto/BadRequest';
import { inject, injectable } from 'tsyringe';

@injectable()
export class CreateUserController implements Controller {
    constructor(
        @inject('ICreateUserUseCase')
        private createUserUseCase: ICreateUserUseCase,
    ) {}
    async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
        try {
            const user: IUserToCreate = httpRequest.body;
            if (!user) {
                throw new BadRequest('Solicitação Inválida');
            }
            const result = await this.createUserUseCase.execute(
                httpRequest.body,
            );
            return ok(result);
        } catch (error) {
            return serverError(error as any);
        }
    }
}
