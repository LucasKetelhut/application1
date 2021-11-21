import { Router } from "express";
import { createUserController } from "../services/createUser";
import { listUsersController } from "../services/listUsers";

const usersRoutes = Router();

usersRoutes.post("/", (request, response) => {
    return createUserController.handle(request, response);
});

usersRoutes.get("/", (request, response) => {
    return listUsersController.handle(request, response);
});

export { usersRoutes }