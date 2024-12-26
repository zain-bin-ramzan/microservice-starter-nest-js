import * as path from 'path';

import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

import * as Joi from 'joi';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
      expandVariables: true,
      validationSchema: Joi.object({ MONGODB_URL: Joi.string().required() }),
      envFilePath: path.resolve('./libs/common/DB/.env'),
    }),
    MongooseModule.forRootAsync({
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => {
        const dbUlr = configService.get<string>('MONGODB_URL');
        return {
          uri: dbUlr,
        };
      },
    }),
  ],
})
export class DBModule {}
