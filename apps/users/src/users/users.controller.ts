import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

import { USERS_PATTERN } from '@app/contracts/users';

import { UsersService } from './users.service';

@Controller()
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @MessagePattern(USERS_PATTERN.FIND_ALL)
  findAll() {
    return this.usersService.findAll();
  }
  @MessagePattern(USERS_PATTERN.FIND_ONE)
  findOne(data: { id: string }) {
    return this.usersService.findOne(data.id);
  }
}
