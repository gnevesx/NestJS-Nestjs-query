import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = process.env.API_PORT || 3000;  // Usa a variável de ambiente ou a porta 3000 como padrão
  await app.listen(port);
  console.log(`Application is running on: http://localhost:${port}`);
}
bootstrap();
