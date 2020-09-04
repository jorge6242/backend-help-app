import { NestFactory } from '@nestjs/core';
import { Logger } from '@nestjs/common';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import * as config from 'config';
import { AppModule } from './app.module';

async function bootstrap() {
  const logger = new Logger('bootstrap');
  const server = config.get('server');
  const app = await NestFactory.create(AppModule);
  //const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.enableCors();
  //app.setGlobalPrefix('api/v1');
  //app.useStaticAssets(join(__dirname, '..', 'static'));
  await app.listen(server.port);
  logger.log(`Application listening on port ${server.port}`);
}
bootstrap();
