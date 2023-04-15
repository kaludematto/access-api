import { CreateUserController } from '@/application/controller/User/createUser';
import { CreateUserRequestDTO } from '@/application/controller/User/createUser/CreateUserRequestDTO';
import { validateDTO } from '@/application/middlewares/requestValidation';
import { Router } from 'express';
import { container } from 'tsyringe';
import { adaptRoute } from '../../../main/express-adapter-route';

const createUserRoute = Router();
const createUserController = container.resolve(CreateUserController);

createUserRoute.post(
    '/user/create',
    validateDTO({
        body: CreateUserRequestDTO,
    }),
    adaptRoute(createUserController),
);

export { createUserRoute };
