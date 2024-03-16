/* eslint-disable prettier/prettier */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ExpressAdapter } from '@nestjs/platform-express';
import express from 'express';

async function start() {
  const PORT = process.env.PORT || 5000;
  const app = await NestFactory.create(AppModule, new ExpressAdapter(express), {
    cors: true,
  });

  app.enableCors({});
  const config = new DocumentBuilder()
    .setTitle('Management Boards SERVER')
    .setDescription(
      'Management Boards REAST API Documentation for test task InCode Group',
    )
    .setVersion('1.0.0')
    // .addServer(``)
    .addServer(`http://localhost:${PORT}`)
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);

  await app.listen(PORT, () =>
    console.log(`Server started on port = http://localhost:${PORT}`),
  );
}
start();
