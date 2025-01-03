import { Customer } from '../../domain/customer.entity';
import { CustomerNotFoundByEmail } from '../../domain/customer.exceptions';
import { CustomerRepository } from '../../domain/customer.repository';

export class SignUpCustomerUseCase {
  constructor(private readonly repository: CustomerRepository) {}
  async run(email: string): Promise<void> {
    const customer = await this.repository.findByEmail(email);
    if (customer) {
      throw new CustomerNotFoundByEmail(email);
    }
    const newCustomer = new Customer();
    newCustomer.email = email;
    await this.repository.save(newCustomer);
  }
}
