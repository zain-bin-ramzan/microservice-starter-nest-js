import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ClientOptions, Transport } from '@nestjs/microservices';

@Injectable()
export class ClientConfigService {
  constructor(private configService: ConfigService) {}
  getPropertiesClientPort() {
    return this.configService.get<number>('PROPERTIES_CLIENT_PORT');
  }
  getUsersClientPort() {
    return this.configService.get<number>('USERS_CLIENT_PORT');
  }
  getPropertiesClientOptions(): ClientOptions {
    return {
      transport: Transport.TCP,
      options: {
        port: this.getPropertiesClientPort(),
      },
    };
  }
  getUsersClientOptions(): ClientOptions {
    return {
      transport: Transport.TCP,
      options: {
        port: this.getUsersClientPort(),
      },
    };
  }
}
