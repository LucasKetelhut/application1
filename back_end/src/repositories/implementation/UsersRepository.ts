import { User } from "../../model/User";
import { ICreateUserDTO, IUsersRepository } from "../IUsersRepository";

class UsersRepository implements IUsersRepository {

    private users: User[];

    private static INSTANCE: UsersRepository;

    private constructor() {
        this.users = [];
    }

    public static getInstance(): UsersRepository {
        if (!UsersRepository.INSTANCE) {
            UsersRepository.INSTANCE = new UsersRepository();
        }

        return UsersRepository.INSTANCE;
    }

    create({ name, email, adress, cpf, pis, password }: ICreateUserDTO): void {
        const user = new User();

        Object.assign(user, {
            name,
            email,
            adress,
            cpf,
            pis,
            password
        });

        this.users.push(user);
    }

    findByCPF(cpf: string): User {
        const user = this.users.find(user => user.cpf === cpf);

        return user;
    }

    list(): User[] {
        return this.users;
    }
}

export { UsersRepository }