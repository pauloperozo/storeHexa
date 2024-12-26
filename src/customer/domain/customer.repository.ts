import { Customer } from './customer.entity';
export interface CustomerRepository {
  save(customer: Customer): Promise<void>;
  findByEmail(email: string): Promise<Customer | null>;
  findByCustomerId(customerId: string): Promise<Customer | null>;
  update(customerId: string, customer: Customer): Promise<void>;
}
