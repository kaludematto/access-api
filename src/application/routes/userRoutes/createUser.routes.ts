import { CreateUserController } from '../../controller/createUser/CreateUserController';
import { Router } from 'express';
import { container } from 'tsyringe';
import { adaptRoute } from '../../../main/express-adapter-route';

const createUserRoute = Router();
const createUserController = container.resolve(CreateUserController);

createUserRoute.post('/user/create', adaptRoute(createUserController));

export { createUserRoute };
