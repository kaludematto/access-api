import { Repository } from 'typeorm';
import { IUserRepository } from './IUserRepository';
import { User } from '../../models/user.entity';
import { dataSource } from '../../typeormClient';
import { IUser } from '@/infra/repository/dto/IUser';
import { injectable } from 'tsyringe';
import { NotFound } from '@/shared/errors/dto/NotFound';

@injectable()
export class UserRepository implements IUserRepository {
    userRepository: Repository<User>;

    constructor() {
        this.userRepository = dataSource.getRepository(User);
    }
    public async create(objectToCreate: IUser): Promise<IUser> {
        const result = await this.userRepository.save(objectToCreate);
        return result;
    }

    public async findUser(name: string, email: string): Promise<IUser | null> {
        const user = await this.userRepository.findOne({
            where: {
                name,
                email,
            },
        });
        return user;
    }

    public async deleteUser(name: string, email: string): Promise<void> {
        const user = await this.userRepository.findOne({
            where: {
                name,
                email,
            },
        });
        if (!user) {
            throw new NotFound('Usuário não encontrado');
        }
        await this.userRepository.remove(user);
    }
}
