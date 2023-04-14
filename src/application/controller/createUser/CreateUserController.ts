import { ok } from '../../helpers/httpHelper';
import { Controller } from '../../protocols/controller';
import { CreateUserUseCase } from '../../useCase/userUseCase/createUser/CreateUserUseCase';
import { ICreateUserUseCase } from '../../useCase/userUseCase/createUser/ICreateUserUseCase';
import { IUserToCreate } from '../../../infra/repository/dto/IUser';
import { BadRequest } from '../../../shared/errors/dto/BadRequest';
import { container, inject, injectable } from 'tsyringe';
import { HttpRequest, HttpResponse } from '../../../application/protocols/http';

@injectable()
export class CreateUserController implements Controller {
    constructor(
        @inject('ICreateUserUseCase')
        private createUserUseCase: ICreateUserUseCase,
    ) {}
    async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
        const user: IUserToCreate = httpRequest.body;
        if (!user) {
            throw new BadRequest('Solicitação Inválida');
        }
        const result = await this.createUserUseCase.execute(httpRequest.body);
        return ok(result);
    }
}
