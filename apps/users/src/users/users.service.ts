import { Injectable } from '@nestjs/common';
import { RpcException } from '@nestjs/microservices';

import { UsersRepository } from './users.repository';

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UsersRepository) {}
  async findAll() {
    const users = await this.usersRepository.find({});
    return users;
  }
  async findOne(id: string) {
    try {
      const user = await this.usersRepository.findOne({ _id: id });
      return user;
    } catch (error: any) {
      throw new RpcException('No user found');
    }
  }
}
