import { IUser } from '@/infra/repository/dto/IUser';

export interface IGetUserUseCase {
    execute(userEmail: string): Promise<IUser | null>;
}
