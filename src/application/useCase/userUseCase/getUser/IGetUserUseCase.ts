import { IUser } from '@/infra/repository/dto/IUser';

export interface IGetUserUseCase {
    execute(id: string, email: string): Promise<IUser | null>;
}
