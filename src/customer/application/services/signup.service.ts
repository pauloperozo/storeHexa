import { Customer } from 'src/customer/domain/customer.entity';
import { CustomerNotFoundByEmail } from 'src/customer/domain/customer.exceptions';
import { CustomerRepository } from 'src/customer/domain/customer.repository';

export class SignUpService {
  constructor(private readonly customerRepository: CustomerRepository) {}
  async run(email: string) {
    const customer = await this.customerRepository.findByEmail(email);
    if (customer) {
      throw new CustomerNotFoundByEmail(email);
    }
    const newCustomer = new Customer();
    newCustomer.email = email;
    await this.customerRepository.save(newCustomer);
  }
}
