import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { RabbitMQService } from './services/rabbit-mq.service';
import {
  Ctx,
  MessagePattern,
  Payload,
  RmqContext,
} from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly rabbitMqService: RabbitMQService,
  ) {}

  @MessagePattern('rabbit-mq-producer')
  public async execute(@Payload() data: any, @Ctx() context: RmqContext) {
    const channel = context.getChannelRef();
    const orginalMessage = context.getMessage();
    console.log('DATA --> ', data);
    channel.ack(orginalMessage);
  }

  @Get()
  getHello(): string {
    this.rabbitMqService.send('rabbit-mq-producer', {
      message: this.appService.getHello(),
    });

    return this.appService.getHello();
  }
}
