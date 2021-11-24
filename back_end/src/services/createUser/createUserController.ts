import { Request, response, Response } from "express";
import { CreateUserService } from "./createUserService";

class CreateUserController {
    constructor (private createUserService: CreateUserService) {}

    handle(request: Request, response: Response): Response {
        const {
            name,
            email,
            adress,
            cpf,
            pis,
            password
        } = request.body;

        try {
            this.createUserService.execute({
                name,
                email,
                adress,
                cpf,
                pis,
                password
            });

            return response.status(201).send();
        } catch (e) {
            return response.status(400).json({
                error: e.message
            });
        }
    }
}

export { CreateUserController }