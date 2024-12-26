import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

import { USERS_PATTERN } from '@app/contracts/users';

import { USERS_CLIENT } from './constants';

@Injectable()
export class UsersService {
  constructor(
    @Inject(USERS_CLIENT) private readonly usersClient: ClientProxy,
  ) {}
  findAll() {
    return this.usersClient.send(USERS_PATTERN.FIND_ALL, {});
  }
  findOne(id: string) {
    return this.usersClient.send(USERS_PATTERN.FIND_ONE, { id });
  }
}
