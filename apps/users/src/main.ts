import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';

import { UsersAppModule } from './users-app.module';

const USERS_SERVICE_PORT = 3001;
async function bootstrap() {
  const app = await NestFactory.createMicroservice(UsersAppModule, {
    transport: Transport.TCP,
    options: {
      port: USERS_SERVICE_PORT,
    },
  });
  await app.listen();
}
bootstrap();
