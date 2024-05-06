import { TUserToUpdate } from './TUpdateUserUseCase';

export interface IUpdateUserUseCase {
    execute(user: TUserToUpdate): Promise<TUserToUpdate | null>;
}
