import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UsersRepositories";

interface IUserRequest {
  name: string;
  email: string;
}

class CreateUserUseCase {
  async execute({ name, email }: IUserRequest) {
    const usersRepository = getCustomRepository(UsersRepositories);

    const userAlreadyExists = await usersRepository.findOne({
      email,
    });

    if (userAlreadyExists) {
      throw new Error("User already exists!");
    }

    const user = usersRepository.create({
      name,
      email,
    });

    await usersRepository.save(user);

    return user;
  }
}

export { CreateUserUseCase }