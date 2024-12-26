import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CustomerEntity } from 'src/customer/domain/customer.entity';
import { CustomerRepository } from 'src/customer/domain/customer.repository';
import { CustomerModel } from '../../../core/infrastructure/database/model/customer.model';

@Injectable()
export class CustomerRepositoryImpl implements CustomerRepository {
  constructor(
    @InjectRepository(CustomerModel)
    private readonly model: Repository<CustomerModel>,
  ) {}

  async save(customer: CustomerEntity): Promise<void> {
    const customerModel = this.model.create({
      customerId: customer.customerId,
      email: customer.email,
      otp: customer.otp,
      createdAt: new Date(),
    });

    await this.model.save(customerModel);
  }

  async findByEmail(email: string): Promise<CustomerEntity | null> {
    const customerModel = await this.model.findOne({ where: { email } });
    if (!customerModel) {
      return null;
    }

    const customerEntity = new CustomerEntity();
    customerEntity.customerId = customerModel.customerId;
    customerEntity.email = customerModel.email;
    customerEntity.otp = customerModel.otp;

    return customerEntity;
  }

  async findByCustomerId(customerId: string): Promise<CustomerEntity | null> {
    const customerModel = await this.model.findOne({ where: { customerId } });
    if (!customerModel) {
      return null;
    }

    const customerEntity = new CustomerEntity();
    customerEntity.customerId = customerModel.customerId;
    customerEntity.email = customerModel.email;
    customerEntity.otp = customerModel.otp;

    return customerEntity;
  }

  async update(customerId: string, customer: CustomerEntity): Promise<void> {
    await this.model.update(customerId, {
      email: customer.email,
      otp: customer.otp,
      updatedAt: new Date(),
    });
  }

  async findAll(): Promise<CustomerEntity[]> {
    const models = await this.model.find();
    return models.map((model) => {
      const customerEntity = new CustomerEntity();
      customerEntity.customerId = model.customerId;
      customerEntity.email = model.email;
      customerEntity.otp = model.otp;
      return customerEntity;
    });
  }
}
