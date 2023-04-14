import { CreateUserUseCase } from '../../application/useCase/userUseCase/createUser/CreateUserUseCase';
import { container } from 'tsyringe';

container.registerSingleton('ICreateUserUseCase', CreateUserUseCase);
