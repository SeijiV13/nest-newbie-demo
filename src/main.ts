import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as helmet from 'helmet';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({ origin: ["http://locahost:4200"]});
  await app.listen(process.env.PORT || 3000);
  app.use(helmet());
}
bootstrap();
