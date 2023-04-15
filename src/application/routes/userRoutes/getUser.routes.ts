import { GetUserController } from '@/application/controller/User/getUser/GetUserController';
import { GetUserRequestDTO } from '@/application/controller/User/getUser/GetUserRequestDTO';
import { validateDTO } from '@/application/middlewares/requestValidation';
import { adaptRoute } from '@/main/express-adapter-route';
import { Router } from 'express';
import { container } from 'tsyringe';

const getUserRoute = Router();
const getUserController = container.resolve(GetUserController);

getUserRoute.get(
    '/user/get',
    validateDTO({
        query: GetUserRequestDTO,
    }),
    adaptRoute(getUserController),
);

export { getUserRoute };
