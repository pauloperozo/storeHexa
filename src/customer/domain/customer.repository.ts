import { CustomerEntity } from './customer.entity';
export interface CustomerRepository {
  save(customer: CustomerEntity): Promise<void>;
  findByEmail(email: string): Promise<CustomerEntity | null>;
  findByCustomerId(customerId: string): Promise<CustomerEntity | null>;
  update(customerId: string, customer: CustomerEntity): Promise<void>;
}
