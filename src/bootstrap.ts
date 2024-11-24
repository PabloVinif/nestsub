import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { RootModule } from './root.module';

async function bootstrap() {
  const app = await NestFactory.create(RootModule);
  await app.listen(3000);

  Logger.log(`App is running at: ${await app.getUrl()}`, 'Bootstrap');
  Logger.log(`Routes available:`, 'Routes');
  app.getHttpAdapter().getInstance()._router.stack
    .filter((r) => r.route)
    .map((r) => Logger.log(`${Object.keys(r.route.methods).join(', ').toUpperCase()} ${r.route.path}`, 'Route'));
}
bootstrap();
