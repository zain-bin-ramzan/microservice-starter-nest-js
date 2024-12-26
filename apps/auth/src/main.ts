import { NestFactory } from '@nestjs/core';

import { AuthModule } from './auth.module';
// AUTH SERVICE
const AUTH_SERVICE_PORT = 3002;
async function bootstrap() {
  const app = await NestFactory.create(AuthModule);
  await app.listen(AUTH_SERVICE_PORT);
}
bootstrap();
