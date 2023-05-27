import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Post,
  Put,
  Res,
} from '@nestjs/common';
import { Customer } from 'src/schemas/customer.schema';
import { CustomerService } from 'src/services/customer.service';

@Controller('customers')
export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}

  @Post()
  async createCustomer(@Res() response, @Body() customer: Customer) {
    const createCustomer = await this.customerService.create(customer);
    return response.status(HttpStatus.CREATED).json({
      createCustomer,
    });
  }

  @Get()
  async getAll(@Res() response) {
    const customers = await this.customerService.readAll();
    return response.status(HttpStatus.OK).json({
      customers,
    });
  }

  @Get('/:id')
  async getById(@Res() response, @Param('id') id) {
    const customer = await this.customerService.readById(id);
    return response.status(HttpStatus.OK).json({
      customer,
    });
  }

  @Put('/:id')
  async update(@Res() response, @Param('id') id, @Body() customer: Customer) {
    const updateCustomer = await this.customerService.update(id, customer);
    return response.status(HttpStatus.OK).json({
      updateCustomer,
    });
  }

  @Delete('/:id')
  async delete(@Res() response, @Param('id') id) {
    const deleteCustomer = await this.customerService.delete(id);
    return response.status(HttpStatus.OK).json({
      deleteCustomer,
    });
  }
}
