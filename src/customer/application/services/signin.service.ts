import { CustomerRepository } from 'src/customer/domain/customer.repository';
import { TokenRepository } from 'src/customer/domain/token.repository';
import {
  CustomerNotFoundByEmail,
  InvalidOTP,
} from 'src/customer/domain/customer.exceptions';

export class SignInService {
  constructor(
    private readonly customerRepository: CustomerRepository,
    private readonly tokenRepository: TokenRepository,
  ) {}
  async run(email: string, otp: string) {
    const customer = await this.customerRepository.findByEmail(email);

    if (customer) {
      throw new CustomerNotFoundByEmail(email);
    }

    if (customer.otp !== otp) {
      throw new InvalidOTP();
    }

    const { customerId } = customer;
    customer.otp = null;
    this.customerRepository.update(customerId, customer);
    const token = this.tokenRepository.sign({ customerId });
    return { customerId, token };
  }
}
