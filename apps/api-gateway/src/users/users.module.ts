import { Module } from '@nestjs/common';
import { ClientsModule } from '@nestjs/microservices';

import { ClientConfigService } from '../client-config';
import { ClientConfigModule } from '../client-config';

import { USERS_CLIENT } from './constants';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
  imports: [
    ClientsModule.registerAsync([
      {
        name: USERS_CLIENT,
        imports: [ClientConfigModule],
        useFactory: async (configService: ClientConfigService) => {
          return {
            ...configService.getUsersClientOptions(),
          };
        },
        inject: [ClientConfigService],
      },
    ]),
  ],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
