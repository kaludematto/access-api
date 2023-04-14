import { IUser } from '../../../../infra/repository/dto/IUser';

export interface ICreateUserUseCase {
    execute(user: IUser): Promise<IUser | null>;
}
