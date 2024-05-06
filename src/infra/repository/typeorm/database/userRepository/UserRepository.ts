import { Repository } from 'typeorm';
import { IUserRepository } from './IUserRepository';
import { User } from '../../models/user.entity';
import { dataSource } from '../../typeormClient';
import { injectable } from 'tsyringe';
import { IUser, IUserToCreate } from '../../../dto/IUser';
import { NotFound } from '../../../../../shared/errors/dto/NotFound';
import { TUserToUpdate } from '@/application/useCase/userUseCase/updateUser/TUpdateUserUseCase';

@injectable()
export class UserRepository implements IUserRepository {
    private userRepository: Repository<User>;

    constructor() {
        this.userRepository = dataSource.getRepository(User);
    }

    public async create(objectToCreate: IUserToCreate): Promise<IUser> {
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

    public async findByEmail(userEmail: string): Promise<IUser | null> {
        const user = await this.userRepository.findOne({
            where: {
                email: userEmail,
            },
        });
        return user;
    }
    public async findById(id: number): Promise<IUser | null> {
        const userFound = await this.userRepository.findOne({
            where: {
                id: id,
            },
        });
        return userFound;
    }

    public async updateUser(
        id: number,
        user: TUserToUpdate,
    ): Promise<IUser | null> {
        await this.userRepository.update(id, user);
        const userUpdated = await this.findById(id);
        return userUpdated;
    }
}
