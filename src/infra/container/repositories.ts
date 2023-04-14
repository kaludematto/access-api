import { container } from 'tsyringe';
import { IUserRepository } from '../repository/typeorm/database/userRepository/IUserRepository';
import { UserRepository } from '../repository/typeorm/database/userRepository/UserRepository';

container.registerSingleton<IUserRepository>('IUserRepository', UserRepository);
