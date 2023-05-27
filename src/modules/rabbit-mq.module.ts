import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { RabbitMQService } from 'src/services/rabbit-mq.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'rabbit-mq-module',
        transport: Transport.RMQ,
        options: {
          urls: [
            'amqp://xnfbgxgg:7EhYkk-2a_hsScQWmyyuOlZ33v7U-bjx@wasp.rmq.cloudamqp.com/xnfbgxgg',
          ],
          queue: 'customers_events',
        },
      },
    ]),
  ],
  controllers: [],
  providers: [RabbitMQService],
  exports: [RabbitMQService],
})
export class RabbitMQModule {}
