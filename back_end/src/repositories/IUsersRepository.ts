import { User } from "../model/User";

interface ICreateUserDTO {
    name: string;
    email: string;
    adress: {
        country: string;
        state: string;
        city: string;
        zipcode: string;
        street: string;
        number: number;
        complement: string;
    };
    cpf: string;
    pis: string;
    password: string;
}

interface IUsersRepository {
    create({
        name,
        email,
        adress,
        cpf,
        pis,
        password
    }: ICreateUserDTO): void;

    findByCPF(cpf: string) : User;

    list(): User[];
}

export { ICreateUserDTO, IUsersRepository }