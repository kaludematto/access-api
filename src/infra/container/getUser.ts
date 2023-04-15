import { GetUserUseCase } from '@/application/useCase/userUseCase/getUser/GetUserUseCase';
import { container } from 'tsyringe';

container.registerSingleton('IGetUserUseCase', GetUserUseCase);
