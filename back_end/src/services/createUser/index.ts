import { UsersRepository } from '../../repositories/implementation/UsersRepository';
import { CreateUserService } from './createUserService';
import { CreateUserController } from './createUserController';

const usersRepository = UsersRepository.getInstance();

const createUserService = new CreateUserService(usersRepository);

const createUserController = new CreateUserController(createUserService);

export { createUserController }