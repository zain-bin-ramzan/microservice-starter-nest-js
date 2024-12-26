import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';

import { PropertiesAppModule } from './properties-app.module';

const PROPERTIES_SERVICE_PORT = 3002;
async function bootstrap() {
  const app = await NestFactory.createMicroservice(PropertiesAppModule, {
    transport: Transport.TCP,
    options: {
      port: PROPERTIES_SERVICE_PORT,
    },
  });
  await app.listen();
}
bootstrap();
