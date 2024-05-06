import { UpdateUserController } from '@/application/controller/User/updateUser/UpdateUserController';
import { UpdateUserDTO } from '@/application/controller/User/updateUser/UpdateUserDTO';
import { validateDTO } from '@/application/middlewares/requestValidation';
import { adaptRoute } from '@/main/express-adapter-route';
import { Router } from 'express';
import { container } from 'tsyringe';

const updateUserRoute = Router();
const updateUserController = container.resolve(UpdateUserController);

updateUserRoute.put(
    '/user/update',
    validateDTO({
        body: UpdateUserDTO,
    }),
    adaptRoute(updateUserController),
);

export { updateUserRoute };
