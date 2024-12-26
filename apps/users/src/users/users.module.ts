import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { DBModule } from 'libs/common/DB/src/DB.module';

import { User, UserSchema } from '../schemas/user';

import { UsersController } from './users.controller';
import { UsersRepository } from './users.repository';
import { UsersService } from './users.service';

@Module({
  imports: [
    DBModule,
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
  controllers: [UsersController],
  providers: [UsersService, UsersRepository],
})
export class UsersModule {}
