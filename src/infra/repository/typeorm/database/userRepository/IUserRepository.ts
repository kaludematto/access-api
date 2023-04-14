import { IUser } from '@/infra/repository/dto/IUser';

export interface IUserRepository {
    create(objectToCreate: IUser): Promise<IUser>;
    findUser(name: string, email: string): Promise<IUser | null>;
}
