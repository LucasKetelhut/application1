import { Request, Response } from "express";
import { ListUsersService } from "./listUsersService";

class ListUsersController {

    constructor(private listUsersService: ListUsersService) {}

    handle(request: Request, response: Response): Response {
        const users = this.listUsersService.execute();

        return response.json(users);
    }

}

export { ListUsersController }