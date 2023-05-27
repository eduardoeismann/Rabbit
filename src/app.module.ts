import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Customer, CustomerSchema } from './schemas/customer.schema';
import { CustomerService } from './services/customer.service';
import { CustomerController } from './controllers/customer.controller';

@Module({
  imports: [
    MongooseModule.forRoot(
      `mongodb+srv://<YOUR_USER>:<YOUR_PASSWORD>@cluster06165.fku17ej.mongodb.net/?retryWrites=true&w=majority`,
    ),
    MongooseModule.forFeature([
      { name: Customer.name, schema: CustomerSchema },
    ]),
  ],
  controllers: [AppController, CustomerController],
  providers: [AppService, CustomerService],
})
export class AppModule {}
