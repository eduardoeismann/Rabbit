import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport } from '@nestjs/microservices';

// WORKING!!
// async function bootstrap() {
//   const app = await NestFactory.create(AppModule);
//   await app.listen(3000);
// }
// bootstrap();

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.RMQ,
    options: {
      urls: [
        'amqp://xnfbgxgg:7EhYkk-2a_hsScQWmyyuOlZ33v7U-bjx@wasp.rmq.cloudamqp.com/xnfbgxgg',
      ],
      queue: 'customers_events',
      noAck: false,
      prefetchCount: 1,
    },
  });
  await app.listen();
}
bootstrap();
