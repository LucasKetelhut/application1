import { v4 as uuidV4 } from 'uuid';

class User {
    id?: string;
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

    constructor() {
        if (!this.id) {
            this.id = uuidV4();
        }
    }
}

export { User }