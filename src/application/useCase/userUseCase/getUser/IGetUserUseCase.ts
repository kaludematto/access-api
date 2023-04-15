import { IUser } from '@/infra/repository/dto/IUser';

export interface IGetUserUseCase {
    execute(userEmail: any): Promise<IUser | null>;
}
