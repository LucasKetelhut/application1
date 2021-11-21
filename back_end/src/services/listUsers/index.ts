import { UsersRepository } from '../../repositories/implementation/UsersRepository';
import { ListUsersService } from './listUsersService';
import { ListUsersController } from './listUsersController';

const usersRepository = UsersRepository.getInstance();

const listUsersService = new ListUsersService(usersRepository);

const listUsersController = new ListUsersController(listUsersService);

export { listUsersController }