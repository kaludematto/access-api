import { GetUserController } from '@/application/controller/getUser/GetUserController';
import { adaptRoute } from '@/main/express-adapter-route';
import { Router } from 'express';
import { container } from 'tsyringe';

const getUserRoute = Router();
const getUserController = container.resolve(GetUserController);

getUserRoute.get('/user/get', adaptRoute(getUserController));

export { getUserRoute };
