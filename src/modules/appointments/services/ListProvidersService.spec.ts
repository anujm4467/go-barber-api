import FakeUsersRepository from '@modules/users/infra/typeorm/repositories/fakes/FakeUsersRepository';

import ListProvidersService from '../services/ListProvidersService';

let fakeUsersRepository: FakeUsersRepository;

let listProviders: ListProvidersService;

describe('ListProviders', () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository();

    listProviders = new ListProvidersService(fakeUsersRepository);
  });

  it('should be able to list the providers', async () => {
    const user1 = await fakeUsersRepository.create({
      name: 'Spaceman from Mars',
      email: 'mars@email.com',
      password: '123456',
    });

    const user2 = await fakeUsersRepository.create({
      name: 'Spaceman from Saturn',
      email: 'saturn@email.com',
      password: '123456',
    });

    const loggedUser = await fakeUsersRepository.create({
      name: 'Spaceman from Earth',
      email: 'earth@email.com',
      password: '123456',
    });

    const providers = await listProviders.execute({
      user_id: loggedUser.id,
    });

    expect(providers).toEqual([
      user1,
      user2,
    ]);
  });
});
