import { TUserToUpdate } from '@/application/useCase/userUseCase/updateUser/TUpdateUserUseCase';
import { IUser } from '../../../dto/IUser';

export interface IUserRepository {
    create(objectToCreate: IUser): Promise<IUser>;
    findUser(name: string, email: string): Promise<IUser | null>;
    findByEmail(userEmail: string): Promise<IUser | null>;
    findById(id: number): Promise<IUser | null>;
    updateUser(id: number, user: TUserToUpdate): Promise<IUser | null>;
}
