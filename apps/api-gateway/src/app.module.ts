import { Module } from '@nestjs/common';

import { ClientConfigModule } from './client-config';
import { PropertiesModule } from './properties/properties.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [UsersModule, PropertiesModule, ClientConfigModule],
})
export class AppModule {}
