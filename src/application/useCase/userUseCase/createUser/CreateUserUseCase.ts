import { IUser, IUserToCreate } from '../../../../infra/repository/dto/IUser';
import { UserRepository } from '../../../../infra/repository/typeorm/database/userRepository/UserRepository';
import { Unauthorized } from '../../../../shared/errors/dto/Unauthorized';
import { inject, injectable } from 'tsyringe';
import { ICreateUserUseCase } from './ICreateUserUseCase';

@injectable()
export class CreateUserUseCase implements ICreateUserUseCase {
    constructor(
        @inject('IUserRepository')
        private userRepository: UserRepository,
    ) {}
    async execute(user: IUserToCreate): Promise<IUser | null> {
        const userExist = await this.userRepository.findUser(
            user.name,
            user.email,
        );
        if (userExist) {
            throw new Unauthorized('Usuário existente!');
        }

        const result = await this.userRepository.create(user);
        return result;
    }
}
