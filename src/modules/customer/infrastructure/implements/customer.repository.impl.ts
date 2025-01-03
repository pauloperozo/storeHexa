import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Customer } from '../../domain/customer.entity';
import { CustomerRepository } from '../../domain/customer.repository';
import { CustomerTypeOrmEntity } from '../../../shared/infrastructure/database/entities/customer.entitie';

@Injectable()
export class CustomerRepositoryImpl implements CustomerRepository {
  constructor(
    @InjectRepository(CustomerTypeOrmEntity)
    private readonly model: Repository<CustomerTypeOrmEntity>,
  ) {}

  async save(customer: Customer): Promise<Customer> {
    await this.model.save(customer);
    return customer;
  }

  async findByEmail(email: string): Promise<Customer | null> {
    const model = await this.model.findOne({ where: { email } });
    if (!model) {
      return null;
    }
    const customer = {
      customerId: model.customerId,
      email: model.email,
      otp: model.otp,
    };

    return customer;
  }

  async findByCustomerId(customerId: string): Promise<Customer | null> {
    const model = await this.model.findOne({ where: { customerId } });
    if (!model) {
      return null;
    }

    const customer = {
      customerId: model.customerId,
      email: model.email,
      otp: model.otp,
    };
    return customer;
  }

  async update(customerId: string, customer: Customer): Promise<Customer> {
    await this.model.update(customerId, {
      email: customer.email,
      otp: customer.otp,
      updatedAt: new Date(),
    });
    return customer;
  }
}
