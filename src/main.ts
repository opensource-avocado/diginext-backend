import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import globalConfig from './config/global.config';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { Logger } from '@nestjs/common';
import * as dotenv from 'dotenv';
import * as dotenvExpand from 'dotenv-expand';

async function bootstrap() {
  const logger = new Logger('bootstrap');
  const Env = dotenv.config();
  dotenvExpand.expand(Env);

  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: false,
  });

  const options = new DocumentBuilder()
    .setTitle(globalConfig()['appName'])
    .setDescription('API docs')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup(globalConfig()['documentationUrlExtension'], app, document);
  await app.listen(globalConfig()['port']);

  logger.verbose('documentation is served on: ' + globalConfig()['documentationUrl']);
  logger.verbose('API is served on: ' + globalConfig()['baseUrl']);
}

void bootstrap();
