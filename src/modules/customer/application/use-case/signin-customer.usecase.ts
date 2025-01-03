import { CustomerRepository } from '../../domain/customer.repository';
import { TokenService } from '../../../shared/application/token/token.service';
import {
  CustomerNotFoundByEmail,
  InvalidOTP,
} from '../../domain/customer.exceptions';

export class SignInCustomerUseCase {
  constructor(
    private readonly repository: CustomerRepository,
    private readonly token: TokenService,
  ) {}

  async run(
    email: string,
    otp: string,
  ): Promise<{ customerId: string; token: string }> {
    const customer = await this.repository.findByEmail(email);
    if (customer) {
      throw new CustomerNotFoundByEmail(email);
    }

    if (customer.otp !== otp) {
      throw new InvalidOTP();
    }

    const { customerId } = customer;
    customer.otp = null;
    this.repository.update(customerId, customer);
    const token = this.token.sign({ customerId });
    return { customerId, token };
  }
}
