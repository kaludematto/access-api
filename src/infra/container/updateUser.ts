import { UpdateUserUseCase } from '@/application/useCase/userUseCase/updateUser/UpdateUserUseCase';
import { container } from 'tsyringe';

container.registerSingleton('IUpdateUserUseCase', UpdateUserUseCase);
