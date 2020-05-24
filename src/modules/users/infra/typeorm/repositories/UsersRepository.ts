import { getRepository, Repository } from 'typeorm';

import IUsersRepository from '@modules/users/interfaces/repositories/IUsersRepository';
import ICreateUserDTO from '@modules/users/interfaces/dtos/ICreateUserDTO';

import User from '../entities/User';

class UsersRepository implements IUsersRepository {
  private ormRepository: Repository<User>;

  constructor() {
    this.ormRepository = getRepository(User);
  }

  public async findById(id: string): Promise<User | undefined>{
    const user = await this.ormRepository.findOne(id);

    return user;
  }

  public async findByEmail(email: string): Promise<User | undefined>{
    const user = await this.ormRepository.findOne({
      where: { email },
    });

    return user;
  }

  public async create({ name, email, password }: ICreateUserDTO): Promise<User> {
    const User = this.ormRepository.create({
      name,
      email,
      password,
    });

    await this.ormRepository.save(User);

    return User;
  }

  public async save(user: User): Promise<User> {
    return this.ormRepository.save(user);
  }
}

export default UsersRepository;