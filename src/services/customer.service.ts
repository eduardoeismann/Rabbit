import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Customer, CustomerDocument } from 'src/schemas/customer.schema';

@Injectable()
export class CustomerService {
  constructor(
    @InjectModel(Customer.name) private customerModel: Model<CustomerDocument>,
  ) {}

  async create(customer: Customer): Promise<Customer> {
    const createCustomer = new this.customerModel(customer);
    return createCustomer.save();
  }

  async readAll(): Promise<Customer[]> {
    return await this.customerModel.find().exec();
  }

  async readById(id): Promise<Customer> {
    return await this.customerModel.findById(id).exec();
  }

  async update(id, customer: Customer): Promise<Customer> {
    return await this.customerModel.findByIdAndUpdate(id, customer, {
      new: true,
    });
  }

  async delete(id): Promise<any> {
    return await this.customerModel.findByIdAndRemove(id);
  }
}
