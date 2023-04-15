import { IUser } from '@/infra/repository/dto/IUser';
import { UserRepository } from '@/infra/repository/typeorm/database/userRepository/UserRepository';
import { NotFound } from '@/shared/errors/dto/NotFound';
import { inject, injectable } from 'tsyringe';
import { IGetUserUseCase } from './IGetUserUseCase';

@injectable()
export class GetUserUseCase implements IGetUserUseCase {
    constructor(
        @inject('IUserRepository')
        private readonly userRepository: UserRepository,
    ) {}

    async execute(userEmail: string): Promise<IUser | null> {
        const user = await this.userRepository.findByEmail(userEmail);
        if (!user) {
            throw new NotFound(`Usuário não encontrado`);
        }
        return user;
    }
}
