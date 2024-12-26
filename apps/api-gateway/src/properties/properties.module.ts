import { Module } from '@nestjs/common';
import { ClientsModule } from '@nestjs/microservices';

import { ClientConfigModule } from '../client-config';
import { ClientConfigService } from '../client-config';

import { PROPERTIES_CLIENT } from './constants';
import { PropertiesController } from './properties.controller';
import { PropertiesService } from './properties.service';

@Module({
  imports: [
    ClientConfigModule,
    ClientsModule.registerAsync([
      {
        name: PROPERTIES_CLIENT,
        imports: [ClientConfigModule],
        useFactory: async (configService: ClientConfigService) => {
          return {
            ...configService.getPropertiesClientOptions(),
          };
        },
        inject: [ClientConfigService],
      },
    ]),
  ],
  controllers: [PropertiesController],
  providers: [PropertiesService],
})
export class PropertiesModule {}
