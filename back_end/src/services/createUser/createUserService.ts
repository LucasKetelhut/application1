import { IUsersRepository } from '../../repositories/IUsersRepository';

interface IRequest {
    name: string,
    email: string,
    adress: {
        country: string;
        state: string;
        city: string;
        zipcode: string;
        street: string;
        number: number;
        complement: string;
    },
    cpf: string,
    pis: string,
    password: string
}

class CreateUserService {
    constructor(private usersRepository: IUsersRepository) {}

    execute ({
        name,
        email,
        adress,
        cpf,
        pis,
        password
    }: IRequest): void {
        const userAlreadyExists = this.usersRepository.findByCPF(cpf);

        if (userAlreadyExists) {
            throw new Error("This CPF has already been used!");
        }

        this.usersRepository.create({
            name,
            email,
            adress,
            cpf,
            pis,
            password
        });
    }
}

export { CreateUserService }