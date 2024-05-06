import { UserRepository } from '@/infra/repository/typeorm/database/userRepository/UserRepository';
import { BadRequest } from '@/shared/errors/dto/BadRequest';
import { Unauthorized } from '@/shared/errors/dto/Unauthorized';
import { inject, injectable } from 'tsyringe';
import { IUpdateUserUseCase } from './IUpdateUserUseCase';
import { TUserToUpdate } from './TUpdateUserUseCase';

@injectable()
export class UpdateUserUseCase implements IUpdateUserUseCase {
    constructor(
        @inject('IUserRepository')
        private readonly userRepository: UserRepository,
    ) {}
    async execute(user: TUserToUpdate): Promise<TUserToUpdate | null> {
        const { email, phone, job, document, password } = user;
        const userFound = await this.userRepository.findByEmail(user.email);
        if (!userFound) {
            throw new BadRequest('Usuario não encontrado');
        }
        const userId = userFound.id as number;
        const userToUpdate: TUserToUpdate = {
            email: email,
            phone: phone,
            job: job,
            document: document,
            password: password,
        };
        const userUpdated = await this.userRepository.updateUser(
            userId,
            userToUpdate,
        );
        return userUpdated;
    }
}
